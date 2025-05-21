import { Link } from "react-router-dom";
import { Book, Lock, Check, Clock } from "lucide-react";
import { lessons } from "../../data/lessons";
import { useProgress } from "../../hooks/useProgress";

const Lessons = () => {
    const { isLessonUnlocked, getLessonStatus, resetAllProgress } =
        useProgress();

    return (
        <div className="w-full max-w-4xl mx-auto self-start">
            <h1 className="text-2xl font-bold mb-4 pb-4 border-b">الدروس</h1>
            <div className="grid md:grid-cols-2 gap-4">
                {lessons.map(lesson => {
                    const unlocked = isLessonUnlocked(lesson.id);
                    const status = getLessonStatus(lesson.id);
                    return (
                        <div
                            key={lesson.id}
                            className={`bg-white rounded-lg shadow overflow-hidden ${
                                !unlocked ? "opacity-70" : ""
                            }`}
                        >
                            <div className="h-full p-4 flex flex-col">
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

                                {!unlocked ? (
                                    <div className="mt-4 text-sm text-gray-500">
                                        يجب إكمال الدرس السابق أولاً للوصول إلى
                                        هذا الدرس
                                    </div>
                                ) : status.completed ? (
                                    <div className="mt-4 text-sm text-gray-600">
                                        أحسنت، يمكنك الآن أن تراجع معلوماتك في
                                        اي وقت تشاء.
                                    </div>
                                ) : (
                                    <div className="mt-4 text-sm text-gray-600">
                                        لإكمال هذا الدرس يجب تحقيق على الأقل ٧٥%
                                        في الاختبار وحل جميع التمارين البرمجية
                                        إن وجدت.
                                    </div>
                                )}

                                <div className="mt-auto">
                                    {unlocked ? (
                                        <Link
                                            to={`/lessons/${lesson.id}`}
                                            className={`w-full border border-blue-600 font-medium mt-5 py-2 px-4 rounded text-center block transition ${
                                                status.completed
                                                    ? "bg-white text-blue-600 hover:text-white hover:bg-blue-700"
                                                    : "bg-blue-600 text-white hover:bg-blue-700"
                                            }`}
                                        >
                                            {status.completed
                                                ? "مراجعة الدرس"
                                                : "بدء الدرس"}
                                        </Link>
                                    ) : (
                                        <button
                                            disabled
                                            className="w-full bg-gray-300 text-gray-500 font-medium mt-5 py-2 px-4 rounded text-center block cursor-not-allowed"
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
