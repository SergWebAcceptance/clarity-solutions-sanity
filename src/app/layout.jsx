import { Montserrat } from "next/font/google";
import "@/public/scss/base.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Preloader from "../components/Preloader";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Flexible Payment Solutions | Clarity Solutions",
    template: "%s",
  },
  description: "Manage your money securely and unlock financial freedom with Clarity Solutions. Explore our versatile debit card options and seamless payment solutions.",
  openGraph: {
    title: {
      default: "Flexible Payment Solutions | Clarity Solutions",
      template: "%s",
    },
    description: 'Manage your money securely and unlock financial freedom with Clarity Solutions. Explore our versatile debit card options and seamless payment solutions.',
    images: "https://clarity-solutions.io/images/meta.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
