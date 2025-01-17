function checkAnswer() {
  const correctAnswer = "4";

  if(userAnswer === correctAnswer) {
    document.querySelector('feedback').textContent = 'Correct! Well done.'
    }else{
    document.querySelector('feedback').textContent = "That's incorrect. Try again!."
  }
  
}

const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
console.log(userAnswer)



  
