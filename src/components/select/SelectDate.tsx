import React from 'react'

// 後で改修
// 月やうるう年で変更
const SelectDate = () => {
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
      <select>
        <option value="">日を選択</option>
        {
          days().map((d) => {
            return <option key={d} value={d}>{d}</option>
          })
        }
      </select>
    </div>
  )
}

export default SelectDate