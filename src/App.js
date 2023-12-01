import {useState} from 'react'
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { products,categories} from "./helper/data"
import "./App.scss"

function App() {
   const [category, setCategory] = useState("ALL")
   let getProduct = []
  const handleClick = (e)=>{
    setCategory(e.target.textContent)  
    console.log(category);
  }
  if(category === "ALL"){
    getProduct = products
  } else {
    getProduct = products.filter( element=> element.category === category.toLowerCase())
  }
  return (
    <div className="App">
      <Header event={handleClick} data={categories}/>
      <ProductCard data={getProduct}/>
    </div>
  );
}

export default App;
