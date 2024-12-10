const reverseString = function(input) {

    let reverse = input.split("")
    
    let reversed = "";
    for(i = reverse.length -1; i > -1; i--)
    {
        reversed = reversed += reverse[i]
    }
    console.log(`this is the reversed variable ${reversed}`)
    return reversed;
};

console.log(reverseString("testing"));
module.exports = reverseString;
