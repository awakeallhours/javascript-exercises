const sumAll = function(a,b) {
    let total = a;
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) ) {
        const error = "ERROR"
        console.log(error)
        return (error)
    }

    else if(a < b) {
        for(let i=a; i <= b; i++) {
            console.log(`current number ${i} for ${a} to ${b}`);
            total = total += i;
            
        }
    }
    else if (a > b) {
        for(let i=a; i >= b; i--) {
            console.log(`current number ${i} for ${a} to ${b}`);
            total = total += i;
            console.log(`descending ${i}`)
    
            console.log(`total = ${total}`)
        }
    }
    console.log(`final total ${total - a}`);
    return total - a;

};

sumAll(1,4)
sumAll(5,1)
sumAll(-1,5)
sumAll("5","3")

// Do not edit below this line
module.exports = sumAll;
