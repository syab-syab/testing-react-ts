import React from 'react'

// 後で改修
const SelectHour = () => {
  const hours = (): number[] => {
    let hour = []
    for (let i: number = 0; i < 24; i++) {
      hour.push(i)
    }
    return hour
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value, "時")
  }

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
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