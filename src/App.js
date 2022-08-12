import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catagories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Catagories />} />
      </Routes>
    </>
  );
}

export default App;
