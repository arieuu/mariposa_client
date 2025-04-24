import JobSection from './components/JobSection';
import JobCategories from './components/JobCategories';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import axios from 'axios';
import { IJobListing } from './types';
import { useState } from 'react';
import fakeData from './fakeData';


function App() {
  
  const [jobList, setJobList] = useState<IJobListing[]>();


  // We request to the api and when we have the data we set the state and that re-renders the component

  async function getJobs() {
    // const result = await axios.get("https://mariposa-api-2.onrender.com/jobs")
    // setJobList(result.data) // Setting state
    // console.log(result.data)
    !jobList && setJobList(fakeData) 
  }

  getJobs()

  const [ filteredWords, setFilteredWords ] = useState<string[]>();

  function updateFilteredWords(filteredWords: string[]) {
    
    // this function will set the filtered words coming from the input

    setFilteredWords(filteredWords)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero job_postings_qtty={jobList?.length} sendFilteredWords={updateFilteredWords} filteredWords={filteredWords}/>
      <JobSection title='Available postings' jobList={ jobList } filteredWords={ filteredWords } updateFilteredWords={ updateFilteredWords }/>
      <Footer />
    </div>
  );

}

export default App;