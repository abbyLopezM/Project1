var questions = [
    {
        //use keyWordQuery
    question: 'Select all genres you currently listen to.',
    options: ['Rock','Jazz','Electro','Techno','Metal','Country', 'Pop', 'Blues'],
    type: 'queryadd',
    },
    {
        //use keyWordQuery
        question: 'Do you prefer instrumental or vocals?',
        options: ['Instrumental','Vocals'],
        type: 'queryadd',
    },
    {
        //use license
        question: 'Do you prefer a channel recommended by youtube or Creative Common?',
        options: ['Youtube','Creative Common'],
        type: 'license',
    },
    { //use videoDuration
        question: 'How long of a video would you like to watch?',
        options: ['< 4 Min','> 4 Min','> 20 Min'],
        type: 'length',
    },
    {// use removeQuery
        question: 'What do you not want to watch?',
        options: ['covers','blank','blank'],
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
const keyWordQuery=[];
//query words to remove
const removeQuery = [];
//youtube or creativeCommon
var license;
//how long of a video do you want to watch?
var videoDuration;

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
                radio.name = currentQuestion.options[i];
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


// questionCont.children[i].children[j].children[0].checked

subBtn.addEventListener('click', () => {
    var column=5;
    var options1=8;
    for( var i=0; i<column;i++){
        for (var j=0; j<options1;i++) {
            if (column==0 || column==4) {
                if (questionCont.children[i].children[j].children[0].checked == true){
                    console.log(questionCont.children[i].children[j].children[0].id);
                    // console.log(questionCont.children[1]);
                    // console.log(questionCont.children[1].children[0]);
                    // console.log(questionCont.children[1].children[0].children[0].id);

                }else{
                    console.log('nope');
                }
            }else{
                console.log('no checkboxes')
                return;
            }


            
        }

    }
})


// if(checkbox.checked == true){

// }
