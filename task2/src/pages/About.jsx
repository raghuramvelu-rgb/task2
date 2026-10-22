
function About() {
  return (
    <section className="section">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h1>About Me</h1>

      <p className="about-intro">
        I'm Raghuram V, a Computer Science Engineering student
        interested in web development. I enjoy creating websites,
        improving my programming skills and learning how frontend
        and backend technologies work together.
      </p>

      <h2 className="subheading">Technical Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <span className="skill-icon">01</span>
          <h3>Frontend Technologies</h3>
          <p>HTML, CSS</p>
        </div>

        <div className="skill-card">
          <span className="skill-icon">02</span>
          <h3>Programming Languages</h3>
          <p>JavaScript, Java</p>
        </div>

        <div className="skill-card">
          <span className="skill-icon">03</span>
          <h3>Backend Development</h3>
          <p>Spring Boot, REST API, MySQL</p>
        </div>

        <div className="skill-card">
          <span className="skill-icon">04</span>
          <h3>Design & Prototyping</h3>
          <p>Canva, Figma</p>
        </div>
      </div>

      <h2 className="subheading">Internship Experience</h2>

      <div className="internship-card">
        <div className="internship-heading">
          <div>
            <h3>Approtech R&D Solutions</h3>
            <p>Full Stack Developer</p>
          </div>

          <span className="date">May - June 2026</span>
        </div>

        <p>
          Worked on responsive web applications using Java,
          Spring Boot, React and MySQL. The work included REST
          API integration and database management.
        </p>
      </div>
    </section>
  );
}

export default About;
