import React, {useState} from 'react'
import longSentenceCut from '../functions/longSentenceCut'
import showDueDate from '../functions/showDueDate'
import { Task } from '../types/All.types'
import checkDueDate from '../functions/checkDueDate'
// react-modalは使わない
// 自力でモーダルを作れそう
// [ToDo]モーダル以外の手を考える

// ExampleとHomeから切り出したTaskのリスト

type Props = {
  tasks: Array<Task>
  // int と boolean を渡す
  onChange: (id: number, check: boolean) => void
  onClick: (id: number) => void
}

const TaskList = (props: Props) => {
  // const [isOpen, setIsOpen] = useState(false)

  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //     padding: 0,
  //   },
  // }

  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  // }
  // [ToDo] 個別のTaskをクリックしたらモーダルウィンドウが出るようにする
  return (
    <div style={{textAlign: "center", margin: "auto"}} className='d-flex justify-content-center'>
    {
        props.tasks.map(task => {
        // return 付けないとエラー発生するから注意
        return (
        // 期日設定の有無でスタイル変更
        <p
          key={task.id}
          style={{borderBottom: task.dueDate ? "1rem solid green" : "", width: "auto", background: checkDueDate(task.dueDate) ? "rgba(255, 255, 128, .5)" : "gray"}}
          // onClick={toggleModal}
        >
          {/* チェックボックスのチェックの有無でデータのプロパティ変更 */}
          <input type="checkbox" onChange={() => props.onChange(task.id, task.check)} checked={task.check ? true : false} />
          {/* checkプロパティの値によってスタイル変更 */}
          <span style={{textDecoration: task.check ? 'line-through' : 'none'}}>{task.content}</span>
          {/* tsだと () => method の形にしないとエラーが出る */}
          <input type='button' value="del" onClick={() => props.onClick(task.id)} /><br />
          <span onClick={() => alert(task.memo)}>メモ: {longSentenceCut(task.memo)}</span><br />
          <span>期日: {showDueDate(task.dueDate)}</span>
          {/* ここにモーダルのソースコード */}

        </p>
        )
      })
    }
    </div>
  )
}

export default TaskList