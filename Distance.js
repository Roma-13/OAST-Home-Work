class DistanceCalculator {
  constructor(x1, x2) {
    this.x1 = x1;
    this.x2 = x2;
  }

  calculateDistance() {
    return Math.abs(this.x1 - this.x2);
  }
}

// მოთხოვნის გამოძახება
const calculator = new DistanceCalculator(5, 10);
const distance = calculator.calculateDistance();
console.log(`დისტანცია x1 და x2 შორის არის: ${distance}`);
