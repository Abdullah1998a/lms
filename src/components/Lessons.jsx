import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";
import { BookOpen, ChevronLeft } from "lucide-react";

const Lessons = () => {
    const [hoveredId, setHoveredId] = useState(null);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div className="w-full max-w-xl mx-auto space-y-4 self-start">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
                الدروس المتوفرة
            </h2>
            <hr />
            <div className="grid gap-4">
                {lessons.map(({ id, title }) => (
                    <Link
                        to={`/lessons/${id}`}
                        key={id}
                        className={`w-full flex items-center p-2 rounded-lg transition-all duration-300 shadow-sm ${
                            hoveredId === id
                                ? "bg-blue-600 text-white"
                                : "bg-neutral-50 text-gray-800"
                        }`}
                        onMouseEnter={() => setHoveredId(id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <div className="flex items-center justify-center">
                            <span
                                className={`w-12 h-12 flex items-center justify-center rounded-full font-bold
                                ${
                                    hoveredId === id
                                        ? "bg-white text-blue-600"
                                        : "bg-blue-500 text-white"
                                }`}
                            >
                                <BookOpen size={20} />
                            </span>
                        </div>

                        <div className="mx-2 flex-grow">
                            <h3
                                className={`font-bold text-md ${
                                    hoveredId === id
                                        ? "text-white"
                                        : "text-gray-800"
                                }`}
                            >
                                {title}
                            </h3>
                            <p
                                className={`text-sm mt-1 ${
                                    hoveredId === id
                                        ? "text-blue-100"
                                        : "text-gray-500"
                                }`}
                            >
                                انقر هنا لبدء هذا الدرس
                            </p>
                        </div>

                        <div
                            className={`flex items-center justify-center ${
                                hoveredId === id
                                    ? "text-white"
                                    : "text-blue-500"
                            }`}
                        >
                            <ChevronLeft size={24} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Lessons;
