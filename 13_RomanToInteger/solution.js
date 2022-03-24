/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

    if (s.length <= 2) {
        let val = handleBasecase(s);
        if (val > 0) {
            return val;
        }
    }

    console.log(s);
        
    let split;
    let possibleBaseCase = handleBasecase(s.substr(0, 2));
    if (possibleBaseCase > 0) {
        split = 2;
    } else {
        possibleBaseCase = handleBasecase(s.substr(0, 1));
        split = 1;
    }
    return possibleBaseCase + romanToInt(s.substr(split));
}

function handleBasecase(expr) {
    switch (expr) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        case "IV":
            return 4;
        case "IX":
            return 9;
        case "XL":
            return 40;
        case "XC":
            return 90;
        case "CD":
            return 400;
        case "CM":
            return 900;
        default:
            return 0; // not a base case.
    }
}