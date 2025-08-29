// Analytics abstraction layer
// Replace with your preferred analytics provider (Google Analytics, Mixpanel, etc.)

class Analytics {
  constructor() {
    this.isEnabled = false; // Disable analytics for now to avoid build issues
    this.events = [];
    
    // Bind methods to maintain context
    this.trackPageView = this.trackPageView.bind(this);
    this.trackEvent = this.trackEvent.bind(this);
    this.trackDownload = this.trackDownload.bind(this);
    this.trackFormSubmission = this.trackFormSubmission.bind(this);
    this.trackInteraction = this.trackInteraction.bind(this);
  }

  // Track page views
  trackPageView(pagePath, pageTitle = '') {
    if (!this.isEnabled) {
      console.log('📊 Analytics: Page View', { pagePath, pageTitle });
      return;
    }

    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pagePath,
        page_title: pageTitle
      });
    }

    // Example: Mixpanel
    if (typeof window !== 'undefined' && typeof window.mixpanel !== 'undefined') {
      window.mixpanel.track('Page View', {
        page: pagePath,
        title: pageTitle
      });
    }

    // Store locally for debugging
    this.events.push({
      type: 'page_view',
      timestamp: new Date().toISOString(),
      data: { pagePath, pageTitle }
    });
  }

  // Track custom events
  trackEvent(eventName, properties = {}) {
    if (!this.isEnabled) {
      console.log('📊 Analytics: Event', { eventName, properties });
      return;
    }

    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, properties);
    }

    // Example: Mixpanel
    if (typeof window !== 'undefined' && typeof window.mixpanel !== 'undefined') {
      window.mixpanel.track(eventName, properties);
    }

    // Store locally for debugging
    this.events.push({
      type: 'event',
      timestamp: new Date().toISOString(),
      data: { eventName, properties }
    });
  }

  // Track downloads
  trackDownload(platform, source = 'website') {
    this.trackEvent('download_started', {
      platform,
      source,
      timestamp: new Date().toISOString()
    });
  }

  // Track form submissions
  trackFormSubmission(formType, success = true) {
    this.trackEvent('form_submitted', {
      form_type: formType,
      success,
      timestamp: new Date().toISOString()
    });
  }

  // Track user interactions
  trackInteraction(element, action) {
    this.trackEvent('user_interaction', {
      element,
      action,
      timestamp: new Date().toISOString()
    });
  }

  // Get analytics events (for debugging)
  getEvents() {
    return this.events;
  }

  // Clear events
  clearEvents() {
    this.events = [];
  }
}

// Create singleton instance
const analytics = new Analytics();

// Export for use throughout the app
export default analytics;

// Export individual methods for convenience
export const {
  trackPageView,
  trackEvent,
  trackDownload,
  trackFormSubmission,
  trackInteraction
} = analytics;
