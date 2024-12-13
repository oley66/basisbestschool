// Function for Multiple Choice Logic
function checkMCQ(button, isCorrect) {
    // Reset all buttons
    let buttons = document.querySelectorAll('.answer');
    buttons.forEach(btn => {
        btn.style.backgroundColor = "#888";
    });
    
    // Check if the answer is correct
    if (isCorrect) {
        button.style.backgroundColor = "green";
        document.getElementById("mcq-result").innerText = "Correct! Loyalty!!";
        document.getElementById("mcq-result").style.color = "green";
    } else {
        button.style.backgroundColor = "red";
        document.getElementById("mcq-result").innerText = "You will be suspended by Dean!!!";
        document.getElementById("mcq-result").style.color = "red";
    }
}

// Function for Free Response Logic
function checkFRQ() {
    const input = document.getElementById("frq-input");
    const result = document.getElementById("frq-result");
    const answer = "BASIS";

    if (input.value.trim().toLowerCase() === answer.toLowerCase()) {
        input.style.borderColor = "red";
        result.innerText = "YOU WILL BE SUSPENDED BY DEAN!!!!";
        result.style.color = "red";
    } else {
        input.style.borderColor = "green";
        result.innerText = "Very Correct! BASIS is the best school!!";
        result.style.color = "green";
    }
}