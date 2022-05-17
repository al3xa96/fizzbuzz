
function fizzbuzz (num) {
    if (typeof num !== 'number') {
        return 'ERROR: the input isn\'t a number'
    }
    const divisible = (divisor, num) => num % divisor === 0
    if (num === 0) {
        return num;
    }
     if (divisible(3, num) && divisible(5, num)) {
        return 'fizzbuzz'
    }
     if (divisible(3, num)) {
        return 'fizz'
    }
     if (divisible(5, num)) {
        return 'buzz'
    }

    // if (num % 3 === 0) {
    //     return 'fizz'
    // }

    // if (num % 5 === 0) {
    //     return 'buzz'
    // } */

    /* BASIC IF 
    if (num % 3 === 0 && num % 5 === 0) {
         return 'fizzbuzz'
    }

    if (num % 3 === 0) {
         return 'fizz'
    }

     if (num % 5 === 0) {
         return 'buzz'
     } */
    return num;
}

function print (num) {
    for (let i = 0; i <= num; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`)
    }
}

print(16)

module.exports = fizzbuzz;