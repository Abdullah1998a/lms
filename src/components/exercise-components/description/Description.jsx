import { getDifficultyColor } from "../../../utils/helpers.js";

const Description = ({ title, description, difficulty, difficultyId }) => {
    return (
        <div>
            <div className="mb-3 flex justify-between items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-100">
                    {title}
                </h2>
                <span
                    className={`text-sm rounded-full px-6 py-1 text-white ${getDifficultyColor(
                        difficultyId
                    )}`}
                >
                    {difficulty}
                </span>
            </div>
            <p className="text-gray-700 dark:text-neutral-100 mb-6">{description}</p>
        </div>
    );
};

export default Description;
