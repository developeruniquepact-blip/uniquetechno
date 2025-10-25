import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import About11 from "@/components/sections/About/About11";
import Brands1 from "@/components/sections/brands/Brands1";
import Cta1 from "@/components/sections/cta/Cta1";
import Features from "@/components/sections/features/Features";
import Funfact3 from "@/components/sections/funfacts/Funfact3";
import HeroInner from "@/components/sections/heros/HeroInner";
import Skills1 from "@/components/sections/Skills/Skills1";
import Team8 from "@/components/sections/teams/Team8";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'About Us | Technoglobe IT Training Institute in Sharjah, UAE',
  description: 'Learn about Technoglobe, a leading IT training and development institute based in Sharjah, UAE. We empower students and professionals with advanced technology skills and career-focused training programs.',
  keywords: ['About Technoglobe', 'IT training institute in Sharjah', 'IT training UAE', 'technology institute Sharjah', 'IT courses UAE', 'computer training', 'career development']
}

export default function About() {
	return (
		<div>
			<Header headerType={5} isHeaderTop={true} />
            <Header isStickyHeader={true} headerType={5} />
			<main>
				<HeroInner title={"About"} text={"About"} />
				<About11 />
				<Features type={2} />
				<Funfact3 />
				<Team8 />
				<Skills1 />
				<Testimonials2 type={3} />
				<Brands1 />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
