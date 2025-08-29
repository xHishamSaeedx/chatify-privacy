"use client";

import { motion } from "framer-motion";
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
  Smartphone
} from "lucide-react";

const Home = () => {
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
      <section className="relative pt-16 min-h-[92vh] flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="pointer-events-none absolute -inset-32 opacity-40 blur-3xl">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/20 animate-float" />
          <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-[#FF7F8A]/10 animate-float" style={{animationDelay:"300ms"}} />
        </div>

        {/* Floating Chat Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
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
              className={`absolute bg-white/90 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 shadow-lg max-w-xs ${
                index % 3 === 0 ? 'left-[10%] top-[20%]' :
                index % 3 === 1 ? 'right-[15%] top-[30%]' :
                'left-[20%] bottom-[25%]'
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
              <p className="text-sm text-gray-700 leading-relaxed">{bubble.message}</p>
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

        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
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
              className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-6"
            >
              Connect • Chat • Explore
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              Connect with the World
              <span className="block text-primary">One Chat at a Time</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              Blabinn is the ultimate random chat app that connects you with people worldwide. 
              Start conversations, make new friends, and discover different cultures instantly.
            </motion.p>
            
            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex items-center justify-center gap-6 mb-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>1,247 users online</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Active in 150+ countries</span>
              </div>
            </motion.div>
            
            {/* Store badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download on the App Store"
              >
                <img src="/app-store-badge.svg" alt="Download on the App Store" className="h-12 w-auto" />
              </motion.a>
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.company.blabinn&pcampaignid=web_share"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Get it on Google Play"
              >
                <img src="/google-play-badge.svg" alt="Get it on Google Play" className="h-12 w-auto" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Why Choose Blabinn?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the best random chat app with amazing features designed for modern communication.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Blabinn</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest features, updates, and tips for the best chat experience.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-[#FF7F8A]/5 to-[#5DADE2]/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Chatting?</h2>
            <p className="text-xl text-muted-foreground mb-8">Join millions of users who are already connecting worldwide</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/download" className="btn-app-primary flex items-center gap-2">
                <Download size={20} />
                Download Now
              </Link>
              <Link href="/how-it-works" className="btn-app-secondary flex items-center gap-2">
                How It Works
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
