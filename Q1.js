function maxThirdEdge(side1, side2) {
    // Maximum range would be when the third side is the difference between the sum of the two sides and 1
    return side1 + side2 - 1;
}

// Example usage:
console.log("Maximum range of third edge:", maxThirdEdge(4, 5)); 
