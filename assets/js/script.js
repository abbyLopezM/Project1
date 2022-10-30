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
var removeQuery;
//youtube or creativeCommon
var license;
//how long of a video do you want to watch?
var videoDuration;

function showQuestions() {
    // use "block" instead of "inline"! Inline will mess up margin structure. 
    prompts.style.display = "block";
    intro.style.display = "none";
    questionsEL.innerHTML = '';

    if(currentQuestionIndex>= questions.length){
        var h1Element = document.createElement('h1');
        h1Element.textContent = "All Done! \n\n Here is your new music recommendation";
        questionsEL.append(h1Element);
        return;
    }
    
   for (let index = 0; index < questions.length; index++) {
 
        var currentQuestion = questions[currentQuestionIndex]
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

// function checkAnswer(event){
//     console.log(questions[currentQuestionIndex].options)
//     console.log('in check anwer')
//     if(questions[currentQuestionIndex].options == event.target.innerText){
//         keyWordQuery.push(questions[currentQuestionIndex].options);
//         console.log(keyWordQuery);
//     }
//     else{
//         console.log('wrong');
//     }
//     currentQuestionIndex++;
//     showQuestions();
// }
startBtn.addEventListener('click', showQuestions);
//checkbox.addEventListener('click', checkAnswer);

// put into function that will show results page and hide questions
//resultElement.style.display = "block";
//prompts.style.display = "none"; 
