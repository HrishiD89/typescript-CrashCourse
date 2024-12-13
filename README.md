# TypeScript Basics

This document explains the basic features of TypeScript demonstrated through code snippets. It covers variable types, arrays, tuples, enums, objects, type assertions, functions, interfaces, classes, and generics.

## 1. Variables and Types
TypeScript introduces strong typing to JavaScript.
```typescript
let id: number = 5;
let company: string = "Hrishikesh Kalita";
let idPublished: boolean = true;
let x: any = "Hello";
```
- **number, string, boolean**: Define specific data types.
- **any**: Allows any type of value (avoids strict typing).

## 2. Arrays
Type-safe arrays can be defined with specific or mixed types.
```typescript
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello", {}];
```
- **number[]**: Array of numbers.
- **any[]**: Array with mixed data types.

## 3. Tuples
Tuples allow fixed-length arrays with specific types for each position.
```typescript
let tuple: [number, string, boolean] = [1, "gg", true];
let employee: [number, string][];
employee = [[1, "ggg"]];
```
- Tuples are useful for structured data with fixed types.

## 4. Union Types
A variable can have more than one type using unions.
```typescript
let pid: string | number;
pid = 22;
pid = "22";
```
- Union `string | number`: Allows a value to be either a string or a number.

## 5. Enums
Enums define named constants for easier management.
```typescript
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction2.Up);
```
- **Numeric Enums**: Default index values.
- **String Enums**: Assign custom string values.

## 6. Objects and Type Aliases
Type aliases define the structure of an object.
```typescript
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "John",
};
```
- **type User**: Ensures an object adheres to a specific shape.

## 7. Type Assertions
Type assertions tell the compiler to treat a value as a specific type.
```typescript
let cid: any = 1;
let customerID = <number>cid;
let customerID2 = cid as number;
```
- Used when you know more about a value's type than TypeScript does.

## 8. Functions
Functions can define parameter and return types.
```typescript
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));

function log(message: string | number): void {
  console.log(message);
}
log("Hello");
log(1);
```
- **Return Types**: Specify the type of value a function returns.
- **`void`**: Used for functions that do not return a value.

## 9. Interfaces
Interfaces define the structure of objects and functions.
```typescript
interface UserInterface {
  id: number;
  name: string;
  age?: number; // Optional property
}
const user2: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;
```
- **Optional Properties**: `age?` allows for properties that may or may not exist.
- **Function Interfaces**: Specify the structure of a function.

## 10. Classes
Classes with constructors, properties, and methods.
```typescript
class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return ` ${this.name} is now registered`;
  }
}
const brad = new Person(3, "brad");
console.log(brad.register());
```
- **Inheritance**: Extend functionality using subclasses.
```typescript
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(3, "shawn", "developer");
console.log(emp.register());
```
- Subclasses inherit properties and methods from the parent class.

## 11. Generics
Generics allow reusable code for multiple types.
```typescript
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "Jill"]);
strArray.push("hello");
```
- **`<T>`**: A placeholder for any type.
- Generics improve code reusability and type safety.

## Summary
This document demonstrates the core features of TypeScript:
- **Static Typing**: Variables and function types ensure better code reliability.
- **Interfaces and Type Aliases**: Create reusable data structures.
- **Classes and Generics**: Enable advanced object-oriented programming.

By using TypeScript, you get better tooling, error-checking, and maintainability for your JavaScript projects.
