const $ = document;
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question:
      "Which Python keyword indicates the start of a function definition?",
    a: "sweet",
    b: "def",
    c: "continue",
    d: "help",
    correct: "b",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<script>",
    c: "<scripting>",
    d: "<js>",
    correct: "b",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "body section",
    b: "both of body and header",
    c: "header",
    d: "footer",
    correct: "a",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script name='xxx.js'>",
    b: "<script src='xxx.jsc'>",
    c: "<script href='xxx.js'>",
    d: "<script src='xxx.js'>",
    correct: "d",
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    a: "true",
    b: "false",
    c: "true in body",
    d: "false in body",
    correct: "b",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "msgBox('Hello World')",
    b: "alert('Hello World')",
    c: "alertBox('Hello World')",
    d: "msg('Hello World')",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
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

                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});