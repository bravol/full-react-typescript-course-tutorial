import { User } from "./models/User";

const user = new User({ name: "brian", age: 30 });
user.set({ name: "bravol" });
console.log(user.get("name"));
console.log(user.get("age"));

user.on("change", () => {
  console.log("Change #1");
});
user.on("save", () => {
  console.log("save was triggered");
});
// console.log(user);
user.trigger("change");
user.trigger("save");
