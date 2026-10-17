function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>MÉTISSA EVENT</h2>

          <p>
            Wedding Planner
            <br />
            Drôme • Ardèche • Rhône-Alpes
          </p>
        </div>

        <div className="footer-nav">
          <h3>Navigation</h3>

          <a href="#accueil">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#services">Services</a>
          <a href="#galerie">Galerie</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Nous contacter</h3>

          <p>Drôme • Ardèche</p>
          <p>06 00 00 00 00</p>
          <p>contact@metissa-event.fr</p>

          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Métissa Event — Tous droits réservés</p>

        <p>Organisation de mariages sur mesure</p>
      </div>
    </footer>
  );
}

export default Footer;
