import React from 'react';
import './pages.css';

const About = () => {
  const team = [
    {
      name: "Chef Arjun Kapoor",
      role: "Head Pastry Chef",
      img: "/images/team-1.webp"
    },
    {
      name: "Priya Sharma",
      role: "Master Barista",
      img: "/images/team-2.webp"
    },
    {
      name: "Vikram Mehra",
      role: "Founder",
      img: "/images/team-3.webp"
    }
  ];

  return (
    <div className="about-page">
      <header className="page-header">
        <div className="container">
          <h1>Our Story</h1>
          <p>A journey from a single bean to a million stories</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img">
              <img src="/images/about-hero.webp" alt="Cafe Interior" width="800" height="600" loading="lazy" />
            </div>
            <div className="about-text">
              <h2 className="heading-md">How It All Started</h2>
              <p>
                Founded in 2018, Spice & Brew began with a simple dream: to create a space where the rich traditions of Indian spices meet the global excellence of specialty coffee. Our founder, Vikram, spent years traveling through the coffee estates of Chikmagalur and the spice markets of Kerala to find the perfect balance.
              </p>
              <p style={{ marginTop: '20px' }}>
                Today, Spice & Brew is a beloved corner in Bandra West, known for its warm hospitality and unique flavor profiles. We believe that every cup of coffee tells a story—of the farmer who grew the beans, the artisan who roasted them, and the guest who enjoys them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <h2 className="heading-md text-center">Our Values</h2>
          <div className="values-grid">
            <div className="value-card text-center">
              <h3>Quality</h3>
              <p>We never compromise. From our A-grade Arabica beans to our organic spices, only the best makes it to your table.</p>
            </div>
            <div className="value-card text-center">
              <h3>Community</h3>
              <p>Spice & Brew is a home away from home. We host local artists, book clubs, and foster a spirit of togetherness.</p>
            </div>
            <div className="value-card text-center">
              <h3>Sustainability</h3>
              <p>We are committed to the planet. Our packaging is 100% compostable, and we source directly from ethical farms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="heading-md text-center">Meet the Team</h2>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-img">
                  <img src={member.img} alt={member.name} width="400" height="400" loading="lazy" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
