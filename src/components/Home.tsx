import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import { Task, AllTask } from '../types/All.types'


// const Home = (props: AllTask) =>  {
const Home = () =>  {


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