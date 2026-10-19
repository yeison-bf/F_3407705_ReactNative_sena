import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../feature/landing'
import { Login } from '../feature/auth/login'
import { Layout } from '../feature/dasboard/Layout'
import { Incio } from '../feature/dasboard/Home'
import { Clients } from '../feature/dasboard/pages/clients/Clients'
import { Users } from '../feature/dasboard/pages/users/Users'

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/login' element={<Login/>} />

            <Route path='/dashboard' element={<Layout />} >
                <Route path='home' element={<Incio/>} />
                <Route path='clients' element={<Clients/>} />
                <Route path='users' element={<Users/>} />
            </Route>
        </Routes>
    )
}
