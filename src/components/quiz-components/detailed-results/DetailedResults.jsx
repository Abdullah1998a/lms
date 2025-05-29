import { Markdown } from "../../markdown";
import { getScoreColor, getGrade } from "../../../utils/helpers";
import { QuestionResultItem } from "../question-result-item";

const DetailedResults = ({
    score,
    shuffledQuestions,
    shuffledOptionsMap,
    userAnswers,
    resetQuiz,
    setShowResults
}) => {
    const scorePercentage = Math.round(
        (score / shuffledQuestions.length) * 100
    );

    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center dark:text-neutral-100">
                نتائج مفصلة
            </h2>
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-bold dark:text-neutral-100">
                        النتيجة النهائية
                    </span>
                    <span
                        className={`font-bold ${getScoreColor(
                            scorePercentage
                        )}`}
                    >
                        {scorePercentage}%
                    </span>
                </div>
                <div className="flex justify-between items-center dark:text-neutral-100">
                    <span>التقدير</span>
                    <span className="font-bold">
                        {getGrade(scorePercentage)}
                    </span>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-right dark:text-neutral-100">
                    تفاصيل الأسئلة
                </h3>
                {shuffledQuestions.map((question, index) => (
                    <QuestionResultItem
                        key={index}
                        question={question}
                        userAnswer={userAnswers[index]}
                        correctAnswer={shuffledOptionsMap[index].correctAnswer}
                        options={shuffledOptionsMap[index].options}
                    />
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <button
                    className="bg-blue-500 dark:bg-blue-200 hover:bg-blue-600 dark:hover:bg-blue-300 text-white dark:text-black font-bold py-2.5 px-4 rounded w-full max-w-md mx-auto"
                    onClick={resetQuiz}
                >
                    إعادة الاختبار
                </button>
                <button
                    className="border border-blue-500 dark:border-blue-200 text-blue-500 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-300 dark:hover:border-blue-300 dark:hover:text-black font-bold py-2.5 px-4 rounded w-full max-w-md mx-auto"
                    onClick={() => setShowResults(false)}
                >
                    العودة للملخص
                </button>
            </div>
        </div>
    );
};

export default DetailedResults;
