import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Matches from './pages/Matches'
import Merch from './pages/Merch'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/merch" element={<Merch />} />
    </Routes>
  )
}

export default App
