import './Projects.css';
import htmlCssImage from "../assets/html-css.png";
import localStorageImage from "../assets/localstorage.png"
import mernImage from "../assets/mern.png";
// import { useNavigate } from "react-router-dom";

function Projects() {
  // const navigate = useNavigate();

  return (
    <div className='projectTypes'>
        <button >
          <img src={htmlCssImage} alt="png" />
          Click to view
        </button>
        <button>
          <img src={localStorageImage} alt="png" />
          Click to view
        </button>
        <button>
          <img src={mernImage} alt="png" />
          Click to view
        </button>
    </div>
  );
}
export default Projects;