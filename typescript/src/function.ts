function makeChai(type:string,cups:number){
    console.log(`making ${cups} cups of ${type}`);
}

makeChai("masala",2)

function getChaiPrice():number{
    return 25
}

function makeOrder(order:string):string|null{
    if(!order) return null;
    return order
}

function logChai():void{
console.log(`chai is ready`);
}

//optional parameter 

// function orderChai(type?:string){

// }
function orderChai(type:string="masalap"){

}

function createChai(order:{
    type:string;
    sugar:number;
    size:"small"|"large"
}):number{
    return 4
}
