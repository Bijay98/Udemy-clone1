import React from 'react'
import AdminDashBoard from '../../components/AdminDashBoard/AdminDashBoard'
import AdminNav from '../../components/AdminNav/AdminNav'
import AdminCategory from '../../components/AdminCategory/AdminCategory'
import AdminFooter from '../../components/AdminFooter/AdminFooter'

const AdminPage = () => {
  return (
    <div>
      {/* <AdminDashBoard/> */}
      <AdminNav/>
      <AdminCategory/>
      <AdminFooter/>
    </div>
  )
}

export default AdminPage
