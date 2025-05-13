import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getScoreColor, getGrade } from "../../../utils/helpers.js";
import { useProgress } from "../../../hooks/useProgress";
import { lessons } from "../../../data/lessons";

const Summary = ({
    score,
    shuffledQuestions,
    showDetailedResults,
    resetQuiz,
    lessonId
}) => {
    const parsedLessonId = parseInt(lessonId);
    const { saveQuizResult, getLessonStatus } = useProgress();
    const lessonStatus = getLessonStatus(parsedLessonId);
    const scorePercentage = Math.round(
        (score / shuffledQuestions.length) * 100
    );
    const passThreshold = 60;
    const passed = scorePercentage >= passThreshold;
    useEffect(() => {
        const savingQuizResult = () => {
            saveQuizResult(parsedLessonId, score, shuffledQuestions.length);
        };
        savingQuizResult();
    }, []);
    const hasExercises = lessons.find(
        lesson => lesson.id === parsedLessonId
    )?.hasExercises;
    return (
        <div className="w-full bg-white max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
                انتهى الاختبار!
            </h2>
            <div className="text-center mb-6">
                <div className="inline-flex justify-center items-center w-24 h-24 rounded-full bg-gray-100 mb-4">
                    <span
                        className={`text-3xl font-bold ${getScoreColor(
                            scorePercentage
                        )}`}
                    >
                        {scorePercentage}%
                    </span>
                </div>
                <p className="text-lg mb-1">
                    لقد حصلت على <span className="font-bold">{score}</span> من{" "}
                    <span className="font-bold">
                        {shuffledQuestions.length}
                    </span>{" "}
                    نقطة
                </p>
                <p
                    className={`text-lg font-bold ${
                        passed ? "text-green-600" : "text-red-600"
                    }`}
                >
                    {passed
                        ? "مبروك! لقد نجحت في الاختبار"
                        : "للأسف لم تجتز الاختبار"}
                </p>
                <p className="mt-2 font-medium">
                    التقدير: {getGrade(scorePercentage)}
                </p>
            </div>

            {passed && lessonStatus.completed && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-700 text-center">
                        لقد أكملت هذا الدرس بنجاح!
                        {parsedLessonId < lessons.length &&
                            " يمكنك الانتقال إلى الدرس التالي."}
                    </p>
                </div>
            )}

            <div className="flex flex-col gap-2">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded w-full"
                    onClick={showDetailedResults}
                >
                    عرض التفاصيل
                </button>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded w-full"
                    onClick={resetQuiz}
                >
                    إعادة الاختبار
                </button>
                <Link
                    to={`/lessons/${lessonId}`}
                    className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2.5 px-4 rounded w-full text-center"
                >
                    الرجوع للدرس
                </Link>
                {hasExercises &&
                <Link
                    to={`/lessons/${lessonId}/exercises`}
                    className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2.5 px-4 rounded w-full text-center"
                >
                    تمارين
                </Link>
                }
                {passed &&
                    lessonStatus.completed &&
                    parsedLessonId < lessons.length && (
                        <Link
                            to={`/lessons/${parsedLessonId + 1}`}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded w-full text-center"
                        >
                            الانتقال للدرس التالي
                        </Link>
                    )}
            </div>
        </div>
    );
};

export default Summary;
