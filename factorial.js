/**
 * Problem:
 * Write a recursive function that calculates the factorial of a given number.
 *
 * Your task:
 * Implement the function `factorial` which calculates the factorial of the input number recursively.
 *
 * Example:
 * factorial(5) should return 120.
 * factorial(0) should return 1.
 */

// Write your solution here
function factorial(n){
    let sum = 1
    for(i = 1; i<=n ;i++ ){
        sum *=i
    }
    return sum;
}
console.log(factorial(5))


module.exports = factorial;
