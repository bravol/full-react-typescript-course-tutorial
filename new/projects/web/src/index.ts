import { User } from "./models/User";

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// const person = new Person("Lumala", "lastName");
// console.log(person.fullName);

//const user = new User({ name: "Lumala", age: 25 });
// console.log(user.get("name"));
// user.on("change", () => {
//   console.log("User was changed, we probably need to update some HTML");
// });
// // user.trigger("change");

// user.set({ name: "new name" });

const user2 = new User({ id: 1, name: "Newer name", age: 80 });
user2.on("change", () => {
  console.log(user2);
});

// user2.fetch();

user2.save();
