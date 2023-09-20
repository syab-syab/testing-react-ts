// 一意性のあるidを生成
const createUnixTime = () => {
  const date = new Date()
  return date.getTime()
}

export default createUnixTime