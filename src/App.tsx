import JobSection from './components/JobSection';
import JobCategories from './components/JobCategories';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <JobCategories number='500'/>
      <JobSection title='Available postings' jobs={jobList}/>
      <Footer />
    </div>
  );
}

export default App;