interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavor: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "code cafe",
};

// s.id =2 // it display error becasue this properity is read only.

//defination
interface DiscodeCalutator {
  (price: number): number;
}
//usecase
const apply50: DiscodeCalutator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

// index singture

interface ChaiRating {
  [flavor: string]: number;
}

const ratings: ChaiRating = {
  masala: 4.5,
  ginger: 4.5,
};


interface User{
    name:string
}
interface User{
    age:number
}
const u:User={
    name:'rajan',
    age:29
}

//extend the interface

interface A{a:string}
interface B{a:string}
interface C{a:string}

interface C extends A,B {}


