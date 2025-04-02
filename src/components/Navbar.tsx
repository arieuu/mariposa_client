

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-serif">Find all new jobs</h1>
      <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
        Find Jobs
      </button>
    </nav>
  );
}

export default Navbar;