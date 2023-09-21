import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Task, AllTask } from '../types/All.types'
import createUnixTime from '../functions/createUnixTime';
import testData from '../data/test-data.json'

// const Example = (props: AllTask) => {
const Example = () => {

  // 必要ないかもしれんけど一応型定義
  // AllTaskにしたいけどエラーが出る
  const testTask: Array<Task> = testData['test-data']
  localStorage.setItem("test-task", JSON.stringify(testTask))

  // string型だとエラーになるからやむを得ずanyにした
  const getTask: any  = localStorage.getItem("test-task")

  // なぜこの型定義で成功したのかいまいちわかってないので後日チェック
  // const modiTask: Array<Task> = JSON.parse(getTask)
  const modiTask: Array<Task> = JSON.parse(getTask)

  const [tasks, setTasks] = useState< Array<Task>>(modiTask)
  const [inputValue, setInputValue] = useState<string>("");

  // 削除ボタンでtasks削除
  const handleDelete = (id: number) => {
    const newTasks = tasks.filter((t) => t.id !== id)
    setTasks(newTasks)
  }

  // 新しいTaskの登録
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 新しいTaskを作成
    const newTask: Task = {
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
      <p>Example</p>
      <p>使用例</p>
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
      <Link to='/'>
        homeへ戻る
      </Link>
    </div>
  )
}

export default Example