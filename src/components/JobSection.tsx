import { IJobListing } from "../types";
import JobListing from "./JobListing";

interface Props {
    title: string;
    jobList?: IJobListing[];
}

function JobSection({ title, jobList }: Props) {
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
        
        {/*Here it'll be loading if the data is not there and will show if it is*/}

        { jobList? jobList?.map((job, index) => (
          <JobListing key={index} origin_company={job.origin_company} job_description={job.job_description} job_title={job.job_title} posted_date={job.posted_date} job_post_link={job.job_post_link}/>
        )) : "loading..."}

      </div>
    </div>
  );
}

export default JobSection;