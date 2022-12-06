import Layout from './components/Layout';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path='/linkedin' component={() => { 
     window.location.href = 'https://www.linkedin.com/in/jack-mcwilliams1996/'; 
     return null;
}}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
