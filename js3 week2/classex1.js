const startButton = document.getElementById("startQuiz");
const submitButton = document.getElementById("submitQuiz");
let initialQuestions = [];

startButton.addEventListener("click", async () => {
  try {
    const resp = await fetch(
      "https://run.mocky.io/v3/0a3616a2-4181-4a06-856f-c42c0e3aa74b"
    );
    const data = await resp.json();
    initialQuestions = data.results;
    displayQuestions(initialQuestions);
  } catch (error) {
    console.error(error);
  }
});

function displayQuestions(questions) {
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.classList.remove("hidden");
  startButton.classList.add("hidden");
  submitButton.classList.remove("hidden");
  const questionContainer = document.getElementById("questionContainer");
  questionContainer.innerHTML = "";

  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    const questionTitle = document.createElement("h3");
    questionTitle.innerHTML = question.question;
    questionElement.appendChild(questionTitle);

    const options = [
      question.correct_answer,
      ...question.incorrect_answers,
    ].sort(() => 0.5 - Math.random());

    options.forEach((option) => {
      const optionLabel = document.createElement("label");
      const optionInput = document.createElement("input");

      optionInput.type = "radio";
      optionInput.name = `question${index}`;
      optionInput.value = option;

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));

      questionElement.appendChild(optionLabel);
    });

    questionContainer.appendChild(questionElement);
  });
}

submitButton.addEventListener("click", () => {
  const questions = document.querySelectorAll(".question");
  let score = 0;
  questions.forEach((question) => {
    const selectedOption = question.querySelector(
      'input[type="radio"]:checked'
    );
    if (selectedOption && selectedOption.value) {
      const questionIndex = selectedOption.name.split("question")[1];
      console.log(initialQuestions[questionIndex].correct_answer);
      if (
        selectedOption.value === initialQuestions[questionIndex].correct_answer
      ) {
        score = score + 1;
      }
    }
  });
  alert(`Your score is ${score} out of 10`);
});
