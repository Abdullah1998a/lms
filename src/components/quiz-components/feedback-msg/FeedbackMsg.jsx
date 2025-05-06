import { CircleCheck, CircleAlert } from "lucide-react";

const FeedbackMsg = ({ isCorrect }) => {
    return (
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
    );
};

export default FeedbackMsg;
