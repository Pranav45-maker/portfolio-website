function Projects() {
  const projects = [
    {
      title:
        "Face Recognition System",
      tech: "Python, OpenCV"
    },
    {
      title:
        "Electricity Billing System",
      tech: "Java, MySQL"
    },
    {
      title:
        "Donation Management System",
      tech:
        "React, Spring Boot"
    }
  ];

  return (
    <section
      id="projects"
      className="container mt-5"
    >
      <h2>Projects</h2>

      <div className="row">
        {projects.map((p, i) => (
          <div
            className="col-md-4"
            key={i}
          >
            <div className="card p-3">
              <h4>{p.title}</h4>

              <p>{p.tech}</p>

              <button className="btn btn-primary">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;