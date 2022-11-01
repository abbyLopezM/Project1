var questions = [
    {
        //use keyWordQuery
    question: 'Select all genres you want to search.',
    options: ['Rock','Jazz','Electro','Techno','Metal','Country', 'Pop', 'Blues'],
    type: 'queryadd',
    },
    {
        //use keyWordQuery
        question: 'Do you prefer instrumental or vocals?',
        options: ['Instrumental','Vocals','No Preference'],
        type: 'queryadd',
    },
    {
        //use license
        question: 'Do you prefer a channel licensed by youtube or Creative Common?',
        options: ['Youtube','Creative Common','No Preference '],
        type: 'license',
    },
    { //use videoDuration
        question: 'How long of a video would you like to watch?',
        options: ['Less than 4min','4min - 20min','Greater than 20 Min', 'Any'],
        type: 'duration',
    },
    {// use removeQuery
        question: 'Would you like to exclude anything else?',
        options: ['covers','blank','blank2'],
        type: 'queryremove',
    }
]
var startBtn = document.querySelector("#startBtn");
var prompts = document.querySelector("#question-container");
var intro = document.querySelector("#intro-page");
var questionsEL= document.querySelector('#question-container');

var currentQuestionIndex = 0;
// begins to show the questions
//query words to add
let keyWordQuery=[];
//query words to remove
let removeQuery = [];
//youtube or creativeCommon
let licenseQuery = [];
//how long of a video do you want to watch?
let durationQuery = [];

function showQuestions() {
    // use "block" instead of "inline"! Inline will mess up margin structure. 
    prompts.style.display = "block";
    intro.style.display = "none";
    questionsEL.innerHTML = '';
    subBtn.style.display = 'block';


    if(currentQuestionIndex>= questions.length){
        var h1Element = document.createElement('h1');
        h1Element.textContent = "All Done! \n\n Here is your new music recommendation";
        questionsEL.append(h1Element);
        return;
    }
    
   for (let index = 0; index < questions.length; index++) {
 
        var currentQuestion = questions[currentQuestionIndex];
        var divQ = document.createElement('div');
        divQ.className='column';
        divQ.textContent = currentQuestion.question;
        console.log(divQ);
        questionsEL.append(divQ);
        if(index>0 && index<4){
            for(var i = 0; i<currentQuestion.options.length; i++){

                console.log('we got in');
                var label = document.createElement('label');
                label.htmlFor = currentQuestion.options[i];
                var radio = document.createElement('input');
                radio.type = "radio";
                radio.class = 'radio';
                radio.name = currentQuestion.type;
                radio.value = currentQuestion.options[i];
                radio.id = currentQuestion.options[i];
                var span = document.createElement('span');
                span.textContent = currentQuestion.options[i];
                questionsEL.appendChild(label);
                label.appendChild(radio);
                label.appendChild(span);
                divQ.appendChild(label);
                radio.style.display="block";
                label.style.display="block";

            }
            console.log('outofloop');
            currentQuestionIndex++;
        }
        else{
            for(var i = 0; i<currentQuestion.options.length; i++){

                console.log('in loop');
                var label = document.createElement('label');
                label.htmlFor = currentQuestion.options[i];
                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.name = currentQuestion.options[i];
                checkbox.value = currentQuestion.options[i];
                checkbox.id = currentQuestion.options[i];
                var span = document.createElement('span');
                span.textContent = currentQuestion.options[i];
                questionsEL.appendChild(label);
                label.appendChild(checkbox);
                label.appendChild(span);
                divQ.appendChild(label);
                checkbox.style.display="block";
                label.style.display="block";
                //checkbox.addEventListener('click', checkAnswer);


            }
            console.log('outofloop');
            currentQuestionIndex++;
        }
    }
}
startBtn.addEventListener('click', () => {
    showQuestions();
});

const showHome = () => {
    location.reload();
}
const showAboutUs = () => {
    intro.style.display = "none";
    prompts.style.display = "none";
    aboutUs.style.display = "block";
    lastResults.style.display = "none";

}
const showLatResults = () => {
    intro.style.display = "none";
    prompts.style.display = "none";
    lastResults.style.display = "block";
    aboutUs.style.display = "none";
}


const homeBtn = document.getElementById('home-nav');
const lastResultsBtn = document.getElementById('lR-nav');
var lastResults = document.querySelector("#prev-results");
const aboutBtn = document.getElementById('about-nav');
var aboutUs = document.querySelector("#aboutus");



homeBtn.addEventListener('click', () => {
    showHome();
})
aboutBtn.addEventListener('click', () => {

    showAboutUs();
})
lastResultsBtn.addEventListener('click', () => {
    showLatResults();
})

const questionCont = document.getElementById('question-container');
const subBtn = document.getElementById('submit');

subBtn.addEventListener('click', () => {
    keyWordQuery=[];
    for (let k = 0; k < questions.length - 3; k++){
        for (let i = 0; i < questions[k].options.length; i++){
            if (document.getElementById(questions[k].options[i]).checked == true){
                console.log(questions[k].options[i]);
                keyWordQuery.push(questions[k].options[i]);
                console.log(keyWordQuery);
            }
        }
    }
    licenseQuery = [];
    for (let i = 0; i < questions[2].options.length; i++){
        if (document.getElementById(questions[2].options[i]).checked == true){
            console.log(questions[2].options[i]);
            licenseQuery.push(questions[2].options[i]);
            console.log(licenseQuery);
        }
    }
    durationQuery = [];
    for (let i = 0; i < questions[3].options.length; i++){
        if (document.getElementById(questions[3].options[i]).checked == true){
            console.log(questions[3].options[i]);
            durationQuery.push(questions[3].options[i]);
            console.log(durationQuery);
        }
    }
    removeQuery = [];
    for (let i = 0; i < questions[4].options.length; i++){
        if (document.getElementById(questions[4].options[i]).checked == true){
            console.log(questions[4].options[i]);
            removeQuery.push(questions[4].options[i]);
            console.log(removeQuery);
        }
    }
})
