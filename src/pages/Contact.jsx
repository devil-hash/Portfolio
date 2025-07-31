import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '../css/contact.css';
import '../css/animation.css';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs.sendForm(
        'service_fdg472a',
        'template_wwt2ksc',
        form.current,
        'hZb2trePtz-sEyskD'
      ).then(() => {
        toast.success('Message sent successfully!,I\'ll reach you soon', { position: 'bottom-right' });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      }).catch((error) => {
        console.error('EmailJS Error:', error);
        toast.error('Failed to send message. Try again later.', { position: 'bottom-right' });
      });
    }
  };

  return (
    <section className="contact-section py-5">
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="section-title text-center mb-5">Get In Touch</h2>
            <div className="row">
              <div className="col-md-5 mb-4 mb-md-0">
                <div className="contact-info">
                  <h4 className="mb-4">Contact Information</h4>
                  <div className="info-item mb-4">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-content">
                      <h5>Location</h5>
                      <p>Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                  <div className="info-item mb-4">
                    <div className="info-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="info-content">
                      <h5>Phone</h5>
                      <p>+91 8754885158</p>
                    </div>
                  </div>
                  <div className="social-links mt-5">
                    <a href="https://www.linkedin.com/in/gowthammangalselvam" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/devil-hash" className="social-icon"><i className="fab fa-github"></i></a>
                    <a href="mailto:gowthammangaselvam@gmail.com" className="social-icon"><i className="fab fa-at"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-7">
                <div className="contact-form">
                  <form ref={form} onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input type="text" name="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" value={formData.name} onChange={handleChange} />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" value={formData.email} onChange={handleChange} />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input type="tel" name="phone" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} id="phone" value={formData.phone} onChange={handleChange} />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea name="message" className={`form-control ${errors.message ? 'is-invalid' : ''}`} id="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                      {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
