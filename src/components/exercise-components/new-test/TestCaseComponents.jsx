import React from "react";

export const TestCaseOutput = ({ output, error, status }) => {
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

    return (
        <div className={`border-r-4 p-4 mb-2 rounded ${getStatusClass()}`}>
            {status === "running" ? (
                <div className="flex items-center">
                    <svg
                        className="animate-spin h-5 w-5 ml-2"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    <span>جارِ التنفيذ...</span>
                </div>
            ) : (
                <>
                    {status && (
                        <div className="font-bold mb-2">
                            {status === "passed"
                                ? "تم اجتياز الاختبار"
                                : "فشل الاختبار"}
                        </div>
                    )}
                    {output && (
                        <div className="mb-2">
                            <h4 className="font-bold mb-2">النتيجة:</h4>
                            <pre
                                className="bg-gray-800 text-sm text-white p-2 rounded overflow-x-auto whitespace-pre-wrap max-h-36"
                                dir="ltr"
                            >
                                {output}
                            </pre>
                        </div>
                    )}
                    {error && (
                        <div>
                            <h4 className="font-bold mb-2 text-red-600">
                                الخطأ:
                            </h4>
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
export const DetailedTestCases = ({ testCases, results, isRunning }) => {
    if (!testCases || testCases.length === 0) {
        return null;
    }
    return (
        <div className="border rounded-md p-4 bg-white shadow">
            <h3 className="text-md font-bold mb-4">حالات الاختبار</h3>
            {testCases.map((testCase, index) => {
                const testResult = results[index];
                const isTestRunning = isRunning && !testResult;
                return (
                    <div
                        key={index}
                        className="mb-6 border-b pb-6 last:border-b-0 last:pb-0"
                    >
                        <h4 className="font-bold text-md mb-2">
                            الاختبار {index + 1}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                            <div>
                                <h5 className="font-semibold mb-2">
                                    المدخلات:
                                </h5>
                                <pre
                                    className="bg-gray-100 p-2 rounded text-sm overflow-x-auto"
                                    dir="ltr"
                                >
                                    {testCase.input || "(No inputs)"}
                                </pre>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">
                                    النتيجة المتوقعة:
                                </h5>
                                <pre
                                    className="bg-gray-100 p-2 rounded text-sm overflow-x-auto"
                                    dir="ltr"
                                >
                                    {testCase.expectedOutput || ""}
                                </pre>
                            </div>
                        </div>
                        {isTestRunning ? (
                            <TestCaseOutput status="running" />
                        ) : testResult ? (
                            <TestCaseOutput
                                status={testResult.status}
                                output={testResult.output}
                                error={testResult.error}
                            />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};

export default DetailedTestCases;
