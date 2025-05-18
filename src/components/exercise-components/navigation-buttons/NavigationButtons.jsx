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
        <div className="mt-auto bg-gray-50 p-4 rounded-lg border border-gray-200 flex justify-between items-center">
            {hasPrevious ? (
                <button
                    onClick={onPrevious}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
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
                            ? "text-gray-500 bg-gray-200"
                            : "bg-blue-600 text-white hover:bg-blue-700"
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
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                        onClick={e => {
                            if (!completed) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <span>الدرس التالي</span>
                        <ArrowLeft className="h-5 w-5 ml-2" />
                    </Link>
                )
            )}
        </div>
    );
};

export default NavigationButtons;
