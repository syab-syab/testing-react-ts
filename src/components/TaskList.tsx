import React from 'react'
import longSentenceCut from '../functions/longSentenceCut'
import showDueDate from '../functions/showDueDate'
import { Task } from '../types/All.types'
import checkDueDate from '../functions/checkDueDate'

// ExampleとHomeから切り出したTaskのリスト

type Props = {
  tasks: Array<Task>
  // int と boolean を渡す
  // onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  // onClick: (e: React.MouseEventHandler<HTMLSelectElement>) => void
}

const taskList = (props: Props) => {
  return (
    <div style={{textAlign: "center", margin: "auto"}} className='d-flex justify-content-center'>
    {
        props.tasks.map(task => {
        // return 付けないとエラー発生するから注意
        return (
        // 期日設定の有無でスタイル変更
        <p key={task.id} style={{borderBottom: task.dueDate ? "1rem solid green" : "", width: "auto", background: checkDueDate(task.dueDate) ? "rgba(255, 255, 128, .5)" : "gray"}}>
          {/* チェックボックスのチェックの有無でデータのプロパティ変更 */}
          {/* <input type="checkbox" onChange={(e) => props.onChange(e)} checked={task.check ? true : false} /> */}
          {/* checkプロパティの値によってスタイル変更 */}
            <span style={{textDecoration: task.check ? 'line-through' : 'none'}}>{task.content}</span>
            {/* tsだと () => method の形にしないとエラーが出る */}
            {/* <input type='button' value="del" onClick={(task) => props.onClick(task.id)} /><br /> */}
            <span>メモ: {longSentenceCut(task.memo)}</span><br />
            <span>期日: {showDueDate(task.dueDate)}</span>
        </p>
        )
      })
    }
    </div>
  )
}

export default taskList