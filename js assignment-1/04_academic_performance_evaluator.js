// Q4: Academic Performance Evaluator
// Marks are out of 100. Replace these sample marks to test other outcomes.
const marks = [88, 91, 84, 79, 90];

const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
const hasInvalidMarks = marks.some(mark => mark < 0 || mark > 100);
const failedSubject = marks.some(mark => mark < 35);

console.log("Marks:", marks);
console.log("Average:", average.toFixed(2));
console.log("Overall percentage:", percentage.toFixed(2) + "%");

if (hasInvalidMarks) {
    console.log("Invalid marks: each subject must be between 0 and 100.");
} else if (failedSubject || percentage < 50) {
    // Any subject below 35 means the student is detained.
    console.log("Detained");
} else if (percentage >= 85 && marks.every(mark => mark >= 35)) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
