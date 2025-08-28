import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./PartnerProgram.css";

const PartnerProgram = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.3);
  const [benefitsRef, benefitsVisible] = useScrollAnimation(0.2);
  const [partnersRef, partnersVisible] = useScrollAnimation(0.2);
  const [contactRef, contactVisible] = useScrollAnimation(0.2);

  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Integrate Chatify's privacy-first messaging into your platform",
      benefits: [
        "API access to Chatify's secure messaging",
        "White-label solutions",
        "Technical support and documentation",
        "Revenue sharing opportunities"
      ],
      icon: "🔧"
    },
    {
      title: "Enterprise Partners",
      description: "Provide secure communication solutions to your clients",
      benefits: [
        "Custom deployment options",
        "Dedicated account management",
        "Training and certification programs",
        "Priority support and SLAs"
      ],
      icon: "🏢"
    },
    {
      title: "Affiliate Partners",
      description: "Earn commissions by promoting Chatify to your audience",
      benefits: [
        "Competitive commission rates",
        "Marketing materials and resources",
        "Real-time tracking and analytics",
        "Flexible payment options"
      ],
      icon: "🤝"
    }
  ];

  const currentPartners = [
    {
      name: "TechCorp Solutions",
      logo: "🏢",
      description: "Leading enterprise software provider",
      partnership: "Technology Integration"
    },
    {
      name: "SecureNet Systems",
      logo: "🔒",
      description: "Cybersecurity and compliance experts",
      partnership: "Enterprise Solutions"
    },
    {
      name: "Global Connect",
      logo: "🌍",
      description: "International communication platform",
      partnership: "Technology Partnership"
    }
  ];

  return (
    <div className="partner-program-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className={`hero-container fade-in-up ${heroVisible ? 'visible' : ''}`}>
          <div className="hero-content">
            <h1 className="hero-title">
              Partner with
              <span className="gradient-text"> Chatify</span>
            </h1>
            <p className="hero-subtitle">
              Join our ecosystem of partners and help us build a more private, 
              secure digital world. Together, we can revolutionize how people connect online.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="cta-button primary">
                Become a Partner
              </a>
              <a href="#benefits" className="cta-button secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="partnership-illustration">
              <div className="floating-element element-1">🔒</div>
              <div className="floating-element element-2">🌍</div>
              <div className="floating-element element-3">⚡</div>
              <div className="floating-element element-4">🤝</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="partnership-types-section" ref={benefitsRef}>
        <div className="container">
          <div className={`section-header fade-in-up ${benefitsVisible ? 'visible' : ''}`}>
            <h2>Partnership Opportunities</h2>
            <p>Choose the partnership model that fits your business goals</p>
          </div>
          <div className="partnership-grid">
            {partnershipTypes.map((type, index) => (
              <div 
                key={index} 
                className={`partnership-card hover-lift ${benefitsVisible ? 'visible' : ''}`}
              >
                <div className="partnership-icon">{type.icon}</div>
                <h3>{type.title}</h3>
                <p className="partnership-description">{type.description}</p>
                <ul className="benefits-list">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
                <button className="learn-more-button">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="partners-section" ref={partnersRef}>
        <div className="container">
          <div className={`section-header fade-in-up ${partnersVisible ? 'visible' : ''}`}>
            <h2>Our Trusted Partners</h2>
            <p>Leading companies that trust Chatify for secure communication</p>
          </div>
          <div className="partners-grid">
            {currentPartners.map((partner, index) => (
              <div 
                key={index} 
                className={`partner-card hover-lift ${partnersVisible ? 'visible' : ''}`}
              >
                <div className="partner-logo">{partner.logo}</div>
                <h3>{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
                <span className="partnership-type">{partner.partnership}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" ref={contactRef}>
        <div className="container">
          <div className={`contact-content fade-in-up ${contactVisible ? 'visible' : ''}`}>
            <h2>Ready to Partner with Us?</h2>
            <p>
              Let's discuss how we can work together to create a more private 
              and secure digital future.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <h3>Email Us</h3>
                <p>partnerships@chatify.com</p>
                <a href="mailto:partnerships@chatify.com" className="contact-button">
                  Send Email
                </a>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <a href="tel:+15551234567" className="contact-button">
                  Call Now
                </a>
              </div>
              <div className="contact-method">
                <div className="contact-icon">💼</div>
                <h3>Schedule a Meeting</h3>
                <p>Book a 30-minute consultation</p>
                <button className="contact-button">
                  Book Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerProgram;
