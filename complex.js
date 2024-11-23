// This file contains a variety of operations for testing purposes.

function calculateSum(a, b) {
    // Calculate the sum of two numbers.
    return a + b;
}

function reverseString(s) {
    // Reverse a given string.
    return s.split("").reverse().join("");
}

function generateFibonacci(n) {
    // Generate a Fibonacci sequence of length n.
    const sequence = [0, 1];
    while (sequence.length < n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
}

function checkPrime(num) {
    // Check if a number is a prime number.
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


