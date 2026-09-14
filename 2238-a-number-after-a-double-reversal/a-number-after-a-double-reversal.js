/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let reversed1 = 0

    let temp = num

    while(temp > 0){
        let last_digit = temp % 10
        reversed1 = (reversed1*10) + last_digit 
        temp = Math.floor(temp / 10)
    }

    let reversed2 = 0
    while(reversed1 > 0){
        let last_digit2 = reversed1 % 10
        reversed2 = (reversed2*10) + last_digit2 
        reversed1 = Math.floor(reversed1 / 10)
    }

    if (reversed2 === num) {
        return true
    }
    return false
};