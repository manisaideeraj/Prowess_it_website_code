// app/jobs/page.tsx
import React from 'react';
import Link from 'next/link';

const JobsPage = async ({
  searchParams,
}: {
  searchParams?: Record<string, string>;
}) => {
  const page = Number(searchParams?.page ?? 1);
  const pageSize = 5;
  const searchQuery = searchParams?.search ?? '';

  const queryParams = new URLSearchParams();
  queryParams.append('pagination[page]', String(page));
  queryParams.append('pagination[pageSize]', String(pageSize));
  if (searchQuery) {
    queryParams.append('filters[Title][$containsi]', searchQuery);
  }

  const res = await fetch(
    `http://localhost:1337/api/jobs?${queryParams.toString()}`,
    {
      next: { revalidate: 60 },
    }
  );

  const json = await res.json();

  const jobs = (json.data || [])
  .filter((item: any) => item.documentId)
  .map((item: any) => ({
    id: item.id,
    documentId: item.documentId,
    Title: item.Title,
    Location: item.Location,
    Department: item.Department,
    employmentType: item.employmentType,
    Description: item.Description,
    Requirements: item.Requirements,
    applyLink: item.applyLink,
  }));


  const pagination = json.meta?.pagination;

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Available Job Openings
      </h1>

      <form method="GET" className="mb-8 flex items-center gap-4">
        <input
          name="search"
          defaultValue={searchQuery}
          type="text"
          placeholder="Search job title..."
          className="flex-grow border border-gray-300 px-4 py-2 rounded shadow-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="space-y-6">
        {jobs.length === 0 ? (
          <p className="text-gray-600 text-center">No jobs found.</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job.documentId}
              className="p-6 bg-white shadow-md rounded-xl border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {job.Title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{job.Department}</p>
              <div className="flex text-sm text-gray-600 gap-6">
                <span>
                  <strong>Location:</strong> {job.Location}
                </span>
                <span>
                  <strong>Type:</strong> {job.employmentType}
                </span>
              </div>
              <Link
                href={`/jobs/${job.documentId}`}
                className="mt-3 inline-block text-blue-600 hover:underline font-medium"
              >
                View Details →
              </Link>
            </div>
          ))
        )}
      </div>

      {pagination && pagination.pageCount > 1 && (
        <div className="mt-8 flex justify-between items-center text-sm">
          {page > 1 ? (
            <Link
              href={`?page=${page - 1}${searchQuery ? `&search=${searchQuery}` : ''}`}
              className="text-blue-600 hover:underline"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          <span className="text-gray-500">
            Page {pagination.page} of {pagination.pageCount}
          </span>

          {page < pagination.pageCount && (
            <Link
              href={`?page=${page + 1}${searchQuery ? `&search=${searchQuery}` : ''}`}
              className="text-blue-600 hover:underline"
            >
              Next →
            </Link>
          )}
        </div>
      )}
    </main>
  );
};

export default JobsPage;
