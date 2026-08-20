export default function Footer() {
  return (
    <footer className="bg-[var(--surface-page-canvas)] py-16 border-t border-[var(--border-light)]">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-[var(--color-ink-black)] rounded-md flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
              <span className="text-notion-subheading font-bold text-[var(--color-ink-black)]">Astrify</span>
            </div>
            <p className="text-[var(--color-slate)] text-notion-body-sm leading-relaxed max-w-xs">
              Solusi digital untuk website profesionalmu. Template siap pakai atau custom dari nol.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-notion-caption uppercase tracking-wider text-[var(--color-slate)]">Navigasi</h4>
            <ul className="space-y-3 text-notion-body-sm">
              <li><a href="#layanan" className="text-[var(--color-stone)] hover:text-[var(--color-ink-black)] transition-colors">Layanan</a></li>
              <li><a href="#template" className="text-[var(--color-stone)] hover:text-[var(--color-ink-black)] transition-colors">Template</a></li>
              <li><a href="#portofolio" className="text-[var(--color-stone)] hover:text-[var(--color-ink-black)] transition-colors">Portofolio</a></li>
              <li><a href="#proses" className="text-[var(--color-stone)] hover:text-[var(--color-ink-black)] transition-colors">Proses Kerja</a></li>
              <li><a href="#faq" className="text-[var(--color-stone)] hover:text-[var(--color-ink-black)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-notion-caption uppercase tracking-wider text-[var(--color-slate)]">Kontak</h4>
            <ul className="space-y-3 text-notion-body-sm text-[var(--color-stone)]">
              <li>hello@astrify.id</li>
              <li>+62 812-3456-7890</li>
              <li>Bandung, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border-light)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-notion-caption text-[var(--color-stone)]">
            &copy; 2026 Astrify. All rights reserved.
          </p>
          <p className="text-notion-caption text-[var(--color-stone)]">
            Made with <span className="text-[var(--color-coral)]">♥</span> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
