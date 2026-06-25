
//=======================
// String Manipulation Functions
// ===========================//


// Reverse a string
function reversestring(str) {
    return str.split("").reverse().join("");
}

console.log(reversestring("Victor"))

// Count characters
function countch(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


// =======================
// Array Functions
// =======================

// Find Maximum Value
function findMax(arr) {
    return Math.max(...arr);
}

// Find Minimum Value
function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// =======================
// Mathematical Functions
// =======================

// Factorial
function factorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers";

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Fibonacci Sequence
function fibonacci(n) {
    let sequence = [];

    if (n >= 1) sequence.push(0);
    if (n >= 2) sequence.push(1);

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

