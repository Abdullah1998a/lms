import { Markdown } from "../../markdown";

const AlgorithmDisplay = ({ algorithm }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 border-t-4 border-blue-500">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
                الخوارزمية
            </h3>
            <Markdown content={algorithm} />
        </div>
    );
};

export default AlgorithmDisplay;
