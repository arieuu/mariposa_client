import { BarChart2, Code, Database, PenTool } from "lucide-react";

interface Props {
    number: string
}


function JobCategories({number}: Props) {
  const categories = [
    { icon: <Code size={24} />, title: 'Software', count: number + ' Postings' },
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

export default JobCategories;