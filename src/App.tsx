import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);

  useEffect(() => {
    // Logo animation timing
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    
    const completeTimer = setTimeout(() => {
      setLogoAnimationComplete(true);
    }, 4000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="app-container">
      {/* Logo Animation Screen */}
{!logoAnimationComplete && (
  <div className={`logo-intro ${showContent ? 'fade-out' : ''}`}>
    <div className="logo-animation-container">
      <div className="animated-logo">
        {/* House component - rolls in like a ball */}
        <div className="house-container">
          <img 
            src={`${import.meta.env.BASE_URL}House.svg`}
            alt="House"
            className="house-component rolling-ball"
          />
        </div>
        
        {/* Arabic text - slides in from left */}
        <div className="arabic-container">
          <img 
            src={`${import.meta.env.BASE_URL}AraStr.svg`} 
            alt="Arabic Text"
            className="arabic-component slide-from-left"
          />
        </div>
        
        {/* English text - slides in from right */}
        <div className="english-container">
          <img 
            src={`${import.meta.env.BASE_URL}EngStr.svg`}
            alt="English Text"
            className="english-component slide-from-right"
          />
        </div>
        
        {/* Fallback for when SVGs are not available */}
        <div className="logo-fallback" style={{ display: 'none' }}>
          <div className="logo-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
          <div className="logo-text">TAAGERA</div>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Main Content */}
      <div className={`main-content ${showContent ? 'slide-up' : ''}`}>
        {/* Hero Section with Logo */}
        <section className="hero">
          <div className="hero-container">
            <div className="hero-logo">
              <img 
                src={`${import.meta.env.BASE_URL}Logo.svg`}  
                alt="Taagera"
                className="hero-logo-image"
              />
              {/* Fallback */}
              <div className="hero-logo-fallback">
                <span className="hero-logo-text">TAAGERA</span>
              </div>
            </div>
            
            <div className="hero-content">
              <h1>Premium Real Estate Solutions</h1>
              <p>Your trusted partner in Cairo's luxury property market</p>
              <button 
                className="cta-button"
                onClick={scrollToContact}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <h2>Our Expertise</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🏡</div>
                <h3>Residential Sales</h3>
                <p>Luxury homes and premium apartments</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🏢</div>
                <h3>Commercial Properties</h3>
                <p>Office spaces and retail locations</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💼</div>
                <h3>Investment Consulting</h3>
                <p>Strategic real estate investments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact Taagera</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p><a href="tel:+2001006101212">+20 100 610 1212</a></p>
                    {/* <p><a href="tel:+201098765432">+20 109 876 5432</a></p> */}
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p><a href="mailto:aymanelwazer313@gmail.com">aymanelwazer313@gmail.com</a></p>
                    {/* <p><a href="mailto:sales@taagera.com">sales@taagera.com</a></p> */}
                  </div>
                </div>

                <div className="contact-card map-link-card">
                  <a href="https://www.google.com/maps?q=30.059653,31.491346&z=20" className="map-link" target="_blank" rel="noopener noreferrer">
                    <div className="contact-icon">📍</div>
                    <div className="contact-details">
                      <h3>Office</h3>
                      <p>El-Rehab City, New Cairo, Egypt</p>
                      <p>Administrative Building, Behind Medical Center #1</p>
                      <p>2nd Floor, Office #213</p>
                      <p>Postal Code: 11841, Cairo, Egypt.</p>
                    </div>
                  </a>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-details">
                    <h3>Social Media</h3>
                    <div className="social-links">
                      <a href="https://www.facebook.com/TaageraMadmuona/" aria-label="Facebook">Facebook</a>
                      <a href="https://www.youtube.com/@TaageraMadmuona" aria-label="Youtube">Youtube</a>
                      {/* <a href="#" aria-label="Instagram">Instagram</a> */}
                      {/* <a href="#" aria-label="LinkedIn">LinkedIn</a> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <h3>Send us a message</h3>
                <form>
                  <div className="form-row">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Email Address" required />
                  </div>
                  <input type="tel" placeholder="Phone Number" />
                  <select>
                    <option>I'm interested in...</option>
                    <option>Buying a property</option>
                    <option>Selling a property</option>
                    <option>Renting</option>
                    <option>Investment opportunities</option>
                  </select>
                  <textarea 
                    placeholder="Tell us about your requirements..." 
                    rows={4}
                  ></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <span>TAAGERA.com</span>
              </div>
              <p>© {new Date().getFullYear()} Taagera Real Estate. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;