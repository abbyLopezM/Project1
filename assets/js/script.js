var questions = [
    {
        //use keyWordQuery
    question: 'Select all genres you want to search.',
    options: ['Rock','Jazz','Electronic','Hip+hop','Metal','Country','Folk'],
    type: 'queryadd'
    },
    {
        //use keyWordQuery
        question: 'Do you prefer instrumental or vocal?',
        options: ['Instrumental','Vocal','No Preference'],
        type: 'queryadd'
    },
    {
        //use license
        question: 'Licensing',
        options: ['Show all results','Creative Commons','standard YouTube license'],
        type: 'license'
    },
    { //use videoDuration
        question: 'How long of a video would you like to watch?',
        options: ['Short','Medium','Long', 'Any'],
        type: 'duration'
    },
    {// use removeQuery
        question: 'Would you like to exclude anything else?',
        options: ['Covers'],
        type: 'queryremove'
    }
]
var startBtn = document.querySelector("#startBtn");
var prompts = document.querySelector("#question-container");
var intro = document.querySelector("#intro-page");
var questionsEL= document.querySelector('#question-container');
const subBtn = document.getElementById('submit');
const homeBtn = document.getElementById('home-nav');
const lastResultsBtn = document.getElementById('lR-nav');
var lastResults = document.querySelector("#prev-results");
const aboutBtn = document.getElementById('about-nav');
var aboutUs = document.querySelector("#aboutus");
var resultPage = document.querySelector("#results-container");
var lastResultsSpan=document.querySelector("#lastResults");
var lastResultList=document.querySelector("#resultsList");
const frameCont = document.createElement('div');
var iframe1 = document.getElementById("iframe1");
var iframe2 = document.getElementById("iframe2");
var iframe3 = document.getElementById("iframe3");
var iframe4 = document.getElementById("iframe4");
var iframe5 = document.getElementById("iframe5");

var currentQuestionIndex = 0;
//query words to add
let keyWordQuery=[];
let lastWordQuery=[];
var keyWordString = "";
var lastWordQueryString = "";
//query words to remove
let removeQuery = [];
let lastremoveQuery = [];
//youtube or creativeCommon
let licenseQuery = "";
let lastlicenseQuery = "";
//how long of a video do you want to watch?
let durationQuery = "";
let lastdurationQuery = "";

var keys = ["AIzaSyB_8l7wRzx1mfcSr-y36PAVZjxL3GImcT4","AIzaSyCYz-_fTaOtm5x6nIcipiwgbGOtKtcWo2o","AIzaSyCWdUZqMxBDLrvaXERbCcn-yB2mFvbN3X0","AIzaSyD241EisKvIVhziOK3DjXpezuHct3CZC2s"];
const giphyKey = 'jSzPrGaq3wjPRqIsPW9WXmVUSKpUIwt3';

// Giphy API
const homeGIF = document.getElementById('home-gif');
const getGiphy = () => {
    const keyWordLength = questions[0].options.length;
    const randomGifWord = questions[0].options[Math.floor(Math.random() * keyWordLength)];
    // const randomKeyLength = Math.floor(Math.random() * keyWordLength);
    let giphySearch = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${randomGifWord}+music&limit=25&offset=0&rating=r&lang=en`;
    fetch(giphySearch)
    .then(response => response.json())
    .then(gifData =>{
        console.log(gifData);
        homeGIF.src = gifData.data[Math.floor(Math.random() * 25)].images.fixed_height.url;
    })
}
getGiphy();
function showQuestions() {
    // use "block" instead of "inline"! Inline will mess up margin structure. 
    prompts.style.display = "block";
    intro.style.display = "none";
    questionsEL.innerHTML = '';
    subBtn.style.display = 'block';

    // if(currentQuestionIndex>= questions.length){
    //     var h1Element = document.createElement('h1');
    //     h1Element.textContent = "All Done! \n\n Here is your new music recommendation";
    //     questionsEL.append(h1Element);
    //     return;
    // }
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
    getGiphy();
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

    var prevQuery = localStorage.getItem('lastQuery');
    var firstVideo =localStorage.getItem('lrVid1');
    var scndVideo =localStorage.getItem('lrVid2');
    var thirdVideo =localStorage.getItem('lrVid3');
    var fourthVideo =localStorage.getItem('lrVid4');
    var fifthVideo =localStorage.getItem('lrVid5');
    var duration =localStorage.getItem('lastDuration');
    var license =localStorage.getItem('lastLicense');
    var removeQ =localStorage.getItem('removeQ');

    var vid1=document.createElement('iframe');
    var vid2=document.createElement('iframe');
    var vid3=document.createElement('iframe');
    var vid4=document.createElement('iframe');
    var vid5=document.createElement('iframe');
    var division=document.createElement('div');
    var listGenre=document.createElement('li');
    var listDuration=document.createElement('li');
    var listLicense=document.createElement('li');
    var listRemove=document.createElement('li');

    lastResultList.appendChild(listGenre);
    listGenre.textContent=("Genre and Video Type: "+ prevQuery);
    lastResultList.appendChild(listDuration);
    listDuration.textContent=("Duration of Video: "+ duration);
    lastResultList.appendChild(listLicense);
    listLicense.textContent=("License type: "+license);
    lastResultList.appendChild(listRemove);
    listRemove.textContent=("Remove: "+removeQ);
    division.classList.add("Videos");
    lastResultsSpan.appendChild(division);
    division.appendChild(vid1);
    vid1.src=firstVideo;
    division.appendChild(vid2);
    vid2.src=scndVideo;
    division.appendChild(vid3);
    vid3.src=thirdVideo;
    division.appendChild(vid4);
    vid4.src=fourthVideo;
    division.appendChild(vid5);
    vid5.src=fifthVideo;
}
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
    lastWordQuery=[];
    for (let k = 0; k < questions.length - 3; k++){
        for (let i = 0; i < questions[k].options.length; i++){
            if (document.getElementById(questions[k].options[i]).checked == true){
                if (k == 1 || i == 3){
                    console.log("no pref out")
                }else{
                    keyWordQuery.push("+" + questions[k].options[i]);
                    lastWordQuery.push(questions[k].options[i]);
                }   
            }
        }
    }
}
// Checks which license have been selected
const checkLicense = () => {
    licenseQuery = [];
    lastlicenseQuery = [];

    for (let i = 0; i < questions[2].options.length; i++){
        if (document.getElementById(questions[2].options[i]).checked == true){
            // console.log("+" + questions[2].options[i]);
            licenseQuery.push("+" + questions[2].options[i]);
            lastlicenseQuery = licenseQuery;
            localStorage.setItem("lastLicense",lastlicenseQuery);

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
                lastdurationQuery = "long";
            }else{
                durationQuery = "any";
            }
        }
        localStorage.setItem("lastDuration",durationQuery);
    }
}
// Checks which keywords to exclude have been selected
const checkRemove = () => {
    removeQuery = ['-"What+your"','-"interview"','-"epic"','-"extreme"','-"top"','-"audition"','-"mojo"','-"TikTok"','-"?"'];
    lastremoveQuery = [];

    for (let i = 0; i < questions[4].options.length; i++){
        if (document.getElementById(questions[4].options[i]).checked == true){
            removeQuery.push(`-"${questions[4].options[i]}"`);
            lastremoveQuery = removeQuery;
            localStorage.setItem("removeQ",lastremoveQuery);
            console.log(removeQuery);
            console.log(JSON.stringify(removeQuery));
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
const setlastWordQuery = () => {
    lastWordQueryString = JSON.stringify(lastWordQuery)
    .replaceAll(',', ', ')
    .replaceAll('[', '')
    .replaceAll(']', '')
    .replaceAll('"', '');
    localStorage.setItem("lastQuery",lastWordQueryString);
}
// YouTube API 
const fetchSearch = () => {
    const searchAmnt = 50;
    const ytSearch = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q='music${keyWordString}&type=video&videoDuration=${durationQuery}&videoSyndicated=true&key=${keys[2]}`;

    
   fetch(ytSearch)
  .then(response => response.json())
  .then(data => {
    var searchId = [];
    for (let i = 0; i < searchAmnt; i++){
        searchId.push(data.items[i].id.videoId);
    }
    var ytVidStats = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${searchId}&key=${keys[2]}`;
    fetch(ytVidStats)
    .then(response => response.json())
    .then(vidData => {
        let resultInfo = [];
        let minViews = 999;
            for (let i = 0; i < vidData.items.length; i++){
                if (vidData.items[i].statistics.viewCount > minViews){
                    let getVPL = Math.round(
                        parseInt(vidData.items[i].statistics.viewCount) 
                        / 
                        parseInt(vidData.items[i].statistics.likeCount));
                    let currentResultInfo = {
                        ytVideoId: vidData.items[i].id,
                        ytLikeCount: parseInt(vidData.items[i].statistics.likeCount),
                        ytViewCount: parseInt(vidData.items[i].statistics.viewCount),
                        vpl: getVPL
                    };
                resultInfo.push(currentResultInfo);
                }else{
                    let getVPL = Number.MAX_SAFE_INTEGER;
                    let currentResultInfo = {
                        ytVideoId: vidData.items[i].id,
                        ytLikeCount: parseInt(vidData.items[i].statistics.likeCount),
                        ytViewCount: parseInt(vidData.items[i].statistics.viewCount),
                        vpl: getVPL
                    };
                resultInfo.push(currentResultInfo);
                }
            }
        //Sorts by vpl asc.
        resultInfo.sort((a, b) => {
            return a.vpl - b.vpl;
          }); 
        //Gets the top 5 vpl videos    
        iframe1.src = `https://www.youtube.com/embed/${resultInfo[0].ytVideoId}`;
        iframe2.src = `https://www.youtube.com/embed/${resultInfo[1].ytVideoId}`; 
        iframe3.src = `https://www.youtube.com/embed/${resultInfo[2].ytVideoId}`; 
        iframe4.src = `https://www.youtube.com/embed/${resultInfo[3].ytVideoId}`; 
        iframe5.src = `https://www.youtube.com/embed/${resultInfo[4].ytVideoId}`;
        //Save top 5 to localstorage
        localStorage.setItem("lrVid1",iframe1.src);
        localStorage.setItem("lrVid2",iframe2.src);
        localStorage.setItem("lrVid3",iframe3.src);
        localStorage.setItem("lrVid4",iframe4.src);
        localStorage.setItem("lrVid5",iframe5.src);
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
    setlastWordQuery();
    fetchSearch();
})

