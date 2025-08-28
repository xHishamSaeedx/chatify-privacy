import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./ApiDocs.css";

const ApiDocs = () => {
  const [activeSection, setActiveSection] = useState("authentication");
  const [heroRef, heroVisible] = useScrollAnimation(0.3);
  const [docsRef, docsVisible] = useScrollAnimation(0.2);

  const apiEndpoints = [
    {
      method: "POST",
      path: "/api/v1/auth/login",
      description: "Authenticate user and get access token",
      parameters: [
        { name: "username", type: "string", required: true, description: "User's username" },
        { name: "password", type: "string", required: true, description: "User's password" }
      ],
      response: {
        success: {
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          user: { id: "123", username: "john_doe" }
        }
      }
    },
    {
      method: "GET",
      path: "/api/v1/users/profile",
      description: "Get current user's profile information",
      parameters: [],
      headers: [
        { name: "Authorization", value: "Bearer <token>", required: true }
      ],
      response: {
        success: {
          id: "123",
          username: "john_doe",
          email: "john@example.com",
          created_at: "2024-01-01T00:00:00Z"
        }
      }
    },
    {
      method: "POST",
      path: "/api/v1/messages/send",
      description: "Send a message to another user",
      parameters: [
        { name: "recipient_id", type: "string", required: true, description: "Recipient's user ID" },
        { name: "content", type: "string", required: true, description: "Message content" },
        { name: "type", type: "string", required: false, description: "Message type (text, image, file)" }
      ],
      headers: [
        { name: "Authorization", value: "Bearer <token>", required: true }
      ],
      response: {
        success: {
          message_id: "msg_123",
          sent_at: "2024-01-01T12:00:00Z",
          status: "sent"
        }
      }
    },
    {
      method: "GET",
      path: "/api/v1/messages/conversation/{user_id}",
      description: "Get conversation history with a specific user",
      parameters: [
        { name: "user_id", type: "string", required: true, description: "User ID to get conversation with" },
        { name: "limit", type: "integer", required: false, description: "Number of messages to return (default: 50)" },
        { name: "offset", type: "integer", required: false, description: "Offset for pagination" }
      ],
      headers: [
        { name: "Authorization", value: "Bearer <token>", required: true }
      ],
      response: {
        success: {
          messages: [
            {
              id: "msg_123",
              content: "Hello!",
              sender_id: "123",
              recipient_id: "456",
              sent_at: "2024-01-01T12:00:00Z",
              type: "text"
            }
          ],
          total: 150,
          has_more: true
        }
      }
    }
  ];

  const codeExamples = {
    authentication: `// JavaScript/Node.js
const axios = require('axios');

const login = async (username, password) => {
  try {
    const response = await axios.post('https://api.chatify.com/api/v1/auth/login', {
      username,
      password
    });
    
    const { token } = response.data;
    // Store token for future requests
    localStorage.setItem('chatify_token', token);
    
    return token;
  } catch (error) {
    console.error('Login failed:', error.response.data);
  }
};`,
    
    sendMessage: `// Send a message
const sendMessage = async (recipientId, content) => {
  const token = localStorage.getItem('chatify_token');
  
  try {
    const response = await axios.post(
      'https://api.chatify.com/api/v1/messages/send',
      {
        recipient_id: recipientId,
        content: content,
        type: 'text'
      },
      {
        headers: {
          'Authorization': \`Bearer \${token}\`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Failed to send message:', error.response.data);
  }
};`,
    
    getConversation: `// Get conversation history
const getConversation = async (userId, limit = 50, offset = 0) => {
  const token = localStorage.getItem('chatify_token');
  
  try {
    const response = await axios.get(
      \`https://api.chatify.com/api/v1/messages/conversation/\${userId}?limit=\${limit}&offset=\${offset}\`,
      {
        headers: {
          'Authorization': \`Bearer \${token}\`
        }
      }
    );
    
    return response.data.messages;
  } catch (error) {
    console.error('Failed to get conversation:', error.response.data);
  }
};`
  };

  const sdkExamples = {
    javascript: `// Install the SDK
npm install @chatify/sdk

// Initialize the SDK
import { ChatifySDK } from '@chatify/sdk';

const chatify = new ChatifySDK({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Authenticate user
const user = await chatify.auth.login(username, password);

// Send a message
const message = await chatify.messages.send({
  recipientId: 'user_123',
  content: 'Hello!',
  type: 'text'
});

// Get conversation
const conversation = await chatify.messages.getConversation('user_123', {
  limit: 50,
  offset: 0
});`,
    
    python: `# Install the SDK
pip install chatify-sdk

# Initialize the SDK
from chatify import ChatifySDK

chatify = ChatifySDK(
    api_key='your_api_key',
    environment='production'
)

# Authenticate user
user = chatify.auth.login(username, password)

# Send a message
message = chatify.messages.send(
    recipient_id='user_123',
    content='Hello!',
    type='text'
)

# Get conversation
conversation = chatify.messages.get_conversation(
    user_id='user_123',
    limit=50,
    offset=0
)`
  };

  return (
    <div className="api-docs-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className={`hero-container fade-in-up ${heroVisible ? 'visible' : ''}`}>
          <div className="hero-content">
            <h1 className="hero-title">
              API
              <span className="gradient-text"> Documentation</span>
            </h1>
            <p className="hero-subtitle">
              Integrate Chatify's secure messaging into your applications. 
              Our comprehensive API provides everything you need to build 
              privacy-first communication features.
            </p>
            <div className="hero-cta">
              <a href="#quickstart" className="cta-button primary">
                Get Started
              </a>
              <a href="#endpoints" className="cta-button secondary">
                View Endpoints
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-preview">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">api-example.js</span>
              </div>
              <div className="code-content">
                <pre><code>{`const chatify = new ChatifySDK({
  apiKey: 'your_api_key'
});

await chatify.messages.send({
  recipientId: 'user_123',
  content: 'Hello!'
});`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="docs-section" ref={docsRef}>
        <div className="container">
          <div className="docs-layout">
            {/* Sidebar Navigation */}
            <div className="docs-sidebar">
              <nav className="docs-nav">
                <h3>Documentation</h3>
                <ul>
                  <li>
                    <button 
                      className={activeSection === "authentication" ? "active" : ""}
                      onClick={() => setActiveSection("authentication")}
                    >
                      Authentication
                    </button>
                  </li>
                  <li>
                    <button 
                      className={activeSection === "endpoints" ? "active" : ""}
                      onClick={() => setActiveSection("endpoints")}
                    >
                      API Endpoints
                    </button>
                  </li>
                  <li>
                    <button 
                      className={activeSection === "sdks" ? "active" : ""}
                      onClick={() => setActiveSection("sdks")}
                    >
                      SDKs & Libraries
                    </button>
                  </li>
                  <li>
                    <button 
                      className={activeSection === "webhooks" ? "active" : ""}
                      onClick={() => setActiveSection("webhooks")}
                    >
                      Webhooks
                    </button>
                  </li>
                  <li>
                    <button 
                      className={activeSection === "rate-limits" ? "active" : ""}
                      onClick={() => setActiveSection("rate-limits")}
                    >
                      Rate Limits
                    </button>
                  </li>
                  <li>
                    <button 
                      className={activeSection === "errors" ? "active" : ""}
                      onClick={() => setActiveSection("errors")}
                    >
                      Error Codes
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Main Content */}
            <div className="docs-content">
              <div className={`docs-section-content fade-in-up ${docsVisible ? 'visible' : ''}`}>
                
                {/* Authentication Section */}
                {activeSection === "authentication" && (
                  <div className="docs-section">
                    <h2>Authentication</h2>
                    <p>
                      Chatify API uses Bearer token authentication. You'll need to obtain an access token 
                      by authenticating with your API credentials.
                    </p>
                    
                    <h3>Getting Started</h3>
                    <ol>
                      <li>Sign up for a Chatify developer account</li>
                      <li>Create an API key in your dashboard</li>
                      <li>Use the API key to authenticate your requests</li>
                    </ol>

                    <h3>Code Example</h3>
                    <div className="code-block">
                      <div className="code-header">
                        <span>JavaScript</span>
                        <button className="copy-button">Copy</button>
                      </div>
                      <pre><code>{codeExamples.authentication}</code></pre>
                    </div>
                  </div>
                )}

                {/* API Endpoints Section */}
                {activeSection === "endpoints" && (
                  <div className="docs-section">
                    <h2>API Endpoints</h2>
                    <p>
                      Explore our comprehensive API endpoints for messaging, user management, and more.
                    </p>

                    {apiEndpoints.map((endpoint, index) => (
                      <div key={index} className="endpoint-card">
                        <div className="endpoint-header">
                          <span className={`method ${endpoint.method.toLowerCase()}`}>
                            {endpoint.method}
                          </span>
                          <span className="endpoint-path">{endpoint.path}</span>
                        </div>
                        <p className="endpoint-description">{endpoint.description}</p>
                        
                        {endpoint.parameters.length > 0 && (
                          <div className="endpoint-params">
                            <h4>Parameters</h4>
                            <table>
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Type</th>
                                  <th>Required</th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <tr key={paramIndex}>
                                    <td>{param.name}</td>
                                    <td><code>{param.type}</code></td>
                                    <td>{param.required ? "Yes" : "No"}</td>
                                    <td>{param.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {endpoint.headers && endpoint.headers.length > 0 && (
                          <div className="endpoint-headers">
                            <h4>Headers</h4>
                            <table>
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Value</th>
                                  <th>Required</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.headers.map((header, headerIndex) => (
                                  <tr key={headerIndex}>
                                    <td>{header.name}</td>
                                    <td><code>{header.value}</code></td>
                                    <td>{header.required ? "Yes" : "No"}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        <div className="endpoint-response">
                          <h4>Response</h4>
                          <div className="code-block">
                            <pre><code>{JSON.stringify(endpoint.response, null, 2)}</code></pre>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* SDKs Section */}
                {activeSection === "sdks" && (
                  <div className="docs-section">
                    <h2>SDKs & Libraries</h2>
                    <p>
                      Use our official SDKs to integrate Chatify into your applications quickly and easily.
                    </p>

                    <div className="sdk-grid">
                      <div className="sdk-card">
                        <div className="sdk-header">
                          <h3>JavaScript/Node.js</h3>
                          <span className="sdk-version">v2.1.0</span>
                        </div>
                        <p>Official JavaScript SDK for browser and Node.js environments.</p>
                        <div className="sdk-actions">
                          <a href="#" className="sdk-button primary">Install</a>
                          <a href="#" className="sdk-button secondary">Documentation</a>
                        </div>
                        <div className="code-block">
                          <div className="code-header">
                            <span>Installation</span>
                            <button className="copy-button">Copy</button>
                          </div>
                          <pre><code>npm install @chatify/sdk</code></pre>
                        </div>
                        <div className="code-block">
                          <div className="code-header">
                            <span>Quick Start</span>
                            <button className="copy-button">Copy</button>
                          </div>
                          <pre><code>{sdkExamples.javascript}</code></pre>
                        </div>
                      </div>

                      <div className="sdk-card">
                        <div className="sdk-header">
                          <h3>Python</h3>
                          <span className="sdk-version">v1.8.0</span>
                        </div>
                        <p>Official Python SDK for server-side applications.</p>
                        <div className="sdk-actions">
                          <a href="#" className="sdk-button primary">Install</a>
                          <a href="#" className="sdk-button secondary">Documentation</a>
                        </div>
                        <div className="code-block">
                          <div className="code-header">
                            <span>Installation</span>
                            <button className="copy-button">Copy</button>
                          </div>
                          <pre><code>pip install chatify-sdk</code></pre>
                        </div>
                        <div className="code-block">
                          <div className="code-header">
                            <span>Quick Start</span>
                            <button className="copy-button">Copy</button>
                          </div>
                          <pre><code>{sdkExamples.python}</code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Webhooks Section */}
                {activeSection === "webhooks" && (
                  <div className="docs-section">
                    <h2>Webhooks</h2>
                    <p>
                      Receive real-time notifications about events in your Chatify integration.
                    </p>

                    <h3>Supported Events</h3>
                    <div className="webhook-events">
                      <div className="event-card">
                        <h4>message.received</h4>
                        <p>Triggered when a new message is received</p>
                      </div>
                      <div className="event-card">
                        <h4>user.online</h4>
                        <p>Triggered when a user comes online</p>
                      </div>
                      <div className="event-card">
                        <h4>user.offline</h4>
                        <p>Triggered when a user goes offline</p>
                      </div>
                    </div>

                    <h3>Setting Up Webhooks</h3>
                    <div className="code-block">
                      <pre><code>{`// Webhook endpoint example
app.post('/webhook', (req, res) => {
  const event = req.body;
  
  switch (event.type) {
    case 'message.received':
      handleNewMessage(event.data);
      break;
    case 'user.online':
      handleUserOnline(event.data);
      break;
  }
  
  res.status(200).send('OK');
});`}</code></pre>
                    </div>
                  </div>
                )}

                {/* Rate Limits Section */}
                {activeSection === "rate-limits" && (
                  <div className="docs-section">
                    <h2>Rate Limits</h2>
                    <p>
                      To ensure fair usage and maintain service quality, we implement rate limits on our API.
                    </p>

                    <div className="rate-limits-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Endpoint</th>
                            <th>Rate Limit</th>
                            <th>Window</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Authentication</td>
                            <td>10 requests</td>
                            <td>1 minute</td>
                          </tr>
                          <tr>
                            <td>Send Message</td>
                            <td>100 requests</td>
                            <td>1 minute</td>
                          </tr>
                          <tr>
                            <td>Get Messages</td>
                            <td>1000 requests</td>
                            <td>1 hour</td>
                          </tr>
                          <tr>
                            <td>User Profile</td>
                            <td>500 requests</td>
                            <td>1 hour</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Error Codes Section */}
                {activeSection === "errors" && (
                  <div className="docs-section">
                    <h2>Error Codes</h2>
                    <p>
                      Understanding error codes helps you handle API responses effectively.
                    </p>

                    <div className="error-codes">
                      <div className="error-card">
                        <h4>400 - Bad Request</h4>
                        <p>Invalid request parameters or malformed JSON</p>
                      </div>
                      <div className="error-card">
                        <h4>401 - Unauthorized</h4>
                        <p>Invalid or missing authentication token</p>
                      </div>
                      <div className="error-card">
                        <h4>403 - Forbidden</h4>
                        <p>Insufficient permissions for the requested resource</p>
                      </div>
                      <div className="error-card">
                        <h4>404 - Not Found</h4>
                        <p>Requested resource does not exist</p>
                      </div>
                      <div className="error-card">
                        <h4>429 - Too Many Requests</h4>
                        <p>Rate limit exceeded</p>
                      </div>
                      <div className="error-card">
                        <h4>500 - Internal Server Error</h4>
                        <p>Unexpected server error</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApiDocs;
