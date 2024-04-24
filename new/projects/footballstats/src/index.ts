import { CsvFileReader } from "./CsvFileReader";
import { HtmlReport } from "./HtmlReports";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
//create an object that satifies the DataReader interface
// create an instance of MatchReader and pass  in something that satisfies the dataReader interface
const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  // new ConsoleReport()
  new HtmlReport()
);
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
