import { BarChart3, ChevronRight } from "lucide-react";

const LessonProgress = ({ progress, hasExercises }) => {
    const {
        quizProgress = 0,
        exercisesProgress = 0,
        overallProgress = 0
    } = progress || {};

    return (
        <div className="dark:bg-neutral-700 rounded-lg shadow-sm p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-600 dark:text-neutral-100 flex items-center gap-2">
                    <BarChart3
                        size={18}
                        className="text-blue-600 dark:text-blue-200"
                    />
                    تقدمك في هذا الدرس
                </h3>
                <span className="text-sm font-medium text-gray-500 dark:text-neutral-100">
                    {overallProgress}%
                </span>
            </div>
            <div className="space-y-3">
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-neutral-100">
                            الاختبار
                        </span>
                        <span className="font-medium dark:text-neutral-100">
                            {quizProgress}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-2">
                        <div
                            className="bg-blue-600 dark:bg-blue-200 h-2 rounded-full"
                            style={{ width: `${quizProgress}%` }}
                        />
                    </div>
                </div>
                {hasExercises && (
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600 dark:text-neutral-100">
                                التمارين
                            </span>
                            <span className="font-medium dark:text-neutral-100">
                                {exercisesProgress}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-2">
                            <div
                                className="bg-green-500 dark:bg-green-200 h-2 rounded-full"
                                style={{ width: `${exercisesProgress}%` }}
                            />
                        </div>
                    </div>
                )}
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-neutral-100">
                            التقدم الكلي
                        </span>
                        <span className="font-medium dark:text-neutral-100">
                            {overallProgress}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-2">
                        <div
                            className="bg-purple-500 dark:bg-purple-200 h-2 rounded-full"
                            style={{ width: `${overallProgress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonProgress;
