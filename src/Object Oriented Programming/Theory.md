# 🚀 Object-Oriented Programming (OOP) in TypeScript

![OOP](https://img.shields.io/badge/OOP-Concepts-blue) ![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6) ![Programming](https://img.shields.io/badge/Programming-Paradigm-orange)

Object-Oriented Programming (OOP) is a **programming paradigm** that organizes software around **objects** (data + behavior) using **classes as blueprints**.  

---

## 1️⃣ Class 🏗️
A **class** is a blueprint for creating objects. It defines **properties** (data) and **methods** (behavior).  

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
````

---

## 2️⃣ Object 🧩

An **object** is an instance of a class created at runtime.

```ts
const person1 = new Person("Jafiruzzaman", 24);
person1.greet(); // Hello, my name is Jafir
```

---

## 3️⃣ Constructor 🔧

A **constructor** initializes an object’s state at the time of creation.

---

## 4️⃣ Methods ⚙️

**Methods** are functions inside a class that operate on object data.

---

## 5️⃣ Access Modifiers 🔐

| Modifier    | Scope              | Example                     |
| ----------- | ------------------ | --------------------------- |
| `public`    | Anywhere           | ✅ Access from any class     |
| `protected` | Class + Subclasses | ✅ Access from class & child |
| `private`   | Class only         | ❌ Access only inside class  |

---

## 6️⃣ Encapsulation 🛡️

Encapsulation **bundles data and methods together** while controlling access to internal state.

**Rules:**

1. Make fields **private**
2. Access them via **getter** and **setter**

```ts
class BankAccount {
  private balance: number = 0;

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }
}
```

---

## 7️⃣ Inheritance 🌳

Inheritance allows a **child class** to inherit properties and methods from a **parent class**.

* `extends` → inherit parent class
* `super` → pass constructor values to parent

```ts
class Employee extends Person {
  employeeId: number;

  constructor(name: string, age: number, employeeId: number) {
    super(name, age);
    this.employeeId = employeeId;
  }
}
```

---

## 8️⃣ Abstraction 🎭

Abstraction focuses on **what an object does**, not **how it does it**.

* **Abstract Class**: Cannot be instantiated; may contain abstract methods.
* **Abstract Method**: Declared without implementation; implemented by child classes.

```ts
abstract class Vehicle {
  abstract start(): void;

  move() {
    console.log("Vehicle is moving");
  }
}
```

---

## 9️⃣ Polymorphism 🔄

Polymorphism = **many forms**.

1. **Compile-time Polymorphism (Method Overloading)**
   Same method name, different parameters (type or number).

2. **Runtime Polymorphism (Method Overriding)**
   Child class provides its own implementation via inheritance or interface.

```ts
class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
```

---

## ✨ Key Takeaways

* OOP organizes code into **classes and objects**
* Promotes **reusability** and **modularity**
* Core Concepts: **Encapsulation, Inheritance, Abstraction, Polymorphism**

---

## 📚 Resources

* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/classes.html)
* [MDN Web Docs - OOP](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)

---

**Happy Coding!** 💻🚀