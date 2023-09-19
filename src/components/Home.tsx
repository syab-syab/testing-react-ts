import React from 'react'
import { Link } from "react-router-dom";
import { Task, AllTask } from '../types/All.types'


const Home = (props: AllTask) =>  {
  localStorage.setItem('home', 'home')

  console.log(props.tasks)

  const test = () => {
    props.tasks.forEach(element => {
      console.log(element.content)
    });
  }

  test()

  const exam: Task[] = props.tasks

  return (
    <div>
      <p>Home</p>
      <Link to="/example">
        Example
      </Link>
      
        {
          props.tasks.map(task => {
            // return 付けないとエラー発生するから注意
            return <p key={task.id}>{task.content}</p>
          })
        }
    </div>
  )
}

export default Home