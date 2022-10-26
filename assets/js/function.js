const createQuiz = () => {
    mainCont.append(answerSection);
    mainCont.insertBefore(answerSection, introCont);
    mainCont.append(questionCont);
    mainCont.insertBefore(questionCont, answerSection);
    introCont.remove();
    }