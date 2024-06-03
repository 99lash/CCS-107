const quizData = [
  // HTML Questions
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tag Markup Language"],
    correct: 0
  },
  {
    question: "Who is making the Web standards?",
    choices: ["Mozilla", "Microsoft", "Google", "The World Wide Web Consortium"],
    correct: 3
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    choices: ["<h1>", "<heading>", "<h6>", "<head>"],
    correct: 0
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    choices: ["<br>", "<lb>", "<break>", "<line>"],
    correct: 0
  },
  {
    question: "What is the correct HTML for adding a background color?",
    choices: ["<body bg='yellow'>", "<background>yellow</background>", "<body style='background-color: yellow;'>", "<bgcolor='yellow'>"],
    correct: 2
  },
  {
    question: "Choose the correct HTML element to define important text:",
    choices: ["<b>", "<i>", "<important>", "<strong>"],
    correct: 3
  },
  {
    question: "Choose the correct HTML element to define emphasized text:",
    choices: ["<em>", "<i>", "<italic>", "<strong>"],
    correct: 0
  },
  {
    question: "Which character is used to indicate an end tag?",
    choices: ["<", "*", "/", "^"],
    correct: 2
  },
  {
    question: "How can you make a numbered list?",
    choices: ["<ul>", "<dl>", "<ol>", "<list>"],
    correct: 2
  },
  {
    question: "How can you make a bulleted list?",
    choices: ["<ul>", "<ol>", "<dl>", "<list>"],
    correct: 0
  },

  // CSS Questions
  {
    question: "What does CSS stand for?",
    choices: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correct: 1
  },
  {
    question: "What is the correct syntax for referring to an external style sheet?",
    choices: ["<style src='mystyle.css'>", "<stylesheet>mystyle.css</stylesheet>", "<link rel='stylesheet' type='text/css' href='mystyle.css'>", "<link src='stylesheet' type='text/css' href='mystyle.css'>"],
    correct: 2
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    choices: ["styles", "style", "class", "font"],
    correct: 1
  },
  {
    question: "Which is the correct CSS syntax?",
    choices: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"],
    correct: 2
  },
  {
    question: "How do you insert a comment in a CSS file?",
    choices: ["/* this is a comment */", "// this is a comment", "<!-- this is a comment -->", "' this is a comment"],
    correct: 0
  },
  {
    question: "Which property is used to change the background color?",
    choices: ["color", "bgcolor", "background-color", "bg-color"],
    correct: 2
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    choices: ["h1 {background-color:#FFFFFF;}", "h1.all {background-color:#FFFFFF;}", "all.h1 {background-color:#FFFFFF;}", "h1 {bgcolor:#FFFFFF;}"],
    correct: 0
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    choices: ["fgcolor", "color", "text-color", "font-color"],
    correct: 1
  },
  {
    question: "Which CSS property controls the text size?",
    choices: ["font-size", "text-size", "font-style", "text-style"],
    correct: 0
  },
  {
    question: "How do you display hyperlinks without an underline?",
    choices: ["a {text-decoration:none;}", "a {underline:none;}", "a {text-decoration:no-underline;}", "a {decoration:no-underline;}"],
    correct: 0
  },

  // JavaScript Questions
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<script>", "<javascript>", "<scripting>"],
    correct: 1
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["The <head> section", "The <body> section", "Both the <head> section and the <body> section are correct", "The <footer> section"],
    correct: 2
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
    correct: 2
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["msgBox('Hello World');", "alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');"],
    correct: 1
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"],
    correct: 0
  },
  {
    question: "How do you call a function named 'myFunction'?",
    choices: ["call myFunction()", "call function myFunction()", "myFunction()", "myFunction.call()"],
    correct: 2
  },
  {
    question: "How to write an IF statement in JavaScript?",
    choices: ["if i == 5 then", "if i = 5 then", "if (i == 5)", "if (i = 5)"],
    correct: 2
  },
  {
    question: "How does a WHILE loop start?",
    choices: ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)", "while (i < 10; i++)"],
    correct: 2
  },
  {
    question: "How can you add a comment in JavaScript?",
    choices: ["'This is a comment", "<!-- This is a comment -->", "// This is a comment", "/* This is a comment */"],
    correct: 2
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    choices: ["var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
    correct: 1
  }
];

let currentQuestionIndex = 0;
let skippedQuestions = [];
let answers = [];
let timer;
let timerDuration = 60;
let selectedQuestions = [];

