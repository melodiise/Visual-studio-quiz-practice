function submitQ() {
  let points = 0;

  let answers = document.querySelectorAll("input[type='radio']:checked");

  for (let index = 0; index < answers.length; index++) {
    points += parseInt(answers[index].value);
  }

  document.querySelector(".answers-correct").innerHTML = points;

  document.querySelector(".quiz").classList.toggle("invisible");

  document.querySelector(".result").classList.toggle("invisible");
}

function resetQ() {
  document.querySelector(".result").classList.toggle("invisible");

  document.querySelector(".quiz").classList.toggle("invisible");

  document.querySelector(".quiz").reset();
}
