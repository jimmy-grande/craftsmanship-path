// DON'T
namespace Solid.SRP.Bad {
  class Rectangle {
    public width: number;
    public height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  }

  class Circle {
    public radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
  }

  function calculateAreasOfMultipleShapes(shapes: Array<Rectangle | Circle>) {
    return shapes.reduce((calculatedArea, shape) => {
      if (shape instanceof Rectangle) {
        return calculatedArea + shape.width * shape.height;
      }
      if (shape instanceof Circle) {
        return calculatedArea + shape.radius * Math.PI;
      }
    }, 0);
  }
}

// DO
namespace Solid.SRP.Good {
  interface Shape {
    getArea(): number;
  }
  class Rectangle implements Shape {
    public width: number;
    public height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    public getArea() {
      return this.width * this.height;
    }
  }

  class Circle implements Shape {
    public radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    public getArea() {
      return this.radius * Math.PI;
    }
  }
}
