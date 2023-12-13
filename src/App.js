
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      {/* <Route path="/" element={<Home/>}/> */}

    </Routes>
    </>
  );
}

export default App;
