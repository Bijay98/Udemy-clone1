import React from 'react'
import { Link } from 'react-router-dom'
import mern from '../../assets/MERN.jpg'
import php from '../../assets/PHP.jpg'
import java from '../../assets/JAVA.png'
import dataScience from  '../../assets/datascience.jpg'
import hacking from '../../assets/Hacking.jpg'
import design from '../../assets/design.png'

const AdminCourses = () => {
    return (
        <div className='container-fluid mt-5'>
            <h2>Courses-Table</h2>
            <table className='table table-striped'>
        <thead>
           <tr>
             <th scope='col'>sl no.</th>
             <th scope='col'>Courses</th>
             <th scope='col'>image</th>
             <th scope='col'>actions</th>
           </tr>
         </thead>
         <tbody>
          <tr>
            <th>1</th>
            <td>Mern stack</td>
            <td><img src={mern} width="50px"/></td>
            <td className='m-2'>
             
              <Link><button className="btn btn-success">read</button></Link>
              <Link><button className="btn btn-warning">update</button></Link>
              <Link><button className="btn btn-danger">delete</button></Link>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>web dev with php</td>
            <td><img src={php} width="50px"/></td>
            <td>
             
              <Link><button className="btn btn-success">read</button></Link>
              <Link><button className="btn btn-warning">update</button></Link>
              <Link><button className="btn btn-danger">delete</button></Link>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>full stack java</td>
            <td><img src={java} width="50px"/></td>
            <td>
             
              <Link><button className="btn btn-success">read</button></Link>
              <Link><button className="btn btn-warning">update</button></Link>
              <Link><button className="btn btn-danger">delete</button></Link>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>Data Science</td>
            <img src={dataScience} width="65px"/>
            <td>
              
              <Link><button className="btn btn-success">read</button></Link>
              <Link><button className="btn btn-warning">update</button></Link>
              <Link><button className="btn btn-danger">delete</button></Link>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>Hacking</td>
            <img src={hacking} width="65px"/>
            <td>
              
              <Link><button className="btn btn-success">read</button></Link>
              <Link><button className="btn btn-warning">update</button></Link>
              <Link><button className="btn btn-danger">delete</button></Link>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>UX/UI design</td>
            <img src={design} width="65px"/>
            <td>
              
              <Link><button className="btn btn-success">read</button></Link>
              <Link><button className="btn btn-warning">update</button></Link>
              <Link><button className="btn btn-danger">delete</button></Link>
            </td>
          </tr>
           <tr>
             <Link><button className='btn btn-primary'>Add Courses</button></Link>
           </tr>
         </tbody>
        </table>
        </div>
    )
}

export default AdminCourses
