"use strict";
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
let test = [];
let bands = [];
bands.push("nirvana");
//tuple
let myTuple = ["brian", 1990, true]; //more strick than an array
let mixtuple = ["string", 110, false];
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "brian",
    prop2: 1990,
};
exampleObj.prop1 = "John";
let evh = {
    name: "Brian",
    active: true,
    albums: ["1990", "1991", 10944],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["7584", "1991", "10944"],
};
evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}`;
    }
    return "Hello Guitarist";
};
console.log(greetGuitarist(jp));
//enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 5] = "A";
    Grade[Grade["B"] = 4.5] = "B";
    Grade[Grade["C"] = 4] = "C";
    Grade[Grade["D"] = 3.5] = "D";
    Grade[Grade["E"] = 3] = "E";
    Grade[Grade["F"] = 2.5] = "F";
})(Grade || (Grade = {}));
console.log(Grade.A);
