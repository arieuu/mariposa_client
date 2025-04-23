import { CheckCircle } from "lucide-react";
import React, { useRef, useState } from "react";

interface Props {
  job_postings_qtty?: number
  sendFilteredWords(keywords: string[]): void
}

function Hero({ job_postings_qtty, sendFilteredWords }:Props) {
  
  const [searchKeyword, setSearchKeyword] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  function searchAndFilter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = searchInputRef.current?.value.split(" ")

    // After getting the value pass it to the filtering callback function passed as prop

    value && setSearchKeyword(value) 
    value && sendFilteredWords(value)
  }

  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-5xl font-serif font-bold mb-8">
       MARIPOSA
      </h2>
      <p className="mb-4">Find jobs that are real, directly on their website</p>
      <div className="max-w-xl mx-auto relative">

        <form onSubmit={searchAndFilter}>
        <input type="text" autoComplete="off" placeholder="Backend Developer" name="searchInput" ref={searchInputRef}
          className="w-full px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Search
        </button>

        </form>


      </div>

      <div className="mt-4">
        { searchKeyword && <h4> Filters </h4>}

        { searchKeyword  && 
          <>
            <span className="underline mr-1"> { searchKeyword } </span>
            <span className="mr-1 bg-black text-white p-[2px] "> Clear </span>
          </>
        }
      </div>

      <div className="flex justify-center gap-12 mt-8">
        <div className="flex items-center gap-2">
          <CheckCircle className="text-blue-500" size={20} />
          <div>
            <p className="font-bold">Companies</p>
            <p className="text-gray-600">1.2k</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="text-blue-500" size={20} />
          <div>
            <p className="font-bold">Job Postings</p>
            <p className="text-gray-600"> { job_postings_qtty ? job_postings_qtty : "unknown"} </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="text-blue-500" size={20} />
          <div>
            <p className="font-bold">Last Updated</p>
            <p className="text-gray-600">16 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;