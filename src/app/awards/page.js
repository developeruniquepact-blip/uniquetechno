// app/awards/page.js

import Home5 from "@/components/awards/AwardsPage"; // move your client component here

export const metadata = {
  title: "Awards | Technoglobe IT Training Institute in Sharjah, UAE",
  description:
    "Explore Technoglobe’s prestigious awards and achievements recognizing excellence, innovation, and commitment to quality IT training in Sharjah, UAE.",
  keywords: [
    "Technoglobe awards",
    "IT training UAE",
    "Sharjah IT institute achievements",
    "best IT academy UAE",
    "Technoglobe recognition",
  ],
};

export default function AwardsPage() {
  return <Home5 />;
}
