// begins to show the questions
startBtn.addEventListener('click', () => {
    createQuiz();
    quizStart();
});
nextBtn.addEventListener('click', () => {
    numQuestion++;
    uncheckNext();
    quizStart();
    if (numQuestion == questions.length - 1){
        nextBtn.value = "Finish";
    }
})