const introText = document.getElementById('intro-text');
const introCont = document.getElementById('intro-page');
const mainCont = document.getElementById('main-container');
var startBtn = document.getElementById("startBtn");
var prompts = document.querySelector(".prompts");
var intro = document.querySelector(".introcontainer");

const questions = [
    {
        question: 'FIRST_QUESTION This is where the test questions will be ',
        a: 'FIRST_QUESTION Selection 1',
        b: 'FIRST_QUESTION Selection 2',
        c: 'FIRST_QUESTION Selection 3', 
        d: 'FIRST_QUESTION Selection 4'
    },
    {
        question: 'SECOND_QUESTION This is where the test questions will be ',
        a: 'SECOND_QUESTION Selection 1',
        b: 'SECOND_QUESTION Selection 2',
        c: 'SECOND_QUESTION Selection 3',
        d: 'SECOND_QUESTION Selection 4'
    },
    {
        question: 'THIRD_QUESTION This is where the test questions will be ',
        a: 'THIRD_QUESTION Selection 1',
        b: 'THIRD_QUESTION Selection 2',
        c: 'THIRD_QUESTION Selection 3',
        d: 'THIRD_QUESTION Selection 4'
    },
    {
        question: 'FOURTH_QUESTION This is where the test questions will be ',
        a: 'FOURTH_QUESTION Selection 1',
        b: 'FOURTH_QUESTION Selection 2',
        c: 'FOURTH_QUESTION Selection 3',
        d: 'FOURTH_QUESTION Selection 4'
    },
    {
        question: 'FIFTH_QUESTION This is where the test questions will be ',
        a: 'FIFTH_QUESTION Selection 1',
        b: 'FIFTH_QUESTION Selection 2',
        c: 'FIFTH_QUESTION Selection 3',
        d: 'FIFTH_QUESTION Selection 4'
    },
    {
        question: 'SIXTH_QUESTION This is where the test questions will be ',
        a: 'SIXTH_QUESTION Selection 1',
        b: 'SIXTH_QUESTION Selection 2',
        c: 'SIXTH_QUESTION Selection 3',
        d: 'SIXTH_QUESTION Selection 4'
    }
]

let numQuestion = 0;