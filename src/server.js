const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const chalk = require('chalk');
const livereload = require('livereload');
const Exercise = require('./exercise');

module.exports = function (opts) {
  var server = livereload.createServer({
    exts: ['scss', 'html']
  });
  let pth = path.join(__dirname, '..', 'exercises', opts.exercise, '**/*');
  server.watch(pth);

  let app = express();

  let sassMw = sassMiddleware({
    /* Options */
    src:  path.join(__dirname, '..', 'exercises', opts.exercise, 'src', 'sass'),
    dest: path.join(__dirname, '..', 'exercises', opts.exercise, 'public'),
    outputStyle: 'expanded'
  });

  // Note: you must place sass-middleware *before* `express.static` or else it will
  // not work.
  let publicPath = path.join(__dirname, '..', 'exercises', opts.exercise, 'public');
  
  let staticMw = express.static(publicPath);

  app.use(sassMw);
  app.use('/', staticMw);
  app.use('/js', express.static(path.join(__dirname, '..', 'public', 'js')));
  app.use('/css', express.static(path.join(__dirname, '..', 'public', 'css')));

  new Exercise(opts.exercise).load().begin();

  app.listen(opts.port);
  console.log(chalk.yellow('Running on http://localhost:' + opts.port + '. Press Ctrl + c to stop'));
  return app;
}