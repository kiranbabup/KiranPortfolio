import './Body.css';
import { assets } from '../../assets/assets';
import htmlCssImage from "../../assets/html-css.png";
import localStorageImage from "../../assets/localstorage.png"
import mernImage from "../../assets/mern.png";
function Body() {
  return (
    <div className="body">
      <section>
        <h1>About My Passion</h1>
        <p>I am a passionate and enthusiastic Full Stack Developer with a solid foundation in both front-end and back-end development. With a strong understanding of programming languages, frameworks, and databases, I am eager to contribute to the development and deployment of innovative web applications.</p>
      </section>
      <h2>My Skills</h2>
      <article id='pngMapBox'>
        {
          assets.map((a) => {
            return (
              <aside>
                <article className='imageBox'>
                  <img src={a.png} alt='png' className='skillImages' />
                </article>
              </aside>
            )
          })
        }
      </article>
      <h2>My Projects</h2>
      <article className='projectDetails'>
        <div className='projectInfo'><button> <img src={htmlCssImage} alt="png" /> </button> <h5>Click the Logo to view the Projects which are built using HTML & CSS</h5></div>
        <div className='projectInfo'><button> <img src={localStorageImage} alt="png" /> </button><h5>Click the Logo to view the Projects which are built using HTML, CSS, Zustand & LocalStorage</h5></div>
        <div className='projectInfo'><button> <img src={mernImage} alt="png" /> </button><h5>Click the Logo to view the Projects which are built using MongoDB, Express, ReactJS & NodeJS</h5></div>
      </article>
    </div>
  );
}
export default Body;