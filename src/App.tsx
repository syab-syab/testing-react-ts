import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
// import Chart from './components/Chart';
import Home from './components/Home';
import Example from './components/Example';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// [ToDo]
// ・ローカルストレージ
// ・ルーティング
// ・入力フォーム
// ・チェックボタン

function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/example" element={<Example tasks={modiTask} />} /> */}
          <Route path="/example" element={<Example />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
