// import React, { useState } from 'react'
import React from 'react'
import SelectYear from './select/SelectYear';
import SelectMonth from './select/SelectMonth';
import SelectDate from './select/SelectDate';
import SelectHour from './select/SelectHour';
import SelectMinutes from './select/SelectMinutes';

// このコンポーネントをExample.tsxのフォームを切り出したコンポーネントに入れる

// [ToDo] 現在よりも過去の時間を設定した場合エラーを出す

type Props = {
  states: Array<string>
  setStates: React.Dispatch<React.SetStateAction<string>>[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>, setState: React.Dispatch<React.SetStateAction<string>>) => void
}

const SelectDateTime = (props: Props) => {
  // const [year, setYear] = useState<string>('')
  // const [month, setMonth] = useState<string>('')
  // const [date, setDate] = useState<string>('')
  // const [hour, setHour] = useState<string>('')
  // const [minutes, setMinutes] = useState<string>('')

  // React.ChangeEvent<HTMLSelectElement>にしないとエラーを吐く
  // <HTMLSelectElement>が多分重要

  // 第二引数にstate更新の関数を渡す
  // const handleChangeState = (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  //   setState: React.Dispatch<React.SetStateAction<string>>
  // ): void => {
  //   setState(e.target.value)
  // }

  // const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  //   setYear(e.target.value)
  // }

  // const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  //   setMonth(e.target.value)
  // }

  // const handleChangeDate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  //   setDate(e.target.value)
  // }

  // const handleChangeHour = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  //   setHour(e.target.value)
  // }

  // const handleChangeMinutes = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  //   setMinutes(e.target.value)
  // }

  // console.log(year, month, date, hour, minutes)

  console.log(
    props.states[0],
    props.states[1],
    props.states[2],
    props.states[3],
    props.states[4]
  )


  return (
    <div>
      {/* 年が未選択なら月を選ばせない */}
      {/* <SelectYear onChange={(e) => handleChangeState(e, setYear)} /> */}
      <SelectYear onChange={(e) => props.onChange(e, props.setStates[0])} />
      {/* [ToDo]後でprops(appear)の名前変える */}
      {/* 月が未選択なら日を選ばせない */}
      {/* <SelectMonth onChange={(e) => handleChangeState(e, setMonth)} year={year} /> */}
      <SelectMonth onChange={(e) => props.onChange(e, props.setStates[1])} year={props.states[0]} />
      {/* 日が未選択なら時を選ばせない */}
      {/* <SelectDate onChange={(e) => handleChangeState(e, setDate)} year={year} month={month} /> */}
      <SelectDate onChange={(e) => props.onChange(e, props.setStates[2])} year={props.states[0]} month={props.states[1]} />
      {/* 時が未選択なら分を選ばせない */}
      {/* <SelectHour onChange={(e) => handleChangeState(e, setHour)} date={date} /> */}
      <SelectHour onChange={(e) => props.onChange(e, props.setStates[3])} date={props.states[2]} />
      {/* 最低年月日まで必要 */}
      {/* <SelectMinutes onChange={(e) => handleChangeState(e, setMinutes)} hour={hour}/> */}
      <SelectMinutes onChange={(e) => props.onChange(e, props.setStates[4])} hour={props.states[3]}/>
    </div>
  )
}

export default SelectDateTime