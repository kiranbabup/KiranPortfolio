// import './Projects.css';

import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects">
      Projects
    <button onClick={()=>navigate('/')}>Home</button>
    </div>
  );
}
export default Projects;