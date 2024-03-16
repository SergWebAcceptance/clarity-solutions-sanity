import "@/public/scss/business.scss";
import BusinessHero from "@/src/components/business-accounts/BusinessHero";
import BusinessLast from "@/src/components/business-accounts/BusinessLast";
import BusinessSecond from "@/src/components/business-accounts/BusinessSecond";
import BusinessThird from "@/src/components/business-accounts/BusinessThird";


export const metadata = {
  title: "Clarity Solutions Use Cases ",
  description: "Explore the versatile use cases of debit cards from Clarity Solutions. Streamline finance management and control, assign team budgets, and flexibly set card limits and terms.",
  openGraph: {
    title: "Clarity Solutions Use Cases ",
    description: "Explore the versatile use cases of debit cards from Clarity Solutions. Streamline finance management and control, assign team budgets, and flexibly set card limits and terms.",
    images: "https://clarity-solutions.io/images/meta.jpg",
  },
};

export default function Business() {
  return (
    <>
      <BusinessHero/>
      <BusinessThird/>
      <BusinessSecond/>
      <BusinessLast/>
    </>
  );
}
