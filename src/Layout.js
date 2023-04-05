import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = ({ genreList }) => {
    return (
        <div>
            <Header genreList={genreList} />
            <Outlet />
        </div>
    )
}

export default Layout