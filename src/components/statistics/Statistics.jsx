import { useState, useEffect } from "react";
import { useProgress } from "../../hooks/useProgress";
import { lessons } from "../../data/lessons";

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
                <div className="text-xl font-semibold text-gray-600">
                    Loading statistics...
                </div>
            </div>
        );
    }
    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-blue-600 text-white">
                <h2 className="text-2xl font-bold mb-2">إحصائيات الطالب</h2>
                <p className="text-blue-100">راقب تقدمك في كل الدروس</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50">
                <StatCard
                    title="التقدم الكلي"
                    value={`${overallProgress}%`}
                    icon={<ChartIcon />}
                />
                <StatCard
                    title="الدروس المكتملة"
                    value={`${completedLessons} / ${lessons.length}`}
                    icon={<CheckIcon />}
                />
                <StatCard
                    title="أعلى درجة أختبار"
                    value={`${highestScore}%`}
                    icon={<TrophyIcon />}
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">تقدم الدرس</h3>
                <div className="space-y-4">
                    {lessonStats.map(lesson => (
                        <div
                            key={lesson.id}
                            className="border rounded-lg overflow-hidden"
                        >
                            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
                                <div className="flex items-center">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center ml-3 ${
                                            lesson.completed
                                                ? "bg-green-100 text-green-600"
                                                : lesson.unlocked
                                                ? "bg-blue-100 text-blue-600"
                                                : "bg-gray-100 text-gray-500"
                                        }`}
                                    >
                                        {lesson.completed ? (
                                            <CheckCircleIcon />
                                        ) : lesson.unlocked ? (
                                            <UnlockIcon />
                                        ) : (
                                            <LockIcon />
                                        )}
                                    </div>
                                    <h4 className="font-medium">
                                        {lesson.title || `Lesson ${lesson.id}`}
                                    </h4>
                                </div>
                                <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                                    {lesson.overallProgress}%
                                </span>
                            </div>
                            <div className="p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">
                                            درجة الإختبار
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2">
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-full"
                                                    style={{
                                                        width: `${lesson.quizScore}%`
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="text-sm font-medium">
                                                {lesson.quizScore}%
                                            </span>
                                        </div>
                                    </div>
                                    {lesson.hasExercises && (
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">
                                                التمارين
                                            </p>
                                            <div className="flex items-center">
                                                <span className="ml-2 text-sm font-medium">
                                                    {lesson.exercisesCompleted}{" "}
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

// Simple stat card component
const StatCard = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
            <div className="text-blue-500">{icon}</div>
        </div>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
);

// Icons (simple SVG icons)
const ChartIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
);

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const TrophyIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M8 21h8"></path>
        <path d="M12 17v4"></path>
        <path d="M17 8c0 4-2.667 8-5 8s-5-4-5-8"></path>
        <path d="M7 8c0-1.333.5-3 2-4"></path>
        <path d="M17 8c0-1.333-.5-3-2-4"></path>
        <path d="M8 4h8"></path>
    </svg>
);

const CheckCircleIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const UnlockIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
    </svg>
);

const LockIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

const ExerciseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M9 13h6"></path>
        <path d="M9 17h3"></path>
    </svg>
);

export default Statistics;
