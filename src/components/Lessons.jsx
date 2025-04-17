import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";

const Lessons = () => {
    return (
        <div className="space-y-2 self-start">
            {lessons.map(({ id, title }) => (
                <Link to={`/lessons/${id}`} key={id}>
                    <h1 className="font-bold my-4">{id}) {title}</h1>
                </Link>
            ))}
        </div>
    );
};

export default Lessons;
