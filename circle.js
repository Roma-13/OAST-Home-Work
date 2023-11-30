class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  const circle = new Circle(5);
  const area = circle.calculateArea();
  const circumference = circle.calculateCircumference();
  
  console.log(`წრის ფართობია: ${area}`);
  console.log(`წრის რადიუსია: ${circumference}`);
  