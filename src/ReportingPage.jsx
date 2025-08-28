import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./ReportingPage.css";

function ReportingPage() {
  const [formData, setFormData] = useState({
    reporterName: "",
    reporterEmail: "",
    reportedUsername: "",
    reportType: "",
    description: "",
    evidence: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const reportTypes = [
    "Harassment or Bullying",
    "Inappropriate Content",
    "Spam or Scam",
    "Fake Profile",
    "Violence or Threats",
    "Other",
  ];

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
      await addDoc(collection(db, "user_reports"), {
        ...formData,
        reportDate: serverTimestamp(),
        status: "pending",
      });

      setSubmitStatus("success");
      setFormData({
        reporterName: "",
        reporterEmail: "",
        reportedUsername: "",
        reportType: "",
        description: "",
        evidence: "",
      });
    } catch (error) {
      console.error("Error submitting report:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reporting-page">
      <Navigation />
      
      <main className="reporting-content">
        <div className="reporting-container">
          <div className="reporting-header">
            <h1>Report a User</h1>
            <p>
              Help us maintain a safe and respectful community by reporting
              inappropriate behavior or content.
            </p>
          </div>

          {submitStatus === "success" && (
            <div className="success-message">
              <h3>Report Submitted Successfully!</h3>
              <p>
                Thank you for your report. Our moderation team will review it
                within 24-48 hours and take appropriate action.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="error-message">
              <h3>Submission Failed</h3>
              <p>
                There was an error submitting your report. Please try again or
                contact support directly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="reporting-form">
            <div className="form-section">
              <h3>Your Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="reporterName">Your Name *</label>
                  <input
                    type="text"
                    id="reporterName"
                    name="reporterName"
                    value={formData.reporterName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reporterEmail">Your Email *</label>
                  <input
                    type="email"
                    id="reporterEmail"
                    name="reporterEmail"
                    value={formData.reporterEmail}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Report Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="reportedUsername">Reported Username *</label>
                  <input
                    type="text"
                    id="reportedUsername"
                    name="reportedUsername"
                    value={formData.reportedUsername}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter the username you're reporting"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reportType">Type of Report *</label>
                  <select
                    id="reportType"
                    name="reportType"
                    value={formData.reportType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select report type</option>
                    {reportTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Please provide a detailed description of the incident or behavior you're reporting"
                  rows="5"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="evidence">Additional Evidence (Optional)</label>
                <textarea
                  id="evidence"
                  name="evidence"
                  value={formData.evidence}
                  onChange={handleInputChange}
                  placeholder="Any additional information, screenshots, or evidence you'd like to provide"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                I confirm that this report is accurate and submitted in good faith.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </button>
          </form>

          <div className="reporting-guidelines">
            <h3>Reporting Guidelines</h3>
            <div className="guidelines-grid">
              <div className="guideline-card">
                <h4>What to Report</h4>
                <ul>
                  <li>Harassment or bullying behavior</li>
                  <li>Inappropriate or offensive content</li>
                  <li>Spam, scams, or fake profiles</li>
                  <li>Threats of violence</li>
                  <li>Impersonation of others</li>
                </ul>
              </div>

              <div className="guideline-card">
                <h4>What Not to Report</h4>
                <ul>
                  <li>Disagreements or differences of opinion</li>
                  <li>Legitimate criticism or feedback</li>
                  <li>Accidental message sends</li>
                  <li>Technical issues (use support instead)</li>
                </ul>
              </div>

              <div className="guideline-card">
                <h4>Our Process</h4>
                <ul>
                  <li>Reports reviewed within 24-48 hours</li>
                  <li>Confidential handling of all reports</li>
                  <li>Appropriate action taken based on severity</li>
                  <li>You'll be notified of the outcome</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ReportingPage;
