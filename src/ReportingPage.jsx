import { Link } from "react-router-dom";
import chatifyLogo from "/chatify_logo2.png";
import "./ReportingPage.css";

function ReportingPage() {
  return (
    <div className="reporting-container">
      <header className="reporting-header">
        <img src={chatifyLogo} alt="Chatify Logo" className="chatify-logo" />
        <h1>Reporting System</h1>
        <p className="app-subtitle">Chatify - Safe & Secure Community</p>
        <nav className="reporting-nav">
          <Link to="/" className="nav-link">
            Privacy Policy
          </Link>
          <Link to="/account-deletion" className="nav-link">
            Request Account Deletion
          </Link>
          <Link to="/reporting" className="nav-link active">
            Reporting System
          </Link>
        </nav>
      </header>

      <main className="reporting-content">
        <section className="reporting-section">
          <h2>🚨 Reporting System Architecture</h2>
          <h3>How Reports Are Processed</h3>
          <div className="process-flow">
            <div className="process-step">
              <h4>1. User Submission</h4>
              <p>Users can report others from both Friends List and Chat screens</p>
            </div>
            <div className="process-step">
              <h4>2. Backend Processing</h4>
              <p>Reports are validated and stored in our secure database</p>
            </div>
            <div className="process-step">
              <h4>3. Admin Notification</h4>
              <p>All reports are immediately sent to xpertgamesco@gmail.com</p>
            </div>
            <div className="process-step">
              <h4>4. Investigation</h4>
              <p>Our moderation team reviews each report thoroughly</p>
            </div>
            <div className="process-step">
              <h4>5. Action Taken</h4>
              <p>Appropriate measures are implemented based on severity</p>
            </div>
          </div>
        </section>

        <section className="reporting-section">
          <h2>⚙️ Technical Implementation</h2>
          <ul>
            <li><strong>Frontend:</strong> Flutter-based reporting interface with category selection</li>
            <li><strong>Backend:</strong> Node.js API with Firebase authentication</li>
            <li><strong>Database:</strong> Secure storage with audit trails</li>
            <li><strong>Email System:</strong> Automated notifications using Gmail SMTP</li>
            <li><strong>Duplicate Prevention:</strong> Users cannot report the same person multiple times</li>
          </ul>
        </section>

        <section className="reporting-section">
          <h2>🚨 Report Categories</h2>
          
          <div className="category-card">
            <h3>1. Sexual Content</h3>
            <p><strong>Definition:</strong> Inappropriate sexual material, explicit content, or sexual harassment</p>
            <h4>Examples:</h4>
            <ul>
              <li>Sending unsolicited sexual images</li>
              <li>Making sexual advances without consent</li>
              <li>Sharing explicit content in chat</li>
            </ul>
            <p><strong>Action:</strong> Immediate account review, potential suspension or permanent ban</p>
          </div>

          <div className="category-card">
            <h3>2. Violent Content</h3>
            <p><strong>Definition:</strong> Threats of violence, graphic violence, or promoting harm</p>
            <h4>Examples:</h4>
            <ul>
              <li>Threats against other users</li>
              <li>Sharing violent imagery</li>
              <li>Promoting self-harm or harm to others</li>
            </ul>
            <p><strong>Action:</strong> Immediate account suspension, investigation, potential legal reporting</p>
          </div>

          <div className="category-card">
            <h3>3. Hateful Content</h3>
            <p><strong>Definition:</strong> Discrimination, hate speech, or targeting based on protected characteristics</p>
            <h4>Examples:</h4>
            <ul>
              <li>Racial, ethnic, or religious slurs</li>
              <li>Homophobic or transphobic comments</li>
              <li>Gender-based harassment</li>
            </ul>
            <p><strong>Action:</strong> Account suspension, mandatory education, potential permanent ban</p>
          </div>

          <div className="category-card">
            <h3>4. Harmful Content</h3>
            <p><strong>Definition:</strong> Content that causes emotional or psychological harm</p>
            <h4>Examples:</h4>
            <ul>
              <li>Bullying or cyberbullying</li>
              <li>Stalking behavior</li>
              <li>Manipulative or coercive behavior</li>
            </ul>
            <p><strong>Action:</strong> Warning, temporary suspension, monitoring</p>
          </div>

          <div className="category-card">
            <h3>5. Spam Content</h3>
            <p><strong>Definition:</strong> Unwanted commercial content, scams, or repetitive messaging</p>
            <h4>Examples:</h4>
            <ul>
              <li>Unsolicited advertising</li>
              <li>Phishing attempts</li>
              <li>Automated messaging</li>
            </ul>
            <p><strong>Action:</strong> Content removal, account restrictions, potential suspension</p>
          </div>

          <div className="category-card critical">
            <h3>6. Child Abuse Content</h3>
            <p><strong>Definition:</strong> Any content involving minors in inappropriate contexts</p>
            <h4>Examples:</h4>
            <ul>
              <li>Sexual content involving minors</li>
              <li>Exploitation of children</li>
              <li>Inappropriate contact with minors</li>
            </ul>
            <p><strong>Action:</strong> Immediate account termination, legal authorities notified</p>
          </div>
        </section>

        <section className="reporting-section">
          <h2>🔒 Security Measures</h2>
          
          <div className="security-section">
            <h3>Data Protection</h3>
            <ul>
              <li><strong>Encryption:</strong> All report data is encrypted in transit and at rest</li>
              <li><strong>Access Control:</strong> Only authorized moderators can access report data</li>
              <li><strong>Audit Logging:</strong> All actions are logged for accountability</li>
              <li><strong>Data Retention:</strong> Reports are retained for investigation purposes only</li>
            </ul>
          </div>

          <div className="security-section">
            <h3>User Privacy</h3>
            <ul>
              <li><strong>Anonymous Reporting:</strong> Reporter identity is protected from the reported user</li>
              <li><strong>Confidentiality:</strong> Report details are only shared with moderation team</li>
              <li><strong>No Retaliation:</strong> Users are protected from retaliation for legitimate reports</li>
            </ul>
          </div>

          <div className="security-section">
            <h3>System Security</h3>
            <ul>
              <li><strong>Authentication:</strong> All report submissions require valid user authentication</li>
              <li><strong>Rate Limiting:</strong> Prevents abuse of the reporting system</li>
              <li><strong>Validation:</strong> All report data is validated before processing</li>
              <li><strong>Backup Systems:</strong> Redundant systems ensure no reports are lost</li>
            </ul>
          </div>
        </section>

        <section className="reporting-section">
          <h2>📧 Contact Information</h2>
          <p>If you have any questions about our reporting system or need to report an issue, please contact our moderation team at:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> xpertgamesco@gmail.com</p>
            <p><strong>Response Time:</strong> Within 24 hours for urgent reports</p>
          </div>
        </section>
      </main>

      <footer className="reporting-footer">
        <p>&copy; 2024 Chatify. All rights reserved.</p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}

export default ReportingPage;
