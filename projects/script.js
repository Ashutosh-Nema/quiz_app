const quizData = [
    {
        question: "Which city is no 1 in cleaning?",
        a: "Indore",
        b: "Jabalpur",
        c: "Mumbai",
        d: "Delhi",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Makeup Language",
        b: "Hypertext Markup Language",
        c: "Hypertext Web Language",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Name the most popular language?",
        a: "JavaScript",
        b: "Python",
        c: "Java",
        d: "C++",
        correct: "a",
    },
    {
        question: "Which company owns Java?",
        a: "Oracle",
        b: "Apple",
        c: "Samsung",
        d: "None of the above",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
   
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;    
    b_text.innerText = currentQuizData.b;    
    c_text.innerText = currentQuizData.c;    
    d_text.innerText = currentQuizData.d;
}    

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onClick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert("Please select an answer");
    }
});
