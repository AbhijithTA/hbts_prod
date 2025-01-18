import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';

function App() {

  return (
   <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
