import { Info, AlertCircle, CheckCircle } from "lucide-react";

const FeedbackMsg = ({ message, type }) => {
    if (!message) return null;

    const styles = {
        hint: "bg-blue-50 border border-blue-200 text-blue-800",
        error: "bg-red-50 border border-red-200 text-red-800",
        success: "bg-green-50 border border-green-200 text-green-800"
    };

    const icons = {
        hint: <Info className="h-5 w-5" />,
        error: <AlertCircle className="h-5 w-5" />,
        success: <CheckCircle className="h-5 w-5" />
    };

    return (
        <div
            className={`flex items-center gap-2 p-2 rounded-md ${
                styles[type] || styles.hint
            }`}
        >
            {icons[type] || icons.hint}
            <span className="w-[calc(100%-24px)]">{message}</span>
        </div>
    );
};

export default FeedbackMsg;
