// Q4: Array Performance Analyzer
// Generate 8 random whole-number scores from 30 through 100.
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// map() creates a formatted list of scores; filter() counts passing students.
const formattedScores = scores.map((score, index) => ({
    Student: index + 1,
    Score: score,
    Result: score >= 50 ? "Pass" : "Fail"
}));

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedCount = scores.filter(score => score >= 50).length;

console.log("Student Scores:");
console.table(formattedScores);
console.log(`
Performance Summary
-------------------
Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed: ${passedCount} out of ${scores.length}
`);
