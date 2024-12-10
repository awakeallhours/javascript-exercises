const reverseString = function(input) {

    let reverse = input.map()
    let reversed = ""
    for(i = reverse; i > 0; i--)
    {
        reversed = reversed += reverse[i]
    }

    return reversed;
};

console.log(reverseString(test));
// Do not edit below this line
module.exports = reverseString;
