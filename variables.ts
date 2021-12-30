let id:number = 55;
let myName: string = 'Rakibul';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Classes
class Car {}
let car: Car = new Car();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];

// Object 
let point: { x: number; y: string } = {
  x: 10,
  y: 'test',
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const printName=(name:string):void=> {
  console.log(name);
  
}
