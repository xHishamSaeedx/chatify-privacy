import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { trackDownload, trackInteraction } from "../utils/analytics";
import "./Download.css";

const Download = () => {
  const [platform, setPlatform] = useState("unknown");
  const [isMobile, setIsMobile] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState({});
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform("ios");
      setIsMobile(true);
    } else if (/android/.test(userAgent)) {
      setPlatform("android");
      setIsMobile(true);
    } else {
      setPlatform("desktop");
      setIsMobile(false);
    }
  }, []);

  const downloadLinks = {
    ios: {
      store: "App Store",
      url: "https://apps.apple.com/app/chatify",
      icon: "🍎",
      color: "#007AFF"
    },
    android: {
      store: "Google Play",
      url: "https://play.google.com/store/apps/details?id=com.chatify.app",
      icon: "🤖",
      color: "#01875F"
    }
  };

  const handleDownload = (platform) => {
    trackDownload(platform, 'website');
    trackInteraction('download_button', `clicked_${platform}`);
    
    // Simulate download progress
    setDownloadProgress(prev => ({
      ...prev,
      [platform]: 0
    }));
    
    const progressInterval = setInterval(() => {
      setDownloadProgress(prev => {
        const newProgress = (prev[platform] || 0) + Math.random() * 20;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return { ...prev, [platform]: 100 };
        }
        return { ...prev, [platform]: newProgress };
      });
    }, 200);
  };

  const features = [
    {
      icon: "🔒",
      title: "End-to-End Encryption",
      description: "All messages are encrypted with military-grade security"
    },
    {
      icon: "🌍",
      title: "Global Community",
      description: "Connect with people from over 50 countries"
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
      icon: "👁️",
      title: "Privacy First",
      description: "No data mining, no tracking, complete privacy"
    },
    {
      icon: "💬",
      title: "Real-Time Chat",
      description: "Instant messaging with typing indicators and read receipts"
    }
  ];

  const systemRequirements = {
    ios: {
      title: "iOS Requirements",
      requirements: [
        "iOS 13.0 or later",
        "iPhone, iPad, or iPod touch",
        "Internet connection",
        "At least 50MB free space"
      ]
    },
    android: {
      title: "Android Requirements",
      requirements: [
        "Android 8.0 (API level 26) or later",
        "Google Play Services",
        "Internet connection",
        "At least 50MB free space"
      ]
    }
  };

  return (
    <div className="download-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="download-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Download Chatify</h1>
            <p>
              Get the most privacy-focused chat app and start connecting with people 
              worldwide while maintaining complete control over your data.
            </p>
            
            {/* Platform Detection */}
            {isMobile && platform !== "unknown" && (
              <div className="platform-detection">
                <div className="detected-platform">
                  <span className="platform-icon">{downloadLinks[platform].icon}</span>
                  <span>Detected: {platform.toUpperCase()}</span>
                </div>
                <button 
                  onClick={() => handleDownload(platform)}
                  className="download-button primary"
                  style={{ backgroundColor: downloadLinks[platform].color }}
                >
                  {downloadProgress[platform] ? (
                    <span>Downloading... {Math.round(downloadProgress[platform])}%</span>
                  ) : (
                    <span>Download for {downloadLinks[platform].store}</span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Download Options Section */}
      <section className="download-options">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Platform</h2>
            <p>Available on iOS and Android devices</p>
          </div>
          
          <div className="platform-grid">
            <div className="platform-card ios">
              <div className="platform-icon">🍎</div>
              <h3>iOS</h3>
              <p>Download from the App Store</p>
              <ul>
                <li>iPhone & iPad compatible</li>
                <li>iOS 13.0 or later</li>
                <li>Optimized for Apple devices</li>
              </ul>
              <button 
                onClick={() => handleDownload('ios')}
                className="download-button"
              >
                {downloadProgress.ios ? (
                  <span>Downloading... {Math.round(downloadProgress.ios)}%</span>
                ) : (
                  <span>Download for iOS</span>
                )}
              </button>
            </div>

            <div className="platform-card android">
              <div className="platform-icon">🤖</div>
              <h3>Android</h3>
              <p>Download from Google Play</p>
              <ul>
                <li>All Android devices</li>
                <li>Android 8.0 or later</li>
                <li>Google Play Services</li>
              </ul>
              <button 
                onClick={() => handleDownload('android')}
                className="download-button"
              >
                {downloadProgress.android ? (
                  <span>Downloading... {Math.round(downloadProgress.android)}%</span>
                ) : (
                  <span>Download for Android</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="download-features">
        <div className="container">
          <div className="section-header">
            <h2>Why Download Chatify?</h2>
            <p>Experience the most privacy-focused chat app</p>
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

      {/* System Requirements */}
      <section className="system-requirements">
        <div className="container">
          <div className="section-header">
            <h2>System Requirements</h2>
            <p>Make sure your device meets the requirements</p>
          </div>
          
          <div className="requirements-grid">
            <div className="requirements-card">
              <h3>{systemRequirements.ios.title}</h3>
              <ul>
                {systemRequirements.ios.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            
            <div className="requirements-card">
              <h3>{systemRequirements.android.title}</h3>
              <ul>
                {systemRequirements.android.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="download-faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about downloading Chatify</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is Chatify free to download?</h3>
              <p>Yes, Chatify is completely free to download and use. There are no hidden fees or charges.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do I need to create an account?</h3>
              <p>No account creation is required. You can start chatting immediately with just a username.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is my data safe?</h3>
              <p>Absolutely. Chatify uses end-to-end encryption and doesn't collect or store your personal data.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I use Chatify on multiple devices?</h3>
              <p>Yes, you can use Chatify on multiple devices with the same account.</p>
            </div>
            
            <div className="faq-item">
              <h3>What languages are supported?</h3>
              <p>Chatify supports over 100 languages with built-in translation features.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do I get help if I have issues?</h3>
              <p>You can contact our support team through the app or visit our support page for assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="qr-section">
        <div className="container">
          <div className="section-header">
            <h2>Scan to Download</h2>
            <p>Use your phone to scan the QR code for quick download</p>
          </div>
          
          <div className="qr-content">
            <div className="qr-card">
              <div className="qr-code">
                <div className="qr-placeholder">
                  <span>📱</span>
                  <p>QR Code</p>
                </div>
              </div>
              <div className="qr-info">
                <h3>Quick Download</h3>
                <p>Scan this QR code with your phone's camera to download Chatify directly to your device.</p>
                <div className="qr-platforms">
                  <span className="platform-badge ios">iOS</span>
                  <span className="platform-badge android">Android</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="download-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Connecting Privately?</h2>
            <p>Join millions of users who trust Chatify with their privacy</p>
            <div className="cta-buttons">
              <button 
                onClick={() => {
                  trackInteraction('cta_download', 'clicked');
                  handleDownload(platform !== 'unknown' ? platform : 'desktop');
                }}
                className="cta-button primary"
              >
                Download Now
              </button>
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

export default Download;
