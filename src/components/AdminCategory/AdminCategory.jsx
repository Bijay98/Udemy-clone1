import React, { useState } from 'react'


const AdminCategory = () => {
    const [products,setProducts]=useState([
        {
            // Categories:["web development","DataScience","Programming Language","UX/UI Designing"],
            categories,
            courses

        }
    ])
  return (
    <div className='container-fluid'>
      <ul>
        {
          products.map(prodeuct=>(
            <li key={prodeuct.id}>{prodeuct.categories}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default AdminCategory
