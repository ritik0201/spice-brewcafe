import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './pages.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your reservation! We will contact you shortly to confirm.");
  };

  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="container">
          <h1>Join Our Table</h1>
          <p>Reserve your spot at the heart of Bandra</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info Section */}
            <div className="contact-info">
              <h2 className="heading-md">Get in Touch</h2>
              <p style={{ marginBottom: '30px' }}>
                We'd love to hear from you. Whether it's a reservation, a query about our menu, or just to say hello, our doors are always open.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <FaPhoneAlt className="highlight-icon" />
                  <h4>Call Us</h4>
                  <p>+91 22 1234 5678</p>
                </div>
                <div className="info-card">
                  <FaEnvelope className="highlight-icon" />
                  <h4>Email Us</h4>
                  <p>hello@spiceandbrew.com</p>
                </div>
              </div>

              <div className="info-card" style={{ marginTop: '20px', textAlign: 'left' }}>
                <FaClock className="highlight-icon" style={{ float: 'left', marginRight: '15px' }} />
                <h4>Opening Hours</h4>
                <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
              </div>

              <div className="social-links" style={{ marginTop: '40px' }}>
                <a href="#" className="social-icon" style={{ background: 'var(--primary)' }}><FaFacebookF /></a>
                <a href="#" className="social-icon" style={{ background: 'var(--primary)' }}><FaInstagram /></a>
                <a href="#" className="social-icon" style={{ background: 'var(--primary)' }}><FaTwitter /></a>
              </div>
            </div>

            {/* Form Section */}
            <div className="reservation-form">
              <h3 style={{ marginBottom: '25px', fontSize: '1.8rem' }}>Reserve a Table</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input type="time" id="time" className="form-control" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <select id="guests" className="form-control" required>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="requests">Special Requests</label>
                  <textarea id="requests" className="form-control" rows="4" placeholder="Any dietary preferences or occasion?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>Confirm Reservation</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-container">
            {/* Placeholder for Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.212351227845!2d72.8258383!3d19.0536411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94136458519%3A0x673a5585098d6c7b!2sHill%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715875000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
