"use strict";
//type aliases
//this cannot work,  interface UserId = stringOrNumber;
//literal types
let myNames = "Dave";
let username;
username = "Brian";
//functions
const add = (c, d) => {
    return c + d;
};
//a funtion that does not have a return
const logMsg = (message) => {
    console.log(message);
};
logMsg(add(5, 12));
logMsg("hello");
//other functions
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(5, 12));
//implicit return
let divide = (c, d) => c / d;
//arrow function
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(5, 2));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(5, 12, 3));
logMsg(addAll(5, 12));
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(5, 2, 3));
logMsg(sumAll(5, 2));
logMsg(sumAll(undefined, 2));
//rest parameters
const total = (...nums) => {
    return nums.reduce((prev, cur) => prev + cur);
};
logMsg(total(1, 2, 3, 4));
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "string";
    return createError("this should never happen");
};
