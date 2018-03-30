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

// View object
const view = {
  /*score: document.querySelector('#score strong'),
  question: document.getElementById('question'),
  result: document.getElementById('result'),
  info: document.getElementById('info'),
  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHtml = content;
  };*/
}

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
      //view.render(view.question, question);
      this.check(response);
    },


    check(response) {
      const answer = this.question.realName;
      if (response === answer) {
        /*view.render(view.result, 'Correct!', {
          'class': 'correct'
        });*/
        alert('Correct!');
        this.score++;
        //view.render(view.score, this.score);
      } else {
        //view.render(view.result, `Wrong! The correct answer was ${answer}`,

          alert(`Wrong!  Correct answer is ${answer}`, {
            'class': 'wrong'
          });
        }
      },

      gameOver() {
        /*view.render(view.info,
          `Game Over!  You scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
*/
      }
    }

    game.start(quiz);