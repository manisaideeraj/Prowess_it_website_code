// app/jobs/[id]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';

const JobDetailPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `http://localhost:1337/api/jobs?filters[documentId][$eq]=${params.id}`,
    { cache: 'no-store' }
  );

  const json = await res.json();
  const job = json.data?.[0];

  if (!job) return notFound();

  const {
    Title,
    Location,
    Department,
    employmentType,
    Description,
    Requirements,
  } = job;
  

  return (
    <main className="max-w-4xl mx-auto px-6 py-10 bg-white shadow rounded-xl">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">{Title}</h1>
      <div className="space-y-3 text-gray-700">
        <p><strong>Location:</strong> {Location}</p>
        <p><strong>Department:</strong> {Department}</p>
        <p><strong>Employment Type:</strong> {employmentType}</p>
        <p><strong>Description:</strong> {Description}</p>
        <p><strong>Requirements:</strong> {Requirements}</p>
      </div>
    </main>
  );
};

export default JobDetailPage;
