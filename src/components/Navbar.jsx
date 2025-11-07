import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 rounded-b-2xl shadow-sm">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center text-white">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">Ollivere Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:shadow-lg hover:shadow-gray-900/20 transition-shadow">
              <Rocket size={16} />
              Start a project
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
