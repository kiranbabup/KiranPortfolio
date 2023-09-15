import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './ui_folders/Home';
// import Projects from './projects/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}
export default App;