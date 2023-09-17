import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  localStorage.setItem('home', 'home')

  return (
    <div>
      <p>Home</p>
      <Link to="/example">
        Example
      </Link>
    </div>
  )
}

export default Home