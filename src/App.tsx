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

  const testTask = testData['test-data']
  localStorage.setItem("test-task", JSON.stringify(testTask))
  const getTask = localStorage.getItem("test-task")
  // getTaskをJSON.parseするとエラー発生

  const tagName = testData['default-tag']
  console.log(tagName)

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
