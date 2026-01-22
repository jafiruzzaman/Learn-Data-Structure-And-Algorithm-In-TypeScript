export {};
// this is parent class
export class Person {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// this is child class
export class Employee extends Person {
  constructor(
    name: string,
    age: number,
    private employeeId: number,
  ) {
    super(name, age);
  }
  // setters
  public setId(employeeId: number): void {
    this.employeeId = employeeId;
  }
  // getters
  public getId(): void {
    console.log('Employee Id is: ', this.employeeId);
  }
}

// Create Instance
let employeeOne: Employee = new Employee('Mohammad', 20, 102);
employeeOne.getId();
