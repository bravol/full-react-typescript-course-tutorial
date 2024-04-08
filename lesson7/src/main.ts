//index signatures
//useful when creating te objects but you do not now the shape
interface TransactionObj {
  readonly [index: string]: number;

  Pizza: number;
  Books: number;
  Job: number;
}
// interface TransactionObj {
//   readonly [index: string]: number;
// }

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: -20,
};

console.log(todaysTransaction.Pizza);
console.log(todaysTransaction["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransaction[prop]);

//////////////////////////////
interface Student {
  //   [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Jen",
  GPA: 2.7,
  classes: [100, 3030],
};

// for (const key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(key);
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`${key}: ${student[key]}`);
};

console.log(logStudentKey(student, "GPA"));
console.log(logStudentKey(student, "name"));

////////////////////////////////

// interface incomes {
//   [key: string]: number;
// }

type Streams = "Salary" | "Bonus" | "SideHustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  Salary: 500,
  Bonus: 100,
  SideHustle: 50,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
