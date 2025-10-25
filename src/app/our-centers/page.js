import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import PortfoliosPrimary from "@/components/sections/portfolios/PortfoliosPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Our Centers | Technoglobe IT Training Institute in Sharjah, UAE',
  description: 'Discover Technoglobe’s training centers across Sharjah and the UAE. Explore our state-of-the-art facilities, hands-on IT labs, and expert-led classrooms designed for effective learning and skill development.',
  keywords: ['Technoglobe centers', 'IT training Sharjah', 'training facilities UAE', 'IT institute Sharjah', 'hands-on IT labs', 'professional development', 'Technoglobe UAE']
}

export default function Portfolios() {
	return (
		<div>
			<Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
			<main>
				<HeroInner title={"Our Centers"} text={"Our Centers"} />
				<PortfoliosPrimary />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
