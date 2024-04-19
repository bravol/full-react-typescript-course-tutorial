// class Sorter {
//   collection: number[];

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

import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

// //sorting array of the numbers
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// //sorting string
// const charactersCollection = new CharactersCollection("hello");
// const sorter1 = new Sorter(charactersCollection);
// sorter1.sort();
// console.log(charactersCollection.data);

// //sorting linked lists
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

// const sorter2 = new Sorter(linkedList);
// sorter2.sort();
// linkedList.print();

//AFTER MAKING SORTER ABSTRACT
//when using absctract, you do not use interfaces

//sorting array of the numbers
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

//sorting string
const charactersCollection = new CharactersCollection("hello");
charactersCollection.sort();
console.log(charactersCollection.data);

//sorting linked lists
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
