// begins to show the questions
var startBtn = document.getElementById("startBtn");
var prompts = document.querySelector(".prompts");
var intro = document.querySelector(".introcontainer");
function showQuestions() {
    // use "block" instead of "inline"! Inline will mess up margin structure. 
    prompts.style.display = "block";
    intro.style.display = "none";
}
questionP.textContent = "This is where the questions will be?"
aText.textContent = "Test A text";
bText.textContent = "Test B text";
cText.textContent = "Test C text";
dText.textContent = "Test D text";
startBtn.addEventListener('click', () => {
    createQuiz();
});

// put into function that will show results page and hide questions
//resultElement.style.display = "block";
//prompts.style.display = "none"; 
