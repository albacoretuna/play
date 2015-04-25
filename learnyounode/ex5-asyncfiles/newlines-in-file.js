var fs = require('fs');
var fileAddress = process.argv[2];
var text = fs.readFileSync(fileAddress);
text = text.toString();

text = text.split('\n');
console.log(text.length -1);
