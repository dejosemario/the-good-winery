import React from "react";

function Contact(props) {
  return (
    <div className="contact__section">
        <h1>CONTACT US</h1>
      <div className="contact__content">
            <div className="contact__form">
                <form>
                    <div className="form__group">
                        <input
                            type="text"
                            className="form__control"
                            id="name"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form__group">
                        <input
                            type="email"
                            className="form__control"
                            id="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form__group">
                        <textarea
                            className="form__control"
                            id="message"
                            rows="3"
                            placeholder="Talk to us"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        
            <div className="map">
                <a href="tel:+234-844-844-8444">+234-806-844-8444</a>
                <a href="#">ataladeogo@gmail.com</a>
                <p className="address">
                 Ahmadu Bello Way, Victoria Island 106104, Lagos
                </p>

                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7119688286007!2d3.406693149883659!3d6.431034995324346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad3cab07231%3A0xa73b0822265dc43!2sAhmadu%20Bello%20Way%2C%20Eti-Osa%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1658030509572!5m2!1sen!2sng"
                width="300"
                height="200"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
      </div>
    </div>
  );
}

export default Contact;
