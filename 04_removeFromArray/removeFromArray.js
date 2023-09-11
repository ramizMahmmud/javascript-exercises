const removeFromArray = function(arr,...manyMoreArgs) {
    let removedNumbers = arguments.length-1;
    for(let i=1; i<=removedNumbers;i++){
        let index = arr.indexOf(arguments[i]);
        if(index>-1){
            arr.splice(index,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
