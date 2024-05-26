document.addEventListener("DOMContentLoaded", function() {
    // Define an array of answers
    const answers = [
        "The capital of India is New Delhi.",
        "The Reserve Bank of India (RBI) is headed by the Governor.",
        "The current President of India is Ram Nath Kovind."
    ];

    // Select all question elements
    const questions = document.querySelectorAll(".question");

    // Loop through each question element
    questions.forEach(function(question, index) {
        // Get the question text element
        const questionText = question.querySelector(".question-text");

        // Create a new paragraph element for the answer
        const answerParagraph = document.createElement("p");

        // Set the text content of the answer paragraph to the corresponding answer from the array
        answerParagraph.textContent = answers[index];

        // Append the answer paragraph to the question text element
        questionText.appendChild(answerParagraph);
    });
});