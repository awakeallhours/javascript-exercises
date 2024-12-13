const palindromes = function (string) {
    let isPalindrome = false;
    //splits string into array seperated by commas
    let splitString = string.split([,])

    //checks array for commas, fullstops, and exclamation marks
    //that were in original string and removes them, 
    //does not affect commas inserted by split
    splitString.forEach(char => {
        if(char === "," || char === "." || char === "!") {
            let del = splitString.indexOf(char);
            splitString.splice(del, 1)
        }
    });

    //converts the array back into a string
    let rejoin = splitString.join('')

    //removes whitespace in the string, it has to be done here
    //as extra white spaces are created when deleting the 
    //commas 
    string = rejoin.replace(/\s+/g, '').toLowerCase()

    let copy = string;
    splitString = copy.split([,])
    splitString.reverse()
    copy = splitString.join("")
    console.log(copy)

    if(string === copy) {
        isPalindrome = true;
    }

    console.log(string)
    console.log(isPalindrome)
    return isPalindrome
};
palindromes("testing, , test")
palindromes("Racecar.")

// Do not edit below this line
module.exports = palindromes;
