export default function WorkGrid() {
  const projects = [
    {
      title: 'E-commerce Redesign',
      subtitle: 'Brand + Web + Motion',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Fintech Dashboard',
      subtitle: 'Product UX + UI',
      image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjI0NDA1OTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Lifestyle Brand Launch',
      subtitle: 'Identity + Web',
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Interactive Microsite',
      subtitle: '3D + WebGL',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Selected work</h2>
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900">View all</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.subtitle}</p>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-colors">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
