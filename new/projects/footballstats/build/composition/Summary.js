"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const HtmlReports_1 = require("./HtmlReports");
const WinsAnalysis_1 = require("./analysers/WinsAnalysis");
class Summary {
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReports_1.HtmlReport());
    }
    constructor(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyser.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
