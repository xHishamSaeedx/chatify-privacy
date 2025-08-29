import { useState } from "react";
import { trackFormSubmission, trackInteraction } from "../utils/analytics";

const Newsletter = ({ 
  title = "Stay Updated",
  description = "Get the latest privacy news, updates, and tips delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  theme = "light"
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      trackFormSubmission('newsletter_subscription', true);
      trackInteraction('newsletter', 'subscribed');
      
      setSubmitStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      
    } catch {
      trackFormSubmission('newsletter_subscription', false);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleFocus = () => {
    trackInteraction('newsletter', 'email_focused');
  };

  return (
    <div className={`newsletter-container ${theme}`}>
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleFocus}
              placeholder={placeholder}
              className={`email-input ${errorMessage ? 'error' : ''}`}
              disabled={isSubmitting}
            />
            {errorMessage && (
              <span className="error-message">{errorMessage}</span>
            )}
          </div>
          
          <button 
            type="submit" 
            className={`subscribe-button ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading-spinner"></span>
                Subscribing...
              </>
            ) : (
              buttonText
            )}
          </button>
        </form>

        {submitStatus === 'success' && (
          <div className="success-message">
            <span className="success-icon">✓</span>
            <span>Successfully subscribed! Check your email for confirmation.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-status">
            <span className="error-icon">⚠</span>
            <span>Failed to subscribe. Please try again.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
