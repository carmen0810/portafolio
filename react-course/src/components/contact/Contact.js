// import ContactForm from "./ContactForm";
import Footer from "../footer/Footer";

const Contact = () => {
  document.title = "Contáctame | Carmen Herrera Anicama";
  function sendEmai() {
    window.open(
      "mailto:carmen.herrera.anicama@gmail.com?subject=SendMail&body=Description"
    );
  }
  return (
    <article className="contact-main">
      <section>
        <h2 className="title-font pink-text h2-tag">Contáctame</h2>
        <br></br>
        <p className="white-text p-tag">
        Si esta interesado en contratarme siempre estoy abierta a nuevas oportunidades
          ¡y proyectos interesantes! No dude en ponerse en contacto conmigo.
        </p>
        <section>
          <button className="sendemail-btn" onClick={sendEmai}>
            Enviar Correo Electrónico
          </button>
        </section>
      </section>
      <Footer />
    </article>
  );
};

export default Contact;