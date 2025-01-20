import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import PopularActivityComponent from './components/PopularActivity';

function App() {

  return (
   <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/component" element={<PopularActivityComponent />} /> */}
      </Routes>
    </Router>
   </>
  )
}

export default App
