import React from 'react';
import { Link } from 'react-router-dom';
import { LuCoffee, LuCroissant, LuLeaf, LuInstagram, LuQuote, LuStar } from 'react-icons/lu';
import './pages.css';

const Home = () => {
  const featuredItems = [
    {
      name: "Saffron Pistachio Latte",
      price: "₹345",
      desc: "Our signature blend with hand-picked saffron and roasted pistachios.",
      img: "/featured-1.webp"
    },
    {
      name: "Butter Croissant",
      price: "₹185",
      desc: "Flaky, buttery layers baked fresh every morning at 6 AM.",
      img: "/featured-2.webp"
    },
    {
      name: "Avocado Sourdough",
      price: "₹425",
      desc: "Creamy avocado on toasted sourdough with chili flakes and lime.",
      img: "/featured-3.webp"
    }
  ];

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Frequent Visitor",
      text: "The best coffee in Bandra! The Saffron Latte is something I've never tasted anywhere else. The ambience is so peaceful.",
      rating: 5
    },
    {
      name: "Rahul Mehra",
      role: "Food Blogger",
      text: "Their croissants are genuinely French-standard. Flaky on the outside, soft on the inside. A must-visit for breakfast lovers.",
      rating: 5
    },
    {
      name: "Sarah D'souza",
      role: "Local Resident",
      text: "Spice & Brew has become my go-to spot for work and weekend brunches. The staff is warm and the community vibe is real.",
      rating: 5
    }
  ];

  const instaPhotos = [
    "/insta-1.webp",
    "/insta-2.webp",
    "/insta-3.webp",
    "/insta-4.webp"
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center">
          <h1 className="fade-in heading-lg">Spice & Brew Cafe</h1>
          <p className="fade-in tagline">"Where Every Cup Tells a Story"</p>
          <div className="hero-btns fade-in">
            <Link to="/menu" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', marginRight: '15px' }}>View Menu</Link>
            <Link to="/contact" className="btn btn-primary">Reserve a Table</Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container text-center">
          <h2 className="heading-md">A Sanctuary for Coffee Lovers</h2>
          <p className="intro-text">
            Nestled in the vibrant lanes of Bandra West, Spice & Brew is more than just a cafe. 
            It's a community space where we blend traditional Indian spices with premium global coffee beans. 
            Whether you're here for a morning kickstart or a cozy evening read, we have the perfect cup for you.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights bg-card">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-item text-center">
              <div className="highlight-icon"><LuCoffee /></div>
              <h2 style={{ fontSize: '1.5rem' }}>Specialty Coffee</h2>
              <p>Ethically sourced beans roasted to perfection by our master baristas.</p>
            </div>
            <div className="highlight-item text-center">
              <div className="highlight-icon"><LuCroissant /></div>
              <h2 style={{ fontSize: '1.5rem' }}>Fresh Bakery</h2>
              <p>Handcrafted pastries and artisanal breads baked fresh in our kitchen every day.</p>
            </div>
            <div className="highlight-item text-center">
              <div className="highlight-icon"><LuLeaf /></div>
              <h2 style={{ fontSize: '1.5rem' }}>Cozy Ambience</h2>
              <p>Warm lighting, comfortable seating, and a peaceful vibe for your best moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="section featured-menu">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="heading-md">Chef's Recommendations</h2>
            <p>Our most loved items this season</p>
          </div>
          <div className="menu-grid">
            {featuredItems.map((item, index) => (
              <div key={index} className="menu-card">
                <div className="menu-img-wrapper">
                  <img src={item.img} alt={item.name} width="600" height="400" loading="lazy" />
                </div>
                <div className="menu-info">
                  <div className="menu-title-price">
                    <h3 style={{ fontSize: '1.3rem' }}>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-50">
            <Link to="/menu" className="btn btn-outline">Explore Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials bg-primary">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="heading-md" style={{ color: 'white' }}>Heartfelt Stories</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <LuQuote className="quote-icon" />
                <p className="testimonial-text">"{t.text}"</p>
                <div className="stars">
                  {[...Array(t.rating)].map((_, i) => <LuStar key={i} size={16} fill="#ffc107" color="#ffc107" />)}
                </div>
                <div className="testimonial-author">
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section instagram-feed">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="heading-md">Follow Our Journey</h2>
            <p><LuInstagram style={{ verticalAlign: 'middle', marginRight: '8px' }} /> @spiceandbrew_bandra</p>
          </div>
          <div className="insta-grid">
            {instaPhotos.map((photo, i) => (
              <div key={i} className="insta-item">
                <img src={photo} alt="Instagram post" width="400" height="400" loading="lazy" />
                <div className="insta-overlay">
                  <LuInstagram />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready for a Cup of Story?</h2>
          <p>Join us today for an unforgettable coffee experience.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Reserve a Table</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
