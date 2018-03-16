alert('Welcome to Quiz Ninja!');

/*const question = "What is Superman's real name?";
const answer = prompt(question);
alert(`You answered ${answer}`);*/

  const quiz = [["What's Superman's real name?", "Clark Kent"],
                ["What's Wonder Woman's real name?", "Diana Prince"],
                ["What's Batman's real name?", "Bruce Wayne"]];

let score = 0; // initialize score

for (const [question, answer] of quiz){
  const response = prompt(question);
  if(response === answer){
    alert('Correct!');
    score++;
  }
  else{
    alert(`Wrong!  The correct answer was ${answer}`);
  }
}

// At the end of the game report the player's score)
alert(`Game over!  You scored ${score} point${score !== 1 ? 's' : ''}`);