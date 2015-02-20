var fs = require('fs');
var path = require('path');


//////////////////
// MY FIRST I/O //
//////////////////

/*

var buffer = fs.readFileSync(process.argv[2]);

var str = buffer.toString().split('');
var newLines = str.filter(function(item) {
  return item === '\n';
});
console.log(newLines.length);

*/


////////////////////////
// MY FIRST ASYNC I/O //
////////////////////////

/*

var words;
var str = fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  if(err) throw err;
  words = data;
  var str = words.split('');
  var newLines = str.filter(function(item) {
    return item === '\n';
  });
  console.log(newLines.length);
});

*/

/////////////////
// FILTERED LS //
/////////////////

/*

fs.readdir(process.argv[2], function(err, list) {
  var matches = list.forEach(function(item) {
    if(path.extname(item) === '.' + process.argv[3]){
      console.log(item);
    }
  });
});

*/


/////////////////////
// MAKE IT MODULAR //
/////////////////////
