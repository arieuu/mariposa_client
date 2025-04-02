import JobListing, { JobListingProps } from "./JobListing";

interface Props {
    title: string;
    jobs: JobListingProps[];
}

function JobSection({ title, jobs }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif font-bold">{title}</h2>
        {/*
        <button className="flex items-center gap-2 text-green-700 hover:text-green-800">
          See more
          <ChevronRight size={20} />
        </button>
        */}
      </div>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <JobListing key={index} title={job.title} company={job.company} />
        ))}
      </div>
    </div>
  );
}

export default JobSection;