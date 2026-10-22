
function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Spice Purchase Website',
      description:
        'Developed a website for purchasing spices using HTML, CSS and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      number: '02',
      title: 'Travel Updates Portal',
      description:
        'Developed a travel information portal using React.js and Spring Boot to display travel updates, destinations and trip details.',
      technologies: ['React.js', 'Spring Boot', 'REST API']
    }
  ];

  return (
    <section className="section">
      <p className="eyebrow">WHAT I HAVE BUILT</p>
      <h1>My Projects</h1>
      <p className="section-intro">
        A few projects where I applied my development skills.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>
              <span className="project-symbol">↗</span>
            </div>

            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tag-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
