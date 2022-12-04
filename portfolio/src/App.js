import Layout from './components/Layout';
import './App.css';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Layout />} />
    </Routes>
    </>
  );
}

export default App;
