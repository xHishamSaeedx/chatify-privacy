"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Shield, Users, AlertTriangle } from "lucide-react";

export default function TermsPage() {
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
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground text-lg">
                Please read these terms carefully before using Chatify
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
                    <FileText className="h-6 w-6 text-primary" />
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Chatify, you accept and agree to be bound by the terms and provision of this agreement. 
                    If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                {/* Service Description */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    2. Service Description
                  </h2>
                  <p className="mb-4">
                    Chatify is a random chat application that allows users to connect with others worldwide through text messaging, 
                    media sharing, and voice communication.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Random matching with other users</li>
                    <li>Text messaging and media sharing</li>
                    <li>Friend system for continued conversations</li>
                    <li>Translation features for language barriers</li>
                  </ul>
                </section>

                {/* User Responsibilities */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    3. User Responsibilities
                  </h2>
                  <p className="mb-4">As a user of Chatify, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be at least 18 years old or have parental consent</li>
                    <li>Provide accurate and truthful information</li>
                    <li>Respect other users and their privacy</li>
                    <li>Not engage in harassment, bullying, or inappropriate behavior</li>
                    <li>Not share illegal, harmful, or offensive content</li>
                    <li>Not attempt to circumvent any security measures</li>
                    <li>Report inappropriate behavior when encountered</li>
                  </ul>
                </section>

                {/* Prohibited Activities */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                    4. Prohibited Activities
                  </h2>
                  <p className="mb-4">The following activities are strictly prohibited:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Harassment, bullying, or threatening behavior</li>
                    <li>Sharing explicit, violent, or inappropriate content</li>
                    <li>Spamming or sending unsolicited messages</li>
                    <li>Impersonating others or creating fake profiles</li>
                    <li>Attempting to hack or compromise the service</li>
                    <li>Sharing personal information of other users</li>
                    <li>Using the service for illegal activities</li>
                  </ul>
                </section>

                {/* Privacy and Data */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Privacy and Data Protection</h2>
                  <p className="mb-4">
                    We are committed to protecting your privacy. Our data collection and usage practices are detailed in our{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We collect minimal data necessary for service operation</li>
                    <li>Messages are encrypted and stored temporarily</li>
                    <li>You can request data deletion at any time</li>
                    <li>We do not sell or share your personal information</li>
                  </ul>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                  <p className="mb-4">
                    Chatify and its original content, features, and functionality are owned by Chatify and are protected by 
                    international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </section>

                {/* Termination */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                  <p className="mb-4">
                    We may terminate or suspend your access to Chatify immediately, without prior notice, for any reason, 
                    including breach of these Terms of Service.
                  </p>
                  <p>
                    You may also terminate your account at any time by requesting account deletion through our{" "}
                    <Link href="/account-deletion" className="text-primary hover:underline">
                      Account Deletion form
                    </Link>
                    .
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                  <p className="mb-4">
                    In no event shall Chatify, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                    be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
                    limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, 
                    we will provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us at{" "}
                    <a href="mailto:legal@chatify.com" className="text-primary hover:underline">
                      legal@chatify.com
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
                <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about these terms or need clarification, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:legal@chatify.com"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Contact Legal Team
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
