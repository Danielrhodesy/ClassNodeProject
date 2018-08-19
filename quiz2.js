process.stdout.write('\nQuick Math\n\n')

var questions = [
  '2+2?',
  '4-1?'
]

var answers = [
  '4',
  '3'
]

var usersAnswers = []

function askQuestion(i){
  process.stdout.write(`\n\n${questions[i]}\n\n`)
};

process.stdin.on('data', function(answer){
  // process.stdout.write(`${answer}`);
  // process.exit();
  var questionNumber = usersAnswers.length;
  var inputAnswer = answer.toString().trim();
  usersAnswers.push(inputAnswer);

  if(usersAnswers.length < answers.length) {
    askQuestion(usersAnswers.length);
  } else {
    process.exit();
  }
});

// function summary(){
//   if (inputAnswer == answers[questionNumber]) {
//     process.stdout.write('Correct');
//     usersAnswers.push
//
//   }
// }

askQuestion(0);

process.on('exit', function(){
  process.stdout.write(`\n\n\nyou have done quick math\n\n\n`)
  var correctCount = 0;
  for (var i = 0; i < questions.legth; i++) {

  }
})
