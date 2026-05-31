import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-20 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white">NEXUS</h3>
          <p className="text-muted-light text-sm mt-3 leading-relaxed">
            Marketing & Artificial Intelligence
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-muted-light text-xs uppercase tracking-wider font-medium">
            Services
          </span>
          {['Google Ads', 'Mobile Network', 'Automation', 'Artificial Intelligence'].map(
            (s) => (
              <span
                key={s}
                className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
              >
                {s}
              </span>
            )
          )}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-muted-light text-xs uppercase tracking-wider font-medium">
            Company
          </span>
          {['About us', 'Contact', 'Blog'].map((s) => (
            <span
              key={s}
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-muted-light text-xs uppercase tracking-wider font-medium">
            Contact
          </span>
          <a
            href="mailto:hola@nexusdigital.es"
            className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
          >
            <Mail size={14} />
            hola@nexusdigital.es
          </a>
          <span className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 cursor-pointer">
            <Linkedin size={14} />
            LinkedIn
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-dark-border text-center text-muted-light text-xs">
        &copy; 2026 Nexus Digital. All rights reserved.
      </div>
    </footer>
  );
}
