type chaiOrder={
    type:string;
    sugar:number;
    strong:boolean;
}

function makeChai(order:chaiOrder){
console.log(order);
}
function serverChai(order:chaiOrder){
console.log(order);
}

type teaRecipe={
    water : number;
    milk :number;
}

// class MasalaChai implements teaRecipe{
//     water=100;
//     milk=50; 
// }

interface Cupsize {
    size:"small"| "large"
}

class Chai implements Cupsize{
    size: "small" | "large"= "large"
}

// type Response ={ok :true} | {ok: false}
// class Myres implements Response{
//     ok: boolean=true
// }

type TeaType ="masala"|"ginger"|"lemon"

function orderChai(t: TeaType){
    console.log(t);    
}

type BaseChai ={teaLeaves: number}
type  Extra ={masala :number}

type MasalaChai=BaseChai& Extra

const cup :MasalaChai={
    teaLeaves:2,
    masala:1
}

type User={
    username :string;
    bio?:string
}

const u1:User= {username:"rajan"}
const u2:User={username:"rajan",bio:'rajan.ai'}


type Config={
    readonly appName :string
    version :number
}

const cfg : Config={
    appName:"masterji",
    version:1
}

// cfg.appName=""