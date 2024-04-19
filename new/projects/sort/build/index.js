"use strict";
// class Sorter {
//   collection: number[];
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
//   sort(): void {
//     // const length = this.collection.length;
//     const { length } = this.collection; //or distructuring
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection[j] > this.collection[j + 1]) {
//           const leftHand = this.collection[j];
//           this.collection[j] = this.collection[j + 1];
//           this.collection[j + 1] = leftHand;
//         }
//       }
//     }
//   }
// }
// const sorter = new Sorter([10, 2, 5, 1, 9, -7]);
// sorter.sort();
// console.log(sorter.collection);
//WORKS BUT NOT THE BEST WAY
// class Sorter {
//   collection: number[] | string;
//   constructor(collection: number[] | string) {
//     this.collection = collection;
//   }
//   sort(): void {
//     // const length = this.collection.length;
//     const { length } = this.collection; //or distructuring
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         // all of this only works if collection is number[]
//         //if collection is an array of numbers
//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//         }
//         //Only going to work if collection is a string
//         //If collection is a string, do this logic instead
//         if(typeof this.collection === 'string'){
//         }
//       }
//     }
//   }
// }
// const sorter = new Sorter([10, 2, 5, 1, 9, -7]);
// sorter.sort();
// console.log(sorter.collection);
// const sorter = new Sorter([10, 2, 5, 1, 9, -7]);
// sorter.sort();
// console.log(sorter.collection);
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
const Sorter_1 = require("./Sorter");
//sorting array of the numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
//sorting string
const charactersCollection = new CharactersCollection_1.CharactersCollection("hello");
const sorter1 = new Sorter_1.Sorter(charactersCollection);
sorter1.sort();
console.log(charactersCollection.data);
//sorting linked lists
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sorter2 = new Sorter_1.Sorter(linkedList);
sorter2.sort();
linkedList.print();
