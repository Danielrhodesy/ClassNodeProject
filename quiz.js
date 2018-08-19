process.stdout.write('\nHello and welcome to Quiz!\n\n')

var questions = [
  'What is the capital of Egypt?',
  'What is my favourtie colour?',
  'How old am I?'
];

var answers = [
  'Cairo',
  'Blue',
  '21'
];

var usersAnswers = [];

function askQuestion(i){
  process.stdout.write(`\n\n${questions[i]}\n\n`)
};


process.stdin.on('data', function(answer){
  // process.stdout.write(`${answer}`);
  // process.exit();
  var questionNumber = usersAnswers.length;
  var inputAnswer = answer.toString().trim();
  if(inputAnswer == answers[questionNumber]){
    process.stdout.write('Correct');
    usersAnswers.push(inputAnswer);

    if(usersAnswers.length < answers.length) {
      askQuestion(usersAnswers.length);
    } else {
      process.exit();
    }
  } else {
    process.stdout.write(`\n${inputAnswer} is incorrect, please try again\n\n`);
  }

});



askQuestion(0);

process.on('exit', function(){
  process.stdout.write(`\n\n\nCongrats! You have completed the quiz\n\n\n`)
})
