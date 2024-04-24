"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const HtmlReports_1 = require("./HtmlReports");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analysers/WinsAnalysis");
//create an object that satifies the DataReader interface
// create an instance of MatchReader and pass  in something that satisfies the dataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), 
// new ConsoleReport()
new HtmlReports_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches); //a example of composition
// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
//   if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }
// console.log(` Man United wins ${manUnitedWins} games`);
