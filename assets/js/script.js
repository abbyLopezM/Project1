// begins to show the questions
var startBtn = document.getElementById("startBtn");
var prompts = document.querySelector(".prompts");
var intro = document.querySelector(".introcontainer");
function showQuestions() {
    // use "block" instead of "inline"! Inline will mess up margin structure. 
    prompts.style.display = "block";
    intro.style.display = "none";
}
startBtn.addEventListener('click', showQuestions);

// put into function that will show results page and hide questions
//resultElement.style.display = "block";
//prompts.style.display = "none"; 
