export const shuffleArray = array => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
export const getScoreColor = scorePercentage => {
    if (scorePercentage >= 80) return "text-green-600";
    if (scorePercentage >= 60) return "text-yellow-600";
    return "text-red-600";
};
export const getDifficultyColor = difficultId => {
    switch (difficultId) {
        case 1:
            return "bg-green-600";
        case 2:
            return "text-black bg-yellow-400";
        default:
            return "bg-red-600";
    }
};

export const getGrade = percentage => {
    if (percentage >= 90) return "ممتاز";
    if (percentage >= 80) return "جيد جداً";
    if (percentage >= 70) return "جيد";
    if (percentage >= 60) return "مقبول";
    return "راسب";
};
