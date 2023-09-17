import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
// import Chart from './components/Chart';
import Home from './components/Home';
import Other from './components/Other';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// [ToDo]
// ・ローカルストレージ
// ・ルーティング
// ・入力フォーム
// ・チェックボタン

function App() {
  localStorage.setItem("App", "App.tsx")

  return (
    <div className="App">
      <Header />
      <h2>React TypeScript test</h2>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
