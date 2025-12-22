function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({
  flavor: "ginger",
});

function pair <A,B> (a:A,b:B):[A,B]{
    return [a,b]
}

pair ("masala","test")
pair ("masala",{flavor:"ginger" })

// generics interface

interface Box <T>{
    content:T
}

const numberBox : Box <string>={
    content:'10'
}
const numberBoxCup : Box <number>={
    content:10
}

///real world use

interface ApiPromise<T>{
    status :number,
    data:T
}

const res :ApiPromise <{flavor:string}>={
    status:200,
    data:{flavor:"masala"}
}

