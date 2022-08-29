import { Component } from "react";

class ContactForm extends Component {
  render() {
    function SubmitContactForm(e) {
      e.preventDefault();
      const emailValidation = /^\w+([/.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      //Errors
      const FullnameError = document.querySelector(".fullname-error");
      const EmailError = document.querySelector(".email-error");
      const TextareaError = document.querySelector(".textarea-error");
      const BtnMsg = document.querySelector(".button-msg");
      //Inputs
      const FullnameInput = document.querySelector(".fullname-input");
      const EmailInput = document.querySelector(".email-input");
      const TextareaInput = document.querySelector(".textarea-input");

      if (FullnameInput.value.length === 0) {
        FullnameError.textContent = "Este campo no puede estar vacio";
        FullnameInput.style.borderColor = "red";
        FullnameError.style.display = "inline";

        setTimeout(() => {
          FullnameError.textContent = "";
          FullnameInput.style.borderColor = "#ff6240";
          FullnameError.style.display = "none";
        }, 2000);
      }
      if (TextareaInput.value.length === 0) {
        TextareaError.textContent = "Este campo no puede estar vacio";
        TextareaInput.style.borderColor = "red";
        TextareaError.style.display = "inline";

        setTimeout(() => {
          TextareaError.textContent = "";
          TextareaInput.style.borderColor = "#ff6240";
          TextareaError.style.display = "none";
        }, 2000);
      }
      if (EmailInput.value.length === 0) {
        EmailError.textContent = "Este campo no puede estar vacio";
        EmailInput.style.borderColor = "red";
        EmailError.style.display = "inline";

        setTimeout(() => {
          EmailError.textContent = "";
          EmailInput.style.borderColor = "#ff6240";
          EmailError.style.display = "none";
        }, 2000);
      }
      if (
        !EmailInput.value.match(emailValidation) &&
        EmailInput.value.length !== 0
      ) {
        EmailError.textContent = "Al parecer esto no es un correo electronico";
        EmailInput.style.borderColor = "red";
        EmailError.style.display = "inline";
        setTimeout(() => {
          EmailError.textContent = "";
          EmailInput.style.borderColor = "var(--grayish-blue)";
          EmailError.style.display = "none";
        }, 2000);
      }
      if (
        FullnameInput.value.length !== 0 &&
        EmailInput.value.length !== 0 &&
        EmailInput.value.match(emailValidation)
      ) {
        BtnMsg.textContent = `Gracias por contactar conmigo, ${FullnameInput.value}! Me pondre en contacto con usted en breve`;     } else {
        console.log("err");
      }
    }
    return (
      <section className="contact-us-form form-tag">
        <form className="contact-form">
          <section className="contact-form-item">
            <input
              className="fullname-input"
              type="text"
              placeholder="Full Name"
            />
            <br></br>
            <label className="fullname-error"></label>
          </section>
          <section className="contact-form-item">
            <input className="email-input" type="text" placeholder="Email" />
            <br></br>
            <label className="email-error"></label>
          </section>
          <section className="contact-form-item">
            <textarea className="textarea-input" placeholder="Message" />
            <br></br>
            <label className="textarea-error"></label>
          </section>
          <section className="contact-form-item">
          
            <button onClick={SubmitContactForm} className="form-btn">
              Enviar
            </button>
            <br></br>
            <label className="button-msg"></label>
          </section>
        </form>
      </section>
    );
  }
}

export default ContactForm;