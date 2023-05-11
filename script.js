const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "c",
    },
    {
        question: "What does CSS stands for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheet",
        c: "Cascading Simple Sheets",
        d: "Cars SUVS Sailboats",
        correct: "b",
    },
    {
        question: "What does URL stands for?",
        a: "Uniform Resource Locator",
        b: "Uniform Reserved Locator",
        c: "Unreserved Resource Locator",
        d: "None Of these",
        correct: "a",

    },
    {
        question: "What does HTML stands for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdwon Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Machine Language",
        correct: "a",

    },

];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit');









let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerE1 => {
        if (answerE1.checked) {
            answerE1 = answerE1.id
        }
    })
    return answer
}









