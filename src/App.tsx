import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MyProjectsPage from './pages/MyProjectsPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<MyProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App