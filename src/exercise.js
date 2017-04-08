const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function Exercise(name, opts) {
  this.name = name;
};

function spaces(num) {
  let s = '';
  for (let i = 0; i < num; i++) {
    s += ' ';
  }
  return s;
}

Exercise.prototype = {
  path: function() {
    return path.join(__dirname, '..', 'exercises', this.name);
  },
  load: function () {
    this.info = JSON.parse(fs.readFileSync(path.join(this.path(), 'exercise.json')).toString());
    return this;
  },
  begin: function() {
    let w = 60;
    let spaceStr = spaces(w);
    console.log('');
    console.log(
      chalk.bgBlue(spaceStr + '\n') +
      chalk.bgBlue.white('     STARTING EXERCISE: ') +
      chalk.bgBlue.yellow.bold(this.info.title) +
      chalk.bgBlue(spaces(w - 24 - this.info.title.length) + '\n') + 
      chalk.bgBlue(spaceStr + '\n')
    );
    console.log(this.info.instructions);
    console.log('\n');
    return this;
  }
}

module.exports = Exercise;