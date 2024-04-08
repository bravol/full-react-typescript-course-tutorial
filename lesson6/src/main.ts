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
  secondLang!: string;
  constructor(
    public name: string,
    public music: string,
    private age: number,
    protected lang: string = "JS"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
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
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new webDev("mac", "Sara", "Pop", 25);
console.log(Sara.getLang());
console.log(Sara.getAge());
// console.log(Sara.lang);
// console.log(Sara.age);

//////////////////////////////////////////////////
//IMPELEMENTING INTERFACE TO A CLASS

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");

console.log(Page.play("strums"));

/////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;

  static getCount() {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Jimmy = new Peeps("Jimmy");
const Bravol = new Peeps("Bravol");

console.log(Peeps.count);
console.log(John.id);

///getters and setters

class Bands {
  private dataState: string[] = [];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
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
