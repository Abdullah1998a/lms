import { Markdown } from "../../markdown";

const SolutionDisplay = ({ solution }) => {
    return (
        <div className="dark:bg-neutral-700 rounded-lg shadow p-4 border-t-4 border-blue-500 dark:border-blue-200 solution">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-100 mb-3">
                الحل النموذجي
            </h3>
            <Markdown content={solution} />
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-200">
                تذكر أن هناك أكثر من طريقة لحل المشكلة. استخدم هذا الحل للتعلم
                والمقارنة مع حلك الخاص.
            </p>
        </div>
    );
};

export default SolutionDisplay;
