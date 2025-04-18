import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
    ArrowLeftCircle,
    ArrowRightCircle,
    Loader
} from "lucide-react";

// Import AceEditor component
import AceEditor from "react-ace";

// Base ace imports
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
//import "ace-builds/src-noconflict/mode-javascript";
//import "ace-builds/src-noconflict/mode-python";
//import "ace-builds/src-noconflict/mode-java";

// Import extensions
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";

// Import theme
import "ace-builds/src-noconflict/theme-monokai";

const Exercise = () => {
    // Router hooks
    const { lessonId } = useParams();
    const navigate = useNavigate();

    // State declarations
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [feedbackType, setFeedbackType] = useState("");
    const [showHint, setShowHint] = useState(false);
    const [remainingHints, setRemainingHints] = useState(3);
    const [showSolution, setShowSolution] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

    // Judge0 API configuration
    const JUDGE0_API_URL = import.meta.env.VITE_JUDGE0_API_URL;
    const JUDGE0_API_KEY = import.meta.env.VITE_JUDGE0_API_KEY;
    const JUDGE0_API_HOST = import.meta.env.VITE_JUDGE0_API_HOST;

    // Language IDs for Judge0
    const languageIds = {
        cpp: 54,
        java: 62,
        csharp: 51,
        javascript: 63,
        python: 71,
        ruby: 72
    };

    // Find exercises for the current lesson
    const lessonExercises = exercises.filter(
        ex => ex.lessonId === parseInt(lessonId)
    );

    // Check if there are exercises for this lesson
    const hasExercises = lessonExercises.length > 0;

    // Get the current exercise based on index
    const currentExercise = hasExercises
        ? lessonExercises[currentExerciseIndex]
        : {
              title: "تمرين غير موجود",
              description: "لم يتم العثور على هذا التمرين",
              startingCode: "",
              solution: "",
              hints: ["لا توجد تلميحات"]
          };

    // Determine if previous/next exercises exist
    const hasPreviousExercise = currentExerciseIndex > 0;
    const hasNextExercise = currentExerciseIndex < lessonExercises.length - 1;

    // Helper functions for base64 encoding/decoding
    const encodeBase64 = str => {
        try {
            return btoa(unescape(encodeURIComponent(str || "")));
        } catch (e) {
            console.error("Base64 encoding error:", e);
            return "";
        }
    };

    const decodeBase64 = str => {
        try {
            return decodeURIComponent(escape(atob(str || "")));
        } catch (e) {
            console.error("Base64 decoding error:", e);
            return str || "";
        }
    };

    // Detect editor mode based on exercise language
    const getEditorMode = () => {
        const language = currentExercise.language?.toLowerCase();
        if (!language) return "c_cpp"; // Default

        switch (language) {
            case "cpp":
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

    // Updated useEffect to properly handle code loading and local storage
    useEffect(() => {
        if (hasExercises) {
            // Reset states first
            setOutput("");
            setError(null);
            setFeedbackMessage("");
            setFeedbackType("");
            setShowSolution(false);
            setRemainingHints(3);
            setShowHint(false);

            // Get the exercise ID to use for storage
            const exerciseKey = `exercise-${currentExercise.id}`;

            // Check localStorage first
            const savedCode = localStorage.getItem(exerciseKey);

            // If saved code exists for this specific exercise, use it
            if (savedCode && savedCode.trim() !== "") {
                setCode(savedCode);
            } else {
                // Otherwise use the starting code
                setCode(currentExercise.startingCode || "");
            }
        }
    }, [
        currentExerciseIndex,
        currentExercise.id,
        currentExercise.startingCode,
        hasExercises
    ]);

    // Improved code save logic to prevent overwriting with empty code
    useEffect(() => {
        if (code && hasExercises && currentExercise.id) {
            const exerciseKey = `exercise-${currentExercise.id}`;

            // Only save non-empty code
            if (code.trim() !== "") {
                localStorage.setItem(exerciseKey, code);
            }
        }
    }, [code, currentExercise.id, hasExercises]);

    // Navigation functions - Fixed to properly update code with startingCode
    const goToPreviousExercise = () => {
        if (hasPreviousExercise) {
            setCurrentExerciseIndex(prevIndex => prevIndex - 1);
        }
    };

    const goToNextExercise = () => {
        if (hasNextExercise) {
            setCurrentExerciseIndex(prevIndex => prevIndex + 1);
        } else {
            // Navigate to next lesson if no more exercises
            navigate(`/lessons/${parseInt(lessonId) + 1}`);
        }
    };

    const goToExercise = index => {
        if (index >= 0 && index < lessonExercises.length) {
            setCurrentExerciseIndex(index);
        }
    };

    // Exercise action handlers
    const runCode = async () => {
        if (!hasExercises) return;

        setIsRunning(true);
        setError(null);
        setOutput("");

        try {
            // Create submission - preserve comments by not pre-processing the code
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
                    language_id:
                        languageIds[currentExercise.language?.toLowerCase()],
                    stdin: currentExercise.testInput
                        ? encodeBase64(currentExercise.testInput)
                        : "",
                    expected_output: currentExercise.expectedOutput
                        ? encodeBase64(currentExercise.expectedOutput)
                        : null,
                    cpu_time_limit: 2,
                    memory_limit: 128000
                }
            };

            const submissionResponse = await axios.request(options);
            const token = submissionResponse.data.token;

            if (!token) {
                throw new Error("No submission token received from Judge0 API");
            }

            // Poll for results
            let result;
            let statusId = 1; // 1: In Queue

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

            // Handle the result based on status ID
            handleJudge0Result(result, statusId);
        } catch (err) {
            console.error("Judge0 API error:", err);
            setError(`API Error: ${err.response?.data?.error || err.message}`);
        } finally {
            setIsRunning(false);
        }
    };

    // Helper to handle Judge0 result statuses
    const handleJudge0Result = (result, statusId) => {
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
                decodeBase64(result.stdout) ||
                    "Code executed successfully (no output)"
            );
        } else if (statusId === 6) {
            setError(
                `Compilation Error: ${decodeBase64(result.compile_output)}`
            );
        } else if (statusId >= 7 && statusId <= 12) {
            let errorMessage = `Runtime Error (${statusMap[statusId]}): ${
                decodeBase64(result.stderr) || ""
            }`;

            if (result.message) {
                errorMessage += `\n${
                    typeof result.message === "string"
                        ? decodeBase64(result.message)
                        : result.message
                }`;
            }

            setError(errorMessage);
        } else {
            setError(
                `Execution Error: ${statusMap[statusId] || "Unknown error"}`
            );
        }
    };

    const getHint = () => {
        if (!hasExercises) return;

        if (remainingHints > 0) {
            setShowHint(true);
            setRemainingHints(prev => prev - 1);
            setFeedbackType("hint");
            setFeedbackMessage(
                currentExercise.hints
                    ? currentExercise.hints[3 - remainingHints]
                    : "لا توجد تلميحات إضافية"
            );
        } else {
            setFeedbackType("hint");
            setFeedbackMessage("لقد استخدمت جميع التلميحات المتاحة!");
        }
    };

    // Reset function should clear only the specific exercise's code
    const resetExercise = () => {
        if (!hasExercises) return;

        // Reset to starting code
        setCode(currentExercise.startingCode || "");

        // Clear only this exercise's saved code
        localStorage.removeItem(`exercise-${currentExercise.id}`);

        // Reset other states
        setFeedbackMessage("");
        setFeedbackType("");
        setOutput("");
        setError(null);
    };
    const toggleSolution = () => {
        if (!hasExercises) return;
        setShowSolution(prev => !prev);
    };

    // Handle code changes in editor - preserve comments
    const onChange = newValue => {
        setCode(newValue);
    };

    // If no exercises for this lesson, show message
    if (!hasExercises) {
        return (
            <div className="max-w-4xl mx-auto">
                <div className="bg-blue-50 border border-blue-200 text-blue-800 p-5 rounded-md text-center">
                    <Info className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                    <h2 className="text-2xl font-bold mb-3">
                        لا توجد تمارين بعد
                    </h2>
                    <p className="text-lg">
                        لم يتم إضافة تمارين لهذا الدرس حتى الآن. يرجى العودة
                        لاحقاً.
                    </p>
                    <Link
                        to={`/lessons/${lessonId}`}
                        className="mt-6 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
                    >
                        الرجوع للدرس
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header with back link and exercise counter */}
            <div className="flex justify-between items-center mb-6">
                <Link
                    to={`/lessons/${lessonId}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                    <ArrowRight className="h-5 w-5" />
                    الرجوع للدرس
                </Link>
                <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    تمرين {currentExerciseIndex + 1} من {lessonExercises.length}
                </div>
            </div>

            {/* Exercise title and description */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800">
                    {currentExercise.title}
                </h2>
                <p className="text-gray-700 mb-6">
                    {currentExercise.description}
                </p>
            </div>

            {/* Feedback message (hint or error) */}
            {feedbackMessage && (
                <div
                    className={`p-2 mb-6 rounded-md ${
                        feedbackType === "hint"
                            ? "bg-blue-50 border border-blue-200 text-blue-800"
                            : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                >
                    <div className="flex items-center">
                        {feedbackType === "hint" && (
                            <Info className="h-5 w-5 ml-2" />
                        )}
                        <span>{feedbackMessage}</span>
                    </div>
                </div>
            )}

            {/* Code editor section */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium text-gray-800">
                        الحل الخاص بك
                    </h3>
                    <button
                        onClick={resetExercise}
                        className="text-sm text-gray-600 hover:text-red-600 flex items-center"
                    >
                        <RotateCcw className="h-4 w-4 ml-2" />
                        إعادة ضبط
                    </button>
                </div>
                {/* Ace Editor */}
                <div className="code-editor rounded-lg overflow-hidden border border-gray-200">
                    <AceEditor
                        theme="monokai"
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
                            fontFamily: "'Fira code', 'Fira Mono', monospace",
                            useWorker: false // Disable worker to preserve comments
                        }}
                        width="100%"
                        height="400px"
                        style={{
                            borderRadius: "0.5rem"
                        }}
                    />
                </div>

                {/* Code run button */}
                <div className="mt-4 flex gap-3">
                    <button
                        onClick={runCode}
                        disabled={isRunning}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md flex items-center"
                    >
                        {isRunning ? (
                            <>
                                <Loader className="animate-spin ml-2 h-4 w-4 text-white" />
                                تشغيل...
                            </>
                        ) : (
                            <>
                                <Play className="ml-2 h-4 w-4" />
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

                {/* Hint and solution buttons */}
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
                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500 mb-8">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                        الحل النموذجي
                    </h3>
                    <MarkdownRender content={currentExercise.solution} />
                    <p className="mt-4 text-sm text-gray-600">
                        تذكر أن هناك أكثر من طريقة لحل المشكلة. استخدم هذا الحل
                        للتعلم والمقارنة مع حلك الخاص.
                    </p>
                </div>
            )}
            <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200 flex justify-between items-center">
                {hasPreviousExercise ? (
                    <button
                        onClick={goToPreviousExercise}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition-colors"
                    >
                        <ArrowRightCircle className="h-5 w-5" />
                        <span>التمرين السابق</span>
                    </button>
                ) : (
                    <div></div>
                )}
                {hasNextExercise ? (
                    <button
                        onClick={goToNextExercise}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-md transition-colors"
                    >
                        <span>التمرين التالي</span>
                        <ArrowLeftCircle className="h-5 w-5" />
                    </button>
                ) : (
                    <Link
                        to={`/lessons/${parseInt(lessonId) + 1}`}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-md transition-colors"
                    >
                        <span>الدرس التالي</span>
                        <ArrowLeft className="h-5 w-5 ml-2" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Exercise;
