import { Markdown } from "../../markdown";

const QuestionResultItem = ({
    question,
    userAnswer,
    correctAnswer,
    options
}) => {
    const isUserCorrect = userAnswer === correctAnswer;
    const timedOut = userAnswer === -1;

    return (
        <div className="bg-gray-50 rounded-lg dark:bg-neutral-700 my-2 px-4 py-3">
            <Markdown content={question.text} />

            <div className="text-right mb-1">
                <span className="text-sm text-gray-600 dark:text-neutral-100">
                    الإجابة الصحيحة:{" "}
                </span>
                <span className="font-bold text-green-600 dark:text-green-300">
                    <Markdown content={options[correctAnswer]} />
                </span>
            </div>

            <div>
                <span className="text-sm text-gray-600 dark:text-neutral-100">
                    إجابتك:{" "}
                </span>
                {timedOut ? (
                    <span className="font-bold text-red-600 dark:text-red-400">
                        انتهى الوقت
                    </span>
                ) : (
                    <span
                        className={`font-bold ${
                            isUserCorrect
                                ? "text-green-600 dark:text-green-300"
                                : "text-red-600 dark:text-red-400"
                        }`}
                    >
                        <Markdown content={options[userAnswer]} />
                    </span>
                )}
            </div>
        </div>
    );
};

export default QuestionResultItem;
