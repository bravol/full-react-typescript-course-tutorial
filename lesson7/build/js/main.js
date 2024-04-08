"use strict";
// interface TransactionObj {
//   readonly [index: string]: number;
// }
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: -20,
};
console.log(todaysTransaction.Pizza);
console.log(todaysTransaction["Pizza"]);
let prop = "Pizza";
console.log(todaysTransaction[prop]);
const student = {
    name: "Jen",
    GPA: 2.7,
    classes: [100, 3030],
};
// for (const key in student) {
//   console.log(`${key}: ${student[key]}`);
// }
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(key);
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]}`);
};
console.log(logStudentKey(student, "GPA"));
console.log(logStudentKey(student, "name"));
const monthlyIncomes = {
    Salary: 500,
    Bonus: 100,
    SideHustle: 50,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
