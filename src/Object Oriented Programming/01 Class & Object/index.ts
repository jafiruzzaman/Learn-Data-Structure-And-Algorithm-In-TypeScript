/*
  How to Create a Class
    Syntax:
      class class-name { 
          properties(data)
          behaviors(methods)
      }
*/
namespace ClassAndObjects {
  export class Person {
    name: string;
    age: number;
    print(): void {
      console.log(`Hello, my name is ${this.name} and age:${this.age}`);
    }
  }
}
const mohammad: ClassAndObjects.Person = new ClassAndObjects.Person(); // 🙋‍♂️ This is Object
mohammad.name = 'Mohammad';
mohammad.age = 24;
mohammad.print();
