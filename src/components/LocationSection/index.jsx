import { useState } from "react";
import "./location.css";

const stores = {
  Sydney:{
    address:"58 Oxford Street Darlinghurst NSW 2010",
    hours:[
      "Mon-Thu 11am - 6pm",
      "Fri-Sat 10am - 6pm",
      "Sun 11am - 5pm"
    ],
    image:"/store.jpg"
  },
  London:{
    address:"London Store Address",
    hours:["Mon-Sat 10am-7pm"],
    image:"/store2.jpg"
  }
};

export default function LocationSection(){
const [city,setCity] = useState("Sydney");

return(
<section className="retail">
<div className="marquee">
<span>RETAIL RETAIL RETAIL RETAIL</span>
</div>

<nav className="cities">
{Object.keys(stores).map(item=>(
<button
key={item}
onClick={()=>setCity(item)}
className={city===item ? "active" : ""}
>
{item}
</button>
))}
</nav>

<div className="retail-content">
<div className="info">
<h2>GOLF WANG {city.toUpperCase()}</h2>
<p>{stores[city].address}</p>

<h4>Store Hours</h4>
{stores[city].hours.map(hour=>(
<p key={hour}>{hour}</p>
))}
</div>

<div className="star-image">
<img src={stores[city].image} alt="" />
</div>
</div>
</section>
)
}