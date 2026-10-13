import { motion } from 'framer-motion'
import { AlertCircle, Check } from 'lucide-react'

const painPoints = [
  'Mau ikut tender / kerja sama, tapi cuma bisa kasih link Instagram.',
  'Calon pelanggan cari di Google — yang muncul justru kompetitor.',
  'Jualan numpang marketplace: kena potongan admin, data pembeli bukan milikmu.',
  'Punya web lama tapi lemot, seadanya, dan malu dibagikan.',
]

const details = [
  {
    label: 'Total bayar berapa?',
    content:
      'Web perusahaan Rp 1.941.010 sekali bayar untuk 2 tahun (.my.id). Sudah termasuk domain + hosting 2 tahun, tidak ada biaya lain sampai 2028.',
  },
  {
    label: 'Boleh lihat contoh dulu?',
    content:
      'Boleh — kirim kata contoh lewat WhatsApp, kami balas dengan 3 link website klien.',
  },
  {
    label: 'Bayarnya bagaimana?',
    content:
      'Lunas sekali di awal setelah invoice resmi atas nama PT terbit, tanpa DP. Bisa transfer ke rekening perusahaan atau bayar pakai kartu kredit. Kalau mau dicicil hingga 12 bulan, cicilannya lewat bank penerbit kartu Anda (bunga & ketentuan dari bank). Kami tetap menerima pembayaran penuh. Pengerjaan dimulai begitu pembayaran dan materi diterima.',
  },
  {
    label: 'Berapa lama jadi?',
    content:
      'Landing page 4 hari kerja, web perusahaan 7 hari kerja, toko online 7–20 hari kerja, dihitung sejak materi lengkap.',
  },
]

export default function MasalahBisnis() {
  return (
    <section className="border-t border-[#e4e8ef] bg-white py-20 md:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center py-10"
        >
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.01em] text-[#191919] md:text-[32px]">
            Bisnisnya bagus, produknya menarik.
            <br className="hidden md:block" />
            Sayang, calon pelanggan masih susah menemukannya secara online.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-6 text-[#77716d] md:text-[17px]">
            Empat hal ini yang paling sering kami dengar sebelum bisnis akhirnya memakai jasa
            pembuatan website:
          </p>
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-[1010px] gap-3 md:grid-cols-2 lg:grid-cols-4 px-2 py-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              className="flex min-h-[132px] gap-3 rounded-xl border border-[#e4e8ef] bg-[#fbfcfe] p-5 transition-colors hover:bg-white"
            >
              <AlertCircle
                size={26}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-[#f47c4a]"
                aria-hidden="true"
              />
              <p className="text-[17px] leading-[1.2] text-[#000000]">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="mx-auto mt-16 max-w-[770px] space-y-2 md:mt-20 py-2"
        >
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex gap-3 rounded-xl border border-[#e4e8ef] px-4 py-3 text-[17px] leading-[1.7] text-[#000000] md:px-4"
            >
              <Check
                size={18}
                strokeWidth={3}
                className="mt-0.5 shrink-0 text-[#219653]"
                aria-hidden="true"
              />
              <p>
                <strong className="font-bold text-[#403c39]">{detail.label}</strong>{' '}
                {detail.content}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
