function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <p className="section-subtitle">Contact</p>

        <h2>
          Parlons de votre
          <br />
          mariage
        </h2>

        <p className="contact-intro">
          Vous avez une date, une idée ou simplement l'envie d'échanger sur
          votre projet ?
        </p>

        <p className="contact-intro">
          Racontez-nous votre histoire et imaginons ensemble le mariage qui vous
          ressemble.
        </p>

        <div className="contact-details">
          <div>
            <span>Email</span>
            <p>contact@metissa-event.fr</p>
          </div>

          <div>
            <span>Téléphone</span>
            <p>06 00 00 00 00</p>
          </div>

          <div>
            <span>Zone d'intervention</span>
            <p>Drôme • Ardèche • Rhône-Alpes</p>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Votre prénom</label>
              <input type="text" placeholder="Prénom" />
            </div>

            <div className="form-group">
              <label>Votre nom</label>
              <input type="text" placeholder="Nom" />
            </div>
          </div>

          <div className="form-group">
            <label>Votre email</label>

            <input type="email" placeholder="votre@email.fr" />
          </div>

          <div className="form-group">
            <label>Date prévue du mariage</label>

            <input type="date" />
          </div>

          <div className="form-group">
            <label>Quel accompagnement recherchez-vous ?</label>

            <select defaultValue="">
              <option value="" disabled>
                Choisissez une formule
              </option>

              <option>Organisation complète</option>

              <option>Organisation partielle</option>

              <option>Coordination Jour J</option>

              <option>Je ne sais pas encore</option>
            </select>
          </div>

          <div className="form-group">
            <label>Parlez-nous de votre projet</label>

            <textarea
              rows="6"
              placeholder="Quelques mots sur votre mariage, vos envies, le lieu envisagé..."
            ></textarea>
          </div>

          <button type="submit">Envoyer ma demande</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
