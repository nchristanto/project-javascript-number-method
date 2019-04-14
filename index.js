// Example 1, add numbers using reduce
const numbers = [1,3,5,7,9,11,13,15]
const initialValue = 0 

const sum = numbers.reduce((sum, current) => {
    return sum + current
}, initialValue)

console.log(sum)

// Example 2, add only odd numbers 
const arrayOfNumbers = [1,2,3,4,5,6,7,8,10]

const oddNumbers = arrayOfNumbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers)
const sumOfOdd = oddNumbers.reduce((sum,current) => {
    return sum + current
}, initialValue)

// Example 3, add only even numbers 
const evenNumbers = arrayOfNumbers.filter(number => number % 2 === 0);
// console.log(evenNumbers)
const sumOfEven = evenNumbers.reduce((sum,current) => {
    return sum + current
}, initialValue)

console.log(sumOfOdd)
console.log(sumOfEven)


