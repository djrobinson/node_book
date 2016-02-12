var exec = require('child_process').exec;
// var options = {
//   timeout: 10000,
//   killSignal: 'SIGKILL'
// };
// exec('cat *.js | wc -l', function(err, stdout, stderr) {
//   if (err) {
//     console.log('child process has exited with error: ', err.code);
//     return;
//   }
//   console.log(stdout);
// })

////Run child process w/ custom env vars
// var env = process.env,
//     varName,
//     envCopy = {},
//     exec = require('child_process').exec;
// for (varName in env) {
//   envCopy[varName] = env[varName];
// }

// envCopy['CUSTOM ENV VAR'] = 'some value';
// envCopy['CUSTOM ENV VAR 2'] = 'some other val';

// exec('ls -la', { env: envCopy }, function(err, stdout, stderr){
//   if (err) { throw err; }
//   console.log('stdout:', stdout);
//   console.log('stderr:', stderr);
// })

//interacting with a child process after creation:

// var spawn = require('child_process').spawn;
// //Laund child w/ tial -f /var/log/system.log command
// var child = spawn('tail', ['-f', '/var/log/system.log']);

// //Every child process has a property named stdout that represents child process output as a stream
// child.stdout.on('data', function(data){
//   console.log('tail output: ' + data);
// });

//+1 app.  Recieves ints on its std input stream, increments & outputs
//This is an example of how you can send data to a child process

process.stdin.resume();
process.stdin.on('data', function(data){
  var number;
  try {
    //parse the input data into a num from buffer
    number = parseInt(data.toString(), 10);
    //increment by one
    number += 4;
    //output the number
    process.stdout.write(number + "\n");
  } catch(err) {
    process.stderr.write(err.message + "\n");
  }
});



