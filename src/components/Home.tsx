import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Task } from '../types/All.types'
import createUnixTime from '../functions/createUnixTime';
import createDueTime from '../functions/createDueTime';
// import testData from '../data/test-data.json'
import SubmitForm from './SubmitForm';
import longSentenceCut from '../functions/longSentenceCut';
import TaskList from './TaskList';


const Home = () =>  {

  // taskのデータを格納するキー
  const tasksKey = "local-task"

  // tasksに格納する用の変数
  let localTasks: Array<Task> | Array<any> = []

  // localStorageに何も入っていなければからの配列を格納しておく
  if(!(localStorage.getItem(tasksKey))) {
    localStorage.setItem(tasksKey, "")
    localTasks = []
  } else {
    const tmp: string | any = localStorage.getItem(tasksKey)
    localTasks = JSON.parse(tmp)
  }

  // タスクのstate
  const [tasks, setTasks] = useState<Array<Task> | Array<any>>(localTasks)

  // [ToDo] tasksをローカルストレージに保存できるようにする
  // tasksにローカルに保存されているtaskデータを格納する
  // もしローカルになければどうするか？


  // checkの値を編集
  const handleCheck = (id: number, check: boolean): void => {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        t.check = !check
      }
      return t
    })
    setTasks(newTasks)
    // setTasksの後に必ずsetItemを行う
    localStorage.setItem(tasksKey, JSON.stringify(newTasks))
  }

  // 期日を表示
  const dateAp = (unix: string): string => {
    if (!unix) {
      return "無し"
    }
    const tmp = Number(unix)
    const date = new Date(tmp)
    return `${date.getFullYear()}年 ${date.getMonth()}月 ${date.getDate()}日 ${date.getHours()}時 ${date.getMinutes()}分`
  }

  // 期日を過ぎているかどうか
  const checkDueDate = (val: string): boolean => {
    const tmp = Number(val)
    const currentDateTime = new Date()
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


  // --------------------- ここから期日関係 start --------------------- 
  const [year, setYear] = useState<string>('')
  const [month, setMonth] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [hour, setHour] = useState<string>('')
  const [minutes, setMinutes] = useState<string>('')

  const handleChangeDateTimeState = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    setState(e.target.value)
  }
  // --------------------- ここまで期日関係 end -----------------------
  // --------------------- ここから新タスク関係 start -----------------------
  // 追加されるタスクのstate
  const [inputValue, setInputValue] = useState<string>("")

  // 追加されるmemoのstate
  const [inputMemo, setInputMemo] = useState<string>("")

  // 削除ボタンでtasks削除
  const handleDelete = (id: number): void => {
    const newTasks = tasks.filter((t) => t.id !== id)
    setTasks(newTasks)
    // setTasksの後に必ずsetItemを行う
    localStorage.setItem(tasksKey, JSON.stringify(newTasks))
  }

  // 新しいTaskの登録
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // 新しいTaskを作成
    const newTask: Task = {
      // 現在のUNIX時間ならidは被らない
      id: createUnixTime(),
      content: inputValue,
      // [ToDo]期日を反映させる
      dueDate: createDueTime([year, month, date, hour, minutes]),
      memo: inputMemo,
      check: false,
    };

    // スプレッド構文
    const tmpTasks: Task[] = [newTask, ...tasks]
    setTasks(tmpTasks)
    // このsetItemだけ特殊(スプレッド構文のせい)
    localStorage.setItem(tasksKey, JSON.stringify(tmpTasks))
    setInputValue("")
    console.log(tasks)


    // 終わったら期日の各stateを初期化
    setYear("")
    setMonth("")
    setDate("")
    setHour("")
    setMinutes("")
  }

  // フォームの変更を検知
  const inputValueHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  }

    // inputMemo用
    const inputMemoHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInputMemo(e.target.value)
    }

  // --------------------- ここまで新タスク関係 end -------------------------

  return (
    <div>
      <p>Home</p>
      <div>
        <SubmitForm
          inputValue={inputValue}
          dateTimeStates={[year, month, date, hour, minutes]}
          setDateTimeStates={[setYear, setMonth, setDate, setHour, setMinutes]}
          inputMemo={inputMemo}
          onSubmit={(e) => handleSubmit(e)}
          onChange={(e) => inputValueHandleChange(e)}
          onChangeDateTimeState={handleChangeDateTimeState}
          onChangeMemo={(e) => inputMemoHandleChange(e)}
        />
      </div>
      <p>
        {year} {month} {date} {hour} {minutes}
      </p>
      {/* [ToDo] タスクをflex-boxで良い感じにして、レスポンシブ対応させる。画面を小さくしたら一列にすること */}
      {/* [ToDo] 余りに文が長ければ省略すること。省略した文は後述のポップアップ表示で全文表示させる */}
      {/* [ToDp] タスクをクリックしたらポップアップを表示する */}
      {/* <div style={{textAlign: "center", margin: "auto"}} className='d-flex justify-content-center'>
      {
          tasks.map(task => {
          return (
          <p key={task.id} style={{borderBottom: task.dueDate ? "1rem solid green" : "", width: "auto", background: checkDueDate(task.dueDate) ? "rgba(255, 255, 128, .5)" : "gray"}}>
            <input type="checkbox" onChange={() => handleCheck(task.id, task.check)} checked={task.check ? true : false} />
              <span style={{textDecoration: task.check ? 'line-through' : 'none'}}>{task.content}</span>
              <input type='button' value="del" onClick={() => handleDelete(task.id)} /><br />
              <span>メモ: {longSentenceCut(task.memo)}</span><br />
              <span>期日: {dateAp(task.dueDate)}</span>
          </p>
          )
        })
      }
      </div> */}
      {/* [ToDo] TaskListがちょっと不安なので色々試してみる */}
      {/* [ToDo] 不安なので↑の原形は消さない */}
      <TaskList
        tasks={tasks}
        onChange={handleCheck}
        onClick={handleDelete}
      />
      <Link to="/example">
        Example
      </Link>
    </div>
  )
}

export default Home