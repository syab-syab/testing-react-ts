import React from 'react'
import SelectDateTime from './SelectDateTime'
import { useState } from 'react'

type SubmitProps = {
  inputValue: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// [ToDo]以下のものを受け取れるようにする
// handleSubmit(e), handleChange(e), inputValue=state
const SubmitForm = (props: SubmitProps) => {
  const [year, setYear] = useState<string>('')
  const [month, setMonth] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [hour, setHour] = useState<string>('')
  const [minutes, setMinutes] = useState<string>('')
  
  const handleChangeState = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    setState(e.target.value)
  }

  return (
    <div>
      {/* 新しいTaskの作成フォーム */}
      {/* [Todo]期日を設定する項目も作成する */}
      <form onSubmit={(e) => props.onSubmit(e)}>
        <input
          type="text"
          onChange={(e) => props.onChange(e)}
          className="inputText"
          value={props.inputValue}
        />
        <br />
        <SelectDateTime
          states={[year, month, date, hour, minutes]}
          setStates={[setYear, setMonth, setDate, setHour, setMinutes]}
          onChange={handleChangeState}
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