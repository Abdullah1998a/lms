import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Info, ArrowRight } from "lucide-react";
import { questions } from "../../data/questions";
import { Loading } from "../loading";
import {
    Question,
    NoQuestions,
    Summary,
    DetailedResults
} from "../quiz-components";
import { shuffleArray } from "../../utils/helpers.js";

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
    const TIME_PER_QUESTION = 30;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    useEffect(() => {
        initializeQuiz();
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

    const initializeQuiz = () => {
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
    };

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
        initializeQuiz();
        setCurrentQuestion(0);
        setScore(0);
        setShowFeedback(false);
        setQuizCompleted(false);
        setSelectedAnswer(null);
        setShowResults(false);
    };

    const showDetailedResults = () => {
        setShowResults(true);
    };

    if (!hasQuestions) {
        return <NoQuestions lessonId={lessonId} />;
    }

    if (quizCompleted && showResults) {
        return (
            <DetailedResults
                score={score}
                shuffledQuestions={shuffledQuestions}
                shuffledOptionsMap={shuffledOptionsMap}
                userAnswers={userAnswers}
                resetQuiz={resetQuiz}
                setShowResults={setShowResults}
            />
        );
    }

    if (quizCompleted) {
        return (
            <Summary
                score={score}
                shuffledQuestions={shuffledQuestions}
                showDetailedResults={showDetailedResults}
                resetQuiz={resetQuiz}
                lessonId={lessonId}
            />
        );
    }

    if (!shuffledQuestions.length || !shuffledOptionsMap[currentQuestion]) {
        return <Loading />;
    }

    return (
        <Question
            currentQuestion={currentQuestion}
            totalQuestions={shuffledQuestions.length}
            timeRemaining={timeRemaining}
            question={shuffledQuestions[currentQuestion]}
            options={shuffledOptionsMap[currentQuestion].options}
            selectedAnswer={selectedAnswer}
            showFeedback={showFeedback}
            isCorrect={isCorrect}
            correctAnswer={shuffledOptionsMap[currentQuestion].correctAnswer}
            handleAnswer={handleAnswer}
            lessonId={lessonId}
        />
    );
};

export default Quiz;
