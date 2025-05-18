import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

const TestCases = ({ testCases, results, isRunning }) => {
    if (!testCases || testCases.length === 0) {
        return null;
    }

    return (
        <div className="border border-gray-200 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
                حالات الاختبار
            </h3>
            <div className="space-y-3">
                {testCases.map((testCase, index) => {
                    const result = results?.[index];
                    const isPassed = result?.status === "passed";
                    const isFailed = result?.status === "failed";
                    const isPending = !result || isRunning;
                    return (
                        <div
                            key={index}
                            className={`border rounded-md p-3 pr-8 ${
                                isPassed
                                    ? "bg-green-50 border-green-200"
                                    : isFailed
                                    ? "bg-red-50 border-red-200"
                                    : "bg-gray-50 border-gray-200"
                            }`}
                        >
                            <div className="relative">
                                <div>
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-700">
                                            حالة اختبار {index + 1}:
                                        </span>
                                        <span className="mr-2 text-gray-600 text-sm">
                                            {testCase.description}
                                        </span>
                                    </div>

                                    <div className="mt-2 grid grid-cols-1 gap-2 text-sm">
                                        <div>
                                            <span className="font-medium text-gray-600">
                                                المدخلات:
                                            </span>
                                            <pre className="text-left mt-1 p-2 bg-gray-100 rounded-md overflow-auto text-sm whitespace-pre-wrap" dir="ltr">
                                                {testCase.input || "No inputs"}
                                            </pre>
                                        </div>

                                        <div>
                                            <span className="font-medium text-gray-600">
                                                المخرجات المتوقعة:
                                            </span>
                                            <pre className="mt-1 p-2 bg-gray-100 rounded-md overflow-auto text-sm whitespace-pre-wrap text-left" dir="ltr">
                                                {testCase.expectedOutput ||
                                                    "No outputs"}
                                            </pre>
                                        </div>

                                        {isFailed && result.output && (
                                            <div>
                                                <span className="font-medium text-red-600">
                                                    المخرجات الفعلية:
                                                </span>
                                                <pre className="mt-1 p-2 bg-red-50 border border-red-200 rounded-md overflow-auto text-sm whitespace-pre-wrap text-left">
                                                    {result.output}
                                                </pre>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="absolute top-0 -right-7 flex items-center">
                                    {isPassed ? (
                                        <CheckCircle className="h-6 w-6 text-green-500" />
                                    ) : isFailed ? (
                                        <XCircle className="h-6 w-6 text-red-500" />
                                    ) : (
                                        <AlertCircle className="h-6 w-6 text-gray-400" />
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TestCases;
