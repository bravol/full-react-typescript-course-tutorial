type One = string;
type Two = string | number;
type Three = "hello";
//convert to more or less specific

let a: One = "hello";
let b = a as Two; //less specific
let c = a as Three; //more specific

let d = <One>"world";
let e = <string | number>"Hello world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

//be careful Ts sees no prob- but a string is returned
let nexVal: number = addOrConcat(2, 2, "concat") as number;

10 as unknown as string; //double casting

//the document object model;
const img = document.querySelector("img") as HTMLImageElement;
const imId: Element | null = document.querySelector("#myId");
const myImg: HTMLElement = document.getElementById("#img")!;

img.src;
// myImg.src;
