import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserForm } from "./views/UserForm";

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

// const user2 = new User({ id: 1, name: "Newer name", age: 80 });
// user2.on("change", () => {
//   console.log(user2);
// });

// // user2.fetch();

// user2.save();

// const user = User.buildUser({ age: 20, id: 1, name: "Brian" });

// user.on("change", () => {
//   console.log(user);
// });
// user.fetch();

// const collection = new Collection(`http://localhost/3000/users`);
// collection.on("change", () => {
//   console.log(collection);
// });
// collection.fetch();

// const collection = new Collection<User, UserProps>(
//   `http://localhost/3000/users`,
//   (json: UserProps) => User.buildUser(json)
// );
// collection.on("change", () => {
//   console.log(collection);
// });
// collection.fetch();

// const collection = User.buildUserCollection();
// collection.on("change", () => {
//   console.log(collection);
// });
// collection.fetch();
const user = User.buildUser({ age: 23, id: 2, name: "Liz" });
const root = document.getElementById("root");
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error("Root element not found");
}
