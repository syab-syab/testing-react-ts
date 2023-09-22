import React from 'react'

// 後で改修
const SelectYear = () => {
  const years = (): number[] => {
    const date = new Date()
    const year = date.getFullYear()
    let years = []
    for (let i:number = 0; i < 21; i++) {
      years.push(year + i)
    }
    return years
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log(e.target.value, "年")
  }

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        <option value="">年を選択</option>
        {
          years().map((y) => {
            return <option key={y} value={y}>{y}</option>
          })
        }
      </select>
    </div>
  )
}

export default SelectYear