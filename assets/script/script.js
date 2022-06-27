//  selecting html elements
var question = document.getElementById("#question");
var choiceA = document.getElementById("#a");
var choiceB = document.getElementById("#b");
var choiceC = document.getElementById("#c");
var choiceD = document.getElementById("#d");
var startQuiz = document.getElementById("start");

// Variables
var timeCountdown = 75;
var questionPosition = 0;

// 10 Questions and  4 Answer Array w correct answers
var questions = [
    {
        question: "Javascript is an _______ language?",
        answer:["Object-Oriented","Object-Based","Procedural","None of the Above"],
        correctAnswer: "Object-Oriented"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answer:["var","let","Both A and B","None of the Above"],
        correctAnswer: "Both A and B"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answer:["getElementById()","getElementsbyClassName()","Both A and B","None of the Above"],
        correctAnswer: "Both A and B"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answer:["Throws and error","Ignores the statements","Gives a warning","None of the Above"],
        correctAnswer: "Ignores the statements"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answer:["document.write()","console.log()","window.alert()","All of the Above"],
        correctAnswer: "All of the Above"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answer:["const","var","let","constant"],
        correctAnswer: "const"
    },
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        answer:["Boolean","Undefined","Object","Integer"],
        correctAnswer: "Object"
    },
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answer:["Both the datatype and the result of the expression are compared","Only the datatype  of the expression is compared.","Only the value of the expression is compared.","None of the Above"],
        correctAnswer: "Both the datatype and the result of the expression are compared"
    },
    {
        question: "What does the Javascript “debugger” statement do?",
        answer:["It will debug all the errors in the program at runtime","It acts as a breakpoint in a program.","It will debug error in the current statement if any.","All of the Above"],
        correctAnswer: "It acts as a breakpoint in a program."
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        answer:["in","is in","exists","lies"],
        correctAnswer: "in"
    }
];

var currentQuestion = questions[questionPosition];
var questionContainer = document.querySelector('#question');

questionContainer.addEventListener("click", function(event) {

    var clickElement = event.target;
    
    if(!clickElement.matches('button')) return;

    var answer = clickElement.dataset.answer;
    console.log(answer);

});

startQuiz.addEventListener("click", function(event) {

    var clickElement = event.target;
    
    if(!clickElement.matches('button')) return;
   
    startGame();

});






// Quiz function
function startGame() {
    //Need to Hide start screen
    
    // Display current question

    
    startTimer();
    
    // Answer Question
    answerQuestion();
        
// Display next question
questionPosition++
displayCurrentQuestion();
}

function answerQuestion(){
    var currentQuestion = questions[questionPosition];
    // Validate Answer, if wrong then subtract from timeCountdown
    questionPosition++
}





    //  Display current question
// HTML Literal will go here for question and answers
function displayCurrentQuestion(){
    questions[questionPosition]
}

// 75 second timer
function startTimer(){
    var timer = setInterval(function() {
        timeCountdown--;
        document.getElementById("timer").textContent = timeCountdown;
        if(timeCountdown <= 0)
        clearInterval(timer);
    }, 1000);
    }