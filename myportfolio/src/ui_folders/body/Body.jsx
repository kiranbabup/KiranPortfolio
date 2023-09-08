import './Body.css';
import { assets } from '../../assets/assets';
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
                  <img src={a.png} alt='png' />
                </article>
              </aside>
            )
          })
        }
      </article>
      <h2>My Projects</h2>

    </div>
  );
}
export default Body;