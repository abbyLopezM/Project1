var questions = [
    {
        //use keyWordQuery
    question: 'Select all genres you want to search.',
    options: ['Rock','Jazz','Electro','Techno','Metal','Country','Blues'],
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
        options: ['youtube','creativeCommon','All'],
        type: 'license',
    },
    { //use videoDuration
        question: 'How long of a video would you like to watch?',
        options: ['Short','Medium','Long', 'Any'],
        type: 'duration',
    },
    {// use removeQuery
        question: 'Would you like to exclude anything else?',
        options: ['covers'],
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
        // console.log(divQ);
        questionsEL.append(divQ);
        if(index>0 && index<4){
            for(var i = 0; i<currentQuestion.options.length; i++){

                // console.log('we got in');
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
            // console.log('outofloop');
            currentQuestionIndex++;
        }
        else{
            for(var i = 0; i<currentQuestion.options.length; i++){

                // console.log('in loop');
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
            // console.log('outofloop');
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
    resultPage.style.display ="none";

}
const showLatResults = () => {
    intro.style.display = "none";
    prompts.style.display = "none";
    lastResults.style.display = "block";
    aboutUs.style.display = "none";
    resultPage.style.display ="none";

    //local storage will go here since it is the prev results
}


const homeBtn = document.getElementById('home-nav');
const lastResultsBtn = document.getElementById('lR-nav');
var lastResults = document.querySelector("#prev-results");
const aboutBtn = document.getElementById('about-nav');
var aboutUs = document.querySelector("#aboutus");
var resultPage = document.querySelector("#results-container");

const frameCont = document.createElement('div');
var iframe1 = document.createElement("iframe");
var iframe2 = document.createElement("iframe");
var iframe3 = document.createElement("iframe");
var iframe4 = document.createElement("iframe");
var iframe5 = document.createElement("iframe");



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
    intro.style.display = "none";
    prompts.style.display = "none";
    lastResults.style.display = "none";
    aboutUs.style.display = "none";
    subBtn.style.display = "none";
    resultPage.style.display = "block";
    iframe1.remove();
    iframe2.remove();
    iframe3.remove();
    iframe4.remove();
    iframe5.remove();
    keyWordQuery=[];
    for (let k = 0; k < questions.length - 3; k++){
        for (let i = 0; i < questions[k].options.length; i++){
            if (document.getElementById(questions[k].options[i]).checked == true){
                // console.log("+" + questions[k].options[i]);
                keyWordQuery.push("+" + questions[k].options[i]);
                // console.log(keyWordQuery);
            }
        }
    }
    licenseQuery = [];
    for (let i = 0; i < questions[2].options.length; i++){
        if (document.getElementById(questions[2].options[i]).checked == true){
            // console.log("+" + questions[2].options[i]);
            licenseQuery.push("+" + questions[2].options[i]);
            // console.log(licenseQuery);
        }
    }
    durationQuery = [];
    for (let i = 0; i < questions[3].options.length; i++){
        if (document.getElementById(questions[3].options[i]).checked == true){
            if ((document.getElementById(questions[3].options[i]).id == "Short")){
                durationQuery.push("+short");
            }else if ((document.getElementById(questions[3].options[i]).id == "Medium")){
                durationQuery.push("+medium");
            }else if ((document.getElementById(questions[3].options[i]).id == "Long")){
                durationQuery.push("+long");
            }else{
                durationQuery.push("any");
            }
            // console.log(questions[3].options[i]);
            // durationQuery.push("+" + questions[3].options[i]);
            // console.log(durationQuery);
        }
    }
    removeQuery = [];
    for (let i = 0; i < questions[4].options.length; i++){
        if (document.getElementById(questions[4].options[i]).checked == true){
            // console.log("-" + questions[4].options[i]);
            removeQuery.push("-" + questions[4].options[i]);
            // console.log(removeQuery);
        }
    }

    
    // const setKeyWords = () => {
    //     console.log(keyWordQuery[0]);
    // }

    // setKeyWords();

    console.log("JSON.REPLACE ALL of Query: " + JSON.stringify(keyWordQuery).replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('"', ''));
    var keyWordString = JSON.stringify(keyWordQuery).replaceAll(',', '').replaceAll('[', '').replaceAll(']', '').replaceAll('"', '');
    console.log("Check: " + keyWordString);
    // console.log("Query: " + keyWordQuery);
    // console.log("String: " + keyWordString);
    // console.log("Query JSON.REPLACEALL: " + JSON.stringify(keyWordQuery).replaceAll(',', ''));

    const ytSearch = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='music${keyWordString}'&type=video&videoDuration=medium&videoSyndicated=true&order=viewCount&key=AIzaSyB_8l7wRzx1mfcSr-y36PAVZjxL3GImcT4`;

//    fetch(ytSearch)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     frameCont.id = 'frame-cont';
//     iframe1.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
//     iframe2.src = `https://www.youtube.com/embed/${data.items[1].id.videoId}`; 
//     iframe3.src = `https://www.youtube.com/embed/${data.items[2].id.videoId}`; 
//     iframe4.src = `https://www.youtube.com/embed/${data.items[3].id.videoId}`; 
//     iframe5.src = `https://www.youtube.com/embed/${data.items[4].id.videoId}`;
//     iframe1.classList="Videos";
//     iframe2.classList="Videos";
//     iframe3.classList="Videos";
//     iframe4.classList="Videos";
//     iframe5.classList="Videos";
//     frameCont.append(iframe1);
//     frameCont.append(iframe2);
//     frameCont.append(iframe3);
//     frameCont.append(iframe4);
//     frameCont.append(iframe5);
//     resultPage.append(frameCont);
// });
})
