import { Coffee } from 'lucide-react';

export interface JobListingProps{
    origin_company: string;
    job_title: string;
    job_description: string;
    company: string;
    location?: string;
    time?: string;
    requirements?: string[];
    salary?: string;
}

function JobListing({ job_title, job_description, company, location, time, requirements = [], salary = '' }: JobListingProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Coffee size={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-gray-600">{company}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{location}</span>
          </div>
          <h3 className="font-bold text-lg mb-2">{job_title}</h3>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((req, index) => (
              <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                {req}
              </span>
            ))}
            {job_description}
            {salary && (
              <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">
                {salary}
              </span>
            )}
          </div>
        </div>
        <span className="text-gray-500 text-sm">{time}</span>
      </div>
    </div>
  );
}

export default JobListing;