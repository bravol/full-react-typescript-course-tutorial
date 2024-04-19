"use strict";
// class Node {
//   next: Node | null = null;
//   constructor(public data: number) {
//     this.data = data;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
// export class LinkedList {
//   head: Node | null = null;
//   //add node
//   add(data: number): void {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let tail = this.head;
//     while (tail.next) {
//       tail = tail.next;
//     }
//     tail.next = newNode;
//   }
//   get length(): number {
//     if (!this.head) {
//       return 0;
//     }
//     let length = 1;
//     let node = this.head;
//     while (node.next) {
//       length++;
//       node = node.next;
//     }
//     return length;
//   }
//   //node at index
//   at(index: number): Node {
//     if (!this.head) {
//       throw new Error("Index out of bounds");
//     }
//     let counter = 0;
//     let node: Node | null = this.head;
//     while (node) {
//       if (counter === index) {
//         return node;
//       }
//       counter++;
//       node = node.next;
//     }
//     throw new Error("Index out of bounds");
//   }
//   //compare
//   compare(leftIndex: number, rightIndex: number): boolean {
//     if (!this.head) {
//       throw new Error("List is empty");
//     }
//     return this.at(leftIndex).data > this.at(rightIndex).data;
//   }
//   //swap
//   swap(leftIndex: number, rightIndex: number): void {
//     if (!this.head) {
//       throw new Error("List is empty");
//     }
//     const leftNode = this.at(leftIndex);
//     const rightNode = this.at(rightIndex);
//     const leftHand = leftNode.data;
//     leftNode.data = rightNode.data;
//     rightNode.data = leftHand;
//   }
//   //print
//   print(): void {
//     if (!this.head) {
//       return;
//     }
//     let node: Node | null = this.head;
//     while (node) {
//       console.log(node.data);
//       node = node.next;
//     }
//   }
// }
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.data = data;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    //add node
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    //node at index
    at(index) {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    }
    //compare
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    //swap
    swap(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    //print
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
