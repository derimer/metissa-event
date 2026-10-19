
function Gallery() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="gallery" id="galerie">
      <div className="gallery-header">
        <p className="section-subtitle">Notre univers</p>

        <h2>
          Des instants uniques,
          <br />
          des souvenirs inoubliables
        </h2>

        <p>
          Découvrez quelques-uns des mariages et des moments que Métissa Event a
          eu le bonheur d'accompagner.
        </p>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item gallery-large">
          <img
            src={`${base}images/galerie-1.jpg`}
            alt="Mariage organisé par Métissa Event"
          />
        </div>

        <div className="gallery-item">
          <img
            src={`${base}images/galerie-2.jpg`}
            alt="Décoration de mariage"
          />
        </div>

        <div className="gallery-item">
          <img
            src={`${base}images/galerie-3.jpg`}
            alt="Réception de mariage"
          />
        </div>

        <div className="gallery-item">
          <img
            src={`${base}images/galerie-4.jpg`}
            alt="Cérémonie de mariage"
          />
        </div>

        <div className="gallery-item">
          <img
            src={`${base}images/galerie-5.jpg`}
            alt="Décoration Métissa Event"
          />
        </div>
      </div>

      <div className="gallery-button">
        <a href="#contact">Confiez-nous votre mariage →</a>
      </div>
    </section>
  );
}

export default Gallery;
