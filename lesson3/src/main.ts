//arrays
let stringArr = ["one", "hy", "brian"];

let guiters = ["Strat", "les Paul", 5059];

let mixData = ["one", 1, "two", true];

stringArr[0] = "John";

stringArr.push("hey"); //adding from behind

guiters[0] = 199;

guiters.unshift("jfkf"); //adding from the begining

guiters = stringArr;
mixData = guiters;

let test: never[] = [];

let bands: string[] = [];
bands.push("nirvana");

//tuple
let myTuple: [string, number, boolean] = ["brian", 1990, true]; //more strick than an array

let mixtuple = ["string", 110, false];

//Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);

myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "brian",
  prop2: 1990,
};

exampleObj.prop1 = "John";

type Guitarist = {
  active: boolean;
  name: string;
  albums: (string | number)[];
};
//all the same as type
interface Guitarists {
  active?: boolean;
  name: string;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Brian",
  active: true,
  albums: ["1990", "1991", 10944],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["7584", "1991", "10944"],
};

evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name}`;
  }
  return "Hello Guitarist";
};

console.log(greetGuitarist(jp));

//enums

enum Grade {
  A = 5,
  B = 4.5,
  C = 4,
  D = 3.5,
  E = 3,
  F = 2.5,
}
console.log(Grade.A);
