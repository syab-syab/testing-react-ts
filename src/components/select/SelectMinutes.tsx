import React from 'react'

// 後で改修
const SelectMinutes = () => {
  const minutes = (): number[] => {
    let minutes = []
    for (let i:number = 0; i < 60; i++) {
      minutes.push(i)
    }
    return minutes
  }

  return (
    <div>
      <select>
        <option value="">分を選択</option>
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