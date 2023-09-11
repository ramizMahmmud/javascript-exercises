const reverseString = function(givenString) {
    let resultString = '';
    for(let i = 0; i< givenString.length; i++){
        resultString += givenString[givenString.length -1-i]; 
    }
    return resultString;
};


// Do not edit below this line
module.exports = reverseString;
