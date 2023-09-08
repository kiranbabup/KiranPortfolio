import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './ui_folders/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}
export default App;