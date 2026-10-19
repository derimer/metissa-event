function About() {
  return (
    <section className="about" id="apropos">
      <div className="about-image">
        <img src={`${import.meta.env.BASE_URL}images/metissa.jpg`} />
      </div>

      <div className="about-content">
        <p className="section-subtitle">À propos</p>

        <h2>
          Derrière Métissa Event,
          <br />
          une passion pour les belles histoires
        </h2>

        <p>
          Chaque mariage est unique. Mon rôle est de vous accompagner avec
          écoute, douceur et attention afin de créer une célébration qui vous
          ressemble vraiment.
        </p>

        <p>
          De la recherche des prestataires à la coordination du jour J, je
          veille à chaque détail pour que vous puissiez vivre pleinement votre
          mariage.
        </p>

        <a href="#contact" className="about-link">
          Parlons de votre projet →
        </a>
      </div>
    </section>
  );
}

export default About;
