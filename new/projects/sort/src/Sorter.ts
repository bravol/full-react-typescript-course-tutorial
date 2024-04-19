// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

// export class Sorter {
//   constructor(public collection: Sortable) {
//     this.collection = collection;
//   }

//   sort(): void {
//     const { length } = this.collection;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection.compare(j, j + 1)) {
//           this.collection.swap(j, j + 1);
//         }
//       }
//     }
//   }
// }

export abstract class Sorter {
  //methods of the future/ eventually exist: we promise we will implement those methods in the future
  abstract compare(leftIndex: number, rightIndex: number): boolean; //abstract method
  abstract swap(leftIndex: number, rightIndex: number): void; //abstract method
  abstract length: number; //abstract property
  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
