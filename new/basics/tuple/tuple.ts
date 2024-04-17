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
