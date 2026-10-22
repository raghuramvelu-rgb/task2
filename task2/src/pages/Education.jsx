
function Education() {
  const education = [
    {
      qualification: 'B.E. - Computer Science Engineering',
      institution: 'S.A. Engineering College',
      year: '2023 - 2027'
    },
    {
      qualification: 'Higher Secondary Education',
      institution: 'National Matriculation Higher Secondary School',
      year: '2021 - 2023'
    },
    {
      qualification: 'SSLC',
      institution: 'National Matriculation Higher Secondary School',
      year: '2020 - 2021'
    }
  ];

  return (
    <section className="section">
      <p className="eyebrow">MY ACADEMIC JOURNEY</p>
      <h1>Education</h1>
      <p className="section-intro">
        My educational background and academic journey.
      </p>

      <div className="education-list">
        {education.map((item, index) => (
          <div className="education-item" key={item.qualification}>
            <div className="timeline-marker">
              {index + 1}
            </div>

            <div className="education-card">
              <span className="date">{item.year}</span>
              <h2>{item.qualification}</h2>
              <p>{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
