const HelpButtons = ({
    onGetHint,
    onToggleAlgorithm,
    onToggleSolution,
    remainingHints,
    showAlgorithm,
    showSolution
}) => {
    return (
        <div className="flex flex-col gap-3">
            <button
                className="px-4 py-2.5 text-blue-600 dark:text-black border border-blue-600 dark:bg-blue-200 dark:border-blue-200 rounded-md disabled:border-gray-300 dark:disabled:border-neutral-900 disabled:text-neutral-500 disabled:bg-gray-200 dark:disabled:bg-neutral-900 hover:bg-blue-50 dark:hover:bg-blue-300 transition-colors w-full max-w-md mx-auto"
                onClick={onGetHint}
                disabled={remainingHints <= 0}
            >
                تلميح ({remainingHints} متبقية)
            </button>
            <button
                className="px-4 py-2.5 text-blue-600 dark:text-black border border-blue-600 dark:bg-blue-200 dark:border-blue-200 rounded-md disabled:border-gray-300 dark:disabled:border-neutral-900 disabled:text-neutral-500 disabled:bg-gray-200 dark:disabled:bg-neutral-900 hover:bg-blue-50 dark:hover:bg-blue-300  transition-colors w-full max-w-md mx-auto"
                onClick={onToggleAlgorithm}
                disabled={remainingHints > 0 || showSolution}
            >
                {showAlgorithm ? "إخفاء" : "عرض"} خوارزمية الحلّ
            </button>
            <button
                className="px-4 py-2.5 text-blue-600 dark:text-black border border-blue-600 dark:bg-blue-200 dark:border-blue-200 rounded-md disabled:border-gray-300 dark:disabled:border-neutral-900 disabled:text-neutral-500 disabled:bg-gray-200 dark:disabled:bg-neutral-900 hover:bg-blue-50 dark:hover:bg-blue-300  transition-colors w-full max-w-md mx-auto"
                onClick={onToggleSolution}
                disabled={remainingHints > 0 || showAlgorithm}
            >
                {showSolution ? "إخفاء الحل" : "عرض الحل"}
            </button>
        </div>
    );
};

export default HelpButtons;
