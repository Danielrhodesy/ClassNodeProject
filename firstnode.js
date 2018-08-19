// var name = "Daniel"

// console.log(`Hello ${name}`);
// console.log('First node project running');


// console.log(__dirname);
// console.log(__filename);

process.stdout.write('\nWhat is your name?\n\n');

process.stdin.on('data', function(answer){
  process.stdout.write(`\n\n Hello ${answer}\n\n`);
  process.exit();
});
