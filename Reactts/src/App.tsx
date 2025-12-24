import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { Counter } from "./components/Counter.tsx";
import type { Chai } from "./types.ts";
import { ChaiList } from "./components/ChaiList.tsx";
import { OrderFrom } from "./components/OrderFrom.tsx";
import { Card } from "./components/Card.tsx";
const menu:Chai[]=[
  {id:1,name:"masala",price:25},
  {id:2,name:"lemon",price:65},
  {id:3,name:"ginger",price:50},
  {id:4,name:"adrak",price:30},
]
function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name="headphone" price={5000} />
        <ChaiCard name="Iphone" price={50000} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <div>
        <OrderFrom 
        onSubmit={(order)=>{
          console.log("palced",order.name,order.cups );
          
        }}/>
      </div>
<div>
  <Card
  title="chai or typescript"
  footer={<button>orderNow</button>} />

</div>

    </>
  );
}

export default App;
