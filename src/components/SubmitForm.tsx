import React from 'react'
import SelectDateTime from './SelectDateTime'


type SubmitProps = {
  inputValue: string
  dateTimeStates: string[]
  setDateTimeStates: React.Dispatch<React.SetStateAction<string>>[]
  inputMemo: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeDateTimeState: (e: React.ChangeEvent<HTMLSelectElement>, setState: React.Dispatch<React.SetStateAction<string>>) => void
  onChangeMemo: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// [ToDo]以下のものを受け取れるようにする
const SubmitForm = (props: SubmitProps) => {

  return (
    <div>
      {/* 新しいTaskの作成フォーム */}
      <form onSubmit={(e) => props.onSubmit(e)}>
        <div className='input-group mb-3'>
          <span className="input-group-text" id="task-name">
            タスク名(必須)
          </span>
          <input
            type="text"
            onChange={(e) => props.onChange(e)}
            className="form-control"
            id='flaotingTask'
            value={props.inputValue}

            aria-label="タスク名(必須)"
            aria-describedby="task-name"
            placeholder='タスク名'
          />
        </div>


        <br />
        <SelectDateTime
          states={[
            props.dateTimeStates[0],
            props.dateTimeStates[1],
            props.dateTimeStates[2],
            props.dateTimeStates[3],
            props.dateTimeStates[4],
          ]}
          
          setStates={[
            props.setDateTimeStates[0],
            props.setDateTimeStates[1],
            props.setDateTimeStates[2],
            props.setDateTimeStates[3],
            props.setDateTimeStates[4],
          ]}
          onChange={props.onChangeDateTimeState}
        />
        <div className="input-group mb-3">
        <span className="input-group-text" id="memo">メモ(任意)</span>
          <input
            type="text"
            onChange={(e) => props.onChangeMemo(e)}
            className="form-control"
            value={props.inputMemo}
            placeholder='メモ'
            aria-label='メモ'
            aria-describedby='memo'
          />
        </div>

        <br />
        <input
          type="submit"
          value="追加"
          className="btn btn-outline-dark"
        />
      </form>
    </div>
  )
}

export default SubmitForm