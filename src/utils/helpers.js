export const shuffleArray = array => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
export const getScoreColor = scorePercentage => {
    if (scorePercentage >= 80) return "text-green-600 dark:text-green-300";
    if (scorePercentage >= 60) return "text-yellow-600 dark:text-yellow-200";
    return "text-red-600 dark:text-red-400";
};
export const getDifficultyColor = difficultId => {
    switch (difficultId) {
        case 1:
            return "bg-green-600 dark:bg-green-300 dark:text-black";
        case 2:
            return "text-black bg-yellow-400 dark:bg-yellow-200 dark:text-black";
        default:
            return "bg-red-600 dark:bg-red-400";
    }
};

export const getGrade = percentage => {
    if (percentage >= 90) return "ممتاز";
    if (percentage >= 80) return "جيد جداً";
    if (percentage >= 70) return "جيد";
    if (percentage >= 60) return "مقبول";
    return "راسب";
};
