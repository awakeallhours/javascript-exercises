const removeFromArray = function(array, ...args) {

    let newArray = [];

    array.forEach(item => {
        if(!args.includes(item))
        {newArray.push(item)}
    });
    console.log(array)
    console.log(args)
    console.log(newArray);
    return newArray;





    
// *****this worked for everything exept the duplicates and type******
/*
const removeFromArray = function(...args) {

//creates one array containing all arguments
const normalArray = args;
console.log(`normal array after creation ${normalArray}`)

//slices the array into 2 and selects the first array 
const first = normalArray.shift()
console.log(`input array ${first}`);

//contains the remaining arguments in a second single array
console.log(`arguments after input array ${normalArray}`)

for(i = 0; i < normalArray.length; i++) {
    for(let j = 0; j <= first.length; j++ ) {
        if(first[j] === normalArray[i])
            {
                let del = first.indexOf(first[j])
                console.log(`element to be deleted ${first[j]}`);
                first.splice(del, 1);
            }
        
    }
    
    console.log(`element = ${first}`);
};


//console.log(`returned array ${arr}`)
console.log(`array returned from args ${first}`)
return first;*/


};


removeFromArray([1,2,3,4],2,4);
// Do not edit below this line
module.exports = removeFromArray;
