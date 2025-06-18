import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import ExploreActivity from './pages/explore'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreActivity />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  )
}

export default App
