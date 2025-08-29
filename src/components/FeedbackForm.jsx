import { useState } from "react";
import { trackFormSubmission, trackInteraction } from "../utils/analytics";
import "./FeedbackForm.css";

const FeedbackForm = ({ 
  title = "Share Your Feedback", 
  description = "Help us improve Chatify by sharing your thoughts",
  onClose,
  formType = "general_feedback"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    rating: 0,
    message: '',
    allowContact: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categories = [
    { value: 'general', label: 'General Feedback' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'privacy', label: 'Privacy Concern' },
    { value: 'performance', label: 'Performance Issue' },
    { value: 'ui_ux', label: 'UI/UX Suggestion' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
    trackInteraction('feedback_rating', `rated_${rating}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      trackFormSubmission(formType, true);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          category: 'general',
          rating: 0,
          message: '',
          allowContact: false
        });
        setSubmitStatus(null);
        if (onClose) onClose();
      }, 2000);
      
    } catch {
      trackFormSubmission(formType, false);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <button
        key={index}
        type="button"
        className={`star ${index < formData.rating ? 'filled' : ''}`}
        onClick={() => handleRatingClick(index + 1)}
        aria-label={`Rate ${index + 1} star${index !== 0 ? 's' : ''}`}
      >
        ★
      </button>
    ));
  };

  return (
    <div className="feedback-form-overlay">
      <div className="feedback-form-container">
        <div className="form-header">
          <h2>{title}</h2>
          <button 
            onClick={onClose}
            className="close-button"
            aria-label="Close feedback form"
          >
            ×
          </button>
        </div>

        <p className="form-description">{description}</p>

        {submitStatus === 'success' && (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Thank you for your feedback!</h3>
            <p>We've received your message and will review it carefully.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            <div className="error-icon">⚠</div>
            <h3>Something went wrong</h3>
            <p>Please try again or contact us directly.</p>
          </div>
        )}

        {!submitStatus && (
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name (optional)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com (optional)"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>How would you rate your experience?</label>
              <div className="rating-stars">
                {renderStars()}
                <span className="rating-text">
                  {formData.rating > 0 ? `${formData.rating} star${formData.rating !== 1 ? 's' : ''}` : 'Click to rate'}
                </span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Feedback *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Tell us what you think, what we can improve, or any issues you've encountered..."
                required
              />
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="allowContact"
                  checked={formData.allowContact}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                I'd like to be contacted about this feedback
              </label>
            </div>

            <div className="form-actions">
              <button 
                type="button" 
                onClick={onClose}
                className="cancel-button"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting || !formData.message.trim()}
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
