import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import About from "./About"
import Contact from './Contact';
import Home from './Home';
import Map from './Map';


function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
      </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/map" element={<Map/>} />
        </Routes>      
    </div>
  );
}

export default App;
