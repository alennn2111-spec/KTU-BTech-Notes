const modules = [
  { id: 1, title: 'Module 1: Crystal Structures', file: '/pdfs/module1.pdf' },
  { id: 2, title: 'Module 2: Phase Diagrams', file: '/pdfs/module2.pdf' },
  { id: 3, title: 'Module 3: Heat Treatment', file: '/pdfs/module3.pdf' },
  { id: 4, title: 'Module 4: Strengthening Mechanisms', file: '/pdfs/module4.pdf' },
  { id: 5, title: 'Module 5: Advanced Materials', file: '/pdfs/module5.pdf' },
];

export default function MaterialScience() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Material Science Notes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            KTU MET205/MET285 - Complete modules with exam-focused PDFs. Upload your notes to public/pdfs/.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="group bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-indigo-100 hover:border-indigo-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Module {module.id}
              </h3>
              <p className="text-gray-600 mb-6">{module.title}</p>
              <a
                href={module.file}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white border-2 border-blue-500 text-blue-600 font-semibold py-4 px-6 rounded-xl text-center hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                📄 Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
