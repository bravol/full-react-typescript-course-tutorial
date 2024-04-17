//tuple is array like structure where each element represents some property of a record
//tuple is fixed in size
//tuple is typed

const drint = {
  color: "red",
  price: 100,
  carbonated: true,
};

//type alias
type Drink = [string, number, boolean];

//tuple
const pepsi: [string, number, boolean] = ["red", 100, true];
const sprite: Drink = ["clear", 100, true];
const tea: Drink = ["brown", 300, false];
//array
// const pepsi2: (string | number | boolean)[] = ["red", 100, true];

//why we are not going to use tuple
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354,
};
