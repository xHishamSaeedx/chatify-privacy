"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, FileText, Eye, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
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
                <Shield className="h-8 w-8 text-primary" />
              </motion.div>
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground text-lg">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Welcome to Chatify! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App").
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Eye className="h-6 w-6 text-primary" />
                    1. Information We Collect
                  </h2>
                  <p className="mb-4">
                    We collect the minimum amount of data necessary to allow you to use the app.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">a. Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Username:</strong> Required to identify users.</li>
                    <li><strong>Shared Content:</strong> Images, text, and files shared in chats.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">b. Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Device Information:</strong> Device type, operating system, and general technical info to ensure compatibility and improve performance.</li>
                    <li><strong>Usage Data:</strong> Anonymous statistics like session duration, crash reports, and feature usage.</li>
                    <li><strong>IP Address & Region (approximate):</strong> Used for moderation, abuse prevention, and compliance.</li>
                  </ul>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    2. How We Use Your Information
                  </h2>
                  <p className="mb-4">We use the collected information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and maintain the Chatify app.</li>
                    <li>Connect users for random chats.</li>
                    <li>Improve and personalize your experience.</li>
                    <li>Prevent abuse and enforce our Terms of Use.</li>
                    <li>Comply with legal obligations (if any).</li>
                  </ul>
                </section>

                {/* Data Sharing & Disclosure */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Data Sharing & Disclosure</h2>
                  <p className="mb-4">
                    We do not sell or share your personal information with third parties for marketing purposes. Your data may be shared:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With moderation systems or admins in case of abuse or violations.</li>
                    <li>When legally required (e.g., under law enforcement requests).</li>
                    <li>With third-party service providers (e.g., analytics or cloud services), strictly under confidentiality agreements.</li>
                  </ul>
                </section>

                {/* Friend Feature & Usernames */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Friend Feature & Usernames</h2>
                  <p>
                    Users may choose to share their usernames with others to continue chatting later. This is optional and completely at your discretion.
                  </p>
                </section>

                {/* Image & File Sharing */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Image & File Sharing</h2>
                  <p>
                    Media shared in conversations is stored temporarily on secure servers for delivery and then automatically deleted. We do not scan or use your media for any purpose beyond service delivery.
                  </p>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Lock className="h-6 w-6 text-primary" />
                    6. Data Security
                  </h2>
                  <p>
                    We use encryption and secure protocols to protect your data. However, please remember that no internet transmission is ever 100% secure.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                  <p>
                    Chatify is not intended for children under 18. We do not knowingly collect personal information from anyone under this age. If you're a parent and believe your child has used the app, contact us to request removal.
                  </p>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
                  <p className="mb-4">Depending on your region, you may have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Request access to your data.</li>
                    <li>Request deletion of your account.</li>
                    <li>Withdraw consent for data use.</li>
                  </ul>
                  <p>
                    To request any of these, please use our{" "}
                    <Link href="/account-deletion" className="text-primary hover:underline">
                      Account Deletion Request form
                    </Link>
                    .
                  </p>
                </section>

                {/* Changes to This Policy */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. Updates will be posted in the app or on our website. Continued use of the app means you accept the new policy.
                  </p>
                </section>

                {/* Contact Us */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                  <p>
                    If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
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
                <h3 className="text-2xl font-bold mb-4">Need to Delete Your Account?</h3>
                <p className="text-muted-foreground mb-6">
                  We respect your right to privacy. If you need to delete your account and data, we make it easy.
                </p>
                <Link
                  href="/account-deletion"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Request Account Deletion
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
