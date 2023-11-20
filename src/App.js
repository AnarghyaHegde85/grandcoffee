import './App.css';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Services';
import Contact from './Pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="home">
      <Routes>
      <Route path='/' exact element={<Home/>}  />
      <Route path='/Gallery' element={<Gallery/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Service' element={<Service/>} />
      <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </div>

  );
}

export default App;
