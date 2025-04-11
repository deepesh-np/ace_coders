import React from "react";
import "./contact.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hi —
        reach out to us.
      </p>

      <div className="contact-wrapper">
        <div className="contact-form-section">
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info-section">
          <h2>Our Contact Info</h2>
          <p><strong>Email:</strong> <a href="mailto:nrndpsh@gmail.com">nrndpsh@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> Jamshedpur, Jharkhand, India</p>

          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>

      <div className="map-container">
        <h2>Find Us</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.0785362450983!2d86.2029!3d22.8056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ4JzIwLjEiTiA4NsKwMTInMDUuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h4>How soon will I get a response?</h4>
          <p>We usually respond within 24 hours.</p>

          <h4>Can I collaborate with you on a project?</h4>
          <p>Yes! Just drop a message in the form or mail us directly.</p>

          <h4>Are you available for freelance work?</h4>
          <p>Depending on the project scope and timeline — contact us to discuss more!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
