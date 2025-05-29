import { Markdown } from "../../markdown";

const Option = ({
    option,
    index,
    selectedAnswer,
    showFeedback,
    isCorrect,
    handleAnswer
}) => {
    let buttonClass =
        "block w-full rounded border transition-all duration-150 my-2 px-4";
    if (showFeedback) {
        if (isCorrect) {
            buttonClass +=
                "bg-green-100 border-green-600 text-green-800 dark:text-neutral-500";
        } else if (index === selectedAnswer) {
            buttonClass += "bg-red-100 border-red-500 text-red-800 dark:text-neutral-500";
        } else {
            buttonClass +=
                " bg-gray-100 dark:bg-neutral-500 border-gray-300 text-gray-500 dark:text-neutral-100";
        }
    } else if (selectedAnswer === index) {
        buttonClass += "bg-blue-100 border-blue-500 text-blue-800";
    } else {
        buttonClass +=
            " bg-white border-gray-300 dark:bg-neutral-700 hover:bg-blue-50 dark:hover:bg-neutral-600 hover:border-blue-300";
    }

    return (
        <button
            className={buttonClass}
            onClick={() =>
                !showFeedback && selectedAnswer === null && handleAnswer(index)
            }
            disabled={showFeedback || selectedAnswer !== null}
        >
            <Markdown content={option} />
        </button>
    );
};

export default Option;
