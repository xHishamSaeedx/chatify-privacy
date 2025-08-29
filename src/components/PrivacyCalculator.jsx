import React, { useState } from 'react';
import './PrivacyCalculator.css';

const PrivacyCalculator = () => {
  const [privacyScore, setPrivacyScore] = useState(100);
  const [dataUsage, setDataUsage] = useState({
    messages: 0,
    media: 0,
    calls: 0,
    location: false,
    contacts: false,
    analytics: false
  });
  const [showResults, setShowResults] = useState(false);

  const calculatePrivacyScore = () => {
    let score = 100;
    
    // Deduct points based on data usage
    if (dataUsage.messages > 1000) score -= 10;
    if (dataUsage.messages > 5000) score -= 15;
    
    if (dataUsage.media > 50) score -= 10;
    if (dataUsage.media > 200) score -= 15;
    
    if (dataUsage.calls > 100) score -= 10;
    if (dataUsage.calls > 500) score -= 15;
    
    if (dataUsage.location) score -= 20;
    if (dataUsage.contacts) score -= 15;
    if (dataUsage.analytics) score -= 10;
    
    // Ensure score doesn't go below 0
    score = Math.max(0, score);
    setPrivacyScore(score);
    setShowResults(true);
  };

  const resetCalculator = () => {
    setDataUsage({
      messages: 0,
      media: 0,
      calls: 0,
      location: false,
      contacts: false,
      analytics: false
    });
    setPrivacyScore(100);
    setShowResults(false);
  };

  const getPrivacyLevel = (score) => {
    if (score >= 90) return { level: 'Excellent', color: '#10b981', icon: '🛡️' };
    if (score >= 70) return { level: 'Good', color: '#3b82f6', icon: '✅' };
    if (score >= 50) return { level: 'Fair', color: '#f59e0b', icon: '⚠️' };
    return { level: 'Poor', color: '#ef4444', icon: '🚨' };
  };

  const privacyLevel = getPrivacyLevel(privacyScore);

  return (
    <div className="privacy-calculator">
      <div className="calculator-header">
        <h3>Privacy Score Calculator</h3>
        <p>See how Chatify protects your privacy compared to other apps</p>
      </div>

      <div className="calculator-content">
        <div className="input-section">
          <h4>Your Usage (Last 30 days)</h4>
          
          <div className="input-group">
            <label>Messages Sent</label>
            <input
              type="number"
              value={dataUsage.messages}
              onChange={(e) => setDataUsage({...dataUsage, messages: parseInt(e.target.value) || 0})}
              placeholder="0"
              min="0"
            />
          </div>

          <div className="input-group">
            <label>Media Files Shared</label>
            <input
              type="number"
              value={dataUsage.media}
              onChange={(e) => setDataUsage({...dataUsage, media: parseInt(e.target.value) || 0})}
              placeholder="0"
              min="0"
            />
          </div>

          <div className="input-group">
            <label>Voice/Video Calls</label>
            <input
              type="number"
              value={dataUsage.calls}
              onChange={(e) => setDataUsage({...dataUsage, calls: parseInt(e.target.value) || 0})}
              placeholder="0"
              min="0"
            />
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={dataUsage.location}
                onChange={(e) => setDataUsage({...dataUsage, location: e.target.checked})}
              />
              <span className="checkmark"></span>
              Share location data
            </label>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={dataUsage.contacts}
                onChange={(e) => setDataUsage({...dataUsage, contacts: e.target.checked})}
              />
              <span className="checkmark"></span>
              Sync contacts
            </label>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={dataUsage.analytics}
                onChange={(e) => setDataUsage({...dataUsage, analytics: e.target.checked})}
              />
              <span className="checkmark"></span>
              Allow analytics
            </label>
          </div>

          <div className="calculator-actions">
            <button className="calculate-btn" onClick={calculatePrivacyScore}>
              Calculate Privacy Score
            </button>
            <button className="reset-btn" onClick={resetCalculator}>
              Reset
            </button>
          </div>
        </div>

        {showResults && (
          <div className="results-section">
            <div className="privacy-score-display">
              <div className="score-circle" style={{'--score-color': privacyLevel.color}}>
                <div className="score-number">{privacyScore}</div>
                <div className="score-label">Privacy Score</div>
              </div>
              <div className="privacy-level">
                <span className="level-icon">{privacyLevel.icon}</span>
                <span className="level-text" style={{color: privacyLevel.color}}>
                  {privacyLevel.level} Privacy
                </span>
              </div>
            </div>

            <div className="privacy-insights">
              <h4>Privacy Insights</h4>
              <div className="insights-list">
                {privacyScore >= 90 && (
                  <div className="insight-item positive">
                    <span className="insight-icon">✅</span>
                    <span>Excellent privacy protection with Chatify's end-to-end encryption</span>
                  </div>
                )}
                {privacyScore >= 70 && privacyScore < 90 && (
                  <div className="insight-item positive">
                    <span className="insight-icon">✅</span>
                    <span>Good privacy practices. Consider reducing data sharing for better protection</span>
                  </div>
                )}
                {privacyScore >= 50 && privacyScore < 70 && (
                  <div className="insight-item warning">
                    <span className="insight-icon">⚠️</span>
                    <span>Fair privacy level. Review your data sharing settings</span>
                  </div>
                )}
                {privacyScore < 50 && (
                  <div className="insight-item negative">
                    <span className="insight-icon">🚨</span>
                    <span>Privacy at risk. Consider adjusting your settings</span>
                  </div>
                )}
                
                <div className="insight-item info">
                  <span className="insight-icon">ℹ️</span>
                  <span>Chatify encrypts all your data and never sells it to third parties</span>
                </div>
              </div>
            </div>

            <div className="comparison-section">
              <h4>vs Other Apps</h4>
              <div className="app-comparison">
                <div className="comparison-item">
                  <span className="app-name">Chatify</span>
                  <div className="comparison-bar">
                    <div className="bar-fill" style={{width: `${privacyScore}%`, backgroundColor: privacyLevel.color}}></div>
                  </div>
                  <span className="comparison-score">{privacyScore}%</span>
                </div>
                <div className="comparison-item">
                  <span className="app-name">WhatsApp</span>
                  <div className="comparison-bar">
                    <div className="bar-fill" style={{width: '60%', backgroundColor: '#f59e0b'}}></div>
                  </div>
                  <span className="comparison-score">60%</span>
                </div>
                <div className="comparison-item">
                  <span className="app-name">Facebook Messenger</span>
                  <div className="comparison-bar">
                    <div className="bar-fill" style={{width: '30%', backgroundColor: '#ef4444'}}></div>
                  </div>
                  <span className="comparison-score">30%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyCalculator;
