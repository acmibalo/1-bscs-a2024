// Select elements
const startBtn = document.querySelector('.start-btn button');
const infoBox = document.querySelector('.info-box');
const continueBtn = document.querySelector('.info-box .restart');
const quitBtn = document.querySelector('.info-box .quit');
const quizBox = document.querySelector('.quiz-box');
const timerSec = document.querySelector('.timer-sec');
const header = document.querySelector('.quiz-box header');
const nextBtn = document.querySelector('.next-btn');
const questions = document.querySelectorAll('.quiz-box .question');
const resultBox = document.querySelector('.result-box');
const restartBtn = document.querySelector('.result-box .restart');
const quitQuizBtn = document.querySelector('.result-box .quit');


let timeValue = 15;
let timerInterval;
let currentQuestionIndex = 0;
let correctAnswerCount = 0;


const correctAnswers = [
  "A pilot",
  "A sheep",
  "A small Asteroid",
  "A rose",
  "What is essential is invisible to the eye"
];


const timeLine = document.createElement('div');
timeLine.style.height = '4px';
timeLine.style.width = '100%';
timeLine.style.backgroundColor = '#007bff';
timeLine.style.position = 'absolute';
timeLine.style.bottom = '0';
timeLine.style.left = '0';
timeLine.style.transition = 'width 15s linear';
header.appendChild(timeLine);


startBtn.addEventListener('click', () => {
  infoBox.style.opacity = '1';
  infoBox.style.pointerEvents = 'auto';
  infoBox.style.transform = 'translate(-50%, -50%) scale(1)';
  document.querySelector('.start-btn').style.display = 'none';
});


continueBtn.addEventListener('click', () => {
  infoBox.style.opacity = '0';
  infoBox.style.pointerEvents = 'none';
  infoBox.style.transform = 'translate(-50%, -50%) scale(0.9)';

  quizBox.style.opacity = '1';
  quizBox.style.pointerEvents = 'auto';
  quizBox.style.transform = 'translate(-50%, -50%) scale(1)';
  showQuestion(currentQuestionIndex);
  startTimer();
});


quitBtn.addEventListener('click', resetQuiz);


function resetQuiz() {
  infoBox.style.opacity = '0';
  infoBox.style.pointerEvents = 'none';
  quizBox.style.opacity = '0';
  quizBox.style.pointerEvents = 'none';
  resultBox.style.opacity = '0';
  resultBox.style.pointerEvents = 'none';

  document.querySelector('.start-btn').style.display = 'block';
  currentQuestionIndex = 0;
  correctAnswerCount = 0;
  timeValue = 15;
  timerSec.textContent = timeValue;
  timeLine.style.width = '100%';
}


function startTimer() {
  timeValue = 15;
  timerSec.textContent = timeValue;
  timeLine.style.transition = 'none';
  timeLine.style.width = '100%';
  timeLine.offsetWidth;
  timeLine.style.transition = 'width 15s linear';
  timeLine.style.width = '0%';

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeValue--;
    timerSec.textContent = timeValue;

    if (timeValue < 0) {
      clearInterval(timerInterval);
      timeLine.style.width = '0%';
      handleTimeOut();
    }
  }, 1000);
}


function handleTimeOut() {
  alert('Time is up! Moving to the next question.');
  showNextQuestion();
}


function handleOptionClick(event) {
  const selectedOption = event.currentTarget;
  const isCorrect = selectedOption.textContent.trim() === correctAnswers[currentQuestionIndex].trim();


  const options = questions[currentQuestionIndex].querySelectorAll('.option');
  options.forEach(option => option.removeEventListener('click', handleOptionClick));

  if (isCorrect) {
    selectedOption.style.backgroundColor = "#28a745";
    selectedOption.style.color = "#fff";
    correctAnswerCount++;
  } else {
    selectedOption.style.backgroundColor = "#dc3545";
    selectedOption.style.color = "#fff";
    showCorrectAnswer();
  }

  clearInterval(timerInterval);
  nextBtn.style.display = "block";
}


function showCorrectAnswer() {
  const options = questions[currentQuestionIndex].querySelectorAll('.option');
  options.forEach(option => {
    if (option.textContent.trim() === correctAnswers[currentQuestionIndex].trim()) {
      option.style.backgroundColor = "#28a745";
      option.style.color = "#fff";
    }
  });
}


function showQuestion(index) {

  questions.forEach(question => question.classList.remove('active'));
  questions[index].classList.add('active');
  nextBtn.style.display = "none";


  const options = questions[index].querySelectorAll('.option');
  options.forEach(option => {
    option.style.backgroundColor = "";
    option.style.color = "";
    option.addEventListener('click', handleOptionClick);
  });

  updateQuestionCount(index);
}

function showNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    startTimer();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.style.opacity = '0';
  quizBox.style.pointerEvents = 'none';

  resultBox.style.opacity = '1';
  resultBox.style.pointerEvents = 'auto';
  resultBox.style.transform = 'translate(-50%, -50%) scale(1)';

  const scoreText = resultBox.querySelector('.score-text p');
  scoreText.innerHTML = `${correctAnswerCount} out of ${questions.length}`;
}

nextBtn.addEventListener('click', showNextQuestion);


function updateQuestionCount(index) {
  const totalQueSpan = document.querySelector('.total-que span');
  totalQueSpan.innerHTML = `<p>${index + 1}</p> of <p>${questions.length}</p> Questions`;
}

restartBtn.addEventListener('click', resetQuiz);

showQuestion(currentQuestionIndex);

