// Question section
const questionCont = document.createElement('section');
    questionCont.id = 'questionCont';
// Question P
const questionP = document.createElement('p');
// Question appends
questionCont.append(questionP);
// Answer Section
const answerSection = document.createElement('section');
    answerSection.id = 'answerSection';
    answerSection.classList = 'answer-section';
// answer section list
const answerList = document.createElement('ul');
const aListItem = document.createElement('li');
const bListItem = document.createElement('li');
const cListItem = document.createElement('li');
const dListItem = document.createElement('li');
// appends lists to answer section
answerList.append(aListItem);
answerList.append(bListItem);
answerList.append(cListItem);
answerList.append(dListItem);
answerSection.append(answerList);
// answer input and label
    answerList.classList = 'answer-list';
    answerList.id = 'answerList';
// settings for a
const answerA = document.createElement('input');
    answerA.type = 'radio';
    answerA.name = 'answers';
    answerA.id = 'a';
    const aText = document.createElement('label');
    aText.htmlFor = 'a';
// settings for b
const answerB = document.createElement('input');
    answerB.type = 'radio';
    answerB.name = 'answers';
    answerB.id = 'b';
    const bText = document.createElement('label');
    bText.htmlFor = 'b';
// settings for c
const answerC = document.createElement('input');
    answerC.type = 'radio';
    answerC.id = 'c';
    answerC.name = 'answers';
    const cText = document.createElement('label');
    cText.htmlFor = 'c';
// settings for d
const answerD = document.createElement('input');
    answerD.type = 'radio';
    answerD.id = 'd';
    answerD.name = 'answers';
    const dText = document.createElement('label');
    dText.htmlFor = 'd'; 
// appending answers to answer section
aListItem.append(answerA);
aListItem.append(aText);
bListItem.append(answerB);
bListItem.append(bText);
cListItem.append(answerC);
cListItem.append(cText);
dListItem.append(answerD);
dListItem.append(dText);