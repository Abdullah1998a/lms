import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MarkdownRender from "./MarkdownRender";
import { questions } from "../data/questions";
import { CircleCheck, CircleAlert, Info, ArrowRight } from "lucide-react";

const shuffleArray = array => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const Quiz = () => {
    const { lessonId } = useParams();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [shuffledOptionsMap, setShuffledOptionsMap] = useState({});
    const [timeRemaining, setTimeRemaining] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [hasQuestions, setHasQuestions] = useState(true);
    const TIME_PER_QUESTION = 3000000;
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    useEffect(() => {
        const lessonQuestions = questions.filter(
            q => q.lessonId === parseInt(lessonId)
        );
        if (!lessonQuestions.length) {
            setHasQuestions(false);
            return;
        }
        const shuffled = shuffleArray(lessonQuestions);
        setShuffledQuestions(shuffled);
        const optionsMap = {};
        shuffled.forEach((question, index) => {
            const originalOptions = question.options;
            const shuffledOptions = shuffleArray(originalOptions);
            const originalCorrectAnswer =
                originalOptions[question.correctAnswer];
            const newCorrectAnswer = shuffledOptions.indexOf(
                originalCorrectAnswer
            );
            optionsMap[index] = {
                options: shuffledOptions,
                correctAnswer: newCorrectAnswer
            };
        });
        setShuffledOptionsMap(optionsMap);
        setTimeRemaining(TIME_PER_QUESTION);
        setUserAnswers(new Array(shuffled.length).fill(null));
    }, [lessonId]);
    useEffect(() => {
        if (quizCompleted || !timeRemaining || showFeedback || !hasQuestions)
            return;
        const timer = setInterval(() => {
            setTimeRemaining(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleTimerExpired();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [timeRemaining, quizCompleted, showFeedback, hasQuestions]);
    const handleTimerExpired = () => {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = -1;
        setUserAnswers(newUserAnswers);
        setIsCorrect(false);
        setShowFeedback(true);
        setTimeout(() => {
            setShowFeedback(false);
            setSelectedAnswer(null);
            if (currentQuestion < shuffledQuestions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setTimeRemaining(TIME_PER_QUESTION);
            } else {
                setQuizCompleted(true);
            }
        }, 1500);
    };
    const handleAnswer = answerIndex => {
        if (!shuffledQuestions.length || !shuffledOptionsMap[currentQuestion])
            return;
        setSelectedAnswer(answerIndex);
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = answerIndex;
        setUserAnswers(newUserAnswers);
        const correct =
            answerIndex === shuffledOptionsMap[currentQuestion].correctAnswer;
        if (correct) {
            setScore(score + 1);
        }
        setIsCorrect(correct);
        setShowFeedback(true);
        setTimeout(() => {
            setShowFeedback(false);
            setSelectedAnswer(null);
            if (currentQuestion < shuffledQuestions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setTimeRemaining(TIME_PER_QUESTION);
            } else {
                setQuizCompleted(true);
            }
        }, 1500);
    };
    const resetQuiz = () => {
        const lessonQuestions = questions.filter(
            q => q.lessonId === parseInt(lessonId)
        );
        const shuffled = shuffleArray(lessonQuestions);
        setShuffledQuestions(shuffled);
        const optionsMap = {};
        shuffled.forEach((question, index) => {
            const originalOptions = question.options;
            const shuffledOptions = shuffleArray(originalOptions);
            const originalCorrectAnswer =
                originalOptions[question.correctAnswer];
            const newCorrectAnswer = shuffledOptions.indexOf(
                originalCorrectAnswer
            );
            optionsMap[index] = {
                options: shuffledOptions,
                correctAnswer: newCorrectAnswer
            };
        });
        setShuffledOptionsMap(optionsMap);
        setCurrentQuestion(0);
        setScore(0);
        setShowFeedback(false);
        setQuizCompleted(false);
        setTimeRemaining(TIME_PER_QUESTION);
        setSelectedAnswer(null);
        setUserAnswers(new Array(shuffled.length).fill(null));
        setShowResults(false);
    };
    const showDetailedResults = () => {
        setShowResults(true);
    };
    const getScoreColor = scorePercentage => {
        if (scorePercentage >= 80) return "text-green-600";
        if (scorePercentage >= 60) return "text-yellow-600";
        return "text-red-600";
    };
    const getGrade = percentage => {
        if (percentage >= 90) return "ممتاز";
        if (percentage >= 80) return "جيد جداً";
        if (percentage >= 70) return "جيد";
        if (percentage >= 60) return "مقبول";
        return "راسب";
    };
    if (!hasQuestions) {
        return (
            <div className="max-w-4xl mx-auto">
                <div className="bg-blue-50 border border-blue-200 text-blue-800 p-5 rounded-md text-center">
                    <Info className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                    <h2 className="text-2xl font-bold mb-3">
                        لا يوجد أسئلة بعد
                    </h2>
                    <p className="text-lg">
                        لم يتم إضافة أسئلة لهذا الدرس حتى الآن. يرجى العودة
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
    if (quizCompleted && showResults) {
        return (
            <div className="w-full bg-white max-w-xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    نتائج مفصلة
                </h2>
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">النتيجة النهائية</span>
                        <span
                            className={`font-bold ${getScoreColor(
                                Math.round(
                                    (score / shuffledQuestions.length) * 100
                                )
                            )}`}
                        >
                            {Math.round(
                                (score / shuffledQuestions.length) * 100
                            )}
                            %
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>التقدير</span>
                        <span className="font-bold">
                            {getGrade(
                                Math.round(
                                    (score / shuffledQuestions.length) * 100
                                )
                            )}
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2 text-right">
                        تفاصيل الأسئلة
                    </h3>
                    {shuffledQuestions.map((question, index) => {
                        const userAnswer = userAnswers[index];
                        const correctAnswer =
                            shuffledOptionsMap[index].correctAnswer;
                        const isUserCorrect = userAnswer === correctAnswer;
                        const timedOut = userAnswer === -1;
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg border border-gray-200 my-2 px-4 py-3"
                            >
                                <MarkdownRender content={question.text} />
                                <div className="text-right mb-1">
                                    <span className="text-sm text-gray-600">
                                        الإجابة الصحيحة:{" "}
                                    </span>
                                    <span className="font-bold text-green-600">
                                        <MarkdownRender content={
                                            shuffledOptionsMap[index].options[
                                                correctAnswer
                                            ]
                                        } />
                                    </span>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-600">
                                        إجابتك:{" "}
                                    </span>
                                    {timedOut ? (
                                        <span className="font-bold text-red-600">
                                            انتهى الوقت
                                        </span>
                                    ) : (
                                        <span
                                            className={`font-bold ${
                                                isUserCorrect
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            <MarkdownRender content={
                                                shuffledOptionsMap[index]
                                                    .options[userAnswer]
                                            } />
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded w-full"
                        onClick={resetQuiz}
                    >
                        إعادة الاختبار
                    </button>
                    <button
                        className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2.5 px-4 rounded w-full"
                        onClick={() => setShowResults(false)}
                    >
                        العودة للملخص
                    </button>
                </div>
            </div>
        );
    }
    if (quizCompleted) {
        const scorePercentage = Math.round(
            (score / shuffledQuestions.length) * 100
        );
        const passThreshold = 60;
        const passed = scorePercentage >= passThreshold;
        return (
            <div className="w-full bg-white max-w-xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    انتهى الاختبار!
                </h2>
                <div className="text-center mb-6">
                    <div className="inline-flex justify-center items-center w-24 h-24 rounded-full bg-gray-100 mb-4">
                        <span
                            className={`text-3xl font-bold ${getScoreColor(
                                scorePercentage
                            )}`}
                        >
                            {scorePercentage}%
                        </span>
                    </div>
                    <p className="text-lg mb-1">
                        لقد حصلت على <span className="font-bold">{score}</span>{" "}
                        من{" "}
                        <span className="font-bold">
                            {shuffledQuestions.length}
                        </span>{" "}
                        نقطة
                    </p>
                    <p
                        className={`text-lg font-bold ${
                            passed ? "text-green-600" : "text-red-600"
                        }`}
                    >
                        {passed
                            ? "مبروك! لقد نجحت في الاختبار"
                            : "للأسف لم تجتز الاختبار"}
                    </p>
                    <p className="mt-2 font-medium">
                        التقدير: {getGrade(scorePercentage)}
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded w-full"
                        onClick={showDetailedResults}
                    >
                        عرض التفاصيل
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded w-full"
                        onClick={resetQuiz}
                    >
                        إعادة الاختبار
                    </button>
                    <Link
                        to={`/lessons/${lessonId}`}
                        className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2.5 px-4 rounded w-full text-center"
                    >
                        الرجوع للدرس
                    </Link>
                    <Link
                        to={`/lessons/${lessonId}/exercises`}
                        className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2.5 px-4 rounded w-full text-center"
                    >
                        تمارين
                    </Link>
                </div>
            </div>
        );
    }
    if (!shuffledQuestions.length || !shuffledOptionsMap[currentQuestion]) {
        return (
            <div className="w-full h-64 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-lg">جارٍ تحميل الأسئلة...</p>
                </div>
            </div>
        );
    }
    return (
        <div className="w-full bg-white max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <Link
                    to={`/lessons/${lessonId}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                    <ArrowRight className="h-5 w-5" />
                    <span>الرجوع للدرس</span>
                </Link>
                <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    تمرين {currentQuestion + 1} من {shuffledQuestions.length}
                </div>
            </div>
            <div className="flex justify-between text-sm mb-4">
                <span>الوقت المتبقي</span>
                <span
                    className={`text
                        ${timeRemaining < 10 ? "text-red-600 font-bold" : ""}
                    `}
                >
                    {timeRemaining} ثانية
                </span>
            </div>
            <MarkdownRender content={shuffledQuestions[currentQuestion].text} />
            <div className="mb-2">
                {shuffledOptionsMap[currentQuestion].options.map(
                    (option, index) => {
                        let buttonClass =
                            "block w-full rounded border transition-all duration-150 my-2 px-4 text-sm";
                        if (showFeedback) {
                            if (
                                index ===
                                shuffledOptionsMap[currentQuestion]
                                    .correctAnswer
                            ) {
                                buttonClass +=
                                    "bg-green-100 border-green-600 text-green-800";
                            } else if (index === selectedAnswer) {
                                buttonClass +=
                                    "bg-red-100 border-red-500 text-red-800";
                            } else {
                                buttonClass +=
                                    "bg-gray-100 border-gray-300 text-gray-500";
                            }
                        } else if (selectedAnswer === index) {
                            buttonClass +=
                                "bg-blue-100 border-blue-500 text-blue-800";
                        } else {
                            buttonClass +=
                                "bg-white border-gray-300 hover:bg-blue-50 hover:border-blue-300";
                        }
                        return (
                            <button
                                className={buttonClass}
                                key={option}
                                onClick={() =>
                                    !showFeedback &&
                                    !selectedAnswer &&
                                    handleAnswer(index)
                                }
                                disabled={
                                    showFeedback || selectedAnswer !== null
                                }
                            >
                                <MarkdownRender content={option} />
                            </button>
                        );
                    }
                )}
            </div>
            {showFeedback && (
                <div
                    className={`p-4 rounded-lg ${
                        isCorrect
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : "bg-red-100 text-red-800 border border-red-300"
                    } text-center font-bold`}
                >
                    {isCorrect ? (
                        <div className="flex items-center justify-center">
                            <CircleCheck className="w-5 h-5 ml-2" />
                            إجابة صحيحة
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            <CircleAlert className="w-5 h-5 ml-2" />
                            إجابة خاطئة
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
