import { HtmlReport } from "./HtmlReports";
import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analysers/WinsAnalysis";

export interface Analyser {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
  constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}
