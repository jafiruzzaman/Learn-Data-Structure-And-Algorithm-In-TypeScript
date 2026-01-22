export {};

export class Person {
  name: string;
  age: number;
  religion: string;
  constructor(name: string, age: number, religion: string) {
    this.name = name;
    this.age = age;
    this.religion = religion;
  }
  displayInfo(): void {
    console.log(
      `Name: ${this.name} age: ${this.age} and Person's Religion: ${this.religion}`,
    );
  }
}

let tuhin: Person = new Person('Mohammad Tuhin', 22, 'Islam');

tuhin.displayInfo();
