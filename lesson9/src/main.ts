// utility types

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and readOnly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerrified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

// Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sarah" | "Kerry";
type LetterGrades = "A" | "B" | "C" | "D" | "F";

const finalGrades: Record<Students, LetterGrades> = {
  Sarah: "A",
  Kerry: "B",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sarah: {
    assign1: 90,
    assign2: 85,
  },
  Kerry: {
    assign1: 80,
    assign2: 88,
  },
};

type AssignmentResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignmentResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and extract
type adjusttedGrade = Exclude<LetterGrades, "U">;
type highGrades = Extract<LetterGrades, "A" | "B">;

// Exclude
type Letters = "a" | "b" | "c" | "d" | "e";
type Numbers = Exclude<Letters, "a">;

// Extract
type Colors = "red" | "blue" | "green";
type FilterColors = Extract<Colors, "red">;

// NonNullable
type AllPossibleGrades = "A" | "B" | "C" | "D" | "U" | null | undefined;
type NonNullGrades = NonNullable<AllPossibleGrades>;

// ReturnType
// type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters
type assignParams = Parameters<typeof createNewAssign>;

const assignArgs: assignParams = ["Generics", 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited- helps us with the ReturnType of a promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => {
  console.log(users);
});
