import { Markdown } from "../../markdown";

const SolutionDisplay = ({ solution }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 border-t-4 border-blue-500">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
                الحل النموذجي
            </h3>
            <Markdown content={solution} />
            <p className="mt-4 text-sm text-gray-600">
                تذكر أن هناك أكثر من طريقة لحل المشكلة. استخدم هذا الحل للتعلم
                والمقارنة مع حلك الخاص.
            </p>
        </div>
    );
};

export default SolutionDisplay;
