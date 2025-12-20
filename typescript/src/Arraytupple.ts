// Array

const chaiflavours: string[] = ["masala", "gingir", "adrak"];
const chaiPrice: number[] = [1, 2, 3, 4];

const rating: Array<number> = [4.5, 5.0, 5.5];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  {
    name: "masala",
    price: 25,
  },
  {
    name: "adrak",
    price: 30,
  },
];

//read only array

const cities: readonly string[] = ["delhi", "jaipur"];
// cities.push

//  multidemsional

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//tupples

let chaiTupples: [string, number];

chaiTupples = ["masala", 20];

let userInfo: [string, number, boolean?];
userInfo = ["rajan", 25000, true];

//readonly tupples

const location: readonly [number, number] = [28.66, 25.88];

//named tuples

const chaiItems: [name: string, price: number] = ["masala", 25];

//enum

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum status {
  PENDING = 100,
  SERVED, //101
  CENCELED, //102
}

enum ChaiType {
  MASALA = "MASALA",
  GINNER = "GINGER",
}

function makechai(type: ChaiType) {
  console.log(`making :${type}`);
}

// makechai(ChaiType.GINNER)

// hiteration

// enum RandomEnum {
//   ID = 1,
//   NAME = "chai",
// }
// inside the enum used datatype ones only
 
//constant enum
 const enum Sugar{
    LOW =1,
    MEDIUM=2,
    HIGH =3
 }
 const s =Sugar.LOW 

let t : [string,number]=["chai",10]
t.push("extra")