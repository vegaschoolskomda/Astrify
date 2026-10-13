import { motion } from 'framer-motion'
import { MessageSquare, MousePointerClick, Palette, RefreshCcw, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Konsultasi',
    desc: 'Ceritakan kebutuhan dan keinginanmu. Kami bantu tentukan solusi terbaik.',
  },
  {
    icon: MousePointerClick,
    title: 'Tentukan Arah',
    desc: 'Pilih jenis website dan susun kebutuhan utama sesuai target bisnis.',
  },
  {
    icon: Palette,
    title: 'Desain & Pengerjaan',
    desc: 'Tim kami mulai mendesain dan membangun website sesuai kesepakatan.',
  },
  {
    icon: RefreshCcw,
    title: 'Revisi',
    desc: 'Kamu review hasilnya. Kami revisi sampai kamu puas.',
  },
  {
    icon: Rocket,
    title: 'Launch & Serah Terima',
    desc: 'Website live! Kami serahkan semua akses dan panduan penggunaan.',
  },
]

export default function ProsesKerja() {
  return (
    <section id="proses" className="section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="card-accent border border-[#e5e8ee] bg-white"
        >
          <div className="max-w-3xl mx-auto text-center mb-16 pt-8">
            <h2 className="text-notion-heading lg:text-notion-heading-lg text-[var(--color-ink-black)] mb-6">
              Dari Konsultasi Sampai Online
            </h2>
            <p className="font-editorial text-[22px] text-[var(--color-charcoal)]">
              Alur yang jelas, komunikasi terbuka, tanpa kejutan di tengah jalan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative overflow-hidden rounded-xl border border-[#e5e8ee] bg-[#f8f9fb] p-6"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <s.icon size={64} />
                </div>
                <div className="relative z-10">
                  <div className="text-notion-heading text-[var(--color-ink-black)] mb-2 font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-notion-heading-sm text-[var(--color-ink-black)] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-notion-body-sm text-[var(--color-charcoal)]">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
