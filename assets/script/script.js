// Question and Answer Array
var javaQuestions = [
   //Initial object structure
    {
        question: "",
        answers:{
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correctAnswer: ""
    },

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