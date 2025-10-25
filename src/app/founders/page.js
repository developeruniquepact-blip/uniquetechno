import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import Team1 from "@/components/sections/teams/Team1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Founders | Technoglobe IT Training Institute in Sharjah, UAE',
  description: 'Meet the founders of Technoglobe, the visionaries behind one of the leading IT training and development institutes in Sharjah, UAE. Learn about their mission, leadership, and dedication to empowering future professionals.',
  keywords: ['Technoglobe founders', 'institute leadership', 'IT training Sharjah', 'education leaders UAE', 'Technoglobe team', 'founder vision', 'IT institute UAE']
}

export default function Team() {
	return (
		<div>
			<Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
			<main>
				<HeroInner title={"Founders"} text={"Founders"} />
				<Team1 type={2} noNeedAnimation={true} />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
