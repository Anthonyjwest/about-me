'use strict';

let username = prompt('What is your name?');
console.log(username);
alert(`Hey ${username} welcome to my site! Lets play a guessing game, answer with yes/no OR y/n!`);

let rightanswer = 0;

function questionOne() {
  let questionOne = prompt('Was I born in New York?').toLowerCase();
  
  console.log(questionOne);
  
  if (questionOne === 'y' || questionOne === 'yes'){
    alert('You are correct!');
    rightanswer += 1;
  } else if(questionOne === 'n' || questionOne === 'no'){
    alert('That is incorrect, I was born in New York');
  }
}
let questionTwo = prompt('I have lived in New York for my whole life?').toLowerCase();

console.log(questionTwo);

if (questionTwo === 'n' || questionTwo === 'no'){
  alert('You are correct!');
  rightanswer += 1;
} else if(questionTwo === 'y' || questionTwo === 'yes'){
  alert('That is incorrect, I have lived in six differnt states in my life');
}

let questionThree = prompt('I was varsity in track my freshmen year of Highschool?').toLowerCase();

console.log(questionThree);

if (questionThree === 'y' || questionThree === 'yes'){
  alert('You are correct!');
  rightanswer += 1;
} else if(questionThree === 'n' || questionThree === 'no'){
  alert('That is incorrect, I was varsity for long jump and triple jump!');
}

let questionFour = prompt('I am the only child in my family?').toLowerCase();

console.log(questionFour);

if (questionFour === 'n' || questionFour === 'no'){
  alert('You are correct!');
  rightanswer += 1;
} else if(questionFour === 'y' || questionFour === 'yes'){
  alert('That is incorrect, I have one sister!');
}

let questionFive = prompt('My favorite fast food chain is Burger King?').toLowerCase();

console.log(questionFive);

if (questionFive === 'y' || questionFive === 'yes'){
  alert('You are correct!');
  rightanswer += 1;
} else if(questionFive === 'n' || questionFive === 'no'){
  alert('That is incorrect, I love Burger King!');
}

for (let g = 0; g < 4; g++){
  let myNum = '87';
  let questionSix = prompt('Can you guess my favorite football players jersey number? Hint: He played for the colts and was a wide reciever! You have four guesses! Good luck!');
  if (questionSix === myNum){
    alert('That is correct! Reggie Wayne was my favorite player!');
    rightanswer += 1;
    g +=4;
  } else if (questionSix < myNum) {
    alert('Too Low! Try again');
  } else if (questionSix > myNum) {
    alert('Too High! Try again');
  }

  if (g === 3) {
    alert('The correct answer was 87. Reggie Waynes Number!');
  }
}

let myAnswers = ['kitkat', 'milkyway', 'reeses', 'twix', 'snickers'];

for (let g = 0; g < 6; g++){
  let questionSeven = prompt('Name one of my favorite candy bars! You have six attempts!').toLowerCase();

  for (let i = 0; i < myAnswers.length; i++){
    if (questionSeven === myAnswers[i]){
      alert('Correct! I love those!');
      rightanswer += 1;
      g +=6;
      break;
    }
  }
}

alert(`Here are my favorite Candy bars! ${myAnswers}`);

alert(`Thanks ${username}, I hope you learned a little bit more about me today! You scored ${rightanswer} out of 7!`);
