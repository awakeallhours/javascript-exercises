const fibonacci = function(index) {
    let a = 0;
    let b = 1;
    let sum = 0;
    if(index < 0)
    {
        sum = "OOPS"
        
    }
    /*
    0 + 1 = 1
    1 + 1 = 2
    */
    for(let i = 0; i < index;) {
        a = b;
        b = sum;
        sum = a + b
        i++
        console.log(sum)
    }
    console.log(`Answer to fibonacci index ${index} = ${sum}`)
    return sum
};

fibonacci("6");
// Do not edit below this line
module.exports = fibonacci;
