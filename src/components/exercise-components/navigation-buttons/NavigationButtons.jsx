import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRightCircle, ArrowLeftCircle } from "lucide-react";

const NavigationButtons = ({
    hasPrevious,
    hasNext,
    lessonId,
    onPrevious,
    onNext,
    hasNextLesson = true,
    isNextDisabled = false,
    completed = false
}) => {
    return (
        <div className="mt-auto bg-gray-50 dark:bg-neutral-700 p-4 rounded-lg border border-gray-200 dark:border-none flex justify-between items-center">
            {hasPrevious ? (
                <button
                    onClick={onPrevious}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-blue-200 border border-blue-500 dark:border-blue-200 text-blue-600 dark:text-black hover:bg-blue-50 dark:hover:bg-blue-300 rounded-md transition-colors"
                >
                    <ArrowRightCircle className="h-5 w-5" />
                    <span>التمرين السابق</span>
                </button>
            ) : (
                <div></div>
            )}

            {hasNext ? (
                <button
                    onClick={onNext}
                    disabled={isNextDisabled}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                        isNextDisabled
                            ? "text-neutral-500 dark:text-neutral-500 bg-gray-200 dark:bg-neutral-800"
                            : "bg-blue-600 dark:bg-blue-200 text-white dark:text-black hover:bg-blue-700 dark:hover:bg-blue-300"
                    }`}
                >
                    <span>التمرين التالي</span>
                    <ArrowLeftCircle className="h-5 w-5" />
                </button>
            ) : (
                hasNextLesson && (
                    <Link
                        to={`/lessons/${parseInt(lessonId) + 1}`}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                            !completed
                                ? "text-neutral-500 dark:text-neutral-500 bg-gray-200 dark:bg-neutral-800"
                                : "bg-blue-600 dark:bg-blue-200 text-white dark:text-black hover:bg-blue-700 dark:hover:bg-blue-300"
                        }`}
                        onClick={e => {
                            if (!completed) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <span>الدرس التالي</span>
                    </Link>
                )
            )}
        </div>
    );
};

export default NavigationButtons;
