import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import Team2 from "@/components/sections/teams/Team2";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Regional Office UAE | Technoglobe IT Training Institute in UAE',
  description: 'Visit Technoglobe’s regional office in the UAE. Learn about our locations, contact details, and how we support students and professionals with IT training and career development across the region.',
  keywords: ['Technoglobe regional office', 'IT training UAE', 'office locations Sharjah', 'contact Technoglobe', 'training institute UAE', 'career support', 'Technoglobe UAE']
}

export default function Team() {
	return (
		<div>
			<Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
			<main>
				<HeroInner title={"Regional Office"} text={"Regional Office"} />
				<Team2 type={2} noNeedAnimation={true} />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
