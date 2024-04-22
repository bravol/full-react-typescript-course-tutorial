// import fs from "fs";

// const matches = fs
//   .readFileSync("football.csv", {
//     encoding: "utf-8",
//   })
//   .split("\n")
//   .map((match: string): string[] => {
//     return match.split(",");
//   });

// console.log(matches);

// let manUnitedWins = 0;

// // for (let i = 0; i < matches.length; i++) {

// //   if (matches[i][1] === "Man United" && matches[i][5] === "H") {
// //     manUnitedWins++;
// //   } else if (matches[i][2] === "Man United" && matches[i][5] === "A") {
// //     manUnitedWins++;
// //   }
// // }

// // const homeWin = "H";
// // const awayWin = "A";
// // const draw = "D";

// //Objects
// // const MatchResult = {
// //   HomeWin: "H",
// //   AwayWin: "A",
// //   Draw: "D",
// // };

// //enum-enumeration an object that store closely related values

// enum MatchResult {
//   HomeWin = "H",
//   AwayWin = "A",
//   Draw = "D",
// }

// for (let match of matches) {
//   if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }
// console.log(` Man United wins ${manUnitedWins} games`);

//ADVANCED
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader("football.csv");
reader.read();

let manUnitedWins = 0;

// enum MatchResult {
//   HomeWin = "H",
//   AwayWin = "A",
//   Draw = "D",
// }

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(` Man United wins ${manUnitedWins} games`);
