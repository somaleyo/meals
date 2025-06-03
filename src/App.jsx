import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import See from './Pages/Content'
import Detail from './Pages/Detail'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Beef from './Pages/Beef'
import Pasta from './Pages/Pasta'
import Home from './Pages/Home'





function App() {
  return (
    
      <Routes>
        <Route path="/see" element={<See />} />
        <Route path="/pasta" element={<Pasta />} />
        <Route path="/beef" element={<Beef />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipe/:id" element={<Detail />} />
      </Routes>
   
  )
}

export default App