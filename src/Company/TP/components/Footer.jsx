import React from 'react'

const Footer = () => {
  return (
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 bg-info text-light">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p className="text-center text-body-secondary bg-info text-light">&copy; 2024 Company, Inc</p>
  </footer>
  )
}

export default Footer