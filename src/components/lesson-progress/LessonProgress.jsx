import { BarChart, ChevronRight } from "lucide-react";

const LessonProgress = ({ progress, hasExercises }) => {
    const {
        quizProgress = 0,
        exercisesProgress = 0,
        overallProgress = 0
    } = progress || {};

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-700 flex items-center gap-2">
                    <BarChart size={18} className="text-blue-600" />
                    تقدمك في هذا الدرس
                </h3>
                <span className="text-sm font-medium text-gray-500">
                    {overallProgress}%
                </span>
            </div>

            <div className="space-y-3">
                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">الاختبار</span>
                        <span className="font-medium">{quizProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${quizProgress}%` }}
                        />
                    </div>
                </div>
                {hasExercises && (
                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">التمارين</span>
                        <span className="font-medium">{exercisesProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${exercisesProgress}%` }}
                        />
                    </div>
                </div>
                )}
                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">التقدم الكلي</span>
                        <span className="font-medium">{overallProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: `${overallProgress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonProgress;