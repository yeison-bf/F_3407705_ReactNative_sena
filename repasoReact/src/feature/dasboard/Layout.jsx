import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'

export const Layout = () => {
  return (
    <div className='contenedorLayout'>
      <div className='sidebar'>
          <p>Menu</p>
          <Sidebar/>
      </div>
      <div className='contenidosModulos'>
        <Outlet/>
      </div>
    </div>
  )
}
