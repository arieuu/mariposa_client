import JobSection from './components/JobSection';
import JobCategories from './components/JobCategories';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import axios from 'axios';
import { Post } from './types';
import { useEffect, useState } from 'react';


function App() {
  
  const jobList= [
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

  const [postList, setPostList] = useState<Post[]>()

  // We request to the api and when we have the data we set the state and that re-renders the component

  async function getPosts() {
      const result = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      setPostList(result.data) // Setting state
  }

  getPosts()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <JobCategories number='500'/>
      <JobSection title='Available postings' postList={postList}/>
      <Footer />
    </div>
  );

}

export default App;