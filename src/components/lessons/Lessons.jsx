import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book, Lock, Check, Clock } from "lucide-react";
import { lessons } from "../../data/lessons";
import { useProgress } from "../../hooks/useProgress";

const Lessons = () => {
    const {
        isLessonUnlocked,
        getLessonStatus,
        getLessonProgressStats,
        resetAllProgress,
        progress
    } = useProgress();
    const [showResetButton, setShowResetButton] = useState(false);

    useEffect(() => {
        setShowResetButton(process.env.NODE_ENV === "development");
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">الدروس</h1>
                {showResetButton && (
                    <button
                        onClick={resetAllProgress}
                        className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded hover:bg-red-200"
                    >
                        إعادة ضبط التقدم (للتطوير فقط)
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 gap-6">
                {lessons.map(lesson => {
                    const unlocked = isLessonUnlocked(lesson.id);
                    const status = getLessonStatus(lesson.id);
                    const stats = getLessonProgressStats(lesson.id);
                    return (
                        <div
                            key={lesson.id}
                            className={`bg-white rounded-lg shadow-md overflow-hidden ${
                                !unlocked ? "opacity-70" : ""
                            }`}
                        >
                            <div className="p-4 md:p-6">
                                <div className="flex justify-between">
                                    <div className="flex items-center mb-2">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ml-3 ${
                                                status.completed
                                                    ? "bg-green-100 text-green-600"
                                                    : unlocked
                                                    ? "bg-blue-100 text-blue-600"
                                                    : "bg-gray-100 text-gray-500"
                                            }`}
                                        >
                                            {status.completed ? (
                                                <Check className="w-5 h-5" />
                                            ) : unlocked ? (
                                                <Book className="w-5 h-5" />
                                            ) : (
                                                <Lock className="w-5 h-5" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {lesson.title}
                                            </h3>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Clock className="w-3.5 h-3.5 ml-1" />
                                                <span>حوالي 30 دقيقة</span>
                                            </div>
                                        </div>
                                    </div>
                                    {status.completed ? (
                                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center h-fit">
                                            <Check className="w-3 h-3 ml-1" />
                                            مكتمل
                                        </div>
                                    ) : unlocked &&
                                      stats.overallProgress > 0 ? (
                                        <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full h-fit">
                                            {stats.overallProgress}%
                                        </div>
                                    ) : !unlocked ? (
                                        <div className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center h-fit">
                                            <Lock className="w-3 h-3 ml-1" />
                                            مغلق
                                        </div>
                                    ) : null}
                                </div>
                                {unlocked && (
                                    <div className="mt-4">
                                        <div className="flex justify-between text-xs mb-1.5">
                                            <span>تقدم الدرس</span>
                                            <span>
                                                {stats.overallProgress}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full"
                                                style={{
                                                    width: `${stats.overallProgress}%`
                                                }}
                                            ></div>
                                        </div>

                                        <div
                                            className={`${
                                                lesson.hasExercises
                                                    ? "grid grid-cols-2 gap-3"
                                                    : ""
                                            }`}
                                        >
                                            <div>
                                                <div className="flex justify-between text-xs mb-1.5">
                                                    <span>الاختبار</span>
                                                    <span>
                                                        {stats.quizProgress}%
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                    <div
                                                        className={`h-1.5 rounded-full ${
                                                            stats.quizProgress >=
                                                            85
                                                                ? "bg-green-500"
                                                                : "bg-yellow-500"
                                                        }`}
                                                        style={{
                                                            width: `${stats.quizProgress}%`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>

                                            {lesson.hasExercises && (
                                                <div>
                                                    <div className="flex justify-between text-xs mb-1">
                                                        <span>التمارين</span>
                                                        <span>
                                                            {
                                                                stats.exercisesProgress
                                                            }
                                                            %
                                                        </span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                        <div
                                                            className={`h-1.5 rounded-full ${
                                                                stats.exercisesProgress ===
                                                                100
                                                                    ? "bg-green-500"
                                                                    : "bg-yellow-500"
                                                            }`}
                                                            style={{
                                                                width: `${stats.exercisesProgress}%`
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {!unlocked && (
                                    <div className="mt-4 text-sm text-gray-500">
                                        يجب إكمال الدرس السابق أولاً للوصول إلى
                                        هذا الدرس
                                    </div>
                                )}

                                <div className="mt-6 space-y-2">
                                    {unlocked ? (
                                        <Link
                                            to={`/lessons/${lesson.id}`}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center block transition"
                                        >
                                            {status.completed
                                                ? "مراجعة الدرس"
                                                : "بدء الدرس"}
                                        </Link>
                                    ) : (
                                        <button
                                            disabled
                                            className="w-full bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded text-center block cursor-not-allowed"
                                        >
                                            مغلق
                                        </button>
                                    )}

                                    {unlocked && (
                                        <div
                                            className={`${
                                                lesson.hasExercises
                                                    ? "grid grid-cols-2"
                                                    : ""
                                            } gap-2`}
                                        >
                                            <Link
                                                to={`/lessons/${lesson.id}/quiz`}
                                                className={`text-center py-2 px-3 rounded text-sm transition ${
                                                    status.quizCompleted &&
                                                    status.quizScore >= 85
                                                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                                                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                                                }`}
                                            >
                                                {status.quizCompleted
                                                    ? status.quizScore >= 85
                                                        ? "الاختبار ✓"
                                                        : "إعادة الاختبار"
                                                    : "بدء الاختبار"}
                                            </Link>

                                            {lesson.hasExercises && (
                                                <Link
                                                    to={`/lessons/${lesson.id}/exercises`}
                                                    className={`text-center py-2 px-3 rounded text-sm transition ${
                                                        stats.exercisesProgress ===
                                                        100
                                                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                                                            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                                                    }`}
                                                >
                                                    {stats.exercisesProgress ===
                                                    100
                                                        ? "التمارين ✓"
                                                        : stats.exercisesProgress >
                                                          0
                                                        ? "إكمال التمارين"
                                                        : "بدء التمارين"}
                                                </Link>
                                            )}
                                        </div>
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

export default Lessons;
