import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  const team = [
    {
      name: "Chat Enthusiasts",
      role: "Core Team",
      description: "Passionate about connecting people worldwide through meaningful conversations",
      icon: "💬"
    },
    {
      name: "Tech Innovators",
      role: "Development Team",
      description: "Building the best random chat experience with cutting-edge technology",
      icon: "⚡"
    },
    {
      name: "Global Community",
      role: "Users Worldwide",
      description: "Over 1 million users across 50+ countries making connections",
      icon: "🌍"
    }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Connection First",
      description: "We believe in the power of human connection and meaningful conversations."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Connecting people from different cultures and backgrounds worldwide."
    },
    {
      icon: "🔒",
      title: "Safe & Secure",
      description: "Providing a secure environment where users can chat with confidence."
    },
    {
      icon: "⚡",
      title: "Innovation",
      description: "Continuously improving our platform with smart features and technology."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Chatify Launch",
      description: "Official launch of the ultimate random chat app"
    },
    {
      year: "2024",
      title: "1M+ Users",
      description: "Reached our first million users worldwide"
    },
    {
      year: "2024",
      title: "50+ Countries",
      description: "Expanded to serve users in over 50 countries"
    },
    {
      year: "2024",
      title: "Smart Features",
      description: "Introduced AI-powered matching and translation"
    }
  ];

  return (
    <div className="about-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Chatify</h1>
            <p>
              We're on a mission to connect people worldwide through meaningful conversations. 
              In a world that's more connected than ever, we believe everyone deserves 
              the opportunity to meet new people and make lasting friendships.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                Chatify was created with a simple goal: to make it easy and safe for people 
                to connect with others worldwide. We believe that meaningful conversations 
                can bridge cultural gaps, create friendships, and make the world a smaller, 
                more connected place.
              </p>
              <p>
                Our mission is to provide the best random chat experience that's both 
                fun and secure. Whether you're looking to practice a new language, 
                learn about different cultures, or simply make new friends, Chatify 
                is here to help you connect with people who share your interests.
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-card">
                <div className="mission-icon">🌍</div>
                <h3>Global Connections</h3>
                <p>Connecting people from around the world through chat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Chatify began with a simple observation: while the internet has made 
                the world smaller, it can still be difficult to genuinely connect 
                with people from different parts of the world. Most social platforms 
                focus on connecting you with people you already know, but what about 
                the amazing conversations waiting to happen with strangers?
              </p>
              <p>
                Our team of chat enthusiasts and tech innovators came together to 
                solve this problem. We wanted to create a platform that would make 
                it easy, safe, and fun to connect with new people worldwide. 
                The result was Chatify - a random chat app that combines smart 
                matching with a secure, user-friendly experience.
              </p>
              <p>
                Today, Chatify serves over 1 million users across 50+ countries, 
                facilitating millions of conversations and friendships every day. 
                We're proud to be part of a global community that believes in the 
                power of human connection.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-timeline">
                {milestones.map((milestone, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-year">{milestone.year}</div>
                    <div className="timeline-content">
                      <h4>{milestone.title}</h4>
                      <p>{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Dedicated to connecting people worldwide</p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-icon">{member.icon}</div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Commitment */}
      <section className="privacy-commitment">
        <div className="container">
          <div className="commitment-content">
            <h2>Our Chat Commitment</h2>
            <p>
              We're committed to providing the best random chat experience. 
              Here's what makes Chatify special:
            </p>
            <div className="commitment-grid">
              <div className="commitment-item">
                <div className="commitment-icon">✅</div>
                <h4>Smart Matching</h4>
                <p>AI-powered algorithm connects you with like-minded people</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">✅</div>
                <h4>Safe Environment</h4>
                <p>Advanced moderation keeps conversations respectful and secure</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">✅</div>
                <h4>Global Community</h4>
                <p>Connect with people from over 50 countries worldwide</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">✅</div>
                <h4>Amazing Features</h4>
                <p>Translation, media sharing, and friend system included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Community</h2>
            <p>Start connecting with people worldwide. Download Chatify today.</p>
            <div className="cta-buttons">
              <a href="/download" className="cta-button primary">
                Download Now
              </a>
              <a href="/features" className="cta-button secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
