// put into function that will show results page and hide questions
//resultElement.style.display = "block";
//prompts.style.display = "none"; 
function showQuestions() {
    // use "block" instead of "inline"! Inline will mess up margin structure. 
    prompts.style.display = "block";
    intro.style.display = "none";
}
// Appends elements to active page
const createQuiz = () => {
    mainCont.append(nextCont);
    mainCont.insertBefore(nextCont, introCont);
    mainCont.append(answerSection);
    mainCont.insertBefore(answerSection, nextCont);
    mainCont.append(questionCont);
    mainCont.insertBefore(questionCont, answerSection);
    introCont.remove();
}
// Gets question and answer selections from an array of objects
const quizStart = () => {
    questionP.textContent = questions[numQuestion].question;
    aText.textContent = questions[numQuestion].a;
    bText.textContent = questions[numQuestion].b;
    cText.textContent = questions[numQuestion].c;
    dText.textContent = questions[numQuestion].d;
}
// Unchecks all boxes after first question
const uncheckNext = () => {
    for (let i = 0; i < 4; i++){
        answerList.children[i].children[0].checked = false;
    }
}