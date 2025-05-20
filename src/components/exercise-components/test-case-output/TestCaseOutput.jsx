import { CheckCircle, XCircle, AlertCircle, Play, Loader } from "lucide-react";

const TestCaseOutput = ({ output, error, status }) => {
    const getStatusClass = () => {
        switch (status) {
            case "passed":
                return "bg-green-100 border-green-500 text-green-800";
            case "failed":
                return "bg-red-100 border-red-500 text-red-800";
            case "running":
                return "bg-blue-100 border-blue-500 text-blue-800";
            default:
                return "bg-gray-100 border-gray-500 text-gray-800";
        }
    };

    const getStatusIcon = () => {
        switch (status) {
            case "passed":
                return <CheckCircle className="h-5 w-5 ml-2" />;
            case "failed":
                return <XCircle className="h-5 w-5 ml-2" />;
            default:
                return <AlertCircle className="h-5 w-5 ml-2" />;
        }
    };

    return (
        <div className={`border-r-4 p-4 mb-2 rounded ${getStatusClass()}`}>
            {status === "running" ? (
                <div className="flex items-center">
                    <Loader className="h-5 w-5 ml-2 animate-spin" />
                    <span>جارِ التنفيذ...</span>
                </div>
            ) : (
                <>
                    {status && (
                        <div className="font-bold mb-2 flex items-center">
                            {getStatusIcon()}
                            {status === "passed"
                                ? "تم اجتياز الاختبار"
                                : "فشل الاختبار"}
                        </div>
                    )}
                    {output && (
                        <div className="mb-2" dir="ltr">
                            <h3 className="bg-gray-800 text-white py-2 mb-2">Output</h3>
                            <pre className="bg-gray-900 text-sm text-white p-2 rounded shadow-md overflow-x-auto whitespace-pre-wrap my-2">
                                {output}
                            </pre>
                        </div>
                    )}
                    {error && (
                        <div>
                            <h4 className="mb-2 text-red-800">الخطأ:</h4>
                            <pre
                                className="bg-red-50 text-sm text-red-800 p-2 rounded overflow-x-auto whitespace-pre-wrap max-h-36"
                                dir="ltr"
                            >
                                {error}
                            </pre>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default TestCaseOutput;
