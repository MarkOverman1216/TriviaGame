var triviaQuestions = [
  {
    question: "what was the name of the Krusty Krab before Mr.Krabs bought it?",
    answers: [
      "Rusty Krab",
      "Rusty Scab",
      "Krusty Scab",
      "Krabby Krab"
    ],
    theAnswer: "Rusty Krab"
  },
  {
    question: "After 12 years, Bubble Bass made an appearance in which episode?",
    answers: [
      "Plankton's Good Eye",
      "You Don't Know Sponge",
      "Pickles",
      "Blackjack"
    ],
    theAnswer: "Plankton's Good Eye"
  },
  {
    question: "In the episode 'Ripped Pants', which one was not a loser on the beach?",
    answers: [
      "Buried in the sand and forgotten",
      "Sand in my buns",
      "Melted ice cream cones",
      "Forgot to put on sunscreen"
    ],
    theAnswer: "Melted ice cream cones"
  },
  {
    question: "In the episode 'Sun bleached', what was the name of the guy everyone wanted to be like?",
    answers: [
      "Greg Mammalton",
      "Patrick Starr",
      "Jack kahuna Lagoona",
      "Craig Mammalton"
    ],
    theAnswer: "Craig Mammalton"
  },
  {
    question: "In the episode 'Krabby Road', what was the name of Spongebob's band?"
      answers: [

    ],
    theAnswer:
  },
  {
    question:
      answers: [

    ],
    theAnswer:
  },
  {
    question:
      answers: [

    ],
    theAnswer:
  }
]
var progress = 15;
var correctAnswers = 0;
var incorrectAnswers = 0;
var currentQuestion = 0;
var timer;
var selectedAnswer = null;
$("#secondsRemaining").text(progress);

$("#start").on('click', function () {
  $("#start").attr('class', 'button')
  $("#start").attr('disabled', 'disabled')
  currentQuestion = 0;
  incorrectAnswers = 0;
  correctAnswers = 0;
  progress = 15;
  $("#secondsRemaining").text(progress);
  $(".question").empty().append('<h4 id="question"></h4><div id="answers"></div>')
  loadNextQuestion();
  startTimer();
})


function startTimer() {
  timer = setInterval(() => {
    if (progress === 0) {
      stopTimer()
    } else {
      progress--
      $("#secondsRemaining").text(progress);
    }
  }, 1000);
}

function loadNextQuestion() {
  selectedAnswer = null;
  $("#question").empty();
  $("#answers").empty();
  $("#question").text(triviaQuestions[currentQuestion].question)
  triviaQuestions[currentQuestion].answers.forEach((option, index) => {
    newOption = $(`<button class="button">${option}</button>`);
    newOption.attr('answerNum', index);
    $("#answers").append(newOption);
    newOption.on('click', function () {
      console.log($(this).attr('answerNum'));
      selectedAnswer = $(this).attr('answerNum')
    })
  });
}

function stopTimer() {
  clearInterval(timer);
  if (triviaQuestions[currentQuestion].answers[selectedAnswer] === triviaQuestions[currentQuestion].theAnswer) {
    alert('Congrats! You got that right!');
    correctAnswers++;
  } else {
    alert(`'Oooooops! Missed that one... it was '${triviaQuestions[currentQuestion].theAnswer}'`)
    incorrectAnswers++;
  }
  setTimeout(() => {
    progress = 15;
    currentQuestion++;
    if (currentQuestion >= triviaQuestions.length) {
      endGame()
    } else {
      loadNextQuestion();
      startTimer();
    }

  }, 2000);
}

function endGame() {
  $(".question").empty().append(
    `<h3>Correct: ${correctAnswers}</h3>`,
    `<h3>Incorrect: ${incorrectAnswers}</h3>`,
  );
  $("#start").removeAttr('disabled')

}
