let id: number = 5;

let company: string = "Traversy Media";
let idPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello", {}];

let tuple: [number, string, boolean] = [1, "gg", true];
// tuple Array
let employee: [number, string][];

employee = [[1, "ggg"]];

// union
let pid: string | number;
pid = 22;
pid = "22";
// enums
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

// objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "John",
};

// type Assertion
//treat an entity as diff type

let cid: any = 1;
let customerID = <number>cid;
let customerID2 = cid as number;

// Function

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

function log(message: string | number): void {
  console.log(message);
}
log("Hello");
log(1);

// Interface
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}
const user2: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes

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

// subclasses
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "shawn", "developer");
console.log(emp.register());


// Generics

function getArray<T>(items:T[]): T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<String>(["brad", "John", "Jill"]);

strArray.push("hello");