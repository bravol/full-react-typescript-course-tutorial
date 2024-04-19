export class NumbersCollection {
  // data: number[];

  // constructor(data: number[]){
  //     this.data=data
  // }
  //or
  constructor(public data: number[]) {
    this.data = data;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }

  get length(): number {
    return this.data.length;
  }
}
