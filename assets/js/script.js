var questions = [
    {
        //use keyWordQuery
    question: 'Select all genres you want to search.',
    options: ['Rock','Jazz','Electro','Techno','Metal','Country','Blues'],
    type: 'queryadd',
    },
    {
        //use keyWordQuery
        question: 'Do you prefer instrumental or vocal?',
        options: ['Instrumental','Vocal','No Preference'],
        type: 'queryadd',
    },
    {
        //use license
        question: 'Licensing',
        options: ['Show all results','Creative Commons','standard YouTube license'],
        type: 'license',
    },
    { //use videoDuration
        question: 'How long of a video would you like to watch?',
        options: ['Short','Medium','Long', 'Any'],
        type: 'duration',
    },
    {// use removeQuery
        question: 'Would you like to exclude anything else?',
        options: ['Covers', 'Mixes'],
        type: 'queryremove',
    }
]
var startBtn = document.querySelector("#startBtn");
var prompts = document.querySelector("#question-container");
var intro = document.querySelector("#intro-page");
var questionsEL= document.querySelector('#question-container');
const subBtn = document.getElementById('submit');
var currentQuestionIndex = 0;
// begins to show the questions
//query words to add
let keyWordQuery=[];
var keyWordString = "";
//query words to remove
let removeQuery = [];
//youtube or creativeCommon
let licenseQuery = "";
//how long of a video do you want to watch?
let durationQuery = "";
var keys = ["AIzaSyB_8l7wRzx1mfcSr-y36PAVZjxL3GImcT4","AIzaSyCYz-_fTaOtm5x6nIcipiwgbGOtKtcWo2o","AIzaSyCWdUZqMxBDLrvaXERbCcn-yB2mFvbN3X0","AIzaSyD241EisKvIVhziOK3DjXpezuHct3CZC2s"];
var resultInfo = [];
var searchId = [];
var ytVideoId = [];
var ytLikeCount = [];
var ytViewCount = [];

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
var iframe1 = document.getElementById("iframe1");
var iframe2 = document.getElementById("iframe2");
var iframe3 = document.getElementById("iframe3");
var iframe4 = document.getElementById("iframe4");
var iframe5 = document.getElementById("iframe5");
// Display settings for Results page
const setResultsPage = () => {
    intro.style.display = "none";
    prompts.style.display = "none";
    lastResults.style.display = "none";
    aboutUs.style.display = "none";
    subBtn.style.display = "none";
    resultPage.style.display = "block";
}
// Checks which keywords have been selected
const checkKeyWord = () => {
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
}
// Checks which license have been selected
const checkLicense = () => {
    licenseQuery = [];
    for (let i = 0; i < questions[2].options.length; i++){
        if (document.getElementById(questions[2].options[i]).checked == true){
            // console.log("+" + questions[2].options[i]);
            licenseQuery.push("+" + questions[2].options[i]);
            // console.log(licenseQuery);
        }
    }
}
// Checks which duration have been selected
const checkDuration = () => {
    durationQuery = [];
    for (let i = 0; i < questions[3].options.length; i++){
        if (document.getElementById(questions[3].options[i]).checked == true){
            if ((document.getElementById(questions[3].options[i]).id == "Short")){
                durationQuery = "short";
            }else if ((document.getElementById(questions[3].options[i]).id == "Medium")){
                durationQuery = "medium";
            }else if ((document.getElementById(questions[3].options[i]).id == "Long")){
                durationQuery = "long";
            }else{
                durationQuery = "any";
            }
        }
    }
}
// Checks which keywords to exclude have been selected
const checkRemove = () => {
    removeQuery = [];
    for (let i = 0; i < questions[4].options.length; i++){
        if (document.getElementById(questions[4].options[i]).checked == true){
            // console.log("-" + questions[4].options[i]);
            removeQuery.push("-" + questions[4].options[i]);
            // console.log(removeQuery);
        }
    }
}
// removes unwanted chars from keyword search string
const setKeyWord = () => {
    keyWordString = JSON.stringify(keyWordQuery)
    .replaceAll(',', '')
    .replaceAll('[', '')
    .replaceAll(']', '')
    .replaceAll('"', '');
}
// Sorts results by views-per-like !asc
const sortVPL = () => {
    resultInfo.sort((a, b) => {
        a.vpl - b.vpl;
      });  
}
// dynamic search url & fetch for the search !!!!q='music -"cardi b" -"ed sheeran"'
const fetchSearch = () => {
    const ytSearch = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='music${keyWordString}'&type=video&videoDuration=${durationQuery}&videoSyndicated=true&key=${keys[2]}`;
    
    alert(ytSearch);
   fetch(ytSearch)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    iframe1.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
    iframe2.src = `https://www.youtube.com/embed/${data.items[1].id.videoId}`; 
    iframe3.src = `https://www.youtube.com/embed/${data.items[2].id.videoId}`; 
    iframe4.src = `https://www.youtube.com/embed/${data.items[3].id.videoId}`; 
    iframe5.src = `https://www.youtube.com/embed/${data.items[4].id.videoId}`;
    searchId.push(data.items[0].id.videoId);
    searchId.push(data.items[1].id.videoId);
    searchId.push(data.items[2].id.videoId);
    searchId.push(data.items[3].id.videoId);
    searchId.push(data.items[4].id.videoId);
    var ytVidStats = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${searchId}&key=${keys[2]}`;
    alert(ytVidStats);
    fetch(ytVidStats)
    .then(response => response.json())
    .then(vidData => {
        // console.log(vidData);
        for (let i = 0; i < vidData.items.length; i++){
            // console.log("Video #" + [i] + "ID: " + vidData.items[i].id);
            // console.log("Video #" + [i] + "Like Count: " + vidData.items[i].statistics.likeCount);
            // console.log("Video #" + [i] + "View Count: " + vidData.items[i].statistics.viewCount);
            var getVPL = Math.round(
                parseInt(vidData.items[i].statistics.viewCount) 
                / 
                parseInt(vidData.items[i].statistics.likeCount));
            var currentResultInfo = [{
                ytVideoId: vidData.items[i].id,
                ytLikeCount: parseInt(vidData.items[i].statistics.likeCount),
                ytViewCount: parseInt(vidData.items[i].statistics.viewCount),
                vpl: getVPL
            }];

            resultInfo.push(currentResultInfo);
            resultInfo.sort((a, b) => {
                a.vpl - b.vpl;
              }); 
            //   console.log(resultInfo);
        }  
        })
    });
}
homeBtn.addEventListener('click', () => {
    showHome();
})
aboutBtn.addEventListener('click', () => {
    showAboutUs();
})
lastResultsBtn.addEventListener('click', () => {
    showLatResults();
})
subBtn.addEventListener('click', () => {
    setResultsPage();
    checkKeyWord();
    checkLicense();
    checkDuration();
    checkRemove();
    setKeyWord();
    fetchSearch();
})
