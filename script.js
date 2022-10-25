var startBtn = document.getElementById("startBtn");
var prompts = document.querySelector("prompts");
var intro = document.querySelector("introcontainer");

function showQuestions() {
    prompts.style.display = "inline";
    intro.style.display = "none";
}
startBtn.addEventListener('click', showQuestions);
