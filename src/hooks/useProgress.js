import { useState, useEffect } from "react";
import { lessons } from "../data/lessons";
import { exercises } from "../data/exercises";

const QUIZ_PASS_THRESHOLD = 75;
export const useProgress = () => {
    const [progress, setProgress] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProgress = () => {
            const savedProgress = localStorage.getItem("userProgress");
            if (savedProgress) {
                setProgress(JSON.parse(savedProgress));
            } else {
                const initialProgress = {};
                lessons.forEach(lesson => {
                    initialProgress[lesson.id] = {
                        unlocked: lesson.id === 1,
                        quizCompleted: false,
                        quizScore: 0,
                        exercisesCompleted: [],
                        completed: false
                    };
                });
                setProgress(initialProgress);
                localStorage.setItem(
                    "userProgress",
                    JSON.stringify(initialProgress)
                );
            }
            setLoading(false);
        };
        loadProgress();
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem("userProgress", JSON.stringify(progress));
        }
    }, [progress, loading]);

    const isLessonUnlocked = lessonId => {
        const id = parseInt(lessonId);
        if (id === 1) return true;
        return Boolean(progress[id]?.unlocked);
    };

    const isPreviousLessonCompleted = lessonId => {
        if (loading || lessonId <= 1) return true;
        const id = parseInt(lessonId);
        const prevLessonId = id - 1;
        return progress[prevLessonId]?.completed || false;
    };

    const getLessonStatus = lessonId => {
        if (loading) return { unlocked: false, completed: false };
        const id = parseInt(lessonId);
        return {
            unlocked: progress[id]?.unlocked || false,
            quizCompleted: progress[id]?.quizCompleted || false,
            quizScore: progress[id]?.quizScore || 0,
            exercisesCompleted: progress[id]?.exercisesCompleted || [],
            completed: progress[id]?.completed || false
        };
    };

    const saveQuizResult = (lessonId, score, totalQuestions) => {
        const id = parseInt(lessonId);
        const percentageScore = Math.round((score / totalQuestions) * 100);
        const quizPassed = percentageScore >= QUIZ_PASS_THRESHOLD;

        setProgress(prev => {
            const updatedProgress = { ...prev };
            updatedProgress[id] = {
                ...updatedProgress[id],
                quizCompleted: true,
                quizScore: percentageScore
            };
            const lessonExercises = exercises.filter(ex => ex.lessonId === id);
            if (lessonExercises.length === 0) {
                updatedProgress[id].completed = quizPassed;
            } else {
                const allExercisesCompleted =
                    updatedProgress[id].exercisesCompleted &&
                    updatedProgress[id].exercisesCompleted.length ===
                        lessonExercises.length;
                updatedProgress[id].completed =
                    quizPassed && allExercisesCompleted;
            }
            if (updatedProgress[id].completed) {
                const nextLessonId = id + 1;
                if (updatedProgress[nextLessonId]) {
                    updatedProgress[nextLessonId].unlocked = true;
                }
            }
            return updatedProgress;
        });
        return { percentageScore, passed: quizPassed };
    };

    const completeExercise = (lessonId, exerciseId) => {
        const id = parseInt(lessonId);
        setProgress(prev => {
            const updatedProgress = { ...prev };
            if (!updatedProgress[id].exercisesCompleted) {
                updatedProgress[id].exercisesCompleted = [];
            }
            if (!updatedProgress[id].exercisesCompleted.includes(exerciseId)) {
                updatedProgress[id].exercisesCompleted = [
                    ...updatedProgress[id].exercisesCompleted,
                    exerciseId
                ];
            }

            const lessonExercises = exercises.filter(ex => ex.lessonId === id);
            const allExercisesCompleted =
                updatedProgress[id].exercisesCompleted.length ===
                lessonExercises.length;
            const quizPassed =
                updatedProgress[id].quizScore >= QUIZ_PASS_THRESHOLD;
            updatedProgress[id].completed = quizPassed && allExercisesCompleted;

            if (updatedProgress[id].completed) {
                const nextLessonId = id + 1;
                if (updatedProgress[nextLessonId]) {
                    updatedProgress[nextLessonId].unlocked = true;
                }
            }
            return updatedProgress;
        });
    };

    const isExerciseCompleted = (lessonId, exerciseId) => {
        if (loading) return false;
        const id = parseInt(lessonId);
        return progress[id]?.exercisesCompleted?.includes(exerciseId) || false;
    };

    const getLessonProgressStats = lessonId => {
        if (loading)
            return {
                quizProgress: 0,
                exercisesProgress: 0,
                overallProgress: 0
            };

        const id = parseInt(lessonId);
        const lessonStatus = getLessonStatus(id);
        const quizProgress = lessonStatus.quizCompleted
            ? lessonStatus.quizScore
            : 0;
        const lessonExercises = exercises.filter(ex => ex.lessonId === id);

        // If there are no exercises, set progress to 0 instead of 100
        const exercisesProgress =
            lessonExercises.length === 0
                ? 0
                : Math.round(
                      ((lessonStatus.exercisesCompleted?.length || 0) * 100) /
                          lessonExercises.length
                  );

        // If there are no exercises, calculate overall progress based only on quiz
        const overallProgress =
            lessonExercises.length === 0
                ? quizProgress
                : Math.round((quizProgress + exercisesProgress) / 2);

        return {
            quizProgress,
            exercisesProgress,
            overallProgress
        };
    };

    const resetAllProgress = () => {
        const initialProgress = {};
        lessons.forEach(lesson => {
            initialProgress[lesson.id] = {
                unlocked: lesson.id === 1,
                quizCompleted: false,
                quizScore: 0,
                exercisesCompleted: [],
                completed: false
            };
        });
        setProgress(initialProgress);
        localStorage.setItem("userProgress", JSON.stringify(initialProgress));
    };

    return {
        isLessonUnlocked,
        isPreviousLessonCompleted,
        getLessonStatus,
        saveQuizResult,
        completeExercise,
        isExerciseCompleted,
        getLessonProgressStats,
        resetAllProgress,
        loading,
        QUIZ_PASS_THRESHOLD
    };
};
