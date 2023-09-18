const palindromes = function (a) {
    function isAlphaNumeric(str){
        let code;
        for(let i = 0; i<str.length; i++){
            code = str.charCodeAt();
            if(!(code>47 && code <58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)){
                return false;
    
            }
            return true;
        }
    }
    
    let b = '';
    let c = '';
    for(let i = 0; i< a.length; i++){
        if (isAlphaNumeric(a[i])){
            b += a[i];
        }
    }
    
    b = b.toLocaleLowerCase();
    c = b.split('').reverse().join('');
    return b ===c;
};






// Do not edit below this line
module.exports = palindromes;
