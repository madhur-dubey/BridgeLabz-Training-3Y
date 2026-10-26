// Q7: Customer Feedback Processor
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words by splitting the trimmed feedback at whitespace.
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Check negative keywords without case sensitivity.
const lowerCaseFeedback = feedback.toLowerCase();
const hasNegativeFeedback =
    lowerCaseFeedback.includes("bad") ||
    lowerCaseFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!hasNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
