
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from "./components/Navbar";
 import About from "./components/About";
import Projects from "./components/Projects";
 import Skills from "./components/Skills";
  import Contact from "./components/Contact";
 import Footer from "./components/Footer";
import Certficates from './components/Certificates';
import "./output.css"; 



function App() {
  return (
    <Router basename="portfolio">
      <div className="App">
      
            <Navbar />
            <Routes> 
            <Route path="/" element={<About />} /> 
            <Route path="/skills" element={<Skills />} /> 
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/certificates" element={ <Certficates />} />
          <Route path="/contact" element={ <Contact />} />
             </Routes>
             <Footer /> 
            </div>
    </Router>
    
  );
}      

export default App;
