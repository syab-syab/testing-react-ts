import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Task, AllTask } from '../types/All.types'


const Home = (props: AllTask) =>  {
  const [tasks, setTasks] = useState< Array<Task>>(props.tasks)
  const [inputValue, setInputValue] = useState<string>("");

  localStorage.setItem('home', 'home')

  console.log(tasks)

  // 削除ボタンでtasks削除
  const handleDelete = (id: number) => {
    const newTasks = tasks.filter((t) => t.id !== id)
    console.log(newTasks)
    setTasks(newTasks)
  }

  // 一意性のあるidを生成
  const createId = (): number => {
    const date = new Date()
    return date.getTime()
  }


  // 新しいTaskの登録
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 新しいTaskを作成
    const newTask: Task = {
      id: createId(),      
      content: inputValue,
      dueDate: "",
      check: false,
    };

    setTasks([newTask, ...tasks])
    setInputValue("")
  }

  // フォームの変更を検知
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  return (
    <div>
      <p>Home</p>
      <div>
        {/* 新しいTaskの作成フォーム */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            className="inputText"
            value={inputValue}
          />
          <input
            type="submit"
            value="作成"
            className="submitButton"
          />
        </form>
      </div>
      <Link to="/example">
        Example
      </Link>
      
        {
          // props.tasks.map(task => {
            tasks.map(task => {
            // return 付けないとエラー発生するから注意
            return (
            <p key={task.id}>
              <input type="checkbox" />
                {task.content}
                {/* tsだと () => method の形にしないとエラーが出る */}
                <input type='button' value="del" onClick={() => handleDelete(task.id)} />
            </p>
            )
          })
        }
    </div>
  )
}

export default Home