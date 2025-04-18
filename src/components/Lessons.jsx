import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";

const Lessons = () => {
    return (
        <div className="w-full max-w-xl mx-auto space-y-2 self-start">
            {lessons.map(({ id, title }) => (
                <Link
                    to={`/lessons/${id}`}
                    key={id}
                    className="w-full flex gap-4 items-center my-4 px-4 py-3 rounded bg-neutral-100 transition-all duration-200 hover:bg-blue-500 hover:text-white"
                >
                    <span className="w-10 aspect-square rounded-full bg-blue-500 text-white flex items-center justify-center">
                        {id}
                    </span>
                    <h1 className="font-bold">{title}</h1>
                </Link>
            ))}
        </div>
    );
};

export default Lessons;
