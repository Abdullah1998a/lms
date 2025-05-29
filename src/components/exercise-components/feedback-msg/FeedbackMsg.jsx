import { Info, AlertCircle, CheckCircle } from "lucide-react";

const FeedbackMsg = ({ message, type }) => {
    if (!message) return null;

    const styles = {
        hint: "bg-blue-50 dark:bg-neutral-700 border border-blue-200 dark:border-none text-blue-800 dark:text-blue-200",
        error: "bg-red-50 dark:bg-neutral-700 border border-red-200 dark:border-none text-red-800 dark:text-red-400",
        success:
            "bg-green-50 dark:bg-neutral-700 border border-green-200 dark:border-none text-green-800 dark:text-green-300"
    };

    const icons = {
        hint: <Info className="h-5 w-5 dark:text-blue-300" />,
        error: <AlertCircle className="h-5 w-5 dark:text-red-500" />,
        success: <CheckCircle className="h-5 w-5 dark:text-green-400" />
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
