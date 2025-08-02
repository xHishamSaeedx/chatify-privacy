import './App.css'
import chatifyLogo from '/chatify_logo2.png'

function App() {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <img src={chatifyLogo} alt="Chatify Logo" className="chatify-logo" />
        <h1>Privacy Policy</h1>
        <p className="app-subtitle">Chatify - Your Privacy Matters</p>
      </header>

      <main className="privacy-content">
        <section className="policy-section">
          <p className="intro-text">
            Welcome to Chatify! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App").
          </p>
        </section>

        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>We collect the minimum amount of data necessary to allow you to use the app.</p>
          
          <h3>a. Information You Provide</h3>
          <ul>
            <li><strong>Username:</strong> Required to identify users.</li>
            <li><strong>Shared Content:</strong> Images, text, and files shared in chats.</li>
          </ul>

          <h3>b. Automatically Collected Information</h3>
          <ul>
            <li><strong>Device Information:</strong> Device type, operating system, and general technical info to ensure compatibility and improve performance.</li>
            <li><strong>Usage Data:</strong> Anonymous statistics like session duration, crash reports, and feature usage.</li>
            <li><strong>IP Address & Region (approximate):</strong> Used for moderation, abuse prevention, and compliance.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain the Chatify app.</li>
            <li>Connect users for random chats.</li>
            <li>Improve and personalize your experience.</li>
            <li>Prevent abuse and enforce our Terms of Use.</li>
            <li>Comply with legal obligations (if any).</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Data Sharing & Disclosure</h2>
          <p>We do not sell or share your personal information with third parties for marketing purposes. Your data may be shared:</p>
          <ul>
            <li>With moderation systems or admins in case of abuse or violations.</li>
            <li>When legally required (e.g., under law enforcement requests).</li>
            <li>With third-party service providers (e.g., analytics or cloud services), strictly under confidentiality agreements.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Friend Feature & Usernames</h2>
          <p>Users may choose to share their usernames with others to continue chatting later. This is optional and completely at your discretion.</p>
        </section>

        <section className="policy-section">
          <h2>5. Image & File Sharing</h2>
          <p>Media shared in conversations is stored temporarily on secure servers for delivery and then automatically deleted. We do not scan or use your media for any purpose beyond service delivery.</p>
        </section>

        <section className="policy-section">
          <h2>6. Data Security</h2>
          <p>We use encryption and secure protocols to protect your data. However, please remember that no internet transmission is ever 100% secure.</p>
        </section>

        <section className="policy-section">
          <h2>7. Children's Privacy</h2>
          <p>Chatify is not intended for children under 18. We do not knowingly collect personal information from anyone under this age. If you're a parent and believe your child has used the app, contact us to request removal.</p>
        </section>

        <section className="policy-section">
          <h2>8. Your Rights</h2>
          <p>Depending on your region, you may have the right to:</p>
          <ul>
            <li>Request access to your data.</li>
            <li>Request deletion of your account.</li>
            <li>Withdraw consent for data use.</li>
          </ul>
          <p>To request any of these, contact us at [your support email].</p>
        </section>

        <section className="policy-section">
          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Updates will be posted in the app or on our website. Continued use of the app means you accept the new policy.</p>
        </section>

        <section className="policy-section">
          <h2>10. Contact Us</h2>
          <p>If you have any questions or concerns, reach out to us at:</p>
          <div className="contact-info">
            <p>Email: [your support email]</p>
            <p>App: Chatify</p>
          </div>
        </section>
      </main>

      <footer className="privacy-footer">
        <p>&copy; 2024 Chatify. All rights reserved.</p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  )
}

export default App
