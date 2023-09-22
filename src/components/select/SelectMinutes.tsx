import React from 'react'
import { changeProps } from '../../types/All.types'

// 後で改修
const SelectMinutes = (props: changeProps) => {
  const minutes = (): number[] => {
    let minutes = []
    for (let i:number = 0; i < 60; i++) {
      minutes.push(i)
    }
    return minutes
  }

  return (
    <div>
      <select onChange={(e) => props.onChange(e)} disabled={props.appear ? false : true} >
        {/* 秒の場合デフォルトで0 */}
        <option value="0">分を選択</option>
        {
          minutes().map((m) => {
            return <option key={m} value={m}>{m}分</option>
          })
        }
      </select>
    </div>
  )
}

export default SelectMinutes