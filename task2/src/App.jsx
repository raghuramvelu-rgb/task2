// // import { useState } from 'react'
// // import heroImg from './assets/hero.png'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" />
// //         </div>
// //         <div>
// //           <h1>Get started</h1>
// //           <p>
// //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>
// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>
// //           <h2>Documentation</h2>
// //           <p>Your questions, answered</p>
// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 <img className="logo" src={viteLogo} alt="" />
// //                 Explore Vite
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>
// //                 X.com
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App

// import { Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Welcome to our website!</p>
//       <button onClick={() => navigate('/about')}>About</button>
//       <button onClick={() => navigate('/services')}>Services</button>
//       <button onClick={() => navigate('/products')}>Products</button>
//       <button onClick={() => navigate('/contact')}>Contact</button>
//     </div>
//   );
// }

// function About() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>Learn more about our website.</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/services')}>Services</button>
//     </div>
//   );
// }

// function Services() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Our Services</h1>
//       <p>We provide web development services.</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/products')}>Products</button>
//     </div>
//   );
// }

// function Products() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Our Products</h1>
//       <p>Explore our latest products.</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/contact')}>Contact</button>
//     </div>
//   );
// }

// function Contact() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <p>Email: info@example.com</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/about')}>About</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }

// export default App;

import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Education from './pages/Education';
import About from './pages/About';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <header className="navbar">
        <NavLink to="/" className="logo">
          <span>RV</span> PORTFOLIO
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/achievements">Achievements</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/about">About Me</NavLink>
        </nav>

        <button
          className="mode-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Change color theme"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
