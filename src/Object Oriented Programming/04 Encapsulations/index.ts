namespace Encapsulations {
  export class Person {
    private age: number;
    constructor(private readonly name: string, age: number) {
      this.age = age;
    }
    // getter
    public getAge(): number {
      return this.age;
    }
    // setter
    public setAge(newAge: number): void {
      if (newAge > 0) {
        this.age = newAge;
      } else {
        console.log('Invalid Age!');
      }
    }
    // print
    public print(): void {
      console.log(`Name:${this.name}, Age:${this.age}`);
    }
  }
}

// Create Instance
const shanzida: Encapsulations.Person = new Encapsulations.Person(
  'Shanzida',
  20,
);
shanzida.print();
