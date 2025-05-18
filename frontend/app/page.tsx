// app/page.tsx
import React from 'react';
import Link from 'next/link';
import { BriefcaseIcon, QrCodeIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-700">Prowess IT Solutions</h1>
          <nav className="space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-indigo-600">Home</a>
            <a href="/jobs" className="hover:text-indigo-600">Careers</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
          </nav>
        </div>
      </header>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
            Welcome to Prowess IT
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Powering Innovation Through Strategy, Technology & Talent
          </p>
          <Link
            href="/jobs"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
          >
            View Open Positions
          </Link>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-indigo-700">About Us</h2>
            <p className="text-gray-700 text-lg">
              We are a full-service IT consulting partner and talent sourcing firm. From building scalable enterprise solutions to providing top-tier technical talent, we help businesses navigate complex challenges and accelerate digital transformation. Whether you need end-to-end project delivery, niche technology expertise, or agile team scaling, we bring the right mix of strategy, execution, and people.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Technology Consulting</h3>
                <p className="text-gray-600">Delivering customized solutions in Cloud, Data Engineering, AI/ML, SAP, DevOps, and Application Modernization.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">IT Staffing Solutions</h3>
                <p className="text-gray-600">Rapid deployment of pre-vetted contract talent across a wide spectrum of technologies.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Project-Based Delivery</h3>
                <p className="text-gray-600">From discovery to deployment—we lead complete project cycles with measurable outcomes.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Talent Enablement & Visa Support</h3>
                <p className="text-gray-600">Sponsorship and onboarding support for H-1B professionals, with a strong bench of candidates ready for deployment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-12">Industries We Serve</h2>
            <ul className="space-y-6 text-gray-700">
              <li><strong>Healthcare & HealthTech:</strong> EHR/EMR integrations, healthcare analytics, HIPAA-compliant cloud migrations, and clinical data engineering.</li>
              <li><strong>Banking, Financial Services & Insurance (BFSI):</strong> Legacy modernization, fraud detection, credit decisioning, Salesforce FSL, and secure platforms.</li>
              <li><strong>Retail & E-Commerce:</strong> Microservices, headless CMS, product information management, storefront optimization, ERP integrations.</li>
              <li><strong>Public Sector:</strong> Low-code platforms, IAM, data security, and scalable cloud-native solutions for state and federal use.</li>
              <li><strong>Manufacturing:</strong> SAP S/4HANA, real-time dashboards, IoT/MES, OT/IT convergence, and edge computing.</li>
              <li><strong>Tech Startups & SaaS:</strong> Full-stack development, DevOps, cloud scaling, and ML integrations in digital product delivery.</li>
            </ul>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Why Choose Us</h2>
            <ul className="space-y-4 text-gray-700 text-left">
              <li><strong>Strategic + Technical Expertise:</strong> Our consultants have helped transform operations at Fortune 500 firms and agile startups alike.</li>
              <li><strong>Agile and Scalable:</strong> We adapt fast to your needs—whether you're launching a new initiative or expanding your tech team.</li>
              <li><strong>End-to-End Support:</strong> From talent sourcing to full project delivery, we own the process with clarity and accountability.</li>
              <li><strong>Relationship-Driven:</strong> We build partnerships, not transactions, with both our clients and our consultants.</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center bg-indigo-700 text-white">
          <h2 className="text-3xl font-semibold mb-4">Ready to Build?</h2>
          <p className="mb-4">Whether you're looking for a partner to lead your next tech initiative or scale your team with confidence? We’re here to help.</p>
          <p>Let’s connect: <a href="mailto:contact@prowessit.com" className="underline">contact@prowessit.com</a></p>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-gray-800 text-white text-center">
          <p>&copy; {new Date().getFullYear()} Prowess IT Solutions. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
