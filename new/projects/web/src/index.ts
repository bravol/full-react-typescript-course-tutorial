import { User } from "./models/User";

const user = new User({ name: "brian", age: 30 });
user.set({ name: "bravol" });
console.log(user.get("name"));
console.log(user.get("age"));
