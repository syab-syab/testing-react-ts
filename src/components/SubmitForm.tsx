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
        <input
          type="text"
          onChange={(e) => props.onChange(e)}
          className="inputText"
          value={props.inputValue}
        />
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
        <br />
        <input
          type="text"
          onChange={(e) => props.onChangeMemo(e)}
          // className="inputText"
          value={props.inputMemo}
        />
        <br />
        <input
          type="submit"
          value="作成"
          className="submitButton"
        />
      </form>
    </div>
  )
}

export default SubmitForm