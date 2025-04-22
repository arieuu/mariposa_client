import { Coffee } from 'lucide-react';
import { IJobListing } from '../types';
import { useState } from 'react';

// The single job listing component (the little square with job description and company names)

function JobListing({ job_title, job_description, origin_company, posted_date }: IJobListing) {

  // We will use a state to keep track of the show more function (Know if its activer or not)

  const [ showMore, setShowMore ] = useState(false);

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">

      <div className="flex gap-4 items-start">

        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Coffee size={24} />
        </div>

        <div className="flex-1">

          <div className="flex items-center gap-2 mb-1">
            <span className="text-gray-600"> { origin_company } </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600"> { posted_date } </span>
          </div>

          <h3 className="font-bold text-lg mb-2"> { job_title } </h3>

          <div className="flex gap-2 flex-wrap">
            {/*requirements.map((req, index) => (
              <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                {req}
              </span>
            ))*/}

            { showMore ? job_description : job_description.substring(0, 500) + "..." }
            
            <button className='bg-black text-white p-2 rounded-sm' onClick={() => setShowMore(!showMore)}> { showMore ? "Show less" : "Show more"} </button>

            {/*salary && (
              <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">
                {salary}
              </span>
            )*/}

          </div>
        </div>

        <span className="text-gray-500 text-sm">{ }</span>

      </div>
    </div>
  );
}

export default JobListing;