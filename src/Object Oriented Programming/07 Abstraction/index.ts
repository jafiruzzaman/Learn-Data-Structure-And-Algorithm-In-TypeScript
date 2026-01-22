export {};
export abstract class Shape {
  abstract area(): number;
}
export class Circle extends Shape {
  constructor(private readonly radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
export class Rectangle extends Shape {
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}

const Shapes: Shape[] = [new Circle(8), new Rectangle(15, 7)];
Shapes.forEach((shape: Shape): void => {
  console.log(shape.area());
});
