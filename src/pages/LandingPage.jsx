import CTAPenutup from "../components/CTAPenutup";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import KatalogTemplate from "../components/KatalogTemplate";
import PilihanLayanan from "../components/PilihanLayanan";
import Portofolio from "../components/Portofolio";
import ProsesKerja from "../components/ProsesKerja";
import TimKami from "../components/TimKami";

export default function LandingPage() {
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