//make an array QuizData of questions and options and correct answer
//keep track of each array element array with currentQuiz=0 by index
//get the question header and input from html
//make a function loadQuiz() and make var currentQuizdata=quizData[currentQuiz]
//take the question and render its innertext to currentQuizdata.question
//take the submit btn and add eventListener,just increment the currentQuiz and call loadQuiz() again
const quizData = [
  {
    question: "Which planet in our solar system is known as the Red Planet?",
    a: "Mars",
    b: "Earth",
    c: "Jupiter",
    d: "Pluto",
    correct: "a",
  },
  {
    question: "Who discovered Penicillin?",
    a: "Nicola Tesla",
    b: "Newton",
    c: "Bruno Thomas",
    d: "Alexander Fleming",
    correct: "d",
  },
  {
    question: " What is the name of the largest moon of Saturn?",
    a: "Carme",
    b: "Himalia",
    c: "Callisto",
    d: "Titan",
    correct: "d",
  },
  {
    question: "Which is the smallest bird in the world?",
    a: "Bee Hummingbirds",
    b: "Pegion",
    c: "Owls",
    d: "Bats",
    correct: "a",
  },
];

let currentQuiz = 0;
let score = 0;
const questions = document.querySelector("#header");
const aText = document.querySelector("#aText");
const bText = document.querySelector("#bText");
const cText = document.querySelector("#cText");
const dText = document.querySelector("#dText");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const container = document.querySelector(".container");
const answerClass = document.querySelectorAll(".answers");

loadQuiz();

function loadQuiz() {
  deSelect();
  let currentQuizdata = quizData[currentQuiz]; //contains the whole quiz data with index
  questions.innerText = currentQuizdata.question;
  aText.innerText = currentQuizdata.a;
  bText.innerText = currentQuizdata.b;
  cText.innerText = currentQuizdata.c;
  dText.innerText = currentQuizdata.d;
}
function getSelected() {
  let answerEl = undefined;
  answerClass.forEach((answer) => {
    if (answer.checked) {
      answerEl = answer.id;
    }
  });
  return answerEl;
}

function deSelect() {
  //function to empty the checked box before the new question
  answerClass.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

btn.addEventListener("click", (e) => {
  let answerEl = getSelected();
 
  if (answerEl) {
    if (answerEl === quizData[currentQuiz].correct) {
      score++;
     
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      e.target.remove();
      let complete = document.createElement("h2");
      complete.innerText = `Your score is ${score}/${quizData.length} `;
      container.append(complete);
      if (score < 2) {
        setTimeout(() => {
          let newText = document.createElement("h3");
          newText.innerText = "Better luck next time! 😉";
          container.append(newText);
        }, 1000);
      } else {
        setInterval(claps,1000)
        setTimeout(() => {
          let newText = document.createElement("h3");
          newText.innerText = "Wow! Appreciated 💖";
          container.append(newText);
        }, 1000);
      }
    }
  }
});
btn2.addEventListener("click", () => {
  location.reload(); //function to reload the page
});
function claps(){
  const congrats= document.createElement('div')
  congrats.classList.add('clap')
  congrats.innerText="👏"
  congrats.style.right=Math.random()*100 + 'vw'

  document.body.appendChild(congrats)
}
