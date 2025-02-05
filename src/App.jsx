import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Counter from './Components/Counter'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
