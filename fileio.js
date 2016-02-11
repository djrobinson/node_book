var fs = require('fs');
// fs.stat('/Users/', function(err,stats){
//   if (err) {throw err;}
//   console.log(stats);
// });

// fs.open('/Users/danny/Galvanize/node_intro/node_book/events.js', 'r', function opened(err, fd){
//   if (err) { throw err }
//   var readBuffer = new Buffer(1024),
//       bufferOffset = 0,
//       bufferLength = readBuffer.length,
//       filePosition = 100;
//   fs.read(fd,
//           readBuffer,
//           bufferOffset,
//           bufferLength,
//           filePosition,
//           function read(err, readBytes){
//             if (err) { throw err; }
//             console.log('just read ' + readBytes + ' bytes');
//             if (readBytes > 0 ) {
//               console.log(readBuffer.slice(0, readBytes).toString());
//             }
//           });
// });

// fs.open('/Users/danny/Galvanize/node_intro/node_book/events.js', 'a', function opened(err, fd) {
//   if (err) { throw err; }
//   var writeBuffer = new Buffer('writing a new stirng'),
//       bufferPosition = 0,
//       bufferLength = writeBuffer.length, filePosition = null;
//   fs.write( fd,
//             writeBuffer,
//             bufferPosition,
//             bufferLength,
//             filePosition,
//             function wrote(err, written) {
//               if (err) {throw err;}
//               console.log('wrote ' + written + ' bytes');
//             });
// })

function openAndWriteToSystemLog(writeBuffer, callback) {
  fs.open('/Users/danny/Galvanize/node_intro/node_book/events.js', 'a', function opened(err, fd){
    if (err) { return callback(err); }
    function notifyError(err) {
      fs.close(fd, function() {
        callback(err);
      })
    }
    var bufferOffset = 0,
        bufferLength = writeBuffer.length,
        filePosition = null;
    fs.write( fd, writeBuffer, bufferOffset, bufferLength, filePosition,
      function wrtoe(err, written) {
        if (err) { return notifyError(err); }
        fs.close(fd, function(){
          callback(err);
        })
      }
    );
  })
}
openAndWriteToSystemLog(
  new Buffer('writing this string'),
  function done(err) {
    if(err) {
      console.log("error while openeing and writing:", err.message);
      return;
    }
    console.log("All done with no errors!");
  })

///Users/danny/Galvanize/node_intro/node_book