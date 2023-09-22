import React from 'react'
import { changeProps } from '../../types/All.types'

// 後で改修
const SelectHour = (props: changeProps) => {
  const hours = (): number[] => {
    let hour = []
    for (let i: number = 0; i < 24; i++) {
      hour.push(i)
    }
    return hour
  }

  return (
    <div>
      <select onChange={(e) => props.onChange(e)} disabled={props.appear ? false : true}>
        {/* hourの場合デフォルトで0 */}
        <option value="0">時を選択</option>
        {
          hours().map((h) => {
            return <option key={h} value={h}>{h}時</option>
          })
        }
      </select>
    </div>
  )
}

export default SelectHour