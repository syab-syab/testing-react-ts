import React from 'react'
import { changeProps } from '../../types/All.types'
import { isDisabled } from '@testing-library/user-event/dist/utils'


// 後で改修
const SelectMonth = (props: changeProps) => {
  return (
    <div>
      <select onChange={(e) => props.onChange(e)} disabled={props.appear ? false : true}>
        <option value="">月を選択</option>
        <option value="1">1月</option>
        <option value="2">2月</option>
        <option value="3">3月</option>
        <option value="4">4月</option>
        <option value="5">5月</option>
        <option value="6">6月</option>
        <option value="7">7月</option>
        <option value="8">8月</option>
        <option value="9">9月</option>
        <option value="10">10月</option>
        <option value="11">11月</option>
        <option value="12">12月</option>
      </select>
    </div>
  )
}

export default SelectMonth