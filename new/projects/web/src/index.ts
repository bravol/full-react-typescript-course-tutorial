// import { User } from "./models/User";

// const user = new User({ name: "brian", age: 30 });
// user.set({ name: "bravol" });
// console.log(user.get("name"));
// console.log(user.get("age"));

// user.on("change", () => {
//   console.log("Change #1");
// });
// user.on("save", () => {
//   console.log("save was triggered");
// });
// // console.log(user);
// user.trigger("change");
// user.trigger("save");

import axios from "axios";
import { User } from "./models/User";

// // axios.post("http://localhost:3000/users", {
// //   name: "bravol",
// //   age: 20,
// // });
// axios.get("http://localhost:3000/users/1");

const user = new User({ id: 1 });
const user2 = new User({ name: "Lumala", age: 25 });
user.fetch();

setTimeout(() => {
  console.log(user);
}, 4000);

user.set({ name: "new name", age: 21 });
user.save();
user2.save();
user.events.on("change", () => {
  console.log("change!");
});
user.events.trigger("change");
