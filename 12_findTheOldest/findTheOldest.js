//cant copy the array for some reason

people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(arr) {
    
    
    const peeps = arr.map(person => {
      
    })
      //array still not working
      console.log(person.name)
      console.log(peeps)
      console.log(peeps.yearOfBirth)

    
    /*let DOB = 2013;
    let DOD = 2020;
    let age = DOD - DOB
    console.log(age)
    console.log(peeps)*/
    //return peeps
};

findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
