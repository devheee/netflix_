import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './css/home.scss'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            Home <button onClick={() => navigate(`/main`)}>CLICK</button>
            <Outlet />
        </div>
    )
}

export default Home