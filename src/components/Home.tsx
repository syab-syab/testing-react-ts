import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Task, AllTask } from '../types/All.types'
import createUnixTime from '../functions/createUnixTime';


const Home = (props: AllTask) =>  {
  const [tasks, setTasks] = useState< Array<Task>>(props.tasks)
  const [inputValue, setInputValue] = useState<string>("");

  localStorage.setItem('home', 'home')

  // console.log(tasks)

  // 削除ボタンでtasks削除
  const handleDelete = (id: number) => {
    const newTasks = tasks.filter((t) => t.id !== id)
    // console.log(newTasks)
    setTasks(newTasks)
  }


  // 新しいTaskの登録
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 新しいTaskを作成
    const newTask: Task = {
      // id: createId(),
      id: createUnixTime(),
      content: inputValue,
      dueDate: "",
      check: false,
    };

    // スプレッド構文
    setTasks([newTask, ...tasks])
    setInputValue("")
  }

  // フォームの変更を検知
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  // checkの値を編集
  const handleCheck = (id: number, check: boolean) => {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        t.check = !check
      }
      return t
    })

    setTasks(newTasks)
  }

  // 期日を表示
  const dateAp = (unix: string) => {
    if (!unix) {
      return "無し"
    }
    const tmp = Number(unix)
    const date = new Date(tmp)
    return `${date.getFullYear()}年 ${date.getMonth()}月 ${date.getDate()}日`
  }

  return (
    <div>
      <p>Home</p>
      <div>
        {/* 新しいTaskの作成フォーム */}
        {/* [Todo]期日を設定する項目も作成する */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            className="inputText"
            value={inputValue}
          />
          <br />
          <select>
            <option value="">2023</option>
          </select>
          <br />
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
      {/* tasksを列挙 */}
      {/* [ToDo]期日が近づいているものは点滅、過ぎたものは灰色 */}
      {
          tasks.map(task => {
          // return 付けないとエラー発生するから注意
          return (
          <p key={task.id} style={{background: task.dueDate ? "green" : "white"}}>
            <input type="checkbox" onChange={() => handleCheck(task.id, task.check)} />
              <span style={{textDecoration: task.check ? 'line-through' : 'none'}}>{task.content}</span>
              {/* tsだと () => method の形にしないとエラーが出る */}
              <input type='button' value="del" onClick={() => handleDelete(task.id)} /><br />
              <span>期日: {dateAp(task.dueDate)}</span>
          </p>
          )
        })
      }
    </div>
  )
}

export default Home