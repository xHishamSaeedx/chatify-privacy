"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DollarSign, TrendingUp, Users, CreditCard, Smartphone, BarChart3, Zap, Shield } from "lucide-react";

export default function RevenueModelPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <TrendingUp className="h-10 w-10 text-primary" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Revenue Model</h1>
              <p className="text-muted-foreground text-xl">
                Diversified monetization across 3 revenue streams
              </p>
            </div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              <div className="bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <DollarSign className="h-10 w-10 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-primary mb-2">3</p>
                <p className="text-base text-muted-foreground font-medium">Revenue Streams</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-primary mb-2">High</p>
                <p className="text-base text-muted-foreground font-medium">Profit Margins</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold text-primary mb-2">Global</p>
                <p className="text-base text-muted-foreground font-medium">Mobile Market</p>
              </div>
            </motion.div>

            {/* Revenue Streams */}
            <div className="space-y-12">
              {/* 1. Premium Subscriptions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-card border border-border rounded-xl p-10 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">1. Premium Subscriptions</h2>
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full w-fit">Recurring Revenue</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                  <div className="border border-border rounded-lg p-5 text-center hover:border-primary/50 transition-colors">
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Weekly</p>
                    <p className="text-2xl font-bold text-primary">₹299</p>
                    <p className="text-xs text-muted-foreground mt-1">/week</p>
                  </div>
                  <div className="border-2 border-primary/50 rounded-lg p-5 text-center relative hover:border-primary transition-colors">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">Popular</span>
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Monthly</p>
                    <p className="text-2xl font-bold text-primary">₹599</p>
                    <p className="text-xs text-muted-foreground mt-1">/month</p>
                  </div>
                  <div className="border border-border rounded-lg p-5 text-center hover:border-primary/50 transition-colors">
                    <p className="text-sm text-muted-foreground mb-2 font-medium">3 Months</p>
                    <p className="text-2xl font-bold text-primary">₹1,499</p>
                    <p className="text-xs text-muted-foreground mt-1">Save ₹298</p>
                  </div>
                  <div className="border border-border rounded-lg p-5 text-center hover:border-primary/50 transition-colors">
                    <p className="text-sm text-muted-foreground mb-2 font-medium">6 Months</p>
                    <p className="text-2xl font-bold text-primary">₹1,999</p>
                    <p className="text-xs text-muted-foreground mt-1">Save ₹1,595</p>
                  </div>
                  <div className="border border-border rounded-lg p-5 text-center hover:border-primary/50 transition-colors">
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Yearly</p>
                    <p className="text-2xl font-bold text-primary">₹2,500</p>
                    <p className="text-xs text-muted-foreground mt-1">Save ₹4,688</p>
                  </div>
                  <div className="border-2 border-primary/30 rounded-lg p-5 text-center bg-gradient-to-br from-primary/10 to-primary/5 relative hover:border-primary/50 transition-colors">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">Best Value</span>
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Lifetime</p>
                    <p className="text-2xl font-bold text-primary">₹4,999</p>
                    <p className="text-xs text-muted-foreground mt-1">One-time</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-base pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Ads-free experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">120-300 daily credits bonus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Unlimited premium features</span>
                  </div>
                </div>
              </motion.div>

              {/* 2. Credit Bundles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-card border border-border rounded-xl p-10 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">2. Credit Bundles</h2>
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full w-fit">Pay-per-Use</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <p className="text-3xl font-bold text-primary mb-2">70</p>
                    <p className="text-xl font-semibold mb-1">₹49</p>
                    <p className="text-sm text-muted-foreground">₹0.70/credit</p>
                  </div>
                  <div className="border-2 border-primary/50 rounded-lg p-6 text-center relative hover:border-primary transition-colors">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">Popular</span>
                    <p className="text-3xl font-bold text-primary mb-2">150</p>
                    <p className="text-xl font-semibold mb-1">₹99</p>
                    <p className="text-sm text-muted-foreground">₹0.66/credit</p>
                  </div>
                  <div className="border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <p className="text-3xl font-bold text-primary mb-2">400</p>
                    <p className="text-xl font-semibold mb-1">₹249</p>
                    <p className="text-sm text-muted-foreground">₹0.62/credit</p>
                  </div>
                  <div className="border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <p className="text-3xl font-bold text-primary mb-2">900</p>
                    <p className="text-xl font-semibold mb-1">₹499</p>
                    <p className="text-sm text-muted-foreground">₹0.55/credit</p>
                  </div>
                  <div className="border-2 border-primary/30 rounded-lg p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 hover:border-primary/50 transition-colors">
                    <p className="text-3xl font-bold text-primary mb-2">2,000</p>
                    <p className="text-xl font-semibold mb-1">₹999</p>
                    <p className="text-sm text-muted-foreground">₹0.50/credit</p>
                  </div>
                </div>
              </motion.div>

              {/* 3. Advertising */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-card border border-border rounded-xl p-10 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">3. Advertising Revenue</h2>
                  </div>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full w-fit">Google AdMob</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-3">
                      <Smartphone className="h-6 w-6 text-primary" />
                      Banner Ads
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Persistent placement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>High viewability rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Free users only</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-3">
                      <Zap className="h-6 w-6 text-primary" />
                      Interstitial Ads
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Every 120 seconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>High engagement rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Premium conversion driver</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Financial Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="bg-gradient-to-r from-primary/10 via-[#FF7F8A]/10 to-[#5DADE2]/10 border border-primary/20 rounded-xl p-10"
              >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  Investment Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-5">Revenue Advantages</h3>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span><strong>Recurring Revenue:</strong> Predictable subscription income</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span><strong>High Margins:</strong> Minimal marginal costs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span><strong>Multiple Touchpoints:</strong> Subs, credits, ads</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span><strong>Scalable:</strong> Revenue grows with users</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-5">Risk Mitigation</h3>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span><strong>Diversified Model:</strong> 3 revenue streams</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span><strong>User Retention:</strong> Sticky premium features</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span><strong>Market Validation:</strong> Proven model</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span><strong>Mobile-First:</strong> Global user trends</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-center bg-muted/50 rounded-xl p-10"
              >
                <h3 className="text-3xl font-bold mb-4">Interested in Learning More?</h3>
                <p className="text-muted-foreground mb-6">Contact our investor relations team for detailed information.</p>
                <a
                  href="mailto:investors@chatify.com"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
                >
                  Contact Investor Relations
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
