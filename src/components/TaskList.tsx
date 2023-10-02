import React from 'react'
import longSentenceCut from '../functions/longSentenceCut'
import showDueDate from '../functions/showDueDate'
import { Task } from '../types/All.types'
import checkDueDate from '../functions/checkDueDate'
// [ToDo]react-modalのエラーを何とかする
//        もしTypeScript環境で使えないなら代案を考える
// import Modal from "react-modal";

// ExampleとHomeから切り出したTaskのリスト

type Props = {
  tasks: Array<Task>
  // int と boolean を渡す
  onChange: (id: number, check: boolean) => void
  onClick: (id: number) => void
}

const TaskList = (props: Props) => {
  // [ToDo] 個別のTaskをクリックしたらモーダルウィンドウが出るようにする
  return (
    <div style={{textAlign: "center", margin: "auto"}} className='d-flex justify-content-center'>
    {
        props.tasks.map(task => {
        // return 付けないとエラー発生するから注意
        return (
        // 期日設定の有無でスタイル変更
        <p key={task.id} style={{borderBottom: task.dueDate ? "1rem solid green" : "", width: "auto", background: checkDueDate(task.dueDate) ? "rgba(255, 255, 128, .5)" : "gray"}}>
          {/* チェックボックスのチェックの有無でデータのプロパティ変更 */}
          <input type="checkbox" onChange={() => props.onChange(task.id, task.check)} checked={task.check ? true : false} />
          {/* checkプロパティの値によってスタイル変更 */}
            <span style={{textDecoration: task.check ? 'line-through' : 'none'}}>{task.content}</span>
            {/* tsだと () => method の形にしないとエラーが出る */}
            <input type='button' value="del" onClick={() => props.onClick(task.id)} /><br />
            <span>メモ: {longSentenceCut(task.memo)}</span><br />
            <span>期日: {showDueDate(task.dueDate)}</span>
        </p>
        )
      })
    }
    </div>
  )
}

export default TaskList