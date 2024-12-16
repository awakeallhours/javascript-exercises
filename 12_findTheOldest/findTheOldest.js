

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

const getAge = function (birth, death) {
    
    if(!death)
    {
        death = new Date().getFullYear();
       
    }
    return death - birth;
    //console.log(currentYear)
    //console.log(age)
    //return age
}

const findTheOldest = function(people) {
    
    return people.reduce((oldest,currentPerson) => {
      
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
      
      console.log(`oldest age ${oldestAge}`)
      console.log(`current person ${currentPerson.name}`)
      let answer = oldestAge < currentAge ? currentPerson : oldest

      //console.log(answer)
      return answer
      
    })
      

    
   
    
};
//getAge(2013)
findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
