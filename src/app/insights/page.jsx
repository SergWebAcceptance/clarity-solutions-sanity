import "@/public/scss/insights.scss";
import InsightsHero from "@/src/components/insights/InsightsHero";
import InsightsSecond from "@/src/components/insights/InsightsSecond";


export const metadata = {
  title: "Debit Card Payment Insights | Clarity Solutions",
  description: "Explore insightful articles covering financial freedom, global transactions, payment security, and emerging trends in digital payments. Stay ahead with Clarity Solutions.",
  openGraph: {
    title: "Debit Card Payment Insights | Clarity Solutions",
    description: "Explore insightful articles covering financial freedom, global transactions, payment security, and emerging trends in digital payments. Stay ahead with Clarity Solutions.",
    images: "https://clarity-solutions.io/images/meta.jpg",
  },
};

export default function Insights() {
  return (
    <>
        <InsightsHero/>
        <InsightsSecond/>
    </>
  );
}
