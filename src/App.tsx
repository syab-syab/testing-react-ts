import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
// import Chart from './components/Chart';
import Home from './components/Home';
import Example from './components/Example';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import testData from './data/test-data.json'

// [ToDo]
// ・ローカルストレージ
// ・ルーティング
// ・入力フォーム
// ・チェックボタン

function App() {

  // 格納されるJSONの型
  type Task = {
    id: number
    content: string
    dueDate: string
    check: boolean
  }

  // 必要ないかもしれんけど一応型定義
  const testTask: Array<Task> = testData['test-data']
  localStorage.setItem("test-task", JSON.stringify(testTask))

  // string型だとエラーになるからやむを得ずanyにした
  const getTask: any  = localStorage.getItem("test-task")
  console.log(getTask, typeof(getTask))

  // なぜこの型定義で成功したのかいまいちわかってないので後日チェック
  const modiTask: Array<Task> = JSON.parse(getTask)
  console.log(modiTask)

  // 個別に取り出すことが出来た
  const test = modiTask.filter(e => e.id === 1)
  console.log(test[0].content)


  return (
    <div className="App">
      <Header />
      <h2>React TypeScript test</h2>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
