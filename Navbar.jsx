import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#282c34", color: "white" }}>
      <Link to="/" style={{ margin: "0 1rem", color: "white" }}>Home</Link>
      <Link to="/login" style={{ margin: "0 1rem", color: "white" }}>Login</Link>
      <Link to="/dashboard" style={{ margin: "0 1rem", color: "white" }}>Dashboard</Link>
    </nav>
  )
}