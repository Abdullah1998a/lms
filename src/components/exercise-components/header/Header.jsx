import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Header = ({ lessonId, currentIndex, totalExercises }) => {
    return (
        <div className="flex justify-between items-center">
            <Link
                to={`/lessons/${lessonId}`}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-200 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
                <ArrowRight className="h-5 w-5" />
                الرجوع للدرس
            </Link>
            <div className="text-sm bg-gray-100 dark:bg-neutral-700 dark:text-neutral-100 px-3 py-1 rounded-full">
                تمرين {currentIndex + 1} من {totalExercises}
            </div>
        </div>
    );
};

export default Header;
