function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <p className="section-subtitle">Nos formules</p>

        <h2>
          Un accompagnement pensé
          <br />
          pour chaque couple
        </h2>

        <p>
          Que vous souhaitiez nous confier l'organisation complète, être
          accompagnés sur certaines étapes ou simplement profiter pleinement du
          jour J, nous adaptons notre accompagnement à votre projet.
        </p>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <span className="service-number">01</span>

          <h3>Organisation complète</h3>

          <p>
            Nous vous accompagnons de la première idée jusqu'au jour de votre
            mariage.
          </p>

          <ul>
            <li>Recherche des prestataires</li>
            <li>Gestion du budget</li>
            <li>Planning et organisation</li>
            <li>Conseils et décoration</li>
            <li>Coordination du jour J</li>
          </ul>

          <a href="#contact">En savoir plus →</a>
        </article>

        <article className="service-card">
          <span className="service-number">02</span>

          <h3>Organisation partielle</h3>

          <p>
            Vous avez déjà commencé les préparatifs ? Nous prenons le relais là
            où vous en avez besoin.
          </p>

          <ul>
            <li>Analyse de votre organisation</li>
            <li>Recherche des prestataires manquants</li>
            <li>Conseils personnalisés</li>
            <li>Suivi du planning</li>
            <li>Accompagnement jusqu'au mariage</li>
          </ul>

          <a href="#contact">En savoir plus →</a>
        </article>

        <article className="service-card">
          <span className="service-number">03</span>

          <h3>Coordination Jour J</h3>

          <p>
            Tout est prêt. Le jour venu, vous profitez de votre mariage pendant
            que nous gérons les coulisses.
          </p>

          <ul>
            <li>Coordination des prestataires</li>
            <li>Gestion du déroulement</li>
            <li>Suivi du planning</li>
            <li>Gestion des imprévus</li>
            <li>Présence le jour du mariage</li>
          </ul>

          <a href="#contact">En savoir plus →</a>
        </article>
      </div>
    </section>
  );
}

export default Services;
