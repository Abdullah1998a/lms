import { Markdown } from "../../markdown";

const AlgorithmDisplay = ({ algorithm }) => {
    return (
        <div className="dark:bg-neutral-700 rounded-lg shadow p-4 border-t-4 border-blue-500 dark:border-blue-200">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-100 mb-3">
                الخوارزمية
            </h3>
            <Markdown content={algorithm} />
        </div>
    );
};

export default AlgorithmDisplay;
