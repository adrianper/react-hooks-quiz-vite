import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Counter from './Components/Counter'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <h1>Hello world</h1>
      </Routes>
    </BrowserRouter>
  )
}

export default App
