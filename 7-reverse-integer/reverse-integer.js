/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0
    let temp = Math.abs(x)
    let sign = x < 0 ? -1 : 1
    while(temp > 0){
        let last_digit = temp % 10
        reversed = (reversed*10) + last_digit 
        temp = Math.floor(temp / 10)
    }
    reversed = reversed * sign
    if(reversed < -(2**31) || reversed > (2**31 - 1)) {
        return 0
    }
    return (reversed)
};