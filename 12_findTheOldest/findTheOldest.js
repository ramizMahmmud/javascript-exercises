const findTheOldest = function(people) {
    function howOld(yearOfBirth, yearOfDeath){
        return yearOfDeath - yearOfBirth;
    };
    let yearOfBirths = [];
    let yearOfDeaths = [];
    people.forEach(element => {
        if(element.yearOfDeath == null){
            element.yearOfDeath = 2023;
        }
        yearOfBirths.push(element.yearOfBirth);
        yearOfDeaths.push(element.yearOfDeath);
        
    }); 
    let len = people.length;
    let ages = [];
    let oldest;
    let age;
    for(let i = 0; i<len; i++){
       age = howOld(yearOfBirths[i],yearOfDeaths[i]);
        ages.push(age);
    }
    oldest = Math.max(...ages);
   return people[ages.indexOf(oldest)];
};



// Do not edit below this line
module.exports = findTheOldest;
