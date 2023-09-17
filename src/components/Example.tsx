import React from 'react'
import { Link } from "react-router-dom";

const Example = () => {


  return (
    <div>
      <p>使用例</p>
      <Link to='/'>
        homeへ戻る
      </Link>
    </div>
  )
}

export default Example