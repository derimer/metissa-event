function Testimonials() {
  return (
    <section className="testimonials" id="temoignages">
      <div className="testimonials-header">
        <p className="section-subtitle">Ils nous ont fait confiance</p>

        <h2>Des mots qui comptent</h2>

        <p>
          Chaque mariage est une histoire unique. Voici quelques témoignages de
          couples accompagnés par Métissa Event.
        </p>
      </div>

      <div className="testimonials-grid">
        <article className="testimonial-card">
          <div className="stars">★★★★★</div>

          <p className="testimonial-text">
            Une organisation parfaite du début à la fin. Nous avons pu profiter
            pleinement de notre journée sans stress. Merci pour votre écoute et
            votre bienveillance.
          </p>

          <p className="testimonial-name">Julie & Thomas</p>
        </article>

        <article className="testimonial-card">
          <div className="stars">★★★★★</div>

          <p className="testimonial-text">
            Métissa Event a su comprendre exactement ce que nous voulions. Tout
            était fluide, élégant et parfaitement organisé.
          </p>

          <p className="testimonial-name">Sarah & Mehdi</p>
        </article>

        <article className="testimonial-card">
          <div className="stars">★★★★★</div>

          <p className="testimonial-text">
            Une présence rassurante, professionnelle et toujours disponible.
            Nous garderons un souvenir merveilleux de notre mariage.
          </p>

          <p className="testimonial-name">Élodie & Nicolas</p>
        </article>
      </div>

      <div className="testimonials-rating">
        <span>★★★★★</span>
        <p>5/5 sur Mariages.net</p>
      </div>
    </section>
  );
}

export default Testimonials;
