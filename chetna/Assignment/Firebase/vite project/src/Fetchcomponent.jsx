// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchcomponent = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(json=>setData(json.data))
    })
  return (
    <>
    <h2> Api component </h2>
<table border={'2'} > 
<tr>
    <th>Id</th>
    <th>product</th>
    <th>price</th>
    <th>category</th>
    <th>image</th>
</tr>
{
    data.map((i)=>{
        
        return(
            <>
           <tr>
            <td>{i.id}</td>
            <td>{i. title}</td>
            <td>{i.price}</td>
            <td>{i.category}</td>
            <td><img src={i.image} height={"60px"} width={"60px"}/></td>
           </tr>
           </>
        )
        
    })
}
</table> 
</>   
  )
}

export default Fetchcomponent
