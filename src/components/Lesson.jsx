import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MarkdownRender from "./MarkdownRender";
import { Info } from "lucide-react";
import { lessons } from "../data/lessons";
import { exercises } from "../data/exercises";

const Lesson = () => {
    const { lessonId } = useParams();
    const lesson = lessons.find(lesson => lesson.id === parseInt(lessonId));
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
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
    const isThereExercise = exercises.find(
        ex => ex.lessonId == parseInt(lessonId)
    )
        ? true
        : false;
    return (
        <div className="w-full max-w-xl mx-auto self-start lesson">
            <h1 className="text-3xl text-blue-600 font-bold my-4">
                {lesson.title}
            </h1>
            <MarkdownRender content={lesson.content} />
            <div className="flex gap-2 my-4">
                <Link
                    to="quiz"
                    className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-md transition-colors"
                >
                    اختبر نفسك
                </Link>
                {isThereExercise && (
                    <Link
                        to="exercises"
                        className="px-4 py-2 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition-colors"
                    >
                        تمرّن
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Lesson;
