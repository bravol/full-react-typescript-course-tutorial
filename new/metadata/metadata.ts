import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi there", plane, "color");
// Reflect.defineMetadata("height", 10, plane);

// // console.log(plane);

// // const note = Reflect.getMetadata("note", plane);
// const note = Reflect.getMetadata("note", plane, "color");
// const height = Reflect.getMetadata("height", plane);
// console.log(note);
// console.log(height);

@printMetaData
class Plane {
  color: string = "red";

  @markFunction
  fly(): void {
    console.log("flyyyyyiiiiinnnnnggggg");
  }
  @markFunctionn("hello")
  jump(): void {
    console.log("flyyyyyiiiiinnnnnggggg");
  }
}

//plain decorator
function markFunction(target: Plane, key: string) {
  Reflect.defineMetadata("secret", 123, target, key);
}

//factory decorator
function markFunctionn(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetaData(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
const secretInfo = Reflect.getMetadata("secret", Plane.prototype, "jump");

console.log(secret);
console.log(secretInfo);
