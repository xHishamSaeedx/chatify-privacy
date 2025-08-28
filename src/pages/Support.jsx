import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FeedbackForm from "../components/FeedbackForm";
import { trackFormSubmission, trackInteraction } from "../utils/analytics";
import "./Support.css";

const Support = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [showContactForm, setShowContactForm] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqCategories = {
    general: [
      {
        question: "How do I start using Chatify?",
        answer: "Simply download the app, create a username, and start chatting! No registration or personal information required."
      },
      {
        question: "Is Chatify really free?",
        answer: "Yes, Chatify is completely free to download and use. There are no hidden fees or premium features."
      },
      {
        question: "Can I use Chatify on multiple devices?",
        answer: "Yes, you can use Chatify on multiple devices with the same account."
      },
      {
        question: "What languages does Chatify support?",
        answer: "Chatify supports over 100 languages with built-in translation features."
      }
    ],
    privacy: [
      {
        question: "How does Chatify protect my privacy?",
        answer: "We use end-to-end encryption, don't collect personal data, and give you complete control over your information."
      },
      {
        question: "Does Chatify store my messages?",
        answer: "Messages are encrypted and stored temporarily for delivery, then automatically deleted."
      },
      {
        question: "Can I delete my account and data?",
        answer: "Yes, you can request account deletion at any time through our account deletion form."
      },
      {
        question: "Does Chatify track my activity?",
        answer: "No, we don't track your activity, location, or behavior in any way."
      }
    ],
    technical: [
      {
        question: "What devices are supported?",
        answer: "Chatify works on iOS 13.0+ and Android 8.0+ devices."
      },
      {
        question: "Why can't I connect to a chat?",
        answer: "Check your internet connection and try again. If the issue persists, restart the app."
      },
      {
        question: "How do I report inappropriate behavior?",
        answer: "Use the report button in the chat or visit our reporting page to submit a detailed report."
      },
      {
        question: "Can I block users?",
        answer: "Yes, you can block users directly from the chat interface."
      }
    ],
    features: [
      {
        question: "How does the friend feature work?",
        answer: "Share your username with someone during chat to add them as a friend and continue conversations."
      },
      {
        question: "Can I send images and files?",
        answer: "Yes, you can share images, videos, and files in your conversations."
      },
      {
        question: "Is video calling available?",
        answer: "Video calling is available for premium users and friends."
      },
      {
        question: "How do I change my username?",
        answer: "You can change your username in the app settings at any time."
      }
    ]
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help via email within 24 hours",
      action: "support@chatify.com",
      link: "mailto:support@chatify.com"
    },
    {
      icon: "💬",
      title: "In-App Support",
      description: "Get help directly within the app",
      action: "Open Chatify App",
      link: "#"
    },
    {
      icon: "📱",
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      link: "#",
      onClick: () => {
        setShowChatWidget(true);
        trackInteraction('live_chat', 'opened');
      }
    },
    {
      icon: "📖",
      title: "Help Center",
      description: "Browse our comprehensive guides",
      action: "Visit Help Center",
      link: "#"
    }
  ];

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      trackFormSubmission('support_contact', true);
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setContactFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
      setShowContactForm(false);
    } catch (error) {
      trackFormSubmission('support_contact', false);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const quickActions = [
    {
      icon: "🔒",
      title: "Privacy Settings",
      description: "Manage your privacy preferences",
      link: "/features"
    },
    {
      icon: "🗑️",
      title: "Delete Account",
      description: "Request account deletion",
      link: "/account-deletion"
    },
    {
      icon: "🚨",
      title: "Report Issue",
      description: "Report inappropriate behavior",
      link: "/reporting"
    },
    {
      icon: "📋",
      title: "Privacy Policy",
      description: "Read our privacy policy",
      link: "/privacy-policy"
    }
  ];

  return (
    <div className="support-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="support-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Support Center</h1>
            <p>
              Need help? We're here to assist you with any questions or issues 
              you might have with Chatify.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <div className="container">
          <div className="section-header">
            <h2>Quick Actions</h2>
            <p>Common tasks and settings</p>
          </div>
          
          <div className="actions-grid">
            {quickActions.map((action, index) => (
              <a key={index} href={action.link} className="action-card">
                <div className="action-icon">{action.icon}</div>
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p>Choose your preferred way to contact us</p>
          </div>
          
          <div className="contact-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                {method.onClick ? (
                  <button onClick={method.onClick} className="contact-button">
                    {method.action}
                  </button>
                ) : (
                  <a href={method.link} className="contact-button">
                    {method.action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions</p>
          </div>
          
          {/* FAQ Categories */}
          <div className="faq-categories">
            <button 
              className={`category-button ${activeCategory === 'general' ? 'active' : ''}`}
              onClick={() => setActiveCategory('general')}
            >
              General
            </button>
            <button 
              className={`category-button ${activeCategory === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveCategory('privacy')}
            >
              Privacy & Security
            </button>
            <button 
              className={`category-button ${activeCategory === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveCategory('technical')}
            >
              Technical Issues
            </button>
            <button 
              className={`category-button ${activeCategory === 'features' ? 'active' : ''}`}
              onClick={() => setActiveCategory('features')}
            >
              Features
            </button>
          </div>
          
          {/* FAQ Items */}
          <div className="faq-items">
            {faqCategories[activeCategory].map((item, index) => (
              <div key={index} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="container">
          <div className="community-content">
            <div className="community-text">
              <h2>Join Our Community</h2>
              <p>
                Connect with other Chatify users, share tips, and get help from 
                the community. Our users are some of the most helpful people around!
              </p>
              <ul>
                <li>Share tips and tricks</li>
                <li>Get help from experienced users</li>
                <li>Stay updated on new features</li>
                <li>Connect with privacy advocates</li>
              </ul>
            </div>
            <div className="community-visual">
              <div className="community-card">
                <div className="community-icon">👥</div>
                <h3>User Community</h3>
                <p>Join thousands of privacy-conscious users</p>
                <a href="#" className="community-button">
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {showContactForm && (
        <section className="contact-form-section">
          <div className="container">
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Contact Support</h2>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="close-button"
                  aria-label="Close contact form"
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleContactFormSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactFormData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactFormData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={contactFormData.category}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Issue</option>
                    <option value="privacy">Privacy Concern</option>
                    <option value="billing">Billing Question</option>
                    <option value="feature">Feature Request</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactFormData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactFormData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Chat Widget */}
      {showChatWidget && (
        <div className="chat-widget">
          <div className="chat-header">
            <h3>Live Chat</h3>
            <button 
              onClick={() => setShowChatWidget(false)}
              className="close-button"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="chat-messages">
            <div className="message agent">
              <div className="message-content">
                <p>Hello! How can we help you today?</p>
              </div>
            </div>
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              placeholder="Type your message..."
              disabled
            />
            <button disabled>Send</button>
          </div>
          <div className="chat-status">
            <span className="status-indicator online"></span>
            <span>Support team is online</span>
          </div>
        </div>
      )}

      {/* Feedback Section */}
      <section className="feedback-section">
        <div className="container">
          <div className="feedback-content">
            <h2>Help Us Improve</h2>
            <p>
              Your feedback helps us make Chatify better for everyone. Share your 
              thoughts, suggestions, or report bugs.
            </p>
            <div className="feedback-buttons">
              <button 
                onClick={() => {
                  setShowFeedbackForm(true);
                  trackInteraction('feedback_form', 'opened');
                }}
                className="feedback-button primary"
              >
                Send Feedback
              </button>
              <a href="#" className="feedback-button secondary">
                Report Bug
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Modal */}
      {showFeedbackForm && (
        <FeedbackForm 
          title="Share Your Feedback"
          description="Help us improve Chatify by sharing your thoughts, suggestions, or reporting issues."
          formType="support_feedback"
          onClose={() => setShowFeedbackForm(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Support;
