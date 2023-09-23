import React, { useState } from 'react'
import SelectYear from './select/SelectYear';
import SelectMonth from './select/SelectMonth';
import SelectDate from './select/SelectDate';
import SelectHour from './select/SelectHour';
import SelectMinutes from './select/SelectMinutes';

// このコンポーネントをExample.tsxのフォームを切り出したコンポーネントに入れる

// [ToDo] 現在よりも過去の時間を設定した場合エラーを出す

const SelectDateTime = () => {
  const [year, setYear] = useState<string>('')
  const [month, setMonth] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [hour, setHour] = useState<string>('')
  const [minutes, setMinutes] = useState<string>('')

  // React.ChangeEvent<HTMLSelectElement>にしないとエラーを吐く
  // <HTMLSelectElement>が多分重要

  const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setYear(e.target.value)
  }

  const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setMonth(e.target.value)
  }

  const handleChangeDate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setDate(e.target.value)
  }

  const handleChangeHour = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setHour(e.target.value)
  }

  const handleChangeMinutes = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setMinutes(e.target.value)
  }

  console.log(year, month, date, hour, minutes)


  return (
    <div>
      {/* 年が未選択なら月を選ばせない */}
      <SelectYear onChange={(e) => handleChangeYear(e)} />
      {/* [ToDo]後でprops(appear)の名前変える */}
      {/* 月が未選択なら日を選ばせない */}
      <SelectMonth onChange={(e) => handleChangeMonth(e)} year={year} />
      {/* 日が未選択なら時を選ばせない */}
      <SelectDate onChange={(e) => handleChangeDate(e)} year={year} month={month} />
      {/* 時が未選択なら分を選ばせない */}
      <SelectHour onChange={(e) => handleChangeHour(e)} date={date} />
      {/* 最低年月日まで必要 */}
      <SelectMinutes onChange={(e) => handleChangeMinutes(e)} hour={hour}/>
    </div>
  )
}

export default SelectDateTime