import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { exercises } from "../data/exercises";
import MarkdownRender from "./MarkdownRender";
import axios from "axios";
import {
    ArrowLeft,
    RotateCcw,
    Play,
    CheckCircle,
    AlertCircle,
    Info,
    Clock,
    ArrowRight,
    Loader
} from "lucide-react";

// Import AceEditor component
import AceEditor from "react-ace";

// Explicitly import all required elements from ace-builds
// Base ace imports
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-github";

// Import other common languages you might need
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";

// Import extensions
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";

// Import a few extra themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-xcode";

// Initialize the needed extensions
import { addCompleter } from "ace-builds/src-noconflict/ext-language_tools";

const Exercise = () => {
    const { lessonId } = useParams();
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [feedbackType, setFeedbackType] = useState(""); // "success", "error", "hint"
    const [showHint, setShowHint] = useState(false);
    const [remainingHints, setRemainingHints] = useState(3);
    const [showSolution, setShowSolution] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    // Judge0 API credentials
    const JUDGE0_API_URL = import.meta.env.VITE_JUDGE0_API_URL;
    const JUDGE0_API_KEY = import.meta.env.VITE_JUDGE0_API_KEY;
    const JUDGE0_API_HOST = import.meta.env.VITE_JUDGE0_API_HOST;
    // Language IDs mapping for Judge0
    const languageIds = {
        cpp: 54,
        java: 62,
        csharp: 51,
        javascript: 63,
        python: 71,
        ruby: 72
    };
    const exercise = exercises.find(
        ex => ex.lessonId === parseInt(lessonId)
    ) || {
        title: "تمرين غير موجود",
        description: "لم يتم العثور على هذا التمرين",
        startingCode: "",
        solution: "",
        hints: ["لا توجد تلميحات"]
    };
    // Save progress to localStorage
    useEffect(() => {
        if (code) {
            localStorage.setItem(`exercise-${lessonId}`, code);
        }
    }, [code, lessonId]);

    // Load saved progress on component mount
    useEffect(() => {
        const savedCode = localStorage.getItem(`exercise-${lessonId}`);
        if (savedCode) {
            setCode(savedCode);
        } else {
            setCode(exercise.startingCode || "");
        }
    }, [lessonId, exercise.startingCode]);

    // Helper function to encode/decode base64
    const encodeBase64 = (str) => {
        try {
            return btoa(unescape(encodeURIComponent(str || "")));
        } catch (e) {
            console.error("Base64 encoding error:", e);
            return "";
        }
    };

    const decodeBase64 = (str) => {
        try {
            return decodeURIComponent(escape(atob(str || "")));
        } catch (e) {
            console.error("Base64 decoding error:", e);
            return str || "";
        }
    };

    const runCode = async () => {
        setIsRunning(true);
        setError(null);
        setOutput("");

        try {
            // Step 1: Create a submission with base64 encoding enabled
            const options = {
                method: "POST",
                url: `${JUDGE0_API_URL}/submissions`,
                params: { base64_encoded: "true", wait: "false" },
                headers: {
                    "content-type": "application/json",
                    "X-RapidAPI-Key": JUDGE0_API_KEY,
                    "X-RapidAPI-Host": JUDGE0_API_HOST
                },
                data: {
                    source_code: encodeBase64(code),
                    language_id: languageIds[exercise.language?.toLowerCase()],
                    stdin: exercise.testInput ? encodeBase64(exercise.testInput) : "",
                    expected_output: exercise.expectedOutput ? encodeBase64(exercise.expectedOutput) : null,
                    cpu_time_limit: 2,
                    memory_limit: 128000
                }
            };

            const submissionResponse = await axios.request(options);
            const token = submissionResponse.data.token;

            if (!token) {
                throw new Error("No submission token received from Judge0 API");
            }

            // Step 2: Poll for results
            let result;
            let statusId = 1; // In Judge0, status 1 is "In Queue"

            while (statusId <= 2) {
                // 1: In Queue, 2: Processing
                await new Promise(resolve => setTimeout(resolve, 1000));

                const getResultOptions = {
                    method: "GET",
                    url: `${JUDGE0_API_URL}/submissions/${token}`,
                    params: { base64_encoded: "true" },
                    headers: {
                        "X-RapidAPI-Key": JUDGE0_API_KEY,
                        "X-RapidAPI-Host": JUDGE0_API_HOST
                    }
                };

                const resultResponse = await axios.request(getResultOptions);
                result = resultResponse.data;
                statusId = result.status?.id;
            }

            // Step 3: Handle the result
            const statusMap = {
                3: "Accepted",
                4: "Wrong Answer",
                5: "Time Limit Exceeded",
                6: "Compilation Error",
                7: "Runtime Error (SIGSEGV)",
                8: "Runtime Error (SIGXFSZ)",
                9: "Runtime Error (SIGFPE)",
                10: "Runtime Error (SIGABRT)",
                11: "Runtime Error (NZEC)",
                12: "Runtime Error (Other)",
                13: "Internal Error",
                14: "Exec Format Error"
            };

            if (statusId === 3) {
                setOutput(
                    decodeBase64(result.stdout) || "Code executed successfully (no output)"
                );
            } else if (statusId === 6) {
                setError(`Compilation Error: ${decodeBase64(result.compile_output)}`);
            } else if (statusId >= 7 && statusId <= 12) {
                let errorMessage = `Runtime Error (${statusMap[statusId]}): ${
                    decodeBase64(result.stderr) || ""
                }`;
                
                if (result.message) {
                    errorMessage += `\n${typeof result.message === 'string' ? decodeBase64(result.message) : result.message}`;
                }
                
                setError(errorMessage);
            } else {
                setError(
                    `Execution Error: ${statusMap[statusId] || "Unknown error"}`
                );
            }
        } catch (err) {
            console.error("Judge0 API error:", err);
            setError(`API Error: ${err.response?.data?.error || err.message}`);
        } finally {
            setIsRunning(false);
        }
    };
    
    const getHint = () => {
        if (remainingHints > 0) {
            setShowHint(true);
            setRemainingHints(prev => prev - 1);
            setFeedbackType("hint");
            setFeedbackMessage(
                exercise.hints
                    ? exercise.hints[3 - remainingHints]
                    : "لا توجد تلميحات إضافية"
            );
        } else {
            setFeedbackType("hint");
            setFeedbackMessage("لقد استخدمت جميع التلميحات المتاحة!");
        }
    };

    const resetExercise = () => {
        if (
            window.confirm(
                "هل أنت متأكد من أنك تريد إعادة ضبط التمرين؟ سيتم حذف جميع التقدم المحرز."
            )
        ) {
            setCode(exercise.startingCode || "");
            setFeedbackMessage("");
            setFeedbackType("");
            setOutput("");
            setError(null);
            localStorage.removeItem(`exercise-${lessonId}`);
        }
    };

    const toggleSolution = () => {
        if (
            !showSolution &&
            !window.confirm(
                "هل أنت متأكد من أنك تريد رؤية الحل؟ من الأفضل محاولة حل التمرين بنفسك أولاً."
            )
        ) {
            return;
        }
        setShowSolution(prev => !prev);
    };

    // Ace editor onChange handler
    const onChange = newValue => {
        setCode(newValue);
    };

    // Detect language mode for the editor
    const getEditorMode = () => {
        const language = exercise.language?.toLowerCase();
        if (!language) return "c_cpp"; // Default to C/C++

        switch (language) {
            case "cpp":
                return "c_cpp";
            case "c":
                return "c_cpp";
            case "java":
                return "java";
            case "python":
                return "python";
            case "javascript":
                return "javascript";
            default:
                return "c_cpp";
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <Link
                    to={`/lessons/${lessonId}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                    <ArrowLeft className="h-5 w-5" />
                    الرجوع للدرس
                </Link>
                <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    تمرين {lessonId}
                </div>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">
                    {exercise.title}
                </h2>
                <p className="text-gray-700 mb-6">{exercise.description}</p>
            </div>
            {feedbackMessage && (
                <div
                    className={`p-4 mb-6 ${
                        feedbackType === "hint"
                            ? "bg-blue-50 border border-blue-200 text-blue-800"
                            : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                >
                    <div className="flex items-center">
                        {feedbackType === "hint" && (
                            <Info className="h-5 w-5 mr-2" />
                        )}
                        <span>{feedbackMessage}</span>
                    </div>
                </div>
            )}

            <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium text-gray-800">
                        الحل الخاص بك
                    </h3>
                    <button
                        onClick={resetExercise}
                        className="text-sm text-gray-600 hover:text-red-600 flex items-center"
                    >
                        <RotateCcw className="h-4 w-4 mr-1" />
                        إعادة ضبط
                    </button>
                </div>

                {/* Ace Editor */}
                <div className="code-editor rounded-lg overflow-hidden border border-gray-200">
                    <AceEditor
                        theme="github"
                        mode={getEditorMode()}
                        name="ace-editor"
                        onChange={onChange}
                        value={code}
                        editorProps={{ $blockScrolling: true }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                            fontSize: 14,
                            fontFamily: "'Fira code', 'Fira Mono', monospace"
                        }}
                        width="100%"
                        height="400px"
                        style={{
                            borderRadius: "0.5rem"
                        }}
                    />
                </div>

                {/* Code controls */}
                <div className="mt-4 flex gap-3">
                    <button
                        onClick={runCode}
                        disabled={isRunning}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md flex items-center"
                    >
                        {isRunning ? (
                            <>
                                <Loader className="animate-spin mr-2 h-4 w-4 text-white" />
                                تشغيل...
                            </>
                        ) : (
                            <>
                                <Play className="mr-2 h-4 w-4" />
                                تشغيل الكود
                            </>
                        )}
                    </button>
                </div>

                {/* Output display */}
                {(output || error) && (
                    <div
                        className={`mt-4 p-4 rounded-md ${
                            error
                                ? "bg-red-50 border border-red-200"
                                : "bg-gray-50 border border-gray-200"
                        }`}
                    >
                        <h3
                            className={`font-medium ${
                                error ? "text-red-800" : "text-gray-800"
                            }`}
                        >
                            {error ? "خطأ" : "النتيجة"}
                        </h3>
                        <pre
                            dir="ltr"
                            className="mt-2 whitespace-pre-wrap text-sm"
                        >
                            {error || output}
                        </pre>
                    </div>
                )}

                <div className="flex flex-col gap-3 mt-4">
                    <button
                        className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                        onClick={getHint}
                        disabled={remainingHints <= 0}
                    >
                        تلميح ({remainingHints} متبقية)
                    </button>

                    <button
                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        onClick={toggleSolution}
                    >
                        {showSolution ? "إخفاء الحل" : "عرض الحل"}
                    </button>
                </div>
            </div>

            {showSolution && (
                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                        الحل النموذجي
                    </h3>
                    <MarkdownRender content={exercise.solution} />
                    <p className="mt-4 text-sm text-gray-600">
                        تذكر أن هناك أكثر من طريقة لحل المشكلة. استخدم هذا الحل
                        للتعلم والمقارنة مع حلك الخاص.
                    </p>
                </div>
            )}

            <div className="mt-8 text-center">
                <Link
                    to={`/lessons/${parseInt(lessonId) + 1}`}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-1"
                >
                    الانتقال إلى الدرس التالي
                    <ArrowRight className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
};

export default Exercise;