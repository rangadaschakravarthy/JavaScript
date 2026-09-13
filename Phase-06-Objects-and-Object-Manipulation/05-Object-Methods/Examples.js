// Day 05 Examples
const calculator = {
  brand: "Casio",
  // Method shorthand syntax
  add(a, b) {
    return a + b;
  },
  describe() {
    return `Calculator Brand: ${this.brand}`;
  }
};

console.log("Method add(10, 20):", calculator.add(10, 20)); // 30
console.log("Method describe():", calculator.describe()); // "Calculator Brand: Casio"
