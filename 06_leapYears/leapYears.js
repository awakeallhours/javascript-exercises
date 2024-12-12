const leapYears = function(year) {

    let isLeapYear = false;
    
    if(year < 100 && year %4 === 0) {
       
        isLeapYear = true
    }
    else if(year > 100 && year % 4 === 0) {
        isLeapYear = true

       if(year < 400 && year % 100 === 0) {
            isLeapYear = false;
       }
        
    }
    else if(year > 100 && year % 4 === 0 && year % 100 === 0) {
        
        isLeapYear = false;
    }
    else if(year > 100 && year % 4 === 0 && year % 400 === 0) {
        
        isLeapYear = true;
    }

    
    console.log(`${year} is a leap year : ${isLeapYear}`)
    return isLeapYear;
};

leapYears(8)
leapYears(9)
leapYears(100)

// Do not edit below this line
module.exports = leapYears;
