var pdf = require('htmltempletepdf');
var fs = require('fs');
var data = require('./data');

if (process.argv.length == 3) {
  name = process.argv[2];
}

// var html = fs.readFileSync('./'+name+'.html', 'utf8');
// var commonStyle = fs.readFileSync('./style.css');
// var docStyle = fs.readFileSync('./'+name+'.css');

var html = fs.readFileSync('./doc01.html', 'utf8');
var commonStyle = fs.readFileSync('./style.css');
var docStyle = fs.readFileSync('./doc01.css');

html = html.replace('<!--commonStyleHere-->', '<style>'+ commonStyle + '</style>');
html = html.replace('<!--docStyleHere-->',  '<style>'+ docStyle + '</style>');

pdf.generate({
  templatePath: html,
  data: data.doc01
})