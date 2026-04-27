import "./store.css";

const categories=[
{title:"NEW",img:"/new.png"},
{title:"ALL",img:"/all.png"},
{title:"TOPS",img:"/tops.png"},
{title:"BOTTOMS",img:"/bottoms.png"},
{title:"HATS",img:"/hats.png"},
];

export default function StoreSection(){
return(
<section className="store">
<h1>OUR STORE</h1>

<div className="grid">
{categories.map(item=>(
<div className="card" key={item.title}>
<img src={item.img} alt="" />
<h3>{item.title}</h3>
</div>
))}
</div>
</section>
)
}