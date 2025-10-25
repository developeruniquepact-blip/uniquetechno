import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Our Courses | Technoglobe IT Training Institute in Sharjah, UAE',
  description: 'Explore Technoglobe’s wide range of courses in Sharjah, UAE. From IT and technology programs to business, soft skills, and language training, we provide career-focused education for students and professionals.',
  keywords: ['Technoglobe courses', 'IT training Sharjah', 'business courses UAE', 'soft skills training', 'language courses', 'professional development', 'Technoglobe institute UAE']
}

export default function Services() {
	return (
		<div>
			<Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
			<main>
				<HeroInner title={"Our Courses"} text={"Our Courses"} />
				<ServicesPrimary />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
