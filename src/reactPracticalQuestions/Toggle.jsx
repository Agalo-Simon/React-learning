import React, { useCallback, useEffect, useMemo, useState } from 'react'

const Toggle = () => {
  const [products, setProducts] =useState([]);
  const [query, setQuery]= useState('');

  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(res =>res.json())
    .then(data => setProducts(data.slice(0,200)))
    .then(err => console.log(err));
  },[])

  const filterProduct = useMemo(()=>{
    return products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
  },[products, query])

  const handleSearch =useCallback((e)=>{
    setQuery(e.target.value)

  },[])
  return (
    <div>
       <input type="text" value={query} onChange={handleSearch} placeholder='Search.......'/>
       <ul>
        {
          filterProduct.map(item=>(
            <li key={item.id}>{item.title}</li>
          ))
        }
       </ul>
    </div>
  )
}

export default Toggle
