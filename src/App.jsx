import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-rose-50 to-amber-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
