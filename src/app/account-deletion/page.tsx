"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, AlertCircle, Clock } from "lucide-react";

interface FormData {
  name: string;
  username: string;
  email: string;
  reason: string;
}

export default function AccountDeletionPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    email: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await addDoc(collection(db, "account_deletion_requests"), {
        ...formData,
        requestDate: serverTimestamp(),
        status: "pending",
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        username: "",
        email: "",
        reason: "",
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
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
              <h1 className="text-4xl font-bold mb-4">Request Account Deletion</h1>
              <p className="text-muted-foreground text-lg">
                Please fill out the form below to request the deletion of your account and associated data. 
                We will process your request within 30 days as required by privacy regulations.
              </p>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#FFD166]/10 border border-[#FFD166]/20 rounded-lg p-6 mb-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-[#FFD166]" />
                  <h3 className="text-lg font-semibold text-[#2C2C2C]">Request Submitted Successfully!</h3>
                </div>
                <p className="text-[#2C2C2C]">
                  Your account deletion request has been received. We will process it within 30 days 
                  and contact you at the provided email address.
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-800">Submission Failed</h3>
                </div>
                <p className="text-red-700">
                  There was an error submitting your request. Please try again or contact support.
                </p>
              </motion.div>
            )}

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-lg p-8 shadow-sm"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-2">
                    Chatify Username *
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your Chatify username"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium mb-2">
                    Reason for Deletion (Optional)
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    placeholder="Please let us know why you're requesting account deletion (optional)"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                  <label className="text-sm text-muted-foreground">
                    I understand that this action is irreversible and all my data will be permanently deleted.
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90"
                >
                  {isSubmitting ? "Submitting..." : "Submit Deletion Request"}
                </motion.button>
              </div>
            </motion.form>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 bg-muted/50 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">What happens next?</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Confirmation</h4>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an email confirmation of your request.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    We'll process your request within 30 days as required by privacy regulations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Deletion</h4>
                  <p className="text-sm text-muted-foreground">
                    All your data will be permanently deleted from our systems.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Notification</h4>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a final confirmation when the deletion is complete.
                  </p>
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
