import { motion } from "framer-motion";
import { FaLock, FaCloud, FaMobile, FaUsers, FaShieldAlt, FaFileAlt, FaSyncAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHistory } from "react-icons/fa";
import Head from "next/head";
import { Button } from "@/public/components/ui/button";
import { Card, CardContent } from "@/public/components/ui/card";
import Script from "next/script";
import Image from "next/image";
import logoSymbol from "@/public/cloudnotes.svg";
import { useState } from "react";

export default function CloudNotesLanding() {
  const [email, setEmail] = useState(""); // State for email input
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [message, setMessage] = useState(""); // State for success/error messages

    // Handle form submission
    const handleSubscribe = async (e: React.FormEvent) => {
      e.preventDefault(); // Prevent default form submission
      setLoading(true); // Set loading state
      setMessage(""); // Clear previous messages
  
      try {
        const response = await fetch("https://api.therama.dev/functions/v1/newsletter-subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email : email }), // Send email in the request body
        });
  
        const data = await response.json(); // Parse response JSON
  
        if (response.ok) {
          setMessage("Thank you for subscribing!"); // Success message
          setEmail(""); // Clear email input
        } else {
          setMessage(data.message || "Something went wrong. Please try again."); // Error message
        }
      } catch (error) {
        setMessage("Failed to connect to the server. Please try again later."); // Network error
        console.log(error);        
      } finally {
        setLoading(false); // Reset loading state
      }
    };
  
  return (
    <>
      <Head>
        <title>CloudNotes - Secure & Unlimited Note-Taking</title>
        <meta name="description" content="Organize, encrypt, and store your notes with ease using CloudNotes." />
        <meta name="keywords" content="CloudNotes, secure notes, encrypted notes, cloud storage" />
        <meta name="author" content="CloudNotes Team" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-GP1C9FM54R`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-GP1C9FM54R');
      `,
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center">
        {/* Header */}
        <nav className="w-full flex justify-between items-center p-6 bg-gray-900 shadow-md">
          <div className="flex items-center space-x-2">
            <Image src={logoSymbol} alt="CloudNotes Logo" width={40} height={40} className="rounded" />
            <h1 className="text-2xl font-bold text-blue-400">CloudNotes</h1>
          </div>
          <div className="space-x-4">
          <Button
              href="https://platform.cloudnotes.click/registration"
              className="bg-blue-600 hover:bg-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </Button>

            <Button
              href="https://platform.cloudnotes.click/login"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="text-center py-20">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            CloudNotes: Secure & Unlimited Note-Taking
          </motion.h1>
          <p className="mt-4 text-lg text-gray-300">Organize, encrypt, and store your notes with ease.</p>
        </header>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
          <FeatureCard icon={<FaLock />} title="End-to-End Encryption" desc="Your notes are fully secured with top-grade encryption." />
          <FeatureCard icon={<FaCloud />} title="Unlimited Storage" desc="Scale your notes with our powerful cloud infrastructure." />
          <FeatureCard icon={<FaUsers />} title="Collaborate Seamlessly" desc="Work with others in real-time, securely and efficiently." />
          <FeatureCard icon={<FaMobile />} title="Mobile Friendly" desc="Access your notes anytime, anywhere with full responsiveness." />
          <FeatureCard icon={<FaShieldAlt />} title="Advanced Security" desc="Multi-layered security features to protect your data." />
          <FeatureCard icon={<FaFileAlt />} title="Rich Text Editing" desc="Full-featured text editor for enhanced note-taking." />
          <FeatureCard icon={<FaSyncAlt />} title="Auto-Sync" desc="Your notes sync automatically across all your devices." />
          <FeatureCard icon={<FaHistory />} title="Version History" desc="Access and restore previous versions of your notes with ease." />
        </section>

        {/* Email Subscription */}
        <section className="bg-gray-900 p-10 text-center w-full">
          <h2 className="text-2xl font-semibold">Stay Updated</h2>
          <p className="text-gray-400 mt-2">Subscribe to get the latest features and updates.</p>
          <form onSubmit={handleSubscribe} className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-1/3 text-black bg-white rounded-l-md placeholder-gray-500"
              required
            />
            <Button type="submit" className="bg-blue-600 rounded-r-md" disabled={loading}>
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          {message && <p className="mt-4 text-sm text-blue-400">{message}</p>} {/* Display success/error message */}
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 w-full text-center p-6 mt-10">
          <p className="text-gray-400">Contact us: <a href="mailto:support@cloudnotes.click" className="text-blue-400">support@cloudnotes.click</a></p>
          <div className="mt-4 flex flex-wrap justify-center space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Ad Choices</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">Partners</a>
            <a href="#" className="hover:text-white">Affiliates</a>
          </div>
          <div className="mt-6 flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white text-2xl"><FaFacebook /></a>
            <a href="#" className="hover:text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="hover:text-white text-2xl"><FaInstagram /></a>
            <a href="#" className="hover:text-white text-2xl"><FaLinkedin /></a>
          </div>
        </footer>
      </div>
    </>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <Card className="bg-gray-800 text-white border border-gray-700 p-6 text-center">
      <CardContent>
        <div className="text-4xl mb-4 text-blue-400">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-400">{desc}</p>
      </CardContent>
    </Card>
  );
}
