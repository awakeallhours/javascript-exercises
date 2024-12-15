

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

const getAge = function (DOB, DOD) {
    let dateTime = new Date()
    dateTime = dateTime.toISOString().split('T')[0]
    //console.log(dateTime.toISOString().split('T')[0])
    //let currentDate = dateTime.split("T")
    if(!DOD)
    {
        DOD = dateTime
    }
    let age = DOD - DOB
    console.log(dateTime)
    //console.log(age)
    return age
}

const findTheOldest = function(people) {
    
    return people.reduce((oldest,current) => {
      
    })
      

    
   
    
};
getAge(2013)
//findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
