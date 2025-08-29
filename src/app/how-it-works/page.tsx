"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Smartphone, 
  User, 
  MessageCircle, 
  PartyPopper, 
  Users, 
  Star,
  Globe,
  Zap,
  Target,
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Download & Install",
      description: "Get Chatify from your app store and install it on your device.",
      details: [
        "Available on iOS and Android",
        "Free to download and use",
        "Quick and easy setup"
      ],
      icon: Smartphone
    },
    {
      number: "02",
      title: "Create Your Profile",
      description: "Set up your profile with a username and optional interests to improve matching.",
      details: [
        "Choose a unique username",
        "Add your interests",
        "Set your preferences"
      ],
      icon: User
    },
    {
      number: "03",
      title: "Start Random Chat",
      description: "Begin chatting with people worldwide through our smart matching system.",
      details: [
        "Instant connection with users",
        "AI-powered matching based on interests",
        "Global user base"
      ],
      icon: MessageCircle
    },
    {
      number: "04",
      title: "Enjoy Conversations",
      description: "Chat with new people, share media, and break language barriers with translation.",
      details: [
        "Real-time messaging",
        "Photo and video sharing",
        "Built-in translation"
      ],
      icon: PartyPopper
    },
    {
      number: "05",
      title: "Add Friends (Optional)",
      description: "Share your username to continue conversations with people you like.",
      details: [
        "Exchange usernames during chat",
        "Add to friends list",
        "Continue conversations anytime"
      ],
      icon: Users
    },
    {
      number: "06",
      title: "Stay Connected",
      description: "Keep in touch with friends and discover new connections every day.",
      details: [
        "Direct messaging with friends",
        "New random chat sessions",
        "Build lasting connections"
      ],
      icon: Star
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
              description: "Connect with people from over 150 countries worldwide"
    },
    {
      icon: Zap,
      title: "Instant Connection",
      description: "Start chatting within seconds of opening the app"
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "AI-powered algorithm connects you with like-minded people"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Chat with confidence knowing your privacy is protected"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/20" />
        <div className="pointer-events-none absolute -inset-32 opacity-40 blur-3xl">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/20 animate-float" />
          <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-foreground/10 animate-float" style={{animationDelay:"300ms"}} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-16">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text"
            >
              How It Works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2 sm:px-0"
            >
              Getting started with Chatify is simple and straightforward. 
              Follow these easy steps to begin connecting with people worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Simple Steps to Get Started</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
              From download to your first conversation, it only takes a few minutes
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <step.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{step.number}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{step.description}</p>
                <ul className="space-y-1 sm:space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-xs sm:text-sm">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Why Choose Chatify?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
              Experience the best random chat app with features designed for modern communication
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">The Chatify Experience</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
              From first connection to lasting friendships
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 to-primary/60 transform -translate-x-1/2 hidden lg:block" />
              
              <div className="space-y-8 sm:space-y-12">
                {[
                  {
                    title: "Instant Matching",
                    description: "Our AI algorithm finds the perfect chat partner for you in seconds",
                    icon: "🎯"
                  },
                  {
                    title: "Real-time Chat",
                    description: "Enjoy smooth, uninterrupted conversations with text and media sharing",
                    icon: "💬"
                  },
                  {
                    title: "Language Translation",
                    description: "Break language barriers with our built-in translation feature",
                    icon: "🌐"
                  },
                  {
                    title: "Friend System",
                    description: "Keep in touch with people you connect with through our friend system",
                    icon: "👥"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center text-2xl sm:text-3xl">
                      {item.icon}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Your Safety is Our Priority</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-muted-foreground">
                <p>
                  We understand that safety is crucial when chatting with strangers online. 
                  That's why we've implemented multiple layers of protection to ensure 
                  a secure and enjoyable experience.
                </p>
                <p>
                  Our advanced moderation system, user reporting features, and privacy 
                  controls work together to create a safe environment for everyone.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {[
                  "24/7 automated moderation",
                  "User reporting system",
                  "Privacy controls",
                  "Content filtering"
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm max-w-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">Safe & Secure</h3>
                <p className="text-sm sm:text-base text-muted-foreground text-center">
                  Chat with confidence knowing your privacy and safety are protected
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Start Chatting?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
              Join millions of users who are already connecting worldwide. 
              Download Chatify and start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/download" className="btn-primary flex items-center gap-2">
                Download Now
                <ArrowRight size={20} />
              </Link>
              <Link href="/features" className="btn-secondary flex items-center gap-2">
                Learn More
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
