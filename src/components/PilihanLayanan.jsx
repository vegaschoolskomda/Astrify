import { motion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  Check,
  Monitor,
  ShoppingCart,
} from 'lucide-react'

const services = [
  {
    title: ['Landing', 'Page'],
    description:
      'Website satu halaman yang fokus mengubah pengunjung menjadi pelanggan untuk promosi, campaign, atau produk unggulan.',
    features: ['1 Halaman Fokus Jualan', 'Desain Responsif', 'Form WhatsApp', 'Selesai 4 Hari Kerja'],
    price: 'Rp 150.000',
    action: 'Konsultasi',
    icon: Monitor,
    tone: 'blue',
  },
  {
    title: ['Website', 'Perusahaan'],
    description:
      'Website profesional untuk memperkenalkan bisnis, membangun kepercayaan, dan memudahkan calon klien mengenal layanan kamu.',
    features: ['5 Halaman Profil', 'Profil Layanan', 'Optimasi Mobile', 'Selesai 7 Hari Kerja'],
    price: 'Rp 2.301.010',
    action: 'Konsultasi',
    icon: Building2,
    tone: 'blue',
  },
  {
    title: ['Toko', 'Online'],
    description:
      'Lapak online milik sendiri untuk menampilkan produk, menerima pesanan, dan mengembangkan bisnis tanpa bergantung pada marketplace.',
    features: ['Katalog Produk', 'Keranjang Belanja', 'Pembayaran Online', 'Siap Dikembangkan'],
    price: 'Mulai Rp 3.491.010',
    action: 'Konsultasi',
    icon: ShoppingCart,
    tone: 'orange',
  },
]

const toneStyles = {
  blue: {
    panel: 'from-[#4039a5] via-[#5750bb] to-[#7770d8]',
    icon: 'bg-[#4b45aa] text-white',
    check: 'bg-[#414699] text-white',
    button: 'bg-[#41499f] hover:bg-[#303883]',
    underline: 'bg-[#41499f]',
    shadow: 'shadow-[0_12px_0_#292d70]',
  },
  orange: {
    panel: 'from-[#ffb10b] via-[#ffc329] to-[#ff9e05]',
    icon: 'bg-[#ffad08] text-white',
    check: 'bg-[#f5a006] text-white',
    button: 'bg-[#ff9f00] hover:bg-[#e88e00] text-[#17110a]',
    underline: 'bg-[#f5a006]',
    shadow: 'shadow-[0_12px_0_#f5a006]',
  },
}

export default function PilihanLayanan() {
  return (
    <section id="layanan" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="text-notion-caption mb-4 block font-bold uppercase tracking-wider text-[var(--color-notion-blue)]">
            Pilihan Layanan
          </span>
          <h2 className="text-notion-heading lg:text-notion-heading-lg mb-4 text-[var(--color-ink-black)]">
            Pilih Website yang Sesuai
          </h2>
          <p className="font-editorial text-[20px] text-[var(--color-graphite)]">
            Tiga pilihan website untuk membantu bisnis kamu tampil profesional dan berkembang lebih cepat.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            const styles = toneStyles[service.tone]

            return (
              <motion.article
                key={service.title.join('-')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className={`group flex h-full min-h-[610px] flex-col rounded-[32px] border border-[#dce1e9] bg-white p-7 pb-6 ${styles.shadow} transition-transform duration-300 hover:-translate-y-1 md:p-8 md:pb-7`}
              >
                <div className="relative mb-5 h-[190px] overflow-hidden rounded-[24px] bg-[#f7f8fa]">
                  <div className={`absolute inset-y-0 right-0 w-[72%] rounded-l-[72px] bg-gradient-to-br ${styles.panel}`} />
                  <div className="absolute inset-y-0 left-0 w-[64%] rounded-r-[70px] bg-[#f8f9fb]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`mr-[42%] flex h-[86px] w-[86px] items-center justify-center rounded-full ${styles.icon}`}>
                      <Icon size={42} strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-[12%] h-20 w-32 rotate-[-8deg] rounded-[10px] border-4 border-white/40 bg-white/15" />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-[30px] font-bold leading-[1.03] tracking-[-1.5px] text-[#354391]">
                    {service.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <div className={`my-4 h-[3px] w-11 ${styles.underline}`} />
                  <p className="text-[15px] leading-[1.55] text-[#53607c]">{service.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#dce3ed] px-3 py-1.5 text-[13px] font-medium leading-none text-[#263b70]"
                      >
                        <span className={`flex h-[17px] w-[17px] items-center justify-center rounded-full ${styles.check}`}>
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-end justify-between gap-3 border-t border-[#e5e8ee] pt-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-[#41506f]">
                      Tarif mulai
                    </p>
                    <p className="text-[18px] font-bold leading-tight text-[#354391]">
                      {service.price}
                    </p>
                  </div>
                  <a
                    href="#kontak"
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[14px] font-bold text-white transition-colors ${styles.button}`}
                  >
                    {service.action}
                    <ArrowRight size={17} />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
