import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/products" element={<Products/>}/> */}
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/checkout" element={<Checkout/>}/> */}
      </Routes>
      </div>
  );
}

export default App;
