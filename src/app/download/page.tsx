"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Download, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function DownloadPage() {
  const features = [
    {
      icon: Globe,
      title: "Global Community",
              description: "Connect with people from over 150 countries"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is protected with end-to-end encryption"
    },
    {
      icon: Zap,
      title: "Instant Matching",
      description: "Find chat partners in seconds"
    }
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
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8"
              >
                <Download className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
                Download Chatify Today
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                Join millions of users worldwide and start connecting with people instantly. 
                Available on iOS, Android, and web platforms.
              </p>

              {/* Download Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 btn-app-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium w-full sm:w-auto"
                >
                  <Smartphone className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.company.blabinn&pcampaignid=web_share"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 btn-app-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium w-full sm:w-auto"
                >
                  <Smartphone className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center"
              >
                <p className="text-muted-foreground mb-4">Or try our web version</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  Open Web App
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                          className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Why Download Chatify?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
              Experience the best random chat app with features designed for modern communication.
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
                  className="text-center"
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

        {/* System Requirements */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">System Requirements</h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2 sm:px-0">
                  Chatify works on most modern devices and browsers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-card border border-border rounded-lg p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Mobile Apps</h3>
                  <div className="space-y-4">
                                          <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">iOS</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• iOS 13.0 or later</li>
                          <li>• iPhone, iPad, or iPod touch</li>
                          <li>• 100MB available space</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">Android</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• Android 6.0 or later</li>
                          <li>• 2GB RAM recommended</li>
                          <li>• 100MB available space</li>
                        </ul>
                      </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Web Browser</h3>
                  <div className="space-y-4">
                                          <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">Supported Browsers</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• Chrome 90+</li>
                          <li>• Firefox 88+</li>
                          <li>• Safari 14+</li>
                          <li>• Edge 90+</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">Requirements</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• JavaScript enabled</li>
                          <li>• Stable internet connection</li>
                          <li>• Camera & microphone (optional)</li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Start Chatting?</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
                Download Chatify now and join millions of users worldwide.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.company.blabinn&pcampaignid=web_share"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto"
                >
                  <Smartphone className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto"
                >
                  <Smartphone className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
