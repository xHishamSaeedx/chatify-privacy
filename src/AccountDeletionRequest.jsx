import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./AccountDeletionRequest.css";

function AccountDeletionRequest() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add document to 'account_deletion_requests' collection
      await addDoc(collection(db, "account_deletion_requests"), {
        ...formData,
        requestDate: serverTimestamp(),
        status: "pending",
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        username: "",
        email: "",
        reason: "",
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="deletion-request-container">
      <Navigation />
      
      <main className="deletion-request-content">
        <div className="request-form-container">
          <h2>Request Account Deletion</h2>
          <p className="form-description">
            Please fill out the form below to request the deletion of your
            account and associated data. We will process your request within 30
            days as required by privacy regulations.
          </p>

          {submitStatus === "success" && (
            <div className="success-message">
              <h3>Request Submitted Successfully!</h3>
              <p>
                Your account deletion request has been received. We will process
                it within 30 days and contact you at the provided email address.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="error-message">
              <h3>Submission Failed</h3>
              <p>
                There was an error submitting your request. Please try again or
                contact support.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="deletion-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Chatify Username *</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                placeholder="Enter your Chatify username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="reason">Reason for Deletion (Optional)</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                placeholder="Please let us know why you're requesting account deletion (optional)"
                rows="4"
              ></textarea>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                I understand that this action is irreversible and all my data
                will be permanently deleted.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? "Submitting..." : "Submit Deletion Request"}
            </button>
          </form>

          <div className="additional-info">
            <h3>What happens next?</h3>
            <ul>
              <li>
                <strong>Confirmation:</strong> You'll receive an email
                confirmation of your request.
              </li>
              <li>
                <strong>Processing:</strong> We'll process your request within 30
                days as required by privacy regulations.
              </li>
              <li>
                <strong>Deletion:</strong> All your data will be permanently
                deleted from our systems.
              </li>
              <li>
                <strong>Notification:</strong> You'll receive a final
                confirmation when the deletion is complete.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AccountDeletionRequest;
