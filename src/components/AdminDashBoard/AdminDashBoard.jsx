import React, { useState } from 'react'

const AdminDashBoard = () => {
    const [Categories,setCategories] =useState([
        {
            Name:"web development",
            Actions:"",
        },
        {
            Name:"DataScience",
            Actions:"",
        },
        {
            Name:"UX/UI design",
            Actions:""
        },
        {
            Name:"programming Language",
            Actions:""
        }
    ])
  return (
    <div className="table table-hover">
       <h2>Category-Table-Data</h2>
       <thead>
         <tr>
            <td>Name</td>
            <td>Actions</td>
            
         </tr>
       </thead>
       <tbody>
           {
            Categories.map(category=>(
                <tr key={category.Name}>
                    <td>{category.Name}</td>
                    <td>{category.Actions}</td>
                    
                </tr>
            ))
           }
       </tbody>
    </div>
  )
}

export default AdminDashBoard
