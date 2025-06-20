import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_eqyn7ou',
      'template_096yq7m',
      formRef.current,
      'NxM_hScDU-R6nRNCA'
    )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title" data-aos="fade-up">
        <span className="title-glow">Contact</span>
      </h2>

      <p className="contact-intro" data-aos="fade-up" >
        Feel free to reach out! Whether it's a project collaboration, a job opportunity, or freelancing — I'm always open to connecting.
      </p>

      <div className="contact-container">
        <div
          className="contact-info"
          data-aos="fade-right"
        >
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> karthibtech523@gmail.com</p>
          <p><strong>Phone:</strong> +91 99442 70322</p>
          <p><strong>Location:</strong> Kalipatti, Namakkal, Tamil Nadu, India</p>
        </div>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
          data-aos="flip-down"
          data-aos-delay="300"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
