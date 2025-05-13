import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book, Lock, Check, Clock } from "lucide-react";
import { lessons } from "../../data/lessons";
import { useProgress } from "../../hooks/useProgress";

const Lessons = () => {
    const {
        isLessonUnlocked,
        getLessonStatus,
        resetAllProgress
    } = useProgress();
    const [showResetButton, setShowResetButton] = useState(false);

    useEffect(() => {
        setShowResetButton(process.env.NODE_ENV === "development");
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto self-start">
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
                                    ) : !unlocked ? (
                                        <div className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center h-fit">
                                            <Lock className="w-3 h-3 ml-1" />
                                            مغلق
                                        </div>
                                    ) : null}
                                </div>

                                {!unlocked && (
                                    <div className="mt-4 text-sm text-gray-500">
                                        يجب إكمال الدرس السابق أولاً للوصول إلى
                                        هذا الدرس
                                    </div>
                                )}

                                <div className="mt-6">
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