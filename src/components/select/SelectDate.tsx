import React from 'react'
import { changeProps } from '../../types/All.types'

// 後で改修
// 月やうるう年で変更
const SelectDate = (props: changeProps) => {
  const days = (): number[] => {
    let days = []
    // 31日間=32, 30日間=31, 28日間=29, 29日間=30 
    for (let i: number = 0; i < 32; i++) {
      days.push(i)
    }
    return days
  }

  return (
    <div>
      <select onChange={(e) => props.onChange(e)} disabled={props.appear ? false : true} >
        <option value="">日を選択</option>
        {
          days().map((d) => {
            return <option key={d} value={d}>{d}日</option>
          })
        }
      </select>
    </div>
  )
}

export default SelectDate