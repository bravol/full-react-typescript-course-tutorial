"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
class MatchReader {
    constructor(read) {
        this.read = read;
        this.matches = [];
    }
    load() {
        this.read.read();
        this.matches = this.read.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5], //type assertion // 'H', 'A', 'D'
                row[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
