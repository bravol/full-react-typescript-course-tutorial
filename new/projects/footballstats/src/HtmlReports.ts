import fs from "fs";
import { OutputTarget } from "./Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const htm = `
    <div>
     <h1>Analysis Output</h1>
     <div>${report}</div>
    </div>
    
    `;
    fs.writeFileSync("report.html", htm);
  }
}
