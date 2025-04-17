import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { questions } from "../data/questions";

// Helper function to shuffle an array (Fisher-Yates algorithm)
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

    // Default time per question in seconds
    const TIME_PER_QUESTION = 30;

    useEffect(() => {
        // Filter and shuffle questions when lessonId changes
        const lessonQuestions = questions.filter(
            q => q.lessonId === parseInt(lessonId)
        );
        const shuffled = shuffleArray(lessonQuestions);
        setShuffledQuestions(shuffled);

        // Create a map of shuffled options for each question
        const optionsMap = {};
        shuffled.forEach((question, index) => {
            const originalOptions = question.options;
            const shuffledOptions = shuffleArray(originalOptions);

            // Find the new index of the correct answer
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

    // Timer effect
    useEffect(() => {
        if (quizCompleted || !timeRemaining || showFeedback) return;

        const timer = setInterval(() => {
            setTimeRemaining(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    // Time's up - mark as incorrect and move to next
                    handleTimerExpired();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeRemaining, quizCompleted, showFeedback]);

    const handleTimerExpired = () => {
        // Update user answers
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = -1; // -1 indicates timeout
        setUserAnswers(newUserAnswers);

        setIsCorrect(false);
        setShowFeedback(true);

        // Wait 1.5 seconds before moving to next question
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
        if (!shuffledQuestions.length || !shuffledOptionsMap[currentQuestion]) return;
        
        setSelectedAnswer(answerIndex);

        // Update user answers array
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = answerIndex;
        setUserAnswers(newUserAnswers);

        // Check if answer is correct using the shuffled options map
        const correct =
            answerIndex === shuffledOptionsMap[currentQuestion].correctAnswer;
        if (correct) {
            setScore(score + 1);
        }
        setIsCorrect(correct);
        setShowFeedback(true);

        // Wait 1.5 seconds before moving to next question
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
        // Re-shuffle questions and options when resetting
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

    const getProgressBarColor = () => {
        const percentRemaining = (timeRemaining / TIME_PER_QUESTION) * 100;
        if (percentRemaining > 60) return "bg-green-500";
        if (percentRemaining > 30) return "bg-yellow-500";
        return "bg-red-500";
    };

    const getScoreColor = (scorePercentage) => {
        if (scorePercentage >= 80) return "text-green-600";
        if (scorePercentage >= 60) return "text-yellow-600";
        return "text-red-600";
    };

    const getGrade = (percentage) => {
        if (percentage >= 90) return "ممتاز";
        if (percentage >= 80) return "جيد جداً";
        if (percentage >= 70) return "جيد";
        if (percentage >= 60) return "مقبول";
        return "راسب";
    };

    // Detailed results view
    if (quizCompleted && showResults) {
        return (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">نتائج مفصلة</h2>
                
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">النتيجة النهائية</span>
                        <span className={`font-bold ${getScoreColor(Math.round((score / shuffledQuestions.length) * 100))}`}>
                            {Math.round((score / shuffledQuestions.length) * 100)}%
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>التقدير</span>
                        <span className="font-bold">
                            {getGrade(Math.round((score / shuffledQuestions.length) * 100))}
                        </span>
                    </div>
                </div>
                
                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2 text-right">تفاصيل الأسئلة</h3>
                    {shuffledQuestions.map((question, index) => {
                        const userAnswer = userAnswers[index];
                        const correctAnswer = shuffledOptionsMap[index].correctAnswer;
                        const isUserCorrect = userAnswer === correctAnswer;
                        const timedOut = userAnswer === -1;
                        
                        return (
                            <div key={index} className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="mb-2 text-right font-medium">
                                    {index + 1}. {question.text}
                                </div>
                                <div className="text-right mb-1">
                                    <span className="text-sm text-gray-600">الإجابة الصحيحة: </span>
                                    <span className="font-bold text-green-600">
                                        {shuffledOptionsMap[index].options[correctAnswer]}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm text-gray-600">إجابتك: </span>
                                    {timedOut ? (
                                        <span className="font-bold text-red-600">انتهى الوقت</span>
                                    ) : (
                                        <span className={`font-bold ${isUserCorrect ? "text-green-600" : "text-red-600"}`}>
                                            {shuffledOptionsMap[index].options[userAnswer]}
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

    // Quiz completion summary
    if (quizCompleted) {
        const scorePercentage = Math.round((score / shuffledQuestions.length) * 100);
        const passThreshold = 60;
        const passed = scorePercentage >= passThreshold;
        
        return (
            <div className="w-full p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">انتهى الاختبار!</h2>
                
                <div className="text-center mb-6">
                    <div className="inline-flex justify-center items-center w-24 h-24 rounded-full bg-gray-100 mb-4">
                        <span className={`text-3xl font-bold ${getScoreColor(scorePercentage)}`}>
                            {scorePercentage}%
                        </span>
                    </div>
                    <p className="text-lg mb-1">
                        لقد حصلت على <span className="font-bold">{score}</span> من <span className="font-bold">{shuffledQuestions.length}</span> نقطة
                    </p>
                    <p className={`text-lg font-bold ${passed ? "text-green-600" : "text-red-600"}`}>
                        {passed ? "مبروك! لقد نجحت في الاختبار" : "للأسف لم تجتز الاختبار"}
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
                        to={`/exercises/${lessonId}`}
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
        <div className="w-full bg-white max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-lg">
                    <span className="text-blue-600">{currentQuestion + 1}</span>/{shuffledQuestions.length}
                </div>
                <Link
                    to={`/lessons/${lessonId}`}
                    className="text-blue-500 hover:text-blue-700 font-medium text-sm flex items-center"
                >
                    <span>الرجوع للدرس</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
            </div>
            
            {/* Timer */}
            <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                    <span>الوقت المتبقي</span>
                    <span className={timeRemaining < 10 ? "text-red-600 font-bold" : ""}>{timeRemaining} ثانية</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                        className={`${getProgressBarColor()} h-2.5 rounded-full transition-all duration-1000 ease-linear`} 
                        style={{ width: `${(timeRemaining / TIME_PER_QUESTION) * 100}%` }}
                    ></div>
                </div>
            </div>
            <h2 className="text-xl font-bold mb-4 text-right">
            {shuffledQuestions[currentQuestion].text}
            </h2>
            <div className="mb-4">
            {shuffledOptionsMap[currentQuestion].options.map(
                    (option, index) => {
                        let buttonClass = "block w-full text-right my-2 p-4 rounded border transition-all duration-150 ";
                        
                        if (showFeedback) {
                            if (index === shuffledOptionsMap[currentQuestion].correctAnswer) {
                                buttonClass += "bg-green-100 border-green-500 text-green-800";
                            } else if (index === selectedAnswer) {
                                buttonClass += "bg-red-100 border-red-500 text-red-800";
                            } else {
                                buttonClass += "bg-gray-100 border-gray-300 text-gray-500";
                            }
                        } else if (selectedAnswer === index) {
                            buttonClass += "bg-blue-100 border-blue-500 text-blue-800";
                        } else {
                            buttonClass += "bg-white border-gray-300 hover:bg-blue-50 hover:border-blue-300";
                        }
                        
                        return (
                            <button
                                className={buttonClass}
                                key={index}
                                onClick={() => !showFeedback && !selectedAnswer && handleAnswer(index)}
                                disabled={showFeedback || selectedAnswer !== null}
                            >
                                {option}
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
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            إجابة صحيحة!
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            إجابة خاطئة!
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;