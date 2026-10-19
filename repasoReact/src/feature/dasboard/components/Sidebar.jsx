import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <ul>
        <li><Link to="/dashboard/home" >Inicio</Link></li>
        <li><Link to="/dashboard/users" >Usuarios</Link></li>
        <li><Link to="/dashboard/clients" >Clientes</Link></li>
        <li><Link to="/" >Salir</Link></li>
    </ul>
  )
}
