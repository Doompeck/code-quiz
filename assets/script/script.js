//  selecting html elements
var startQuiz = document.getElementById("start");

// Variables
var chosenAnswer;
var timerInterval;
var timeCountdown = 75;
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

// HTML template literal for the questions and answers
// var template = `
// <p>${currentQuestion.question}</p>
// <button class ="answers" data-answer="${currentQuestion.answer[0]}">${currentQuestion.answer[0]}</button>
// <button class ="answers" data-answer="${currentQuestion.answer[1]}">${currentQuestion.answer[1]}</button>
// <button class ="answers" data-answer="${currentQuestion.answer[2]}">${currentQuestion.answer[2]}</button>
// <button class ="answers" data-answer="${currentQuestion.answer[3]}">${currentQuestion.answer[3]}</button>
// `

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

// ----Click Event for Start Quiz----
startQuiz.addEventListener("click", function (event) {
  var clickElement = event.target;

  if (!clickElement.matches("button")) return;

  startGame();
});

// ----FUNCTIONS----
// Quiz function
function startGame() {
  console.log("Game Start");
  // console.log(questionPosition);
  //Hide start screen once button is clicked.
  document
    .getElementById("start-screen")
    .setAttribute("style", "visibility: hidden");

  startTimer();
  // Display current question
  displayCurrentQuestion();

  // Display next question
  // displayCurrentQuestion();
  // IF countdown === 0 then endGame();
  if (timerInterval === 0 || currentQuestion > 10) endGame();
}

// Timer function
function startTimer() {
  timerInterval = setInterval(function () {
    timeCountdown--;
    document.getElementById("timer").textContent = timeCountdown;
    if (timeCountdown <= 0) clearInterval(timerInterval);
  }, 1000);
}

function displayCurrentQuestion() {
  currentQuestion = questions[questionPosition];
  var template = `
<p>${currentQuestion.question}</p>
<button class ="answers" data-answer="${currentQuestion.answer[0]}">${currentQuestion.answer[0]}</button>
<button class ="answers" data-answer="${currentQuestion.answer[1]}">${currentQuestion.answer[1]}</button>
<button class ="answers" data-answer="${currentQuestion.answer[2]}">${currentQuestion.answer[2]}</button>
<button class ="answers" data-answer="${currentQuestion.answer[3]}">${currentQuestion.answer[3]}</button>
`;
  document.getElementById("question").innerHTML = template;
}

// Function once an answer has been selected
function answerQuestion() {
  if (chosenAnswer === currentQuestion.correctAnswer) {
    // console.log(chosenAnswer);
    // console.log(currentQuestion.correctAnswer);
    console.log("Right Answer");
    questionPosition++;
    console.log(questionPosition);
    displayCurrentQuestion();
  } else {
    // console.log(chosenAnswer);
    // console.log(currentQuestion.correctAnswer);
    console.log("Wrong Answer");
    timerInterval--;
    questionPosition++;
    displayCurrentQuestion();
  }
  // Check if the selected answer is wrong
  // IF the answer is wrong
  // THEN we need to subtract from countdown

  // IF I have passed the last question
  // THEN endGame();
  // ELSE
  // Display the current question
  // displayCurrentQuestion();
}

// End the game function
function endGame() {
  // Hide questions area
  document
    .getElementById("quiz-show")
    .setAttribute("style", "visibility: hidden");
  // Show Start Screen again?
  document
    .getElementById("start-screen")
    .setAttribute("style", "visibility: visible");

  // Show the Record Highscore screen
  recordHighscore();
  // Clear the timer interval to stop it from running
  clearInterval(timerInterval);
}

// Record the highscore
function recordHighscore() {}

// Display the Highscores
function displayHighscores() {
  document
    .getElementById("highscore")
    .setAttribute("style", "visibility: visible");
}
