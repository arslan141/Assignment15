function secondDerivative(b, m) {
    // Calculate the second derivative of f(x)
    let secondDerivative = b * (b - 1) * Math.pow(m, b - 2) + b * m * Math.exp(b * m) + m * b * Math.exp(b * m);
    
    return secondDerivative;
}

// Example usage:
let b = 2;
let m = 1;
console.log("Second derivative evaluated at x = m:", secondDerivative(b, m));
