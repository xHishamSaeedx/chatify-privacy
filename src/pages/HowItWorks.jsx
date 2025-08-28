import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Download & Install",
      description: "Get Chatify from your app store and install it on your device.",
      details: [
        "Available on iOS and Android",
        "Free to download and use",
        "Quick and easy setup"
      ],
      icon: "📱"
    },
    {
      number: "02",
      title: "Create Your Profile",
      description: "Set up your profile with a username and optional interests to improve matching.",
      details: [
        "Choose a unique username",
        "Add your interests",
        "Set your preferences"
      ],
      icon: "👤"
    },
    {
      number: "03",
      title: "Start Random Chat",
      description: "Begin chatting with people worldwide through our smart matching system.",
      details: [
        "Instant connection with users",
        "AI-powered matching based on interests",
        "Global user base"
      ],
      icon: "💬"
    },
    {
      number: "04",
      title: "Enjoy Conversations",
      description: "Chat with new people, share media, and break language barriers with translation.",
      details: [
        "Real-time messaging",
        "Photo and video sharing",
        "Built-in translation"
      ],
      icon: "🎉"
    },
    {
      number: "05",
      title: "Add Friends (Optional)",
      description: "Share your username to continue conversations with people you like.",
      details: [
        "Exchange usernames during chat",
        "Add to friends list",
        "Continue conversations anytime"
      ],
      icon: "👥"
    },
    {
      number: "06",
      title: "Stay Connected",
      description: "Keep in touch with friends and discover new connections every day.",
      details: [
        "Direct messaging with friends",
        "New random chat sessions",
        "Build lasting connections"
      ],
      icon: "🌟"
    }
  ];

  const features = [
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Connect with people from over 50 countries worldwide"
    },
    {
      icon: "⚡",
      title: "Instant Connection",
      description: "Start chatting within seconds of opening the app"
    },
    {
      icon: "🎯",
      title: "Smart Matching",
      description: "AI-powered algorithm connects you with like-minded people"
    },
    {
      icon: "🔒",
      title: "Safe & Secure",
      description: "Chat with confidence knowing your privacy is protected"
    }
  ];

  return (
    <div className="how-it-works-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="how-it-works-hero">
        <div className="container">
          <div className="hero-content">
            <h1>How Chatify Works</h1>
            <p>
              Discover how easy it is to connect with people worldwide and start 
              meaningful conversations in just a few simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="container">
          <div className="section-header">
            <h2>Simple 6-Step Process</h2>
            <p>Get started with Chatify in minutes</p>
          </div>
          
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <ul className="step-details">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Chatify?</h2>
            <p>Built for connection, designed for amazing conversations</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Experience Section */}
      <section className="privacy-focus-section">
        <div className="container">
          <div className="privacy-content">
            <div className="privacy-text">
              <h2>Amazing Chat Experience</h2>
              <p>
                Chatify offers everything you need for the perfect random chat experience. 
                Connect with people worldwide and enjoy meaningful conversations.
              </p>
              <ul>
                <li>Instant matching with new people</li>
                <li>Real-time messaging and media sharing</li>
                <li>Built-in translation for global connections</li>
                <li>Smart filtering and preferences</li>
                <li>Friend system for lasting connections</li>
                <li>Safe and moderated environment</li>
              </ul>
            </div>
            <div className="privacy-visual">
              <div className="privacy-shield">
                <div className="shield-icon">💬</div>
                <h3>Start Chatting Today</h3>
                <p>Join millions of users worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="how-it-works-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Connecting?</h2>
            <p>Join millions of users who are already chatting worldwide</p>
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

export default HowItWorks;
