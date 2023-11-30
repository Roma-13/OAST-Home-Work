class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    calculateDistance(otherPoint) {
      const dx = this.x - otherPoint.x;
      const dy = this.y - otherPoint.y;
  
      return Math.sqrt(dx * dx + dy * dy);
    }
  }
  
  const point1 = new Point(0, 0);
  const point2 = new Point(3, 4);
  
  const distance = point1.calculateDistance(point2);
  console.log(`დისტანცია არის: ${distance}`);
  