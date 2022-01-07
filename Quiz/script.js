// question list with answer key
const qlist = [
    {
        question: 'How long is an olympic swimming pool?',
        a: '100mts',
        b: '50mts',
        c: '75 feet',
        d: '50 feet',
        correct: 'b'
    },

    {
        question: 'What geometric shape is generally used for stop signs?',
        a: 'Pentagon',
        b: 'Triangle',
        c: 'Octagon',
        d: 'Square',
        correct: 'c'
    },

    {
        question: 'How many countries still have the shilling as currency?',
        a: '5',
        b: '7',
        c: '8',
        d: '4',
        correct: 'd'
    },

    {
        question: 'What is the rarest M&M color?',
        a: 'Brown',
        b: 'Orange',
        c: 'Blue',
        d: 'Green',
        correct: 'a'
    },

    {
        question: 'Which is the only edible food that never goes bad?',
        a: 'Sugar',
        b: 'Honey',
        c: 'Marmalade',
        d: 'Salt',
        correct: 'b'
    },
];

// accessing all elements
var quiz = document.querySelector(".card")
var qno = document.querySelector(".card-header")
var QuestionEl = document.querySelector(".card-title")
var answerlist = document.querySelectorAll(".answer")
var a_text = document.getElementById("a_text")
var b_text = document.getElementById("b_text")
var c_text = document.getElementById("c_text")
var d_text = document.getElementById("d_text")
var submitbtn = document.getElementById("submit")
var options = document.querySelector(".card-text")
var header = document.querySelector(".card-header")
var body = document.querySelector(".card-body")
var progress_bar = document.querySelector(".progress")

// set int counters
let score = 0
let current_question = 0
let progress = 0

loadquiz()

function loadquiz(){
    uncheck()
    progress+=20
    const currentdata = qlist[current_question]
    header.innerText = `Question ${current_question+1} of ${qlist.length}`
    QuestionEl.innerHTML = `<b>${currentdata.question}</b>`
    a_text.innerText = currentdata.a
    b_text.innerText = currentdata.b
    c_text.innerText = currentdata.c
    d_text.innerText = currentdata.d
    progress_bar.innerHTML = `
    <div class="progress-bar  bg-info" role="progressbar" style="width: ${progress}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    `
}

/// load the first question onto the screen


// uncheck all answers
function uncheck(){
    answerlist.forEach((answer) =>{
        answer.checked = false
    })
}

function select(){
    var answer_selected
    answerlist.forEach(answer =>{
        if(answer.checked === true){
            answer_selected = answer.id
        }
    })
    return answer_selected
}

submitbtn.addEventListener('click', ()=>{
    const answer = select()

    if(answer === qlist[current_question].correct){
        score++
    }

    current_question++

    if(current_question<qlist.length){
        loadquiz()
    }

    else{
        body.innerHTML = `
        <h5 class="card-title text-center my-5"><b>You answered ${score}/${qlist.length} questions correctly</b></h5>
        <a href="#" class="btn btn-primary w-100 mt-5" onclick="location.reload()">Reload</a>
        `
    }
})