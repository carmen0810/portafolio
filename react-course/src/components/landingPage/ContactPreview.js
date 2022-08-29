const ContactPreview = () => {
    function sendEmai() {
      window.open(
        "mailto:carmen.herrera.anicama@gmail.com?subject=SendMail&body=Description"
      );
    }
    return (
      <article className="contact">
        <section>
          <h2 className="title-font pink-text h2-tag">Contacto</h2>
          <br></br>
          {/* <span className="myemail-txt">&lt; / carmen.herrera.anicama@gmail.com &gt;</span> */}
          <p className="white-text p-tag">
          Si esta interesado en contratarme siempre estoy abierta a nuevas oportunidades
          ¡y proyectos interesantes! No dude en ponerse en contacto conmigo.
          </p>
          <section>
            <button className="sendemail-btn" onClick={sendEmai}>
              Enviar Correo Electronico
            </button>
          </section>
        </section>
      </article>
    );
  };
  
  export default ContactPreview;