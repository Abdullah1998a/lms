import { Link } from "react-router-dom";
import { ArrowRight, CircleCheck, CircleAlert } from "lucide-react";
import { Markdown } from "../../markdown";
import { Option } from "../option";
import { FeedbackMsg }from "../feedback-msg";

const Question = ({
    currentQuestion,
    totalQuestions,
    timeRemaining,
    question,
    options,
    selectedAnswer,
    showFeedback,
    isCorrect,
    correctAnswer,
    handleAnswer,
    lessonId
}) => {
    return (
        <div className="w-full bg-white max-w-xl mx-auto">
            {/* Header with navigation and question counter */}
            <div className="flex justify-between items-center mb-4">
                <Link
                    to={`/lessons/${lessonId}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                    <ArrowRight className="h-5 w-5" />
                    <span>الرجوع للدرس</span>
                </Link>
                <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    تمرين {currentQuestion + 1} من {totalQuestions}
                </div>
            </div>

            {/* Timer */}
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

            {/* Question text */}
            <Markdown content={question.text} />

            {/* Answer options */}
            <div className="mb-2">
                {options.map((option, index) => (
                    <Option
                        key={index}
                        option={option}
                        index={index}
                        selectedAnswer={selectedAnswer}
                        showFeedback={showFeedback}
                        isCorrect={index === correctAnswer}
                        handleAnswer={handleAnswer}
                    />
                ))}
            </div>

            {/* Feedback message shown after answering */}
            {showFeedback && <FeedbackMsg isCorrect={isCorrect} />}
        </div>
    );
};

export default Question;
