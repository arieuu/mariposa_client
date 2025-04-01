import React, { useState } from 'react';
import { Search, Code, PenTool, BarChart2, Database, Coffee, ChevronRight, CheckCircle, Twitter, Linkedin, Github } from 'lucide-react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-serif font-bold">RefereeAI</h1>
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#" className="hover:text-gray-600">Top Jobs</a>
          <a href="#" className="hover:text-gray-600">New Jobs</a>
          <a href="#" className="hover:text-gray-600">Companies</a>
        </div>
      </div>
      <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
        Find Jobs
      </button>
    </nav>
  );
}

function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="text-center py-16 px-4">
      <p className="text-blue-500 mb-4">Find jobs that are real, directly on their website</p>
      <h2 className="text-5xl font-serif font-bold mb-8">
        Your guide through<br />
        the job 🌴 jungle.
      </h2>
      <div className="max-w-xl mx-auto relative">
        <input
          type="text"
          placeholder="Financial Analyst"
          className="w-full px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Search
        </button>
      </div>
      <p className="text-gray-600 mt-8">Bringing authentic jobs straight to you</p>
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

function JobCategories() {
  const categories = [
    { icon: <Code size={24} />, title: 'Software', count: '4.4k Postings' },
    { icon: <PenTool size={24} />, title: 'Graphics & Design', count: '933 Postings' },
    { icon: <BarChart2 size={24} />, title: 'Account & Finance', count: '1.3k Postings' },
    { icon: <Database size={24} />, title: 'Data & Science', count: '2.0k Postings' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 mb-16">
      {categories.map((category, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
          <div className="bg-green-50 p-3 rounded-lg">
            {category.icon}
          </div>
          <div>
            <h3 className="font-bold">{category.title}</h3>
            <p className="text-gray-600 text-sm">{category.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function JobListing({ title, company, location, time, requirements = [], salary = '' }) {
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
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <div className="flex gap-2 flex-wrap">
            {requirements.map((req, index) => (
              <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                {req}
              </span>
            ))}
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

function JobSection({ title, jobs }) {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif font-bold">{title}</h2>
        <button className="flex items-center gap-2 text-green-700 hover:text-green-800">
          See more
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <JobListing key={index} {...job} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white mt-32 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">RefereeAI</h3>
            <p className="text-gray-600 mb-4">Your trusted partner in finding authentic job opportunities directly from company websites.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Github size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Companies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Salary Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Career Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Post a Job</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Hiring Solutions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">© 2025 RefereeAI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const topJobs = [
    {
      company: 'CloudKitchens',
      location: 'Mountain View',
      title: 'Software Engineer - Infrastructure',
      time: '1 month ago'
    },
    {
      company: 'Roku',
      location: 'Austin, Texas',
      title: 'Senior Software Engineer, Full Stack Developer',
      time: '1 month ago'
    }
  ];

  const newJobs = [
    {
      company: 'NeuralLink',
      location: 'Austin, Texas, United States',
      title: 'Veterinary Technician',
      requirements: ['2+ years experience'],
      salary: '$24-$39',
      time: 'Yesterday'
    },
    {
      company: 'NeuralLink',
      location: 'Austin, Texas, United States',
      title: 'Software Engineer, Data Engineering',
      requirements: ["Bachelor's Degree", '1+ years experience'],
      salary: '$124,000-$180,000',
      time: 'Yesterday'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <JobCategories />
      <JobSection title="Top Postings" jobs={topJobs} />
      <JobSection title="New Postings" jobs={newJobs} />
      <Footer />
    </div>
  );
}

export default App;