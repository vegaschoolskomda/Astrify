import { motion } from 'framer-motion'
import { Layers, Palette, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react'

const templateFeatures = [
  'Pilihan desain siap pakai & profesional',
  'Setup cepat — langsung online',
  'Harga lebih terjangkau',
  'Cocok untuk UMKM, portofolio, landing page',
]

const customFeatures = [
  'Desain 100% unik sesuai brand identity',
  'Fitur disesuaikan kebutuhan bisnis',
  'Skalabel untuk pertumbuhan bisnis',
  'Cocok untuk website perusahaan, e-commerce, sistem',
]

export default function PilihanLayanan() {
  return (
    <section id="layanan" className="section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-12"
        >
          <span className="text-notion-caption text-[var(--color-notion-blue)] uppercase tracking-wider font-bold mb-4 block">
            Pilihan Layanan
          </span>
          <h2 className="text-notion-heading lg:text-notion-heading-lg text-[var(--color-ink-black)] mb-4">
            Dua Jalur, Satu Hasil: Website Hebat
          </h2>
          <p className="font-editorial text-[20px] text-[var(--color-graphite)]">
            Pilih jalur yang paling sesuai dengan kebutuhan, budget, dan timeline kamu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Box Template - White Feature Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="card-white flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--color-sky-tint)] flex items-center justify-center mb-6">
                <Layers className="text-[var(--color-notion-blue)]" size={24} />
              </div>
              <h3 className="text-notion-heading-sm text-[var(--color-ink-black)] mb-2">Template</h3>
              <p className="text-notion-body text-[var(--color-slate)] mb-6">Untuk kamu yang butuh website cepat dan terjangkau</p>
              
              <div className="inline-flex items-center gap-2 text-notion-caption font-bold bg-[var(--color-sky-tint)] text-[var(--color-notion-blue)] px-3 py-1.5 rounded-[var(--radius-pills)] mb-8">
                <Clock size={14} />
                Mulai dari 3 hari kerja
              </div>
              
              <ul className="space-y-3 mb-10">
                {templateFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-notion-body-sm text-[var(--color-slate)]">
                    <CheckCircle2 size={18} className="text-[var(--color-notion-blue)] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a 
              href="#template" 
              className="btn-text-ghost border border-[var(--border-light)] justify-center mt-auto py-3"
            >
              Lihat Katalog Template
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Box Custom - Light Blue Feature Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="card-dark flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--color-pure-white)] flex items-center justify-center mb-6">
                <Palette className="text-[var(--color-notion-blue)]" size={24} />
              </div>
              <h3 className="text-notion-heading-sm text-[var(--color-ink-black)] mb-2">Custom</h3>
              <p className="text-notion-body text-[var(--color-slate)] mb-6">Untuk kamu yang butuh desain & fitur khusus</p>
              
              <div className="inline-flex items-center gap-2 text-notion-caption font-bold bg-[var(--color-pure-white)] text-[var(--color-notion-blue)] px-3 py-1.5 rounded-[var(--radius-pills)] mb-8">
                <Sparkles size={14} />
                Dikerjakan dari nol
              </div>
              
              <ul className="space-y-3 mb-10">
                {customFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-notion-body-sm text-[var(--color-slate)]">
                    <CheckCircle2 size={18} className="text-[var(--color-notion-blue)] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <a 
              href="#kontak" 
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-[var(--radius-lg)] font-medium bg-[var(--color-notion-blue)] text-[var(--color-pure-white)] hover:bg-[var(--color-signal-blue)] transition-colors mt-auto text-notion-body-sm"
            >
              Konsultasi Custom
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
