import { useState, useEffect } from "react";
import { useProgress } from "../../hooks/useProgress";
import { lessons } from "../../data/lessons";
import {
    BarChart3,
    Check,
    Trophy,
    CheckCircle2,
    Unlock,
    Lock
} from "lucide-react";

const Statistics = () => {
    const { getLessonStatus, getLessonProgressStats, loading } = useProgress();
    const [overallProgress, setOverallProgress] = useState(0);
    const [completedLessons, setCompletedLessons] = useState(0);
    const [highestScore, setHighestScore] = useState(0);
    const [lessonStats, setLessonStats] = useState([]);
    useEffect(() => {
        if (!loading) {
            let totalProgress = 0;
            let completed = 0;
            let highScore = 0;
            const stats = lessons.map(lesson => {
                const status = getLessonStatus(lesson.id);
                const progressStats = getLessonProgressStats(lesson.id);
                if (status.completed) {
                    completed++;
                }
                if (status.quizScore > highScore) {
                    highScore = status.quizScore;
                }
                totalProgress += progressStats.overallProgress;
                return {
                    id: lesson.id,
                    title: lesson.title,
                    hasExercises: lesson.hasExercises,
                    unlocked: status.unlocked,
                    completed: status.completed,
                    quizScore: status.quizScore,
                    exercisesCompleted: status.exercisesCompleted.length,
                    overallProgress: progressStats.overallProgress
                };
            });
            setLessonStats(stats);
            setOverallProgress(Math.round(totalProgress / lessons.length));
            setCompletedLessons(completed);
            setHighestScore(highScore);
        }
    }, [loading]);
    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-xl font-semibold text-neutral-600">
                    جارٍ تحميل الإحصائيات...
                </div>
            </div>
        );
    }
    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
            <div className="p-6 bg-blue-600 dark:bg-blue-200 text-white dark:text-black">
                <h2 className="text-2xl font-bold mb-2">إحصائيات الطالب</h2>
                <p className="text-blue-100 dark:text-neutral-800">
                    راقب تقدمك في كل الدروس
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-neutral-700">
                <StatCard
                    title="التقدم الكلي"
                    value={`${overallProgress}%`}
                    icon={
                        <BarChart3
                            className="text-blue-500 dark:text-blue-300"
                            size={24}
                        />
                    }
                />
                <StatCard
                    title="الدروس المكتملة"
                    value={`${completedLessons} / ${lessons.length}`}
                    icon={
                        <Check
                            className="text-blue-500 dark:text-blue-300"
                            size={24}
                        />
                    }
                />
                <StatCard
                    title="أعلى درجة أختبار"
                    value={`${highestScore}%`}
                    icon={
                        <Trophy
                            className="text-blue-500 dark:text-blue-300"
                            size={24}
                        />
                    }
                />
            </div>
            <div className="p-4 dark:bg-neutral-700">
                <h3 className="text-xl font-semibold mb-4 dark:text-neutral-100">
                    تقدم الدرس
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                    {lessonStats.map(lesson => (
                        <div
                            key={lesson.id}
                            className="border rounded-lg overflow-hidden dark:border-neutral-100"
                        >
                            <div className="flex justify-between items-center p-4 border-b bg-gray-50 dark:bg-neutral-800 dark:border-neutral-100">
                                <div className="flex items-center">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center ml-3 ${
                                            lesson.completed
                                                ? "bg-green-100 dark:bg-neutral-700 text-green-600 dark:text-green-300"
                                                : lesson.unlocked
                                                ? "bg-blue-100 dark:bg-neutral-700 text-blue-600 dark:text-blue-200"
                                                : "bg-gray-100 dark:bg-neutral-700 text-gray-500 dark:text-neutral-400"
                                        }`}
                                    >
                                        {lesson.completed ? (
                                            <CheckCircle2 size={16} />
                                        ) : lesson.unlocked ? (
                                            <Unlock size={16} />
                                        ) : (
                                            <Lock size={16} />
                                        )}
                                    </div>
                                    <h4 className="font-medium dark:text-blue-200">
                                        {lesson.title || `Lesson ${lesson.id}`}
                                    </h4>
                                </div>
                                <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-neutral-700 text-blue-700 dark:text-blue-200">
                                    {lesson.overallProgress}%
                                </span>
                            </div>
                            <div className="p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-neutral-200 mb-1">
                                            درجة الإختبار
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-2.5 ml-2">
                                                <div
                                                    className="bg-blue-600 dark:bg-blue-200 h-2.5 rounded-full"
                                                    style={{
                                                        width: `${lesson.quizScore}%`
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="text-sm font-medium dark:text-blue-200">
                                                {lesson.quizScore}%
                                            </span>
                                        </div>
                                    </div>
                                    {lesson.hasExercises && (
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-neutral-200 mb-1">
                                                التمارين
                                            </p>
                                            <div className="flex items-center">
                                                <span className="ml-2 text-sm dark:text-neutral-200">
                                                    <span className="font-medium dark:text-blue-200 ">
                                                        {" "}
                                                        {
                                                            lesson.exercisesCompleted
                                                        }
                                                    </span>{" "}
                                                    تمرين مكتمل
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ title, value, icon }) => (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-neutral-100">
                {title}
            </h3>
            {icon}
        </div>
        <p className="text-3xl font-bold text-gray-900 dark:text-neutral-200">
            {value}
        </p>
    </div>
);

export default Statistics;
