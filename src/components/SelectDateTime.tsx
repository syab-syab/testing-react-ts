import React, { useState } from 'react'
import SelectYear from './select/SelectYear';
import SelectMonth from './select/SelectMonth';
import SelectDate from './select/SelectDate';
import SelectHour from './select/SelectHour';
import SelectMinutes from './select/SelectMinutes';

// このコンポーネントをExample.tsxのフォームを切り出したコンポーネントに
// 入れる

const SelectDateTime = () => {
  const [year, setYear] = useState<number>()
  const [month, setMonth] = useState<number>()
  const [date, setDate] = useState<number>()
  const [hour, setHour] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)

  return (
    <div>
      {/* selectタグにdisabledを渡す */}
      {/* 年が未選択なら月を選ばせない */}
      <SelectYear />
      {/* 月が未選択なら日を選ばせない */}
      <SelectMonth />
      {/* 日が未選択なら時を選ばせない */}
      <SelectDate />
      {/* 時が未選択なら分を選ばせない */}
      <SelectHour />
      {/* 最低年月日まで必要 */}
      <SelectMinutes />
    </div>
  )
}

export default SelectDateTime