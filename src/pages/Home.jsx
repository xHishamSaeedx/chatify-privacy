import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { 
  Globe, 
  Zap, 
  Shield, 
  MessageCircle, 
  Download, 
  ArrowRight,
  Users,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

const Home = () => {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>
            Connect with the World
            <span className="hero-subtitle"> One Chat at a Time</span>
          </h1>
                     <p>
             Blabinn is the ultimate random chat app that connects you with people worldwide. 
             Start conversations, make new friends, and discover different cultures instantly.
           </p>
           <div className="hero-buttons">
             <Link to="/download" className="btn btn-primary">
               <Download size={20} />
               Download Blabinn
             </Link>
            <Link to="/features" className="btn btn-secondary">
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features">
        <div className="container">
                     <div className="text-center mb-8">
             <h2 className="gradient-text">Why Choose Blabinn?</h2>
             <p className="mb-4">
               Experience the best random chat app with amazing features designed for modern communication.
             </p>
           </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Globe size={24} />
              </div>
              <h3>Global Connections</h3>
              <p>Connect with people from around the world instantly</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <h3>Instant Matching</h3>
              <p>Find chat partners in seconds with our smart matching system</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={24} />
              </div>
              <h3>Safe & Secure</h3>
              <p>Chat with confidence knowing your privacy is protected</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <MessageCircle size={24} />
              </div>
              <h3>Real-time Chat</h3>
              <p>Enjoy smooth, real-time conversations with text and media sharing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

             {/* Newsletter Section */}
       <section className="newsletter">
         <div className="container">
           <h3>Stay Updated with Blabinn</h3>
           <p>Get the latest features, updates, and tips for the best chat experience.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Start Chatting?</h2>
          <p>Join millions of users who are already connecting worldwide</p>
          <div className="hero-buttons">
            <Link to="/download" className="btn btn-primary">
              <Download size={20} />
              Download Now
            </Link>
            <Link to="/how-it-works" className="btn btn-secondary">
              How It Works
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
