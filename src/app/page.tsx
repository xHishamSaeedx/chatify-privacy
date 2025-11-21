"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Globe, 
  Zap, 
  Shield, 
  MessageCircle, 
  Download, 
  ArrowRight,
  Users,
  Clock,
  CheckCircle,
  Star,
  Smartphone,
  X
} from "lucide-react";

const Home = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const features = [
    {
      icon: Globe,
      title: "Global Connections",
      description: "Connect with people from around the world instantly"
    },
    {
      icon: Zap,
      title: "Instant Matching",
      description: "Find chat partners in seconds with our smart matching system"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Chat with confidence knowing your privacy is protected"
    },
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description: "Enjoy smooth, real-time conversations with text and media sharing"
    }
  ];

  const stats = [
    { number: "1M+", label: "Active Users" },
            { number: "150+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  const chatBubbles = [
    {
      message: "Hello from Japan! 🇯🇵 Anyone want to practice English?",
      user: "Yuki",
      country: "Japan",
      delay: 0
    },
    {
      message: "Coffee chat anyone? ☕ I'm from Brazil!",
      user: "Maria",
      country: "Brazil", 
      delay: 2
    },
    {
      message: "Music lover here! 🎵 What's your favorite genre?",
      user: "Alex",
      country: "Canada",
      delay: 4
    },
    {
      message: "Learning Spanish! 🇪🇸 ¿Alguien quiere practicar?",
      user: "Emma",
      country: "USA",
      delay: 6
    },
    {
      message: "Travel enthusiast here! ✈️ Where should I visit next?",
      user: "Liam",
      country: "Australia",
      delay: 8
    },
    {
      message: "Gaming night anyone? 🎮 What games do you play?",
      user: "Sofia",
      country: "Germany",
      delay: 10
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 min-h-[80vh] sm:min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="pointer-events-none absolute -inset-32 opacity-20 sm:opacity-40 blur-3xl">
          <div className="absolute left-1/4 top-20 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-primary/20 animate-float" />
          <div className="absolute right-1/4 bottom-10 h-56 w-56 sm:h-80 sm:w-80 rounded-full bg-[#FF7F8A]/10 animate-float" style={{animationDelay:"300ms"}} />
        </div>

        {/* Floating Chat Bubbles - Hidden on very small screens, shown on larger */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          {chatBubbles.map((bubble, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                scale: [0.8, 1, 1, 0.8],
                y: [20, 0, 0, -20]
              }}
              transition={{
                duration: 8,
                delay: bubble.delay,
                repeat: Infinity,
                repeatDelay: 4
              }}
              className={`absolute bg-white/90 backdrop-blur-sm border border-primary/20 rounded-2xl p-3 sm:p-4 shadow-lg max-w-[280px] sm:max-w-xs ${
                index % 3 === 0 ? 'left-[5%] sm:left-[10%] top-[15%] sm:top-[20%]' :
                index % 3 === 1 ? 'right-[5%] sm:right-[15%] top-[25%] sm:top-[30%]' :
                'left-[10%] sm:left-[20%] bottom-[20%] sm:bottom-[25%]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {bubble.user.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{bubble.user}</div>
                  <div className="text-xs text-gray-500">{bubble.country}</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{bubble.message}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-gray-400">Just now</div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Online</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              Connect • Chat • Explore
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight sm:leading-normal"
            >
              Connect with the World
              <span className="block text-primary">One Chat at a Time</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-5 sm:mb-6 md:mb-8 leading-relaxed px-2 sm:px-0"
            >
              Chatify is the ultimate random chat app that connects you with people worldwide. 
              Start conversations, make new friends, and discover different cultures instantly.
            </motion.p>
            
            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-5 sm:mb-6 md:mb-8 text-xs sm:text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>1,247 users online</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Active in 150+ countries</span>
              </div>
            </motion.div>
            
            {/* Store badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <motion.button
                onClick={() => setShowComingSoon(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download on the App Store"
                className="touch-manipulation cursor-pointer bg-transparent border-none p-0"
              >
                <img src="/app-store-badge.svg" alt="Download on the App Store" className="h-10 sm:h-12 w-auto" />
              </motion.button>
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.company.blabinn&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Get it on Google Play"
                className="touch-manipulation"
              >
                <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-10 sm:h-12 w-auto" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">Why Choose Chatify?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
              Experience the best random chat app with amazing features designed for modern communication.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="feature-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary/10 via-[#FF7F8A]/5 to-[#5DADE2]/5">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">Ready to Start Chatting?</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-5 sm:mb-6 md:mb-8 px-2 sm:px-0">Join millions of users who are already connecting worldwide</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/download" className="btn-app-primary flex items-center justify-center gap-2 w-full sm:w-auto">
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download Now
              </Link>
              <Link href="/how-it-works" className="btn-app-secondary flex items-center justify-center gap-2 w-full sm:w-auto">
                How It Works
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComingSoon(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-background border border-border rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative">
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground mb-6">
                    The App Store version of Chatify is currently in development. 
                    Stay tuned for updates!
                  </p>
                  <motion.button
                    onClick={() => setShowComingSoon(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full sm:w-auto px-6"
                  >
                    Got it
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
