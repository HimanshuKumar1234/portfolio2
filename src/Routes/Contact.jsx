import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import StackedGallery from "./StackGalContact";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qj6vqrk",
        "template_yh25y7e",
        form.current,
        "07o8NCo_PfZvZLI3z"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => console.log("FAILED...", error.text));
  };

  return (
    <>

    <div className="contact-w" id="contact">
    <section className="contact-section" id="contact">

      <div className="contact-wrapper">
        <div className="contact-images">
        <StackedGallery/>
        </div>

        <div className="contact-glass">
          <h2 className="contact-title">Let’s Contact</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            {/* <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required /> */}
            <input type="text" name="user_name" placeholder="Your Name" required autoComplete="off" />
            <input type="email" name="user_email" placeholder="Your Email" required autoComplete="off" />

            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message 🚀</button>
          </form>
        </div>

      </div>


    </section>

    <footer className="footer">
      <div className="footer-left">Himanshu Kumar</div>

      <div className="footer-center">
        <a href="https://github.com/HimanshuKumar1234" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src="/Git2.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/himanshu-kumar-4649b02a7/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src="/LinkedIn.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/openair_himanshu_/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src="/Instagram.png" alt="Instagram" />
        </a>
      </div>

      <div className="footer-right">
        Email: <a href="mailto:tiwarihimanshukumar8422@gmail.com">tiwarihimanshukumar8422@gmail.com</a>
      </div>
    </footer>

    </div>

</>
  );
};

export default Contact;
