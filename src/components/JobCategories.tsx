import { BarChart2, Code, Database, PenTool } from "lucide-react";

interface Props {
    number: string
    clickedFilter(keyword: string[]) : void
}


function JobCategories({number, clickedFilter}: Props) {
  const categories = [
    { icon: <Code size={24} />, title: "Cobol", count: number + ' Postings'},
    { icon: <PenTool size={24} />, title: 'Prime IT', count: '933 Postings' },
    { icon: <BarChart2 size={24} />, title: 'Database', count: '1.3k Postings' },
    { icon: <Database size={24} />, title: 'Unfilter', count: '2.0k Postings' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 mb-16">
      {categories.map((category, index) => (
        <div key={index} onClick={() => clickedFilter([category.title])} className="bg-white cursor-pointer p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
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