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
  Users, 
  Smartphone,
  Heart,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: Globe,
      title: "Global Connections",
      description: "Connect with people from around the world instantly. Our platform spans over 150 countries, bringing diverse cultures and perspectives to your conversations.",
      benefits: ["Instant global matching", "Cultural exchange", "Language learning opportunities"]
    },
    {
      icon: Zap,
      title: "Instant Matching",
      description: "Find chat partners in seconds with our smart matching system. No waiting, no complicated setup - just tap and start chatting.",
      benefits: ["Lightning-fast pairing", "Smart compatibility", "Reconnection features"]
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Chat with confidence knowing your privacy is protected. We use advanced encryption and moderation to ensure a safe environment.",
      benefits: ["End-to-end encryption", "24/7 moderation", "Privacy controls"]
    },
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description: "Enjoy smooth, real-time conversations with text and media sharing. Our optimized platform ensures minimal latency.",
      benefits: ["Instant message delivery", "Media sharing", "Typing indicators"]
    },
    {
      icon: Users,
      title: "Community Features",
      description: "Join a growing community of respectful users. Share experiences, make friends, and build meaningful connections.",
      benefits: ["Friend system", "Profile customization", "Community guidelines"]
    },
    {
      icon: Smartphone,
      title: "Cross-platform",
      description: "Access Chatify from anywhere. Our app works seamlessly across iOS, Android, and web platforms.",
      benefits: ["iOS & Android apps", "Web version", "Sync across devices"]
    }
  ];

  const stats = [
    { number: "1M+", label: "Active Users" },
            { number: "150+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-12 sm:pb-16 lg:pb-20">
                 {/* Hero Section */}
         <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
                Powerful Features for Modern Chatting
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                Discover what makes Chatify the ultimate random chat app. From instant global connections 
                to advanced privacy features, we've built everything you need for meaningful conversations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/download" className="btn-app-primary flex items-center gap-2">
                  <Smartphone size={20} />
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

        {/* Features Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
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
                Every feature is designed with your experience in mind. Simple, powerful, and secure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`bg-card border border-border rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                    index === 0 ? 'border-app-accent' : 
                    index === 2 ? 'border-app-secondary' : 
                    index === 4 ? 'border-app-warm' : ''
                  }`}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${
                    index === 0 ? 'bg-[#FF7F8A]/10' : 
                    index === 2 ? 'bg-[#5DADE2]/10' : 
                    index === 4 ? 'bg-[#FFD166]/10' : 'bg-primary/10'
                  }`}>
                    <feature.icon className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${
                      index === 0 ? 'text-[#FF7F8A]' : 
                      index === 2 ? 'text-[#5DADE2]' : 
                      index === 4 ? 'text-[#FFD166]' : 'text-primary'
                    }`} />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1 sm:space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-xs sm:text-sm">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
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
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Experience Chatify?</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
                Join millions of users who are already enjoying the best random chat experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/download" className="btn-app-primary flex items-center gap-2">
                  <Smartphone size={20} />
                  Download Now
                </Link>
                <Link href="/about" className="btn-app-secondary flex items-center gap-2">
                  Learn More
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
