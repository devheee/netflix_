import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Header = ({ genreList }) => {
    return (
        <header className='Header'>
            <div className="inner flex">
                <h1>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
                    </Link>
                </h1>
                <nav className='gnb'>
                    <ul className='flex'>
                        {
                            genreList.map((it, idx) => {
                                return (
                                    <li key={idx}>
                                        <Link to={it}>{it}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <Search />
            </div>
        </header>
    )
}

export default Header