var startButton = document.getElementById("start-button");
var questions = [
  {
    q: "how is your day",
    a: ["good", "bad", "ok", "not ok"],
    c: "good",
  },
  {
    q: "how was work?",
    a: ["good", "bad", "ok", "not ok"],
    c: "not ok",
  },
  {
    q: "how is life",
    a: ["good", "bad", "ok", "not ok"],
    c: "ok",
  },
  {
    q: "how is your dog",
    a: ["good", "bad", "ok", "not ok"],
    c: "bad",
  },
  {
    q: "how is your cat",
    a: ["good", "bad", "ok", "not ok"],
    c: "ok",
  },
  {
    q: "how is your fish",
    a: ["good", "bad", "ok", "not ok"],
    c: "not ok",
  },
];
var correctCounter = 0;
var questionCounter = 0;
var cardBody = document.getElementById("questions");
var timeEl = document.getElementById("secondsLeft");
var secondsLeft = 60;
var scoreEl = 0;
function showQuestions() {
  cardBody.innerHTML = "";
  var question = document.createElement("p");
  question.textContent = questions[questionCounter].q;
  var questionDiv = document.createElement("div");
  questionDiv.append(question);
  for (var i = 0; i < questions[questionCounter].a.length; i++) {
    var button = document.createElement("button");
    button.textContent = questions[questionCounter].a[i];
    button.setAttribute("class", "btn btn-primary answers");
    questionDiv.append(button);
  }
  cardBody.append(questionDiv);
}

startButton.addEventListener("click", function (event) {
  event.preventDefault();
  startButton.style.display = "none";
  showQuestions();
  //   console.log("you clicked it");
});

document.addEventListener("click", function (event) {
  console.log(event.target.className);
  if (event.target.className.includes("answers")) {
    console.log("this is the answer button");
    console.log(event.target.textContent);
    if (event.target.textContent === questions[questionCounter].c) {
      cardBody.append("correct");
      correctCounter++;
      scoreEl++;
    } else {
      cardBody.append("incorrect");
    }
    questionCounter++;

    //end game function here
    if (questionCounter >= questions.length) {
      scoreCard();
    } else {
      setTimeout(function () {
        showQuestions();
      }, 2000);
    }
  }

  function timer() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  timer();
  //another conditional for the submit high score
});

function scoreCard() {
  document.innerHTML = "";
  var scoreCardEL = document.createElement("h2");
  scoreCardEL.textContent = "High Scores";
  var scoreCardP = document.createElement("p");
  scoreCardP.textContent = "Your Score Is!!!";
  console.log("score card is calling");
  cardBody.append(scoreCardEL, scoreCardP);
}
