//  selecting html elements
var startQuiz = document.getElementById("start");

// Variables
var chosenAnswer;
var timerInterval;
var yourHighscore;
var timeCountdown = 60;
var questionPosition = 0;

// 10 Questions and  4 Answer Object Array w correct answers
var questions = [
  {
    question: "Javascript is an _______ language?",
    answer: [
      "Object-Oriented",
      "Object-Based",
      "Procedural",
      "None of the Above",
    ],
    correctAnswer: "Object-Oriented",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answer: ["var", "let", "Both A and B", "None of the Above"],
    correctAnswer: "Both A and B",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answer: [
      "getElementById()",
      "getElementsbyClassName()",
      "Both A and B",
      "None of the Above",
    ],
    correctAnswer: "Both A and B",
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answer: [
      "Throws and error",
      "Ignores the statements",
      "Gives a warning",
      "None of the Above",
    ],
    correctAnswer: "Ignores the statements",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    answer: [
      "document.write()",
      "console.log()",
      "window.alert()",
      "All of the Above",
    ],
    correctAnswer: "All of the Above",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answer: ["const", "var", "let", "constant"],
    correctAnswer: "const",
  },
  {
    question:
      "When an operator's value is NULL, the typeof returned by the unary operator is:",
    answer: ["Boolean", "Undefined", "Object", "Integer"],
    correctAnswer: "Object",
  },
  {
    question:
      "When the switch statement matches the expression with the given labels, how is the comparison done?",
    answer: [
      "Both the datatype and the result of the expression are compared",
      "Only the datatype  of the expression is compared.",
      "Only the value of the expression is compared.",
      "None of the Above",
    ],
    correctAnswer:
      "Both the datatype and the result of the expression are compared",
  },
  {
    question: "What does the Javascript “debugger” statement do?",
    answer: [
      "It will debug all the errors in the program at runtime",
      "It acts as a breakpoint in a program.",
      "It will debug error in the current statement if any.",
      "All of the Above",
    ],
    correctAnswer: "It acts as a breakpoint in a program.",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    answer: ["in", "is in", "exists", "lies"],
    correctAnswer: "in",
  },
];

var currentQuestion = questions[questionPosition];
var questionContainer = document.querySelector("#question");

// ----Click Event for Start Quiz----
startQuiz.addEventListener("click", function (event) {
  var clickElement = event.target;

  if (!clickElement.matches("button")) return;

  startGame();
});

// ----Click Event for Answers----
questionContainer.addEventListener("click", function (event) {
  var clickElement = event.target;

  if (!clickElement.matches("button")) {
    return;
  } else {
    chosenAnswer = clickElement.dataset.answer;
    // console.log(chosenAnswer);
    // console.log(currentQuestion.correctAnswer);
    // console.log(questionPosition);
    answerQuestion();
  }
});

// ----FUNCTIONS----
// Quiz function
function startGame() {
  console.log("Game Start");
  // console.log(questionPosition);
  //Hide start screen once button is clicked.
  document
    .getElementById("start-screen")
    .setAttribute("style", "display: none");

  startTimer();
  // Display current question
  displayCurrentQuestion();
}

// Timer function
function startTimer() {
  timerInterval = setInterval(function () {
    timeCountdown--;
    document.getElementById("timer").textContent = timeCountdown;
  }, 1000);
}

function displayCurrentQuestion() {
  // console.log(questionPosition);
  if (questionPosition > 9 || timeCountdown <= 0) endGame();
  currentQuestion = questions[questionPosition];
  var template = `
  <p>${currentQuestion.question}</p>
  <div class="stack">
<button class ="answers" data-answer="${currentQuestion.answer[0]}">${currentQuestion.answer[0]}</button>
<button class ="answers" data-answer="${currentQuestion.answer[1]}">${currentQuestion.answer[1]}</button>
<button class ="answers" data-answer="${currentQuestion.answer[2]}">${currentQuestion.answer[2]}</button>
<button class ="answers" data-answer="${currentQuestion.answer[3]}">${currentQuestion.answer[3]}</button>
</div> 
`;
  document.getElementById("question").innerHTML = template;
}

// Function once an answer has been selected
function answerQuestion() {
  if (chosenAnswer === currentQuestion.correctAnswer) {
    // console.log(chosenAnswer);
    // console.log(currentQuestion.correctAnswer);
    // console.log("Right Answer");
    questionPosition++;
    // console.log(questionPosition);
    displayCurrentQuestion();
  } else {
    // console.log(chosenAnswer);
    // console.log(currentQuestion.correctAnswer);
    // console.log("Wrong Answer");
    timeCountdown--;
    document.getElementById("timer").textContent = timeCountdown;
    questionPosition++;
    displayCurrentQuestion();
  }
}

// End the game function
function endGame() {
  questionPosition = 0;
  document.getElementById("question").innerHTML = "";
  // Hide questions area
  document.getElementById("question").setAttribute("style", "display: none");

  document.getElementById("highscore").setAttribute("style", "display: inline");
  // Show Start Screen again?
  // document
  //   .getElementById("start-screen")
  //   .setAttribute("style", "visibility: visible");

  // Show the Record Highscore screen
  stopTimer();
  saveHighscore();
  // Clear the timer interval to stop it from running
  clearInterval(timerInterval);
}

// Record the Stop the clock and record the highscore
function stopTimer() {
  yourHighscore = timeCountdown;
  clearInterval(timerInterval);
  timerInterval = null;
}

// Display the Highscores
function saveHighscore() {
  var template = `<h1>Your Final Score is <span id="final-score">${yourHighscore}</span></h1>
<span>Enter your initials to submit your highscore</span>
 <input placeholder="Your Initials" id="initials"></input>
 <button id="highscorebtn">Submit</button>`;

  document.getElementById("highscore").innerHTML = template;
  var scoreBtnEl = document.getElementById("highscorebtn");
  var scoreEl = document.getElementById("initials");

  // ----Click Event for Score Submission----
  scoreBtnEl.addEventListener("click", function (event) {
    var clickElement = event.target;
    // console.log(scoreEl.value);
    if (!clickElement.matches("button")) {
      return;
    } else {
      var storedArray = JSON.parse(localStorage.getItem("score-and-initials"));

      var scoreAndInitials = {
        initials: scoreEl.value,
        score: yourHighscore,
      };
      if (storedArray === null) {
        storedArray = [scoreAndInitials];
      } else if (
        !storedArray.some((item) => item.initials === scoreAndInitials.initials)
      ) {
        storedArray.push(scoreAndInitials);
      }
      localStorage.setItem("score-and-initials", JSON.stringify(storedArray));
      document
      .getElementById("start-screen")
      .setAttribute("style", "display: flex");

      document.getElementById("highscore").setAttribute("style", "display: none");
      event.preventDefault();
    }
  });
}
