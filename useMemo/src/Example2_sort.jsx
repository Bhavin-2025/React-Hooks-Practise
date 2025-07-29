import { useState, useMemo } from "react";

const initialProducts = [
    { id: 1, name: "Apple", price: 200 },
    { id: 2, name: "Banana", price: 100 },
    { id: 3, name: "Grapes", price: 300 },
    { id: 4, name: "Cherry", price: 1500 },
    { id: 5, name: "Gauva", price: 220 }
];



export default function ProductLists(){
    const[sortBy,sortSetBy] = useState('name');

    const sortedProducts = useMemo(()=>
        {
        console.log("Sorting Products...");

        const productCopy = [...initialProducts];
        
        if(sortBy==='name'){
            return productCopy.sort((a,b)=>a.name.localeCompare(b.name))
        }else if(sortBy==='price'){
            return productCopy.sort((a,b)=>a.price-b.price)
        
        }else{
            return productCopy;
        }
    },[sortBy]
    )

    return(<>
    <h2 className="text-2xl my-2 text-amber-900">ProductList</h2>
    <select value={sortBy}  onChange={(e)=>sortSetBy(e.target.value)}>
        <option value="name">Name (A-Z)</option>
        <option value="price">Price (low-High)</option>
    </select>
    <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </>)
}
