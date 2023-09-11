const repeatString = function(givenStirng, repeatTimes) {
    if(repeatTimes < 0){
        return "ERROR"
    }
    let finalstring = '';
    for(let i = 0; i<repeatTimes; i++){
        finalstring += givenStirng;
    }
    return finalstring;
};

// Do not edit below this line
module.exports = repeatString;
