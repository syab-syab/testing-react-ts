import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Task, AllTask } from '../types/All.types'
import createUnixTime from '../functions/createUnixTime';
import testData from '../data/test-data.json'
import SelectYear from './SelectYear';
import SelectMonth from './SelectMonth';
import SelectDate from './SelectDate';

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
  const handleDelete = (id: number): void => {
    const newTasks = tasks.filter((t) => t.id !== id)
    setTasks(newTasks)
  }

  // 新しいTaskの登録
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
    console.log(tasks)
  }

  // フォームの変更を検知
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  // checkの値を編集
  const handleCheck = (id: number, check: boolean): void => {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        t.check = !check
      }
      return t
    })

    setTasks(newTasks)
  }

  // 期日を表示
  const dateAp = (unix: string): string => {
    if (!unix) {
      return "無し"
    }
    const tmp = Number(unix)
    const date = new Date(tmp)
    return `${date.getFullYear()}年 ${date.getMonth()}月 ${date.getDate()}日`
  }



  // 期日を過ぎているかどうか
  const checkDueDate = (val: string): boolean => {
    const tmp = Number(val)
    const currentDateTime = new Date
    // 期日を過ぎていない or 設定されていないなら true を返す
    if (tmp > currentDateTime.getTime() || val === "") {
      return true
    // 過ぎているなら false を返す
    } else if (currentDateTime.getTime() >= tmp ) {
      return false
    } else {
      return true
    }
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
          <SelectYear />
          <SelectMonth />
          <SelectDate />
          <br />
          <input
            type="submit"
            value="作成"
            className="submitButton"
          />
        </form>
      </div>
      <div style={{textAlign: "center", margin: "auto"}}>
      {
          tasks.map(task => {
          // return 付けないとエラー発生するから注意
          return (
          // 期日設定の有無でスタイル変更
          <p key={task.id} style={{borderBottom: task.dueDate ? "1rem solid green" : "", width: "auto", background: checkDueDate(task.dueDate) ? "rgba(255, 255, 128, .5)" : "gray"}}>
            {/* チェックボックスのチェックの有無でデータのプロパティ変更 */}
            <input type="checkbox" onChange={() => handleCheck(task.id, task.check)} />
            {/* checkプロパティの値によってスタイル変更 */}
              <span style={{textDecoration: task.check ? 'line-through' : 'none'}}>{task.content}</span>
              {/* tsだと () => method の形にしないとエラーが出る */}
              <input type='button' value="del" onClick={() => handleDelete(task.id)} /><br />
              <span>期日: {dateAp(task.dueDate)}</span>
          </p>
          )
        })
      }
      </div>
      <Link to='/'>
        homeへ戻る
      </Link>
    </div>
  )
}

export default Example