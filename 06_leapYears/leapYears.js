const leapYears = function(year) {
    let isLeapYear = false;
    
    const isYearDivisibleByFour = year % 4 === 0;
    const isYearDivisibleByCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;
    
    if(isYearDivisibleByFour &&
        (!isYearDivisibleByCentury || isYearDivisibleByFourHundred)) {
            isLeapYear = true
        }
    else {
        isLeapYear = false;
    }
       
    

    
    console.log(`${year} is a leap year : ${isLeapYear}`)
    return isLeapYear;
};

leapYears(8)
leapYears(9)
leapYears(100)

// Do not edit below this line
module.exports = leapYears;
