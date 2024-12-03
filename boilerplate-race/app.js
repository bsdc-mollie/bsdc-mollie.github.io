    function submitQuiz() {
        let score = 0;
        const totalQuestions = 4;
 
        // Check each question's answer
        if (document.querySelector('input[name="q1"]:checked') && document.querySelector('input[name="q1"]:checked').value === "a") {
            score++;
        }
        if (document.querySelector('input[name="q2"]:checked') && document.querySelector('input[name="q2"]:checked').value === "a") {
            score++;
        }
        if (document.querySelector('input[name="q3"]:checked') && document.querySelector('input[name="q3"]:checked').value === "a") {
            score++;
        }
        if (document.querySelector('input[name="q4"]:checked') && document.querySelector('input[name="q4"]:checked').value === "a") {
            score++;
        }
 
        // Display the result
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = "block";
        if (score === totalQuestions) {
            resultDiv.innerHTML = `<span class="correct">You got ${score} out of ${totalQuestions} correct! Excellent job!</span>`;
        } else {
            resultDiv.innerHTML = `<span class="incorrect">You got ${score} out of ${totalQuestions} correct. Try again!</span>`;
        }
    }