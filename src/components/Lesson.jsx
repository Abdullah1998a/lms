import { useParams, Link } from "react-router-dom";
import MarkdownRender from "./MarkdownRender";
import { lessons } from "../data/lessons";

const Lesson = () => {
    const { lessonId } = useParams();
    const lesson = lessons.find(lesson => lesson.id === parseInt(lessonId));
    return (
        <div className="w-full max-w-xl mx-auto self-start">
            <h1 className="text-3xl text-blue-500 font-bold my-4">
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
                <Link
                    to="exercises"
                    className="px-4 py-2 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition-colors"
                >
                    تمرّن
                </Link>
            </div>
        </div>
    );
};

export default Lesson;
