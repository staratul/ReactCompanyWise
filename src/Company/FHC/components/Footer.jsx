import React from 'react'

const Footer = () => {
  return (
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 bg-dark text-light">
      <li className="nav-item"><a href="#" className="nav-link px-2">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2">About</a></li>
    </ul>
    <p className="text-center bg-dark text-light">&copy; 2024 Company, Inc</p>
  </footer>
  )
}

export default Footer