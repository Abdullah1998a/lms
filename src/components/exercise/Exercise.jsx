import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import { exercises } from "../../data/exercises";
import { lessons } from "../../data/lessons";
import { useProgress } from "../../hooks/useProgress";
import {
    Header,
    Description,
    CodeEditor,
    FeedbackMsg,
    HelpButtons,
    SolutionDisplay,
    AlgorithmDisplay,
    NavigationButtons,
    NoExercises,
    TestCases
} from "../exercise-components";
import { useJudge0 } from "../../hooks/useJudge0";

const Exercise = () => {
    const { lessonId } = useParams();
    const parsedLessonId = parseInt(lessonId);
    const navigate = useNavigate();

    const {
        isLessonUnlocked,
        completeExercise,
        isExerciseCompleted,
        getLessonStatus,
        loading
    } = useProgress();

    const [code, setCode] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [feedbackType, setFeedbackType] = useState("");
    const [showHint, setShowHint] = useState(false);
    const [remainingHints, setRemainingHints] = useState(3);
    const [showSolution, setShowSolution] = useState(false);
    const [showAlgorithm, setShowAlgorithm] = useState(false);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [hasNextLesson, setHasNextLesson] = useState(true);
    const [exerciseCompleted, setExerciseCompleted] = useState(false);
    const [testResults, setTestResults] = useState([]);
    const [isTestRunning, setIsTestRunning] = useState(false);
    const { output, error, isRunning, runCode: executeCode } = useJudge0();

    const lessonExercises = exercises.filter(
        ex => ex.lessonId === parsedLessonId
    );
    const hasExercises = lessonExercises.length > 0;
    const currentExercise = hasExercises
        ? lessonExercises[currentExerciseIndex]
        : {
              title: "تمرين غير موجود",
              description: "لم يتم العثور على هذا التمرين",
              startingCode: "",
              solution: "",
              hints: ["لا توجد تلميحات"],
              testCases: []
          };
    const hasPreviousExercise = currentExerciseIndex > 0;
    const hasNextExercise = currentExerciseIndex < lessonExercises.length - 1;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [currentExerciseIndex]);

    useEffect(() => {
        const nextLessonId = parsedLessonId + 1;
        const nextLessonExists = lessons.some(
            lesson => lesson.id === nextLessonId
        );
        setHasNextLesson(nextLessonExists);
    }, [lessonId, parsedLessonId]);

    useEffect(() => {
        if (hasExercises && currentExercise.id) {
            const isCompleted = isExerciseCompleted(
                parsedLessonId,
                currentExercise.id
            );
            setExerciseCompleted(isCompleted);
        }
    }, [hasExercises, currentExercise.id, parsedLessonId, isExerciseCompleted]);

    useEffect(() => {
        if (hasExercises) {
            resetExerciseState();
            loadSavedCode();
        }
    }, [
        currentExerciseIndex,
        currentExercise.id,
        currentExercise.startingCode,
        hasExercises
    ]);

    useEffect(() => {
        if (code && hasExercises && currentExercise.id) {
            saveCode();
        }
    }, [code, currentExercise.id, hasExercises]);
    const resetExerciseState = () => {
        setCode(currentExercise.startingCode || "");
        setFeedbackMessage("");
        setFeedbackType("");
        setShowHint(false);
        setRemainingHints(currentExercise.hints?.length || 0);
        setShowSolution(false);
        setShowAlgorithm(false);
        setTestResults([]);
    };

    const loadSavedCode = () => {
        const exerciseKey = `exercise-${currentExercise.id}`;
        const savedCode = localStorage.getItem(exerciseKey);
        if (savedCode && savedCode.trim() !== "") {
            setCode(savedCode);
        } else {
            setCode(currentExercise.startingCode || "");
        }
    };

    const saveCode = () => {
        const exerciseKey = `exercise-${currentExercise.id}`;
        if (code.trim() !== "") {
            localStorage.setItem(exerciseKey, code);
        }
    };

    const goToPreviousExercise = () => {
        if (hasPreviousExercise) {
            setCurrentExerciseIndex(prevIndex => prevIndex - 1);
        }
    };

    const goToNextExercise = () => {
        if (!exerciseCompleted) {
            setFeedbackType("error");
            setFeedbackMessage(
                "يجب إكمال هذا التمرين بنجاح قبل الانتقال إلى التمرين التالي"
            );
            return;
        }

        if (hasNextExercise) {
            setCurrentExerciseIndex(prevIndex => prevIndex + 1);
        } else {
            navigate(`/lessons/${parsedLessonId + 1}`);
        }
    };

    const runTests = async () => {
        if (
            !hasExercises ||
            !currentExercise.testCases ||
            currentExercise.testCases.length === 0
        ) {
            runSingleCode();
            return;
        }

        setIsTestRunning(true);
        setTestResults([]);
        setFeedbackMessage("");
        setFeedbackType("");

        const results = [];
        let allTestsPassed = true;

        for (let i = 0; i < currentExercise.testCases.length; i++) {
            const testCase = currentExercise.testCases[i];
            try {
                const testResult = await new Promise(resolve => {
                    executeCode({
                        code,
                        language: currentExercise.language,
                        input: testCase.input || "",
                        expectedOutput: testCase.expectedOutput || "",
                        onResult: (result, output, error) => {
                            resolve({ result, output, error });
                        }
                    });
                });

                const isPassed = testResult.result === "accepted";
                results.push({
                    status: isPassed ? "passed" : "failed",
                    output: testResult.output,
                    error: testResult.error
                });

                if (!isPassed) {
                    allTestsPassed = false;
                }
            } catch (err) {
                results.push({
                    status: "failed",
                    output: "",
                    error: err.message || "حدث خطأ غير معروف"
                });
                allTestsPassed = false;
            }
            setTestResults([...results]);
        }
        setIsTestRunning(false);
        if (allTestsPassed) {
            if (!exerciseCompleted) {
                completeExercise(parsedLessonId, currentExercise.id);
                setExerciseCompleted(true);
            }
            setFeedbackType("success");
            setFeedbackMessage("أحسنت! لقد اجتزت جميع حالات الاختبار بنجاح.");
        } else {
            setFeedbackType("error");
            setFeedbackMessage(
                "لم تنجح في اجتياز جميع حالات الاختبار. حاول مرة أخرى."
            );
        }
    };
    const runSingleCode = () => {
        setFeedbackMessage("");
        setFeedbackType("");
        executeCode({
            code,
            language: currentExercise.language,
            input: "",
            onResult: (result, output, error) => {
                if (result === "accepted") {
                    if (!exerciseCompleted) {
                        completeExercise(parsedLessonId, currentExercise.id);
                        setExerciseCompleted(true);
                    }
                }
            }
        });
    };

    const runCode = () => {
        if (!hasExercises) return;
        runTests();
    };

    const getHint = () => {
        if (!hasExercises) return;
        if (remainingHints > 0) {
            setShowHint(true);
            const hintIndex =
                (currentExercise.hints?.length || 0) - remainingHints;
            setRemainingHints(prev => prev - 1);
            setFeedbackType("hint");
            setFeedbackMessage(
                currentExercise.hints &&
                    hintIndex < currentExercise.hints.length
                    ? currentExercise.hints[hintIndex]
                    : "لا توجد تلميحات إضافية"
            );
        } else {
            setFeedbackType("hint");
            setFeedbackMessage("لقد استخدمت جميع التلميحات المتاحة!");
        }
    };

    const resetExercise = () => {
        if (!hasExercises) return;
        setCode(currentExercise.startingCode || "");
        localStorage.removeItem(`exercise-${currentExercise.id}`);
        setFeedbackMessage("");
        setFeedbackType("");
        setTestResults([]);
    };

    const toggleSolution = () => {
        if (!hasExercises) return;
        setShowSolution(prev => !prev);
    };

    const toggleAlgorithm = () => {
        if (!hasExercises) return;
        setShowAlgorithm(prev => !prev);
    };

    if (!hasExercises) {
        return <NoExercises lessonId={lessonId} />;
    }

    if (!isLessonUnlocked(lessonId) && !loading) {
        return <Navigate to="/lessons" replace />;
    }

    return (
        <div className="grid gap-4 h-full w-full max-w-4xl mx-auto">
            <Header
                lessonId={lessonId}
                currentIndex={currentExerciseIndex}
                totalExercises={lessonExercises.length}
                exerciseCompleted={exerciseCompleted}
            />
            <Description
                title={currentExercise.title}
                description={currentExercise.description}
                difficulty={currentExercise.difficulty}
                difficultyId={currentExercise.difficultyId}
                completed={exerciseCompleted}
            />
            <CodeEditor
                code={code}
                onChange={setCode}
                language={currentExercise.language}
                onReset={resetExercise}
                onRun={runCode}
                isRunning={isRunning || isTestRunning}
            />
            <TestCases
                testCases={currentExercise.testCases}
                results={testResults}
                isRunning={isTestRunning}
            />
            <FeedbackMsg message={feedbackMessage} type={feedbackType} />
            <HelpButtons
                onGetHint={getHint}
                onToggleAlgorithm={toggleAlgorithm}
                onToggleSolution={toggleSolution}
                remainingHints={remainingHints}
                showAlgorithm={showAlgorithm}
                showSolution={showSolution}
            />
            {showAlgorithm && (
                <AlgorithmDisplay algorithm={currentExercise.algorithm} />
            )}
            {showSolution && (
                <SolutionDisplay solution={currentExercise.solution} />
            )}
            <NavigationButtons
                hasPrevious={hasPreviousExercise}
                hasNext={hasNextExercise}
                hasNextLesson={hasNextLesson}
                lessonId={lessonId}
                onPrevious={goToPreviousExercise}
                onNext={goToNextExercise}
                completed={exerciseCompleted}
                isNextDisabled={!exerciseCompleted}
            />
        </div>
    );
};

export default Exercise;
