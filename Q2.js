function mimicRightShift(a, b) {
    // Base case: If a is less than 1, return b
    if (a < 1) {
        return b;
    }
    // Recursive case: Divide a by 2 and multiply b by 2, then call the function recursively
    return mimicRightShift(Math.floor(a / 2), b * 2);
}

// Example usage:
console.log(mimicRightShift(16, 3)); 
