let subs: number | string = 10; //it called union

let apiRequestStatus: "pending" | "success" | "error" = "pending";

let airLineSeat: "aisle" | "window" | "middle" = "aisle";

airLineSeat = "window";

const orders = ["12", "20", "28", "42"];

let currentOrder:string|undefined;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
  currentOrder="11"
}
console.log(currentOrder)