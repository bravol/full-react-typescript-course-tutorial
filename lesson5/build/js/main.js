"use strict";
//convert to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; //more specific
let d = "world";
let e = "Hello world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
//be careful Ts sees no prob- but a string is returned
let nexVal = addOrConcat(2, 2, "concat");
10; //double casting
//the document object model;
const img = document.querySelector("img");
const imId = document.querySelector("#myId");
const myImg = document.getElementById("#img");
img.src;
// myImg.src;
