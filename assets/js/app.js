var startButton = document.getElementById("start-button");
var questions = [
  {
    q: "how is your day",
    a: ["good", "bad", "ok", "not ok"],
    c: "good",
  },
  {
    q: "how is your day",
    a: ["good", "bad", "ok", "not ok"],
    c: "good",
  },
  {
    q: "how is your day",
    a: ["good", "bad", "ok", "not ok"],
    c: "good",
  },
  {
    q: "how is your day",
    a: ["good", "bad", "ok", "not ok"],
    c: "good",
  },
];
var counter = 0;
var cardBody = document.getElementById("questions");

function showQuestions() {
  var question = document.createElement("p");
  question.textContent = questions[counter].q;
  var questionDiv = document.createElement("div");
  questionDiv.append(question);
  for (var i = 0; i < questions[counter].a.length; i++) {
    var button = document.createElement("button");
    button.textContent = questions[counter].a[i];
    button.setAttribute("class", "btn btn-primary");
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
