// 一意性のあるidを生成(現在の日時をunix時間にすれば被らない)
const createUnixTime = () => {
  const date = new Date()
  return date.getTime()
}

export default createUnixTime