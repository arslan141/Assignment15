function triangularNumber(n) {
    // Calculate the nth term of the sequence
    return (n * (n + 1)) / 2;
}

// Example usage:
let n = 5;
console.log("Triangular Number Sequence up to the", n + "th term:", triangularNumber(n));
