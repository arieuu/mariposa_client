import { useEffect, useState } from "react";
import { IJobListing } from "../types";
import JobListing from "./JobListing";
import JobCategories from "./JobCategories";

interface Props {
    title: string;
    jobList?: IJobListing[];
    filteredWords?: string[];
}

function JobSection({ title, jobList, filteredWords}: Props) {
  
  /* We use the displayedJobs state to tracke what jobs can be displayed at any point in time.
     The page will always display the entire displayedJobs, so we mess with setDisplayed jobs and update state
     making the page re-render and show what we want to display

  */

  const [ displayedJobs, setDisplayedJobs ] = useState<{"displayAll": boolean, "jobs"?: IJobListing[]}>({"displayAll": false, "jobs": undefined });

  // The first time running displayedJobs will be empty so we set it to just show some jobs (displayAll to false)

  !displayedJobs.jobs && jobList && setDisplayedJobs({"displayAll": false, "jobs": jobList.slice(0,5)})

  // Filtering system

  /* We use this array when going through all the jobs and word filters. Then we just set the
     filteredItemsState once and cause a re-render with all the items that passed the criteria  */

  let filteredItems: IJobListing[] = [] 
  
  const [ filteredItemsState, setFilteredItemsState ] = useState<{"filtered": boolean, "items"?: IJobListing[]}>({"filtered": false, "items": []})

   
  /*
    This filtering function will be called every time a filtering item/button is called.
    It will go through the joblist and for every job it will go through all the filter words.

    All the jobs that have a title or description that match the criteria will be added to the
    temporary array that will be used when updating state
  */

  function filter(words: string[]) {

    filteredItems = [] // Clear the filtered items before doing a new search
    filteredItemsState.items = undefined

    // Disable filtering system by setting it to false using "unfilter keyword"

    if(words.includes("Unfilter")) {
      setFilteredItemsState({ "filtered": false, items: undefined})
      return
    }

    jobList?.map((job) => {

      words.map((word) => {

        if(job.job_title.replace(" ", "").toLowerCase().includes(word.toLowerCase().replace(" ", ""))
          || job.job_description.replace(" ", "").toLowerCase().includes(word.toLowerCase().replace(" ", "")))
        {
          // matches the criteria
          filteredItems.push(job)
        }
      })

    })

    !filteredItemsState.items && setFilteredItemsState({ "filtered": true, "items": filteredItems});
  }

  // Filter using these and display appropriate jobs
  
  console.log(filteredWords)

  return (

    <div className="max-w-7xl mx-auto px-4 mb-16">

      <JobCategories number="500" clickedFilter={filter} />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif font-bold"> { title } </h2>
      </div>

      <div className="space-y-4">

        {/*

          We check if the jobs are filtered or not or if we are meant to display all of them or just some.
          Depending on the checks we either pull from displayedJobs (for filtered list) or from jobs for
          all jobs available (unfiltered). 
          
          Of course since we're using ternary we can check if nothing is working
          and display a "waiting" message 

         */}

        { (!filteredItemsState.filtered && !displayedJobs.displayAll && displayedJobs.jobs  ) ? displayedJobs.jobs.map((job, index) => (
          <JobListing key={index} origin_company={job.origin_company} job_description={job.job_description} job_title={job.job_title} posted_date={job.posted_date} job_post_link={job.job_post_link}/>
          
        )) : "" }
        
        { ( displayedJobs.displayAll && jobList && !filteredItemsState.filtered ) ? jobList?.map((job, index) => (
          <JobListing key={index} origin_company={job.origin_company} job_description={job.job_description} job_title={job.job_title} posted_date={job.posted_date} job_post_link={job.job_post_link}/>
        )) : !jobList && "loading..."}


        { !displayedJobs.displayAll && !filteredItemsState.filtered && <button onClick={() => setDisplayedJobs({"displayAll": true, "jobs": jobList})}> Show all </button>}

        { filteredItemsState.filtered && filteredItemsState.items?.map((job, index) => (
          <JobListing key={index} origin_company={job.origin_company} job_description={job.job_description} job_title={job.job_title} posted_date={job.posted_date} job_post_link={job.job_post_link}/>
        ))}

      </div>
    </div>
  );
}

export default JobSection;