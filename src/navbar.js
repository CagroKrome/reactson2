import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='left'>
                <a className='navbar-element' href='/index'>Home</a>
                <a className='navbar-element' href='/index'>Learn React</a>
            </div>

            <div className='right'>
                <a className='navbar-element' href='/index'>Pricing</a>
                <a className='navbar-element' href='/index'>About</a>
            </div>
        </nav>
    )
}