//alert('Welcome to Quiz Ninja!');

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
  start: document.getElementById('start'),
  score: document.querySelector('#score strong'),
  question: document.getElementById('question'),
  result: document.getElementById('result'),
  info: document.getElementById('info'),
  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }

    target.innerText = content;
  },
  show(element){
    element.style.display = 'block';
  },
  hide(element){
    element.style.display = 'none';
  }
};

const game = {
  start(quiz) {
    view.hide(view.start);
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

    view.render(view.question, question);
    //view.render(view.response, this.response):
    this.check(response);
  },
  check(response) {
    const answer = this.question.realName;
    if (response === answer) {
      view.render(view.result, 'Correct!', {
        'class': 'correct'
      });
      alert('Correct!');
      this.score++;
      view.render(view.score, this.score);
    } else {
      view.render(view.result, `Wrong! The correct answer was ${answer}`, {
        'class': 'wrong'
      });
      alert(`Wrong!  Correct answer is ${answer}`);
    }
  },
  gameOver() {
    view.render(view.info,
      `Game Over!  You scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.show(view.start);
    //alert(`Game over!  You scored ${this.score}`);
  }
}

//game.start(quiz);
view.start.addEventListener('click', () => game.start(quiz), false);