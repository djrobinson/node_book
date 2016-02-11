////this server closes on first connection
// var server = require('net').createServer();

// var port = 4001;

//
// server.on('listening', function() {
//   console.log('Server is litening on port', port);
// });

// server.on('connection', function(socket) {
//   console.log('Server has a new connection');
//   socket.end();
//   server.close();
// });

// server.on('close', function(){
//   console.log('Server is now closed');
// });

// server.on('error', function(err){
//   console.log('Error:', err.message);
// });

// server.listen(port);

var server = require('net').createServer(function(socket){
  console.log('new connection');

  socket.setEncoding('utf8');

  socket.write("Hello! Start typing! Type 'quit' to exit \n");

  socket.on('data', function(data){
    console.log('got: ', data.toString());
    if (data.trim().toLowerCase()==='quit'){
      socket.write('Bye bye!');
      return socket.end();
    }
    socket.write(data);
  })

  socket.on('end', function() {
    console.log('Client connection ended');
  })

}).listen(4001);