let selectionPage = document.getElementById('selection-page');
let quizPage = document.getElementById('quiz-page');
let resultPage = document.getElementById('result-page');

//to prevent rendering the choices into html element 
// function escapeHTML(str) {
//   return str.replace(/[&<>"']/g, function (match) {
//     const escapeMap = {
//       '&': '&amp;',
//       '<': '&lt;',
//       '>': '&gt;',
//       '"': '&quot;',
//       "'": '&#39;'
//     };
//     return escapeMap[match];
//   });
// }

function escapeHTML(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function startQuiz(numQuestions) {
  // if the user has already submitted the quiz, this will redirect them to results page
  if (localStorage.getItem('quizSubmitted')) {
    selectionPage.classList.remove('active');
    selectionPage.style.display = 'none';
    resultPage.classList.add('active');
    resultPage.style.display = 'block';
    const score = localStorage.getItem('quizScore');
    document.getElementById('result').textContent = `You scored ${score}%`;
    return;
  }

  selectedQuestions = quizData.slice(0, numQuestions);
  currentQuestionIndex = 0;
  skippedQuestions = [];
  answers = Array(selectedQuestions.length).fill(null);
  selectionPage.classList.remove('active');
  selectionPage.style.display = 'none';
  quizPage.classList.add('active');
  quizPage.style.display = 'block';
  displayQuestion();
  startTimer();

  return numQuestions.length;
}

//displays the questions and its choices
function displayQuestion() {
  const questionData = selectedQuestions[currentQuestionIndex];
  document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}`;
  document.querySelector('.question').innerHTML = escapeHTML(questionData.question);
  questionData.choices.forEach((choice, index) => {
    document.getElementById(`choice-${index}`).checked = answers[currentQuestionIndex] === index;
    document.querySelector(`label[for="choice-${index}"]`).innerHTML = escapeHTML(choice);
  });
} 

//events handler
// document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('prev-button').addEventListener('click', prevQuestion);
document.getElementById('next-button').addEventListener('click', nextQuestion);
document.getElementById('submit-button').addEventListener('click', finishQuiz);
document.getElementById('retry-button').addEventListener('click', retryQuiz);
document.getElementById('retake-button').addEventListener('click', retakeQuiz);

function prevQuestion() {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}


function nextQuestion() {
  saveAnswer();
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    goToSkippedOrFinish();
  }
}

function goToSkippedOrFinish() {
  if (skippedQuestions.length > 0) {
    currentQuestionIndex = skippedQuestions.shift();
    displayQuestion();
  } else {
    finishQuiz();
  }
  console.log(skippedQuestions.length);
}

//get the user's answer
function saveAnswer() {
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (selectedChoice) {
    answers[currentQuestionIndex] = parseInt(selectedChoice.value);
  }
}

//timer
function startTimer() {
  timerDuration = 600;
  const timerElement = document.getElementById('timer');
  displayTime(timerElement, timerDuration);

  timer = setInterval(() => {
    timerDuration--;
    displayTime(timerElement, timerDuration);
    if (timerDuration <= 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

function displayTime(element, duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  element.textContent = `Remaining Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

//finish up the quiz
function finishQuiz() {
  clearInterval(timer);
  const correctAnswers = answers.reduce((acc, answer, index) => {
    return acc + (answer === selectedQuestions[index].correct ? 1 : 0);
  }, 0);
  const score = Math.round((correctAnswers / selectedQuestions.length) * 100);
  localStorage.setItem('quizScore', score);
  localStorage.setItem('quizSubmitted', true);

  quizPage.classList.remove('active');
  resultPage.classList.add('active');
  quizPage.style.display = 'none';
  resultPage.style.display = 'block';
  document.getElementById('result').textContent = `You scored ${score}%`;
  // document.getElementById('result').textContent = `You scored: ${correctAnswers} out of ${selectedQuestions.length} Percentage Score: ${score}%`;
}

//retry the quiz
function retryQuiz() {
  resultPage.classList.remove('active');
  selectionPage.classList.add('active');
  resultPage.style.display = 'none';
  selectionPage.style.display = 'block';
}

//retake the quiz
function retakeQuiz() {
  resultPage.classList.remove('active');
  quizPage.classList.add('active');
  resultPage.style.display = 'none';
  quizPage.style.display = 'block';
  localStorage.removeItem('quizScore');
  localStorage.removeItem('quizSubmitted');
  startQuiz(selectedQuestions.length);
}