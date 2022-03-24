/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = String(x);
    return str === reverseStr(str);
};

function reverseStr (s) {
    let result = '';
    for (let i = s.length-1; i >= 0; i--){
        result += s[i]        
    }
    return result;
}