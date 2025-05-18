// app/apply/page.tsx
import React from 'react';

export default function ApplyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Apply for a Position</h1>
      <form className="space-y-6" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input type="tel" name="contact" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Visa Status</label>
            <input type="text" name="visaStatus" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Visa Validity</label>
            <input type="date" name="visaValidity" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Location</label>
            <input type="text" name="location" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
          <input type="url" name="linkedin" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Willing to Relocate</label>
          <select name="relocate" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Earliest Available to Join</label>
          <input type="date" name="availability" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Documents (Passport, Visa, State ID)</label>
          <input type="file" name="documents" multiple className="mt-1 block w-full" />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            Submit Application
          </button>
        </div>
      </form>
    </main>
  );
}
