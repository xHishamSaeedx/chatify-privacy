"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  Heart,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Chat Enthusiasts",
      role: "Core Team",
      description: "Passionate about connecting people worldwide through meaningful conversations",
      icon: "💬"
    },
    {
      name: "Tech Innovators",
      role: "Development Team",
      description: "Building the best random chat experience with cutting-edge technology",
      icon: "⚡"
    },
    {
      name: "Global Community",
      role: "Users Worldwide",
              description: "Over 1 million users across 150+ countries making connections",
      icon: "🌍"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Connection First",
      description: "We believe in the power of human connection and meaningful conversations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting people from different cultures and backgrounds worldwide."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Providing a secure environment where users can chat with confidence."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving our platform with smart features and technology."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Chatify Launch",
      description: "Official launch of the ultimate random chat app"
    },
    {
      year: "2024",
      title: "1M+ Users",
      description: "Reached our first million users worldwide"
    },
    {
      year: "2024",
              title: "150+ Countries",
        description: "Expanded to serve users in over 150 countries"
    },
    {
      year: "2024",
      title: "Smart Features",
      description: "Introduced AI-powered matching and translation"
    }
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
              About Chatify
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We're on a mission to connect people worldwide through meaningful conversations. 
              In a world that's more connected than ever, we believe everyone deserves 
              the opportunity to meet new people and make lasting friendships.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Chatify was created with a simple goal: to make it easy and safe for people 
                  to connect with others worldwide. We believe that meaningful conversations 
                  can bridge cultural gaps, create friendships, and make the world a smaller, 
                  more connected place.
                </p>
                <p>
                  Our mission is to provide the best random chat experience that's both 
                  fun and secure. Whether you're looking to practice a new language, 
                  learn about different cultures, or simply make new friends, Chatify 
                  is here to help you connect with people who share your interests.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm max-w-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Global Connections</h3>
                <p className="text-muted-foreground text-center">
                  Connecting people from around the world through chat
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Chatify began with a simple observation: while the internet has made 
                  the world smaller, it can still be difficult to genuinely connect 
                  with people from different parts of the world. Most social platforms 
                  focus on connecting you with people you already know, but what about 
                  the amazing conversations waiting to happen with strangers?
                </p>
                <p>
                  Our team of chat enthusiasts and tech innovators came together to 
                  solve this problem. We wanted to create a platform that would make 
                  it easy, safe, and fun to connect with new people worldwide. 
                  The result was Chatify - a random chat app that combines smart 
                  matching with a secure, user-friendly experience.
                </p>
                <p>
                  Today, Chatify serves over 1 million users across 150+ countries, 
                  facilitating millions of conversations and friendships every day. 
                  We're proud to be part of a global community that believes in the 
                  power of human connection.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to connecting people worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.role}</div>
                <p className="text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Chat Commitment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to providing the best random chat experience. 
              Here's what makes Chatify special:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Smart Matching",
                description: "AI-powered algorithm connects you with like-minded people"
              },
              {
                title: "Safe Environment",
                description: "Advanced moderation keeps conversations respectful and secure"
              },
              {
                title: "Global Community",
                description: "Connect with people from over 150 countries worldwide"
              },
              {
                title: "Amazing Features",
                description: "Translation, media sharing, and friend system included"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start connecting with people worldwide. Download Chatify today.
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
