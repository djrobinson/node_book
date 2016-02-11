var buf = new Buffer('my buffer content');
console.log(buf[10]);

console.log(buf.length);

var buffer1 = new Buffer("this is the content of my buffer");
var buffer2 = new Buffer(11);

var targetStart = 0;
var sourceStart = 8;
var sourceEnd = 19;

buffer1.copy(buffer2, targetStart, sourceStart, sourceEnd);
console.log(buffer2);
console.log(buffer2.toString());

var buffer3 = new Buffer("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nulla, delectus! Quaerat sunt blanditiis omnis, quod, nihil necessitatibus labore. Numquam qui ratione eveniet ab error minima, natus quas quis eligendi!");

console.log(buffer3);