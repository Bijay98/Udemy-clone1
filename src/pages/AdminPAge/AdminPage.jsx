import React from 'react'
import AdminDashBoard from '../../components/AdminDashBoard/AdminDashBoard'
import AdminNav from '../../components/AdminNav/AdminNav'
import AdminCategory from '../../components/AdminCategory/AdminCategory'

const AdminPage = () => {
  return (
    <div>
      {/* <AdminDashBoard/> */}
      <AdminNav/>
      <AdminCategory/>
    </div>
  )
}

export default AdminPage
