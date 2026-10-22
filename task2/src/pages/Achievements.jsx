
function Achievements() {
  const certificates = [
    {
      title: 'Front End Web Developer',
      organization: 'Infosys Springboard'
    },
    {
      title: 'Software Engineering',
      organization: 'Infosys Springboard'
    }
  ];

  return (
    <section className="section">
      <p className="eyebrow">LEARNING & GROWTH</p>
      <h1>Achievements</h1>
      <p className="section-intro">
        Certifications that reflect my interest in technology
        and continuous learning.
      </p>

      <div className="certificate-list">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={certificate.title}>
            <div className="certificate-icon">
              0{index + 1}
            </div>

            <div>
              <h2>{certificate.title}</h2>
              <p>{certificate.organization}</p>
            </div>

            <span className="certificate-check">✓</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
