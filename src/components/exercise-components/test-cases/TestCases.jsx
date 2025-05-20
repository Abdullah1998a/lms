import { TestCaseOutput } from "../test-case-output";

export const TestCases = ({ testCases, results, isRunning }) => {
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
                                    {testCase.input || "(no inputs)"}
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

export default TestCases;
