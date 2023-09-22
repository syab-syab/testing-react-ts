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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value, "分")
  }

  return (
    <div>
      <select onChange={(e) => handleChange(e)} >
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