const fibonacci = function(n) {
    n = parseInt(n);
    if (n<1) return 'OOPS'
    if(n == 1 || n == 2) return 1;
    let temp,resultBefore, result;
    result =1;
    resultBefore = 1;
    for(let i =1; i <= n-2; i++){
        temp = result;
        result += resultBefore;
        resultBefore = temp;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
