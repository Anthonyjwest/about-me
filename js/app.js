'use strict';

let username = prompt('What is your name?');
console.log(username);
alert(`Hey ${username} welcome to my site! Lets play a guessing game, answer with yes/no OR y/n!`);

let questionOne = prompt('Was I born in New York?').toLowerCase();

//console.log(questionOne);

if (questionOne === 'y' || questionOne === 'yes'){
  alert('You are correct!');
} else if(questionOne === 'n' || questionOne === 'no'){
  alert('That is incorrect, I was born in New York');
}

let questionTwo = prompt('I have lived in New York for my whole life?').toLowerCase();

//console.log(questionTwo);

if (questionTwo === 'n' || questionTwo === 'no'){
  alert('You are correct!');
} else if(questionTwo === 'y' || questionTwo === 'yes'){
  alert('That is incorrect, I have lived in six differnt states in my life');
}

let questionThree = prompt('I was varsity in track my freshmen year of Highschool?').toLowerCase();

//console.log(questionThree);

if (questionThree === 'y' || questionThree === 'yes'){
  alert('You are correct!');
} else if(questionThree === 'n' || questionThree === 'no'){
  alert('That is incorrect, I was varsity for long jump and triple jump!');
}

let questionFour = prompt('I am the only child in my family?').toLowerCase();

//console.log(questionFour);

if (questionFour === 'n' || questionFour === 'no'){
  alert('You are correct!');
} else if(questionFour === 'y' || questionFour === 'yes'){
  alert('That is incorrect, I have one sister!');
}

let questionFive = prompt('My favorite fast food chain is Burger King?').toLowerCase();

//console.log(questionFive);

if (questionFive === 'y' || questionFive === 'yes'){
  alert('You are correct!');
} else if(questionFive === 'n' || questionFive === 'no'){
  alert('That is incorrect, I love Burger King!');
}

alert(`Thanks ${username}, I hope you learned a little bit more about me today!`);

