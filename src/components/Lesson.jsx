import { useParams, Link } from "react-router-dom";
import MarkdownRender from "./MarkdownRender";
import { lessons } from "../data/lessons";

const Lesson = () => {
    const { id } = useParams();
    const lesson = lessons.find(lesson => lesson.id === parseInt(id));
    return (
        <div className="self-start">
            <div className="flex gap-2">
                <Link
                    to={`/quiz/${id}`}
                    className="bg-blue-300 px-4 py-1.5 rounded-md"
                >
                    اختبر نفسك
                </Link>
                <Link to={`/exercises/${id}`}
                className="bg-blue-300 px-4 py-1.5 rounded-md">تمرّن</Link>
            </div>
            <h1 className="text-3xl text-blue-500 font-bold my-4">
                {lesson.title}
            </h1>
            <MarkdownRender content={lesson.content} />
        </div>
    );
};

export default Lesson;
