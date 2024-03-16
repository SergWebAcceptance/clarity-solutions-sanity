import "@/public/scss/tariffs.scss";
import TariffsHero from "@/src/components/tariffs/TariffsHero";
import TariffsSecond from "@/src/components/tariffs/TariffsSecond";


export const metadata = {
  title: "Debit Cards Tariffs | Clarity Solutions",
  description: "Explore the current tariffs on debit cards and learn what limits and fees are applied. See our cost-effective options for hassle-free financial management.",
  openGraph: {
    title: "Debit Cards Tariffs | Clarity Solutions",
    description: "Explore the current tariffs on debit cards and learn what limits and fees are applied. See our cost-effective options for hassle-free financial management.",
    images: "https://clarity-solutions.io/images/meta.jpg",
  },
};

export default function Tariffs() {
  return (
    <>
    <TariffsHero/>
    <TariffsSecond/>
    </>
  );
}
