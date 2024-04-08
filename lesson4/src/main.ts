//type aliases

type stringOrNumber = string | number;
type stringNumberArray = (string | number)[];

type Guitaristss = {
  active: boolean;
  name: string;
  albums: stringNumberArray;
};

type UserId = stringOrNumber;

//this cannot work,  interface UserId = stringOrNumber;

//literal types
let myNames = "Dave";
let username: "Dave" | "Brian" | "Ananias";
username = "Brian";

//functions
const add = (c: number, d: number): number => {
  return c + d;
};

//a funtion that does not have a return
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg(add(5, 12));
logMsg("hello");

//other functions
let subtract = function (c: number, d: number): number {
  return c - d;
};
logMsg(subtract(5, 12));

//implicit return
let divide = (c: number, d: number) => c / d;

//definition of math function type all teo work the same
// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

//arrow function
let multiply: mathFunction = (c: number, d: number) => {
  return c * d;
};

logMsg(multiply(5, 2));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

logMsg(addAll(5, 12, 3));
logMsg(addAll(5, 12));

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};
logMsg(sumAll(5, 2, 3));
logMsg(sumAll(5, 2));
logMsg(sumAll(undefined, 2));

//rest parameters

const total = (...nums: number[]): number => {
  return nums.reduce((prev, cur) => prev + cur);
};
logMsg(total(1, 2, 3, 4));

const createError = (errorMsg: string): never => {
  throw new Error(errorMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "string";
  return createError("this should never happen");
};
