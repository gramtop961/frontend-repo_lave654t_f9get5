import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8gU3Gocw3m8cJ9gP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-white/60 px-3 py-1 text-xs text-gray-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open for new projects
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
              Digital products that feel delightful and drive results.
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              We craft brand identities, polished websites, and interactive experiences that convert. Boutique quality, startup speed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:shadow-lg hover:shadow-gray-900/20">
                See our work
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm font-semibold border border-gray-200 hover:bg-gray-50">
                Start a project
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
