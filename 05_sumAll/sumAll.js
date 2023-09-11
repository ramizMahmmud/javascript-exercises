const sumAll = function(firstNum, secondNum) {
    if(firstNum<0 || secondNum <0 || typeof(firstNum) != "number" || typeof(secondNum)!= "number"){
        return "ERROR"
    }
    let sum;
    sum = 0;
    let temp;
    if(firstNum > secondNum){
        temp = firstNum;
        firstNum = secondNum;
        secondNum =temp;
    }
    for(let i = firstNum; i<= secondNum; i ++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
