namespace MethodOverloading {
  export class Calculator {
    // Overload signatures
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    // Single implementation
    add(a: number, b: number, c?: number): number {
      return c !== undefined ? a + b + c : a + b;
    }

    // Overload signatures
    subtract(a: number, b: number): number;
    subtract(a: number, b: number, c: number): number;

    // Single implementation
    subtract(a: number, b: number, c?: number): number {
      return c !== undefined ? a - b - c : a - b;
    }

    // Overload signatures
    multiply(a: number, b: number): number;
    multiply(a: number, b: number, c: number): number;

    // Single implementation
    multiply(a: number, b: number, c?: number): number {
      return c !== undefined ? a * b * c : a * b;
    }
  }
}

const calc = new MethodOverloading.Calculator();

console.log(calc.add(2, 3)); // 5
console.log(calc.add(2, 3, 4)); // 9
console.log(calc.subtract(10, 3)); // 7
console.log(calc.multiply(2, 3)); // 6
