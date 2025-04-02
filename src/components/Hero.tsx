import { CheckCircle } from "lucide-react";

function Hero() {
  
  return (
    <div className="text-center py-16 px-4">
      <p className="mb-4">Find jobs that are real, directly on their website</p>
      <h2 className="text-5xl font-serif font-bold mb-8">
       🦋 MARIPOSA 🦋
      </h2>
      <div className="max-w-xl mx-auto relative">
        {/*<input
          type="text"
          placeholder="Financial Analyst"
          className="w-full px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Search
        </button>
        */}
      </div>
      <h3 className="text-gray-600 mt-8 text-2xl"> All job listing in one place</h3>
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
            <p className="text-gray-600">18.1k+</p>
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