export default function Footer() {
  return (
    <footer className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Let’s build something great</h3>
            <p className="mt-3 text-gray-600">We partner with ambitious teams to design brands, products, and experiences that people love.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Capabilities</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Brand Identity</li>
              <li>Web Design & Development</li>
              <li>Product UI/UX</li>
              <li>Motion & 3D</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="mailto:hello@ollivere.studio" className="hover:text-gray-900">hello@ollivere.studio</a></li>
              <li>Europe • Remote-first</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Ollivere Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Twitter</a>
            <a href="#" className="hover:text-gray-900">Dribbble</a>
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
