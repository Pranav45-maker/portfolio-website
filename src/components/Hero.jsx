function Hero() {
  return (
    <section
      className="container text-center mt-5"
    >
      <img
        src="../images/profile.png"
        alt="profile"
        width="200"
        className="rounded-circle"
        loading="lazy"
      />

      <h1>
        Hi, I'm Pranav Bagal
      </h1>

      <h4>
        Computer Science Engineer
      </h4>

      <p>
        React | Spring Boot | SQL
      </p>
    </section>
  );
}

export default Hero;