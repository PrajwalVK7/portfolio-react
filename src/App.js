import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Contact from './pages/Contact';
function App() {
  return (
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects" element={<Contact />} />
          {/* <Route path="/" element={<Home/>}/> */}
        </Routes>
        <Footer/>
      </div>

  );
}

export default App;
