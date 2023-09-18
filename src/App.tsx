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

  type Task = {
    id: number
    content: string
    dueDate: string
    check: boolean
  }

  const testTask: Array<Task> = testData['test-data']


  localStorage.setItem("test-task", JSON.stringify(testTask))
  const getTask: any  = localStorage.getItem("test-task")

  console.log(getTask, typeof(getTask))

  const modiTask: Array<Task> = JSON.parse(getTask)

  console.log(modiTask)

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
