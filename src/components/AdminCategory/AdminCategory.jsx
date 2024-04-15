import React from 'react'
import { Link } from 'react-router-dom'
import AdminCourses from '../AdminCourses/AdminCourses'

const AdminCategory = () => {
  return (
    <div className='container-fluid d-flex flex'>
      <div className='container-fluid bg-info-subtle ms-0 min-vh-100 p-5' style={{width:"20rem"}} >
        <ul style={{ listStyle: "none", fontSize: "1.5rem", padding: "5px", textAlign: "start" }}>
          <Link><li>
            Categories
          </li></Link>
          <Link> <li>
            Courses
          </li></Link>
          <Link><li>
            logout
          </li></Link>
        </ul>
      </div>
      <div  className='w-75'>
        <h2>Category-table</h2>
        <table className='table table-striped'>
        <thead>
           <tr>
             <th scope='col'>sl no.</th>
             <th scope='col'>category</th>
             <th scope='col'>actions</th>
           </tr>
         </thead>
         <tbody>
          <tr>
            <th>1</th>
            <td>web development</td>
            <td className='m-2'>
             
              <Link><button className="btn btn-success">read</button></Link>
              <Link><button className="btn btn-warning">update</button></Link>
              <Link><button className="btn btn-danger">delete</button></Link>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>programming language</td>
            <td>
             
              <Link><button className="btn btn-success">read</button></Link>
              <Link><button className="btn btn-warning">update</button></Link>
              <Link><button className="btn btn-danger">delete</button></Link>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>data Science</td>
            <td>
             
              <Link><button className="btn btn-success">read</button></Link>
              <Link><button className="btn btn-warning">update</button></Link>
              <Link><button className="btn btn-danger">delete</button></Link>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>UX/UI design</td>
            <td>
             
              <Link><button className="btn btn-success">read</button></Link>
              <Link><button className="btn btn-warning">update</button></Link>
              <Link><button className="btn btn-danger">delete</button></Link>
            </td>
          </tr>
           <tr>
             <Link><button className='btn btn-primary'>Add Catagory</button></Link>
           </tr>
         </tbody>
        </table>
        <AdminCourses/>
      </div>
    </div>
  )
}

export default AdminCategory
