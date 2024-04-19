"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    // data: number[];
    // constructor(data: number[]){
    //     this.data=data
    // }
    //or
    constructor(data) {
        // this.data = data;
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
