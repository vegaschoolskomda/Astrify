import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PilihanLayanan from './components/PilihanLayanan'
import KatalogTemplate from './components/KatalogTemplate'
import Portofolio from './components/Portofolio'
import ProsesKerja from './components/ProsesKerja'
import TimKami from './components/TimKami'
import FAQ from './components/FAQ'
import CTAPenutup from './components/CTAPenutup'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function LandingPage() {
  return (
    <>
      <Hero />
      <PilihanLayanan />
      <KatalogTemplate />
      <Portofolio />
      <ProsesKerja />
      <TimKami />
      <FAQ />
      <CTAPenutup />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
