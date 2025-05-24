// app/page.tsx
import React from 'react';
import Link from 'next/link';
import { BriefcaseIcon, QrCodeIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="w-full bg-slate-900/95 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50 transition-all duration-300 hover:bg-slate-900/98">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-violet-300 transition-all duration-300 hover:scale-105 transform"
          >
            Prowess IT Solutions
          </Link>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link 
              href="/" 
              className="text-gray-200 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              Home
            </Link>
            <Link 
              href="/jobs" 
              className="text-gray-200 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              Careers
            </Link>
            <Link 
              href="#about" 
              className="text-gray-200 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              About
            </Link>
            <Link 
              href="#services" 
              className="text-gray-200 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              Services
            </Link>
          </nav>
        </div>
      </header>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-32 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px]"></div>
          <div className="relative max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 animate-fade-in">
              Welcome to Prowess IT
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Powering Innovation Through Strategy, Technology & Talent
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              View Open Positions
              <BriefcaseIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              About Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              We are a full-service IT consulting partner and talent sourcing firm. From building scalable enterprise solutions to providing top-tier technical talent, we help businesses navigate complex challenges and accelerate digital transformation.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service cards with hover effects and gradients */}
              <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-6 p-2">
                  <QrCodeIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">
                  Technology Consulting
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Delivering customized solutions in Cloud, Data Engineering, AI/ML, SAP, DevOps, and Application Modernization.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-6 p-2">
                  <UsersIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">
                  IT Staffing Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Rapid deployment of pre-vetted contract talent across a wide spectrum of technologies.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-6 p-2">
                  <BriefcaseIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">
                  Project-Based Delivery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From discovery to deployment—we lead complete project cycles with measurable outcomes.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-6 p-2">
                  <UsersIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">
                  Talent Enablement & Visa Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sponsorship and onboarding support for H-1B professionals, with a strong bench of candidates ready for deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build?</h2>
            <p className="text-xl mb-8 text-indigo-100">
              Whether you're looking for a partner to lead your next tech initiative or scale your team with confidence, we're here to help.
            </p>
            <a 
              href="mailto:contact@prowessit.com"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-indigo-600 font-medium hover:bg-opacity-90 transition-opacity shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Prowess IT Solutions. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
