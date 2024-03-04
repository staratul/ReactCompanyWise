import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/it4t.png'

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom header">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </header>
  )
}

export default Header