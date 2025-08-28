"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  AlertTriangle, 
  Shield, 
  CheckCircle, 
  XCircle,
  FileText,
  User,
  Mail,
  MessageSquare
} from "lucide-react";

interface FormData {
  reporterName: string;
  reporterEmail: string;
  reportedUsername: string;
  reportType: string;
  description: string;
  evidence: string;
}

export default function ReportingPage() {
  const [formData, setFormData] = useState<FormData>({
    reporterName: "",
    reporterEmail: "",
    reportedUsername: "",
    reportType: "",
    description: "",
    evidence: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const reportTypes = [
    "Harassment or Bullying",
    "Inappropriate Content",
    "Spam or Scam",
    "Fake Profile",
    "Violence or Threats",
    "Other",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      await addDoc(collection(db, "user_reports"), {
        ...formData,
        reportDate: serverTimestamp(),
        status: "pending",
      });

      setSubmitStatus("success");
      setFormData({
        reporterName: "",
        reporterEmail: "",
        reportedUsername: "",
        reportType: "",
        description: "",
        evidence: "",
      });
    } catch (error) {
      console.error("Error submitting report:", error);
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
                <AlertTriangle className="h-8 w-8 text-primary" />
              </motion.div>
              <h1 className="text-4xl font-bold mb-4">Report a User</h1>
              <p className="text-muted-foreground text-lg">
                Help us maintain a safe and respectful community by reporting
                inappropriate behavior or content.
              </p>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-800">Report Submitted Successfully!</h3>
                </div>
                <p className="text-green-700">
                  Thank you for your report. Our moderation team will review it
                  within 24-48 hours and take appropriate action.
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
                  <XCircle className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-800">Submission Failed</h3>
                </div>
                <p className="text-red-700">
                  There was an error submitting your report. Please try again or
                  contact support directly.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="reporterName" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="reporterName"
                      name="reporterName"
                      value={formData.reporterName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="reporterEmail" className="block text-sm font-medium mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="reporterEmail"
                      name="reporterEmail"
                      value={formData.reporterEmail}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reportedUsername" className="block text-sm font-medium mb-2">
                    Reported Username *
                  </label>
                  <input
                    type="text"
                    id="reportedUsername"
                    name="reportedUsername"
                    value={formData.reportedUsername}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter the username of the person you're reporting"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="reportType" className="block text-sm font-medium mb-2">
                    Type of Report *
                  </label>
                  <select
                    id="reportType"
                    name="reportType"
                    value={formData.reportType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  >
                    <option value="">Select a report type</option>
                    {reportTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Please provide a detailed description of what happened"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="evidence" className="block text-sm font-medium mb-2">
                    Additional Evidence (Optional)
                  </label>
                  <textarea
                    id="evidence"
                    name="evidence"
                    value={formData.evidence}
                    onChange={handleInputChange}
                    placeholder="Any additional information, screenshots, or evidence you can provide"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90"
                >
                  {isSubmitting ? "Submitting..." : "Submit Report"}
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
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">What happens after you report?</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Review Process</h4>
                  <p className="text-sm text-muted-foreground">
                    Our moderation team will review your report within 24-48 hours.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Confidentiality</h4>
                  <p className="text-sm text-muted-foreground">
                    Your report and personal information will be kept confidential.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Action Taken</h4>
                  <p className="text-sm text-muted-foreground">
                    Appropriate action will be taken based on our community guidelines.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Follow-up</h4>
                  <p className="text-sm text-muted-foreground">
                    You may receive a follow-up email if additional information is needed.
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
