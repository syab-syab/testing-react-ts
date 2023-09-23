import React from 'react'
import SelectDateTime from './SelectDateTime'

type SubmitProps = {
  inputValue: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// [ToDo]以下のものを受け取れるようにする
// handleSubmit(e), handleChange(e), inputValue=state
const SubmitForm = (props: SubmitProps) => {
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
        <SelectDateTime />
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