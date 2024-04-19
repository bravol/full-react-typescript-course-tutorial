"use strict";
// export class CharactersCollection  {
//   constructor(public data: string) {
//     this.data = data;
//   }
//   get length(): number {
//     return this.data.length;
//   }
//   compare(leftIndex: number, rightIndex: number): boolean {
//     return (
//       this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
//     );
//   }
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
//   swap(leftIndex: number, rightIndex: number): void {
//     const characters = this.data.split(""); // split the string to enable bubble sorting
//     const leftHand = characters[leftIndex];
//     characters[leftIndex] = characters[rightIndex];
//     characters[rightIndex] = leftHand;
//     this.data = characters.join(""); //join again a string
//   }
// }
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split(""); // split the string to enable bubble sorting
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join(""); //join again a string
    }
}
exports.CharactersCollection = CharactersCollection;
