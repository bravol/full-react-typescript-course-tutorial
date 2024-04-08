"use strict";
//classes
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }
class Coder {
    constructor(name, music, age, lang = "JS") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old`;
    }
}
const Brian = new Coder("Brian", "Rock", 25, "JS");
const Lumala = new Coder("Brian", "Rock", 25);
console.log(Brian.getAge());
console.log(Brian.name);
// console.log(Brian.lang);
// console.log(Brian.age);
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new webDev("mac", "Sara", "Pop", 25);
console.log(Sara.getLang());
console.log(Sara.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
/////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Jimmy = new Peeps("Jimmy");
const Bravol = new Peeps("Bravol");
console.log(Peeps.count);
console.log(John.id);
///getters and setters
class Bands {
    constructor() {
        this.dataState = [];
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Data must be an array of strings");
        }
    }
}
const Mybands = new Bands();
Mybands.data = ["Rammstein", "Nirvana"];
console.log(Mybands.data);
Mybands.data = [...Mybands.data, "Led Zeppelin"];
console.log(Mybands.data);
////////////////////////////////////////////////////////////////////
