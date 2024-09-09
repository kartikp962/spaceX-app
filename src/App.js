import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from './components/AppLayout/AppLayout'
import Dashboard from './components/Dashboard/Dashboard'
import Rockets from './components/Rockets/Rockets'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='rockets' element={<Rockets />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
