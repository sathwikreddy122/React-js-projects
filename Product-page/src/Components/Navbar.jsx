import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/cart'><li>Cart</li></Link>
        </ul>
    </div>
  )
}
