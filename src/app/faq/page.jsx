import "@/public/scss/faq.scss";
import FaqHero from "@/src/components/faq/FaqHero";
import FaqWrap from "@/src/components/faq/FaqWrap";

export const metadata = {
  title: "Debit Cards FAQ | Clarity Solutions",
  description: "Find essential information about prepaid cards, including usage, eligibility, fees, and troubleshooting. Get answers to common questions to enhance your payment experience with Clairy Solutions.",
  openGraph: {
    title: "Debit Cards FAQ | Clarity Solutions",
    description: "Find essential information about prepaid cards, including usage, eligibility, fees, and troubleshooting. Get answers to common questions to enhance your payment experience with Clairy Solutions.",
    images: "https://clarity-solutions.io/images/meta.jpg",
  },
};


export default async function Faq() {
  return (
    <>
      <FaqHero/>
      <FaqWrap/>
    </>
  );
}
