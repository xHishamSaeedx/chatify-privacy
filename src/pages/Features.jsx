import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./Features.css";

const Features = () => {
  const features = [
    {
      category: "Random Chat",
      items: [
        {
          icon: "🎯",
          title: "Smart Matching",
          description: "Our intelligent algorithm connects you with people who share your interests and preferences for meaningful conversations.",
          details: [
            "Interest-based matching",
            "Age and location filters",
            "Gender preference options",
            "Instant connection system"
          ]
        },
        {
          icon: "⚡",
          title: "Instant Connections",
          description: "Start chatting with new people in seconds. No waiting, no complicated setup - just pure conversation.",
          details: [
            "Lightning-fast matching",
            "Real-time chat rooms",
            "Automatic reconnection",
            "Session management"
          ]
        },
        {
          icon: "🌍",
          title: "Global Reach",
          description: "Connect with people from over 50 countries and experience different cultures through conversation.",
          details: [
            "Worldwide user base",
            "Cultural exchange",
            "Language diversity",
            "24/7 active users"
          ]
        }
      ]
    },
    {
      category: "Chat Experience",
      items: [
        {
          icon: "💬",
          title: "Real-Time Messaging",
          description: "Enjoy smooth, instant messaging with typing indicators, read receipts, and message status updates.",
          details: [
            "Instant message delivery",
            "Typing indicators",
            "Message status tracking",
            "Real-time notifications"
          ]
        },
        {
          icon: "📸",
          title: "Media Sharing",
          description: "Share photos, videos, and files with your chat partners to make conversations more engaging.",
          details: [
            "Photo and video sharing",
            "File upload support",
            "Image compression",
            "Safe media handling"
          ]
        },
        {
          icon: "🌐",
          title: "Built-in Translation",
          description: "Break language barriers with real-time message translation in multiple languages.",
          details: [
            "Multi-language support",
            "Real-time translation",
            "Automatic detection",
            "Preserve original text"
          ]
        }
      ]
    },
    {
      category: "Safety & Privacy",
      items: [
        {
          icon: "🔒",
          title: "Secure Chatting",
          description: "Chat with confidence knowing your conversations are protected with advanced security measures.",
          details: [
            "End-to-end encryption",
            "Secure data transmission",
            "Privacy protection",
            "No data mining"
          ]
        },
        {
          icon: "🛡️",
          title: "Content Moderation",
          description: "Advanced AI moderation keeps conversations safe and respectful for all users.",
          details: [
            "AI-powered filtering",
            "User reporting system",
            "Community guidelines",
            "24/7 monitoring"
          ]
        },
        {
          icon: "⚙️",
          title: "User Control",
          description: "Complete control over your experience with customizable settings and privacy options.",
          details: [
            "Customizable filters",
            "Block and report users",
            "Account settings",
            "Data management"
          ]
        }
      ]
    },
    {
      category: "Advanced Features",
      items: [
        {
          icon: "👥",
          title: "Friend System",
          description: "Add interesting people as friends to continue conversations and build lasting connections.",
          details: [
            "Friend requests",
            "Friend list management",
            "Direct messaging",
            "Profile sharing"
          ]
        },
        {
          icon: "📱",
          title: "Cross-Platform",
          description: "Seamlessly use Chatify across multiple devices with automatic synchronization.",
          details: [
            "Mobile and web support",
            "Cloud synchronization",
            "Offline capabilities",
            "Multi-device login"
          ]
        },
        {
          icon: "🎨",
          title: "Customization",
          description: "Personalize your chat experience with themes, backgrounds, and custom settings.",
          details: [
            "Custom themes",
            "Background images",
            "Profile customization",
            "Chat preferences"
          ]
        }
      ]
    }
  ];

  const comparisonData = {
    free: {
      title: "Free Plan",
      price: "Free",
      features: [
        "Unlimited random chats",
        "Basic matching filters",
        "Text messaging",
        "Photo sharing",
        "Basic translation",
        "User reporting",
        "Friend system"
      ],
      limitations: [
        "Limited video sharing",
        "Basic filters",
        "Standard support"
      ]
    },
    premium: {
      title: "Premium Plan",
      price: "$9.99/month",
      features: [
        "Everything in Free",
        "Advanced matching filters",
        "Video sharing",
        "Priority matching",
        "Custom themes",
        "Advanced translation",
        "Premium support",
        "Ad-free experience"
      ],
      limitations: []
    }
  };

  return (
    <div className="features-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Amazing Chat Features</h1>
            <p>
              Discover all the incredible features that make Chatify the ultimate 
              random chat app for connecting with people worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section">
        <div className="container">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="feature-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="features-grid">
                {category.items.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-card">
                    <div className="feature-header">
                      <div className="feature-icon">{feature.icon}</div>
                      <h3>{feature.title}</h3>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                    <div className="feature-details">
                      <h4>Key Benefits:</h4>
                      <ul>
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Plan</h2>
            <p>Start chatting for free or unlock premium features</p>
          </div>
          <div className="comparison-grid">
            <div className="plan-card free">
              <div className="plan-header">
                <h3>{comparisonData.free.title}</h3>
                <div className="plan-price">{comparisonData.free.price}</div>
              </div>
              <div className="plan-features">
                <h4>Included Features:</h4>
                <ul>
                  {comparisonData.free.features.map((feature, index) => (
                    <li key={index} className="feature-included">✓ {feature}</li>
                  ))}
                </ul>
                {comparisonData.free.limitations.length > 0 && (
                  <>
                    <h4>Limitations:</h4>
                    <ul>
                      {comparisonData.free.limitations.map((limitation, index) => (
                        <li key={index} className="feature-limited">• {limitation}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            <div className="plan-card premium">
              <div className="plan-header">
                <h3>{comparisonData.premium.title}</h3>
                <div className="plan-price">{comparisonData.premium.price}</div>
              </div>
              <div className="plan-features">
                <h4>Included Features:</h4>
                <ul>
                  {comparisonData.premium.features.map((feature, index) => (
                    <li key={index} className="feature-included">✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Chatting?</h2>
            <p>Join millions of users who are already connecting worldwide</p>
            <div className="cta-buttons">
              <a href="/download" className="cta-button primary">
                Download Now
              </a>
              <a href="/how-it-works" className="cta-button secondary">
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
