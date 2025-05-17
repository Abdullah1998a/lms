import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Markdown } from "../markdown";
import { Info, ArrowUp, ChevronLeft } from "lucide-react";
import { lessons } from "../../data/lessons";
import { useProgress } from "../../hooks/useProgress";
import { LessonProgress } from "../lesson-progress";

const Lesson = () => {
    const { lessonId } = useParams();
    const parsedLessonId = parseInt(lessonId);
    const lesson = lessons.find(lesson => lesson.id === parsedLessonId);
    const [show, setShow] = useState(false);
    const {
        isLessonUnlocked,
        getLessonStatus,
        getLessonProgressStats,
        loading
    } = useProgress();
    const isUnlocked = isLessonUnlocked(parsedLessonId);
    const lessonStatus = getLessonStatus(parsedLessonId);
    const progressStats = getLessonProgressStats(parsedLessonId);
    useEffect(() => {
        handleScroll();
        const visibility = () => {
            if (window.scrollY > 400) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        visibility();
        window.addEventListener("scroll", visibility);
        return () => {
            window.removeEventListener("scroll", visibility);
        };
    }, []);
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        handleScroll();
    }, [lessonId]);
    if (!lesson) {
        return (
            <div className="w-full max-w-4xl mx-auto">
                <div className="bg-red-50 border border-red-200 p-5 rounded-md text-center">
                    <Info className="h-12 w-12 mx-auto mb-4 text-red-600" />
                    <h2 className="text-2xl font-bold mb-3 text-red-600">
                        هذا الدرس غير موجود
                    </h2>
                    <p className="text-lg text-gray-700">
                        قد يكون الدرس قد تم حذفه أو نقله.
                    </p>
                    <Link
                        to="/lessons"
                        className="mt-6 inline-block px-4 py-2 bg-white font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white"
                    >
                        الرجوع للدروس
                    </Link>
                </div>
            </div>
        );
    }
    if (!isUnlocked && !loading && parsedLessonId !== 1) {
        return <Navigate to="/lessons" replace />;
    }
    return (
        <div className="w-full max-w-4xl mx-auto self-start lesson">
            <h1 className="text-3xl text-blue-600 font-bold my-4">
                {lesson.title}
            </h1>

            <LessonProgress
                progress={progressStats}
                hasExercises={lesson.hasExercises}
            />

            <Markdown content={lesson.content} />
            <div className="flex gap-2 items-center">
                <Link
                    to="quiz"
                    className="px-4 py-2 my-4 border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-md transition-colors"
                >
                    اختبر نفسك
                    {lessonStatus.quizCompleted && (
                        <span className="mr-2 text-sm bg-white text-blue-600 px-2 py-0.5 rounded-full">
                            {lessonStatus.quizScore}%
                        </span>
                    )}
                </Link>
                {lesson.hasExercises && lessonStatus.quizCompleted && (
                    <Link
                        to="exercises"
                        className="px-4 py-2 my-4 bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-md transition-colors"
                    >
                        التمارين
                    </Link>
                )}
            </div>
            {lessonStatus.completed && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-700 font-medium">
                        لقد أكملت هذا الدرس بنجاح! يمكنك الانتقال إلى الدرس
                        التالي.
                    </p>
                    {parsedLessonId < lessons.length && (
                        <Link
                            to={`/lessons/${parsedLessonId + 1}`}
                            className="mt-2.5 inline-flex items-center text-green-600 hover:text-green-800"
                        >
                            الدرس التالي
                            <ChevronLeft size={16} className="mr-1" />
                        </Link>
                    )}
                </div>
            )}

            {show && (
                <button
                    type="button"
                    onClick={handleScroll}
                    className="fixed bottom-6 left-6 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-lg transition-all duration-300"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </div>
    );
};

export default Lesson;
