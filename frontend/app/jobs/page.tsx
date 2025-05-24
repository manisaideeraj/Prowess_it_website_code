// app/jobs/page.tsx
import React from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Available Job Openings
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join our team and be part of building the future of technology
          </p>
        </div>

        {/* Search Form */}
        <form method="GET" className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              name="search"
              defaultValue={searchQuery}
              type="text"
              placeholder="Search job title..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:opacity-90 transition-all duration-200"
            >
              Search
            </button>
          </div>
        </form>

        {/* Jobs Grid */}
        <div className="space-y-6">
          {jobs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-slate-100">
              <p className="text-slate-600">No jobs found matching your criteria.</p>
            </div>
          ) : (
            jobs.map((job: { documentId: React.Key | null | undefined; Title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; Department: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; Location: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; employmentType: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
              <div
                key={job.documentId}
                className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-800 group-hover:text-purple-600 transition-colors duration-200">
                      {job.Title}
                    </h2>
                    <p className="text-sm text-slate-500 mb-3">{job.Department}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <span className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1 text-slate-400" />
                        {job.Location}
                      </span>
                      <span className="flex items-center">
                        <BriefcaseIcon className="h-4 w-4 mr-1 text-slate-400" />
                        {job.employmentType}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/jobs/${job.documentId}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-purple-50 text-purple-600 rounded-full font-medium text-sm hover:bg-purple-100 transition-colors duration-200"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {pagination && pagination.pageCount > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            {page > 1 && (
              <Link
                href={`?page=${page - 1}${searchQuery ? `&search=${searchQuery}` : ''}`}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-purple-500 hover:text-purple-600 transition-all duration-200"
              >
                ← Previous
              </Link>
            )}

            <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-600 font-medium">
              Page {pagination.page} of {pagination.pageCount}
            </span>

            {page < pagination.pageCount && (
              <Link
                href={`?page=${page + 1}${searchQuery ? `&search=${searchQuery}` : ''}`}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-purple-500 hover:text-purple-600 transition-all duration-200"
              >
                Next →
              </Link>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default JobsPage;
