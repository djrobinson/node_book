var spawn = require('child_process').spawn;

//equivalent to 'node childproc.js'
var child = spawn('node', ['childproc.js']);

//Call func every 1 sec
setInterval(function(){
  //rand num:
  var number = Math.floor(Math.random() * 10000);

  //send num to child:
  child.stdin.write(number + "\n");

  //Get the resp and print:
  child.stdout.once('data', function(data){
    console.log('child replied to ' + number + ' with ' + data);
  });
}, 1000);

child.stderr.on('data', function(data){
  process.stdout.write(data);
});