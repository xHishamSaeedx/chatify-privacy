"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Shield, Settings, Info } from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <FileText className="h-8 w-8 text-primary" />
              </motion.div>
              <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
              <p className="text-muted-foreground text-lg">
                Learn about how we use cookies and similar technologies
              </p>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-card border border-border rounded-lg p-8 shadow-sm prose prose-lg max-w-none"
            >
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Info className="h-6 w-6 text-primary" />
                    1. What Are Cookies?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit a website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    improving our services.
                  </p>
                </section>

                {/* How We Use Cookies */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Settings className="h-6 w-6 text-primary" />
                    2. How We Use Cookies
                  </h2>
                  <p className="mb-4">
                    Chatify uses cookies for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Security Cookies:</strong> Help protect against fraud and ensure security</li>
                  </ul>
                </section>

                {/* Types of Cookies */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    <div className="border border-border rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">Essential Cookies</h3>
                      <p className="text-muted-foreground mb-3">
                        These cookies are necessary for the website to function and cannot be switched off.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Authentication and security</li>
                        <li>Session management</li>
                        <li>Load balancing</li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">Analytics Cookies</h3>
                      <p className="text-muted-foreground mb-3">
                        These cookies help us understand how visitors interact with our website.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Page views and navigation</li>
                        <li>Performance monitoring</li>
                        <li>Error tracking</li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">Preference Cookies</h3>
                      <p className="text-muted-foreground mb-3">
                        These cookies remember your choices and preferences.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Language preferences</li>
                        <li>Theme settings</li>
                        <li>Notification preferences</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Third-Party Cookies */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
                  <p className="mb-4">
                    We may use third-party services that place cookies on your device:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Analytics Services:</strong> Google Analytics to understand website usage</li>
                    <li><strong>Security Services:</strong> Cloudflare for DDoS protection and security</li>
                    <li><strong>Performance Monitoring:</strong> Services to monitor website performance</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    These third-party services have their own privacy policies and cookie practices.
                  </p>
                </section>

                {/* Cookie Management */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    5. Managing Your Cookie Preferences
                  </h2>
                  <p className="mb-4">
                    You have several options for managing cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through settings</li>
                    <li><strong>Cookie Consent:</strong> We provide cookie consent options when you first visit</li>
                    <li><strong>Opt-out Tools:</strong> Use browser extensions or tools to manage cookies</li>
                    <li><strong>Contact Us:</strong> Reach out if you have questions about our cookie practices</li>
                  </ul>
                </section>

                {/* Cookie Duration */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Cookie Duration</h2>
                  <p className="mb-4">
                    Cookies on our website have different lifespans:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
                    <li><strong>Essential Cookies:</strong> May persist for security purposes</li>
                  </ul>
                </section>

                {/* Updates to Policy */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons. We will notify you of any 
                    material changes by posting the new policy on this page.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                  <p>
                    If you have any questions about our use of cookies, please contact us at{" "}
                    <a href="mailto:privacy@chatify.com" className="text-primary hover:underline">
                      privacy@chatify.com
                    </a>
                  </p>
                </section>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="bg-muted/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Questions About Cookies?</h3>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about our cookie policy or need help managing your preferences, 
                  please don't hesitate to reach out.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:privacy@chatify.com"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Contact Privacy Team
                  </a>
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
