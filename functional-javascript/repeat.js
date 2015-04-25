function repeat(operation, num) {
    var i = 0;
    if(num >0) {
        repeat(operation);
        num--;
    }
}

module.exports = repeat
