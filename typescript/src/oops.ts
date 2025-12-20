// class Chai {
//     flavour :string;
//     price:number

//     // constructor (flavour:string, price:number){
//     //     this.flavour=flavour
//     //     this.price=price
//     // }
//     constructor (flavour:string ){
//         this.flavour=flavour
//         console.log(this);
//     }
// }
// const masalaChai =new Chai("ginger")
// masalaChai.flavour = 'masala'

//AccessModifire

class chai {
  public flavor: string = "Masala";

  private secratIngredients = "cardamon";

  reveal() {
    return this.secratIngredients; //ok
  }

  // protected shopName = "computer corner" //access with in class or inheritance
}

const c = new chai();
c.reveal();

// protected
class Shop {
  protected shopName = "computer Corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName; //ok
  }
}
new Branch().getName();

// private

class Walet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}

const w = new Walet();

class Cup {
  readonly capcity: number = 250;

  constructor(capcity: number) {
    this.capcity = capcity;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("too sweet");
    this._sugar = value;
  }
}

const s = new ModernChai();
s.sugar = 3;
console.log(s);

//static

class ekChai {
  static shopName = "chaicode";

  constructor(public flavour: string[]) {}
}
console.log(ekChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log("brewing Chai ");
  }
}

// componsition
class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater:Heater){}
    make(){
        this.heater.heat
    }
}
