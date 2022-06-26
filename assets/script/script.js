// 10 Questions and  4 Answer Array w correct answers
var javaQuestions = [
   //Initial object structure
    {
        question: "Javascript is an _______ language?",
        answers:{
            a: "Object-Oriented",
            b: "Object-Based",
            c: "Procedural",
            d: "None of the Above"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers:{
            a: "var",
            b: "let",
            c: "Both A and B",
            d: "None of the Above"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers:{
            a: "getElementById()",
            b: "getElementsbyClassName()",
            c: "Both A and B",
            d: "None of the Above"
        },
        correctAnswer: "c"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers:{
            a: "Throws and error",
            b: "Ignores the statements",
            c: "Gives a warning",
            d: "None of the Above"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers:{
            a: "document.write()",
            b: "console.log()",
            c: "window.alert()",
            d: "All of the Above"
        },
        correctAnswer: "d"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answers:{
            a: "const",
            b: "var",
            c: "let",
            d: "constant"
        },
        correctAnswer: "a"
    },
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        answers:{
            a: "Boolean",
            b: "Undefined",
            c: "Object",
            d: "Integer"
        },
        correctAnswer: "c"
    },
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answers:{
            a: "Both the datatype and the result of the expression are compared",
            b: "Only the datatype  of the expression is compared.",
            c: "Only the value of the expression is compared.",
            d: "None of the Above"
        },
        correctAnswer: "a"
    },
    {
        question: "What does the Javascript “debugger” statement do?",
        answers:{
            a: "It will debug all the errors in the program at runtime",
            b: "It acts as a breakpoint in a program.",
            c: "It will debug error in the current statement if any.",
            d: "All of the Above"
        },
        correctAnswer: "b"
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        answers:{
            a: "in",
            b: "is in",
            c: "exists",
            d: "lies"
        },
        correctAnswer: "a"
    }
];

// 90 second timer
var timeCountdown = 90;
var timer = setInterval(function() {
    timeCountdown--;
    document.getElementById("timer").textContent = timeCountdown;
    if(timeCountdown <= 0)
    clearInterval(timer);
}, 1000);






// Quiz function
function quizElement() {


}