const program = require('commander');
const fs = require('fs');
const chalk = require('chalk');

let opts = {};

let exercises = fs
  .readdirSync('./exercises')
  .map((x) => x.toLowerCase());

program
  .option('-e, --exercise <exercise-name>', 'Which exercise to run')
  .description('start serving up an exercise')
  .option('-p, --port <port-number>', 'Port to serve the app on')
  .parse(process.argv);

opts.port = program.port || 3000;
opts.exercise = ('' + program.exercise).trim();

if (!opts.exercise) {
  console.error(chalk.red('ERROR: must specify an --exercise argument'));
  program.help();
}
if (exercises.indexOf(opts.exercise.toLowerCase()) < 0) {
  console.error(chalk.red('ERROR: not a valid exercise'));
  console.error(chalk.yellow('Valid exercises are:...'));
  console.error(chalk.yellow(exercises.map((e) => '\t - ' + e).join('\n')));
  program.help();
}

module.exports = opts;