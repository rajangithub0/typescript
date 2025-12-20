const chai ={
    name:"masala chai",
    price:20,
    isHot: true
}

 let tea :{
    name: string,
    price: number,
    isHot: boolean
 }

 tea={
    name:"masala tea",
    price:25,
    isHot: true 
 }

 type Tea ={
    name:string,
    price:number,
    ingredients:string[]
 }

 const adrakChai : Tea={
    name:"adrak chai ",
    price:30,
    ingredients:[
        "ginger","tealeves"
    ]
 }

 
type cup ={size:string};

let smallCup: cup ={size:"200ml"}

let bigCup= {size:"500ml", material: 'steel'}

smallCup=bigCup

type Brew ={ brewTime:number}

const coffee = {brewTime:5, beans:'Arabica'}

const chaiBrew:Brew=coffee

type User={
    username:string,
    password:string
}

const u:User={
    username:"rajan",
    password: "2ldvldsma"
}

type Item= {
    name:string, quantily:number
}

type Address= {
    street:string, pin:number
}
type Order={
    id:string;
    item:Item[];
    address:Address
}


// type Chai ={
//     name:string;
//     price:number;
//     IsHot:boolean
// }


// const updateChai=(updates:Partial<Chai>)=>{
//     console.log('update chai with',updates);
    
// }
 
//  
// updateChai({name:""})


type ChaiOrder={
    name:string,
    quantily?:number
}

const placeOrder=(order:Required<ChaiOrder>)=>{
    console.log(order);
    
}

placeOrder({
    name:"masla",
    quantily:25
})

type Chai ={
    name:string,
    price:number,
    isHot:boolean,
    items:string[]
}

type  BasicChaiInfo = Pick<Chai,"name"|"price">;

const ChaiInfo:BasicChaiInfo={
    name:'lemontea',
    price:30
}


type ChaiNew ={
    name:string,
    price:number,
    isHot:boolean,
    items:string
}


type PublicChai=Omit<Chai,"items">;


