export default function Navbar() {
  return (
    <header className="bg-[#d3ebd7] shadow-sm mb-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/lavera.png"
            alt="Lavera Bus Tour Logo"
            className="w-12 h-12 object-contain rounded-full"
          />

          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-lg">Lavera Bus Tour</h1>
            <p className="text-[11px] text-gray-600">
              laveratourbus@gmail.com • +63 987 1242 252
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-2 bg-white rounded-full p-1">
          <a
            href="/"
            className="px-5 py-2 rounded-full text-sm font-medium bg-[#d3ebd7] text-gray-700 hover:bg-gray-100"
          >
            Tours
          </a>
        </nav>
      </div>
    </header>
  );
}
