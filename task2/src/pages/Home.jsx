
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <section className="home">
//       <div className="home-text">
//         <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

//         <h1>
//           Hi, I'm <span>Raghuram V.</span>
//         </h1>

//         <h2>Computer Science Engineering Student</h2>

//         <p className="intro">
//           I am interested in frontend and full-stack development.
//           I enjoy building responsive websites and learning
//           technologies that help me create useful web applications.
//         </p>

//         <div className="home-buttons">
//           <Link to="/projects" className="btn primary">
//             Explore Projects →
//           </Link>

//           <Link to="/about" className="btn secondary">
//             About Me
//           </Link>
//         </div>

//         <div className="quick-skills">
//           <span>HTML & CSS</span>
//           <span>JavaScript</span>
//           <span>React</span>
//           <span>Java</span>
//         </div>
//       </div>

//       <div className="home-visual">
//         <div className="visual-shape">
//           <div className="initials">RV</div>
//         </div>
//         <p>Learn · Build · Improve</p>
//       </div>
//     </section>
//   );
// }

// export default Home;
import { Link } from 'react-router-dom';
import profile from '../assets/raghu.jpeg';

function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Raghuram V.</span>
        </h1>

        <h2>Computer Science Engineering Student</h2>

        <p className="intro">
          I am interested in frontend and full-stack development.
          I enjoy building responsive websites and learning new
          technologies to create useful web applications.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="btn primary">
            Explore Projects →
          </Link>

          <Link to="/about" className="btn secondary">
            About Me
          </Link>
        </div>

        <div className="quick-skills">
          <span>HTML & CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Java</span>
        </div>
      </div>

      <div className="home-visual">
        <div className="profile-frame">
          <img
            src={profile}
            alt="Raghuram V profile"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
