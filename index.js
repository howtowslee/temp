var pdf = require('htmltempletepdf');
var fs = require('fs');
var data = require('./data');
var pandoc = require('node-pandoc');
var HtmlDocx = require('html-docx-js');

var src;
var args;

if (process.argv.length == 3) {
  name = process.argv[2];
}

var html = fs.readFileSync('./'+name+'.html', 'utf8');
var commonStyle = fs.readFileSync('./style.css');
var docStyle = fs.readFileSync('./'+name+'.css');

html = html.replace('<!--commonStyleHere-->', '<style>'+ commonStyle + '</style>');
html = html.replace('<!--docStyleHere-->',  '<style>'+ docStyle + '</style>');

pdf.generate({
  templatePath: html,
  data: data[name]
})

