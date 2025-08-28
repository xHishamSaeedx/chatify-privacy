"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  HelpCircle, 
  Mail, 
  MessageCircle, 
  FileText, 
  Shield, 
  Settings, 
  Users, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqCategories = {
    general: [
      {
        question: "How do I start using Chatify?",
        answer: "Simply download the app, create a username, and start chatting! No registration or personal information required."
      },
      {
        question: "Is Chatify really free?",
        answer: "Yes, Chatify is completely free to download and use. There are no hidden fees or premium features."
      },
      {
        question: "Can I use Chatify on multiple devices?",
        answer: "Yes, you can use Chatify on multiple devices with the same account."
      },
      {
        question: "What languages does Chatify support?",
        answer: "Chatify supports over 100 languages with built-in translation features."
      }
    ],
    privacy: [
      {
        question: "How does Chatify protect my privacy?",
        answer: "We use end-to-end encryption, don't collect personal data, and give you complete control over your information."
      },
      {
        question: "Does Chatify store my messages?",
        answer: "Messages are encrypted and stored temporarily for delivery, then automatically deleted."
      },
      {
        question: "Can I delete my account and data?",
        answer: "Yes, you can request account deletion at any time through our account deletion form."
      },
      {
        question: "Does Chatify track my activity?",
        answer: "No, we don't track your activity, location, or behavior in any way."
      }
    ],
    technical: [
      {
        question: "What devices are supported?",
        answer: "Chatify works on iOS 13.0+ and Android 8.0+ devices."
      },
      {
        question: "Why can't I connect to a chat?",
        answer: "Check your internet connection and try again. If the issue persists, restart the app."
      },
      {
        question: "How do I report inappropriate behavior?",
        answer: "Use the report button in the chat or visit our reporting page to submit a detailed report."
      },
      {
        question: "Can I block users?",
        answer: "Yes, you can block users directly from the chat interface."
      }
    ],
    features: [
      {
        question: "How does the friend feature work?",
        answer: "Share your username with someone during chat to add them as a friend and continue conversations."
      },
      {
        question: "Can I send images and files?",
        answer: "Yes, you can share images, videos, and files in your conversations."
      },
      {
        question: "Is video calling available?",
        answer: "Video calling is available for premium users and friends."
      },
      {
        question: "How do I change my username?",
        answer: "You can change your username in the app settings at any time."
      }
    ]
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      action: "Send Email",
      href: "mailto:support@chatify.com"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      href: "#"
    },
    {
      icon: FileText,
      title: "Help Center",
      description: "Browse our comprehensive help articles",
      action: "Browse Articles",
      href: "#"
    }
  ];

  const categories = [
    { id: "general", name: "General", icon: HelpCircle },
    { id: "privacy", name: "Privacy & Security", icon: Shield },
    { id: "technical", name: "Technical Issues", icon: Settings },
    { id: "features", name: "Features", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/20" />
        <div className="pointer-events-none absolute -inset-32 opacity-40 blur-3xl">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/20 animate-float" />
          <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-foreground/10 animate-float" style={{animationDelay:"300ms"}} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6 gradient-text"
            >
              Support Center
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Need help? We're here to assist you with any questions or issues you might have. 
              Find answers to common questions or get in touch with our support team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Get Help</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the best way to get the support you need
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                <p className="text-muted-foreground mb-6">{method.description}</p>
                <a
                  href={method.href}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  {method.action}
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to the most common questions
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:bg-muted"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="h-5 w-5" />
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqCategories[activeCategory as keyof typeof faqCategories].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Quick Links</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access important resources and information
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Account Deletion",
                description: "Request to delete your account and data",
                href: "/account-deletion",
                icon: Shield
              },
              {
                title: "Privacy Policy",
                description: "Learn about how we protect your privacy",
                href: "/privacy-policy",
                icon: FileText
              },
              {
                title: "Report Issues",
                description: "Report inappropriate behavior or technical issues",
                href: "/reporting",
                icon: HelpCircle
              },
              {
                title: "Download App",
                description: "Get the latest version of Chatify",
                href: "/download",
                icon: Smartphone
              }
            ].map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <link.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:support@chatify.com"
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Support
              </a>
              <Link href="/download" className="btn-secondary flex items-center gap-2">
                Download App
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
