import React from 'react'
import './Header.css'
import logo from '../Images/Durgapur.svg'

function Header() {
    return (
        <div className="header">
            <img src={logo} alt='logo' />
            <h1>Mechanical Engineering</h1>
        </div>
    )
}

export default Header
