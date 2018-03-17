alert('Welcome to Quiz Ninja!');

/*const question = "What is Superman's real name?";
const answer = prompt(question);
alert(`You answered ${answer}`);*/

const quiz = [["What's Superman's real name?", "Clark Kent"],
                ["What's Wonder Woman's real name?", "Diana Prince"],
                ["What's Batman's real name?", "Bruce Wayne"]];

function start(quiz){

  let score = 0; // initialize score

  for (const [question, answer] of quiz){
    const response = ask(question);
    check(response, answer);
  }
  // End main game loop

  gameOver();

  function ask(question){
    return prompt(question);
  }
  
  function check(response, answer){
    if(response === answer){
      alert ('Correct!');
      score++;
    }
    else{
      alert(`Wrong!  Correct answer is ${answer}`);
    }
  }
  
  function gameOver(){
    alert(`Game Over!  You scored ${score} point${score !== 1 ? 's' : ''}`);
  }
}
start(quiz);


