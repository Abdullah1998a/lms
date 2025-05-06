import { Info } from "lucide-react";

const FeedbackMsg = ({ message, type }) => {
    if (!message) return null;
    return (
        <div
            className={`flex items-center p-2 rounded-md ${
                type === "hint"
                    ? "bg-blue-50 border border-blue-200 text-blue-800"
                    : "bg-red-50 border border-red-200 text-red-800"
            }`}
        >
            <div className="flex items-center gap-2">
                {type === "hint" && <Info className="h-5 w-5" />}
                <span className="w-[calc(100%-3.25rem)]">{message}</span>
            </div>
        </div>
    );
};

export default FeedbackMsg;
