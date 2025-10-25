import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
//import Careers1 from "@/components/sections/careers/Careers1";
//import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link"; // Make sure to import Link
export const metadata = {
  title: 'Market Area | Technoglobe IT Training Institute in Sharjah, UAE',
  description: 'Explore Technoglobe’s market area in Sharjah, UAE. Discover our reach, training centers, and the communities we serve in IT education and professional development across the region.',
  keywords: ['Technoglobe market area', 'IT training Sharjah', 'training centers UAE', 'professional development UAE', 'education outreach', 'Technoglobe institute', 'IT education Sharjah']
}


export default function Careers() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Market-area"} text={"Market-area"} />

				<div style={{ textAlign: "center", padding: "40px 0" }}>
					<h2>
						<Link href="/sharjah" style={{ color: "black", textDecoration: "none" }}>
							Sharjah
						</Link>
					</h2>
				</div>
			</main>

			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
