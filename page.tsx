export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          KTU BTech Study Notes
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
          Simple exam-focused engineering notes.
        </p>
        <a
          href="/material-science"
          className="block w-full max-w-sm mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
        >
          Explore Material Science Notes →
        </a>
      </div>
    </main>
  );
}
