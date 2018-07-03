var pdf = require('htmltempletepdf');
var fs = require('fs');
var data = require('./data');
var pandoc = require('node-pandoc');

var src;
var args;

if (process.argv.length == 3) {
  name = process.argv[2];
}

var html = fs.readFileSync('./'+name+'.html', 'utf8');
var commonStyle = fs.readFileSync('./style.css');
var docStyle = fs.readFileSync('./'+name+'.css');

// var html = fs.readFileSync('./doc01.html', 'utf8');
// var commonStyle = fs.readFileSync('./style.css');
// var docStyle = fs.readFileSync('./doc01.css');

html = html.replace('<!--commonStyleHere-->', '<style>'+ commonStyle + '</style>');
html = html.replace('<!--docStyleHere-->',  '<style>'+ docStyle + '</style>');

pdf.generate({
  templatePath: html,
  data: data[name]
})

// var nameDate = new Date().getTime();

// var src = './'+name+'.html';
// var args = ['-f','html', '-t', 'docx' , '-o', nameDate + '.docx'];

// // Set your callback function 
// callback = function (err, result) {

//   if (err) {
//     console.error('Oh Nos: ',err);
//   }

//   // For output to files, the 'result' will be a boolean 'true'. 
//   // Otherwise, the converted value will be returned. 
//   console.log(result);
//   return result;
// };


// pandoc(src, args, callback);
