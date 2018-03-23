alert('Welcome to Quiz Ninja!');

/*const question = "What is Superman's real name?";
const answer = prompt(question);
alert(`You answered ${answer}`);*/

const quiz = [{
    name: "Superman",
    realName: "Clark Kent"
  },
  {
    name: "Wonder Woman",
    realName: "Diana Prince"
  },
  {
    name: "Batman",
    realName: "Bruce Wayne"
  }
];

const game = {
  start(quiz) {
    this.questions = [...quiz];
    this.score = 0; // initialize score

    // Main game loop
    for (const question of this.questions) {
      this.question = question;
      this.ask();

    }
    // End main game loop

    this.gameOver();
  },
  ask() {
    const question = `What is ${this.question.name}'s real name?`;
    const response = prompt(question);
    this.check(response);
  },


check(response) {
   const answer = this.question.realName;
  if (response === answer) {
      alert('Correct!');
      this.score++;
    } else {
      alert(`Wrong!  Correct answer is ${answer}`);
    }
  },

  gameOver() {
    alert(`Game Over!  You scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
  }
}

game.start(quiz);