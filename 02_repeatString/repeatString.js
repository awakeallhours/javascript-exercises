const repeatString = function(string, num) {

    for (let i = 0; i < num; i++) {
        process.stdout.write(num);
    }
};

repeatString("test",3);

// Do not edit below this line
module.exports = repeatString;
