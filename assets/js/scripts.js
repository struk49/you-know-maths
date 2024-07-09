// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
    document.getElementById("answer-box").addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            checkAnswer();
        }
    });

    runGame("addition");
});

/*
* The main game "loop" , called when the script is first loaded
* and after the users answer has been processed
*/
function runGame() {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if(gameType === "addition"){
        if(gameType === "addition"){
            displayAdditionQuestion(num1, num2)
        } else if (gameType === "multiply"){
            displayMultiplyQuestion(num1, num2)
        } else if (gameType === "subtract"){
            displaySubtractQuestion(num1, num2)
        }else if(gameType === "divide"){
            displayDivideQuestion(num1, num2);
        }
    }
}


function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateCorrectAnswer[0];

    if(isCorrect){
        alert("You got it right :D");
        incrementScore();
    } else {
        alert(`Awww...you answered ${userAnswer}, the coreect answer is ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1, operand2, "additipn"];
    }else if (operator === "x"){
        return [operand1, operand2, "multiply"];
    }else if (operator === "-"){
        return [operand1, operand2, "subtract"];
    }else if (operator === "/"){
        return [operand1, operand22, "divide"];
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}

function displayDivideQuestion(){

}