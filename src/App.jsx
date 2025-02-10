import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Counter from './Components/Counter'
import Deliveries from './Components/Deliveries'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Deliveries />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
