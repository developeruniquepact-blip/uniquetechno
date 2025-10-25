import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import KidsPrimary from "@/components/sections/services/KidsPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Kids & Teens Programs | Technoglobe Training Institute in Sharjah, UAE',
  description: 'Enroll your children in Technoglobe’s Kids and Teens programs in Sharjah, UAE. We offer fun and interactive courses in coding, robotics, and digital skills to nurture creativity and future-ready tech skills.',
  keywords: ['Kids programs Sharjah', 'Teens courses UAE', 'coding for kids', 'robotics training', 'digital skills for youth', 'Technoglobe institute', 'STEM education UAE']
}

export default function Services() {
    return (
        <div>
           <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
            <main>
                <HeroInner title={"Kids & Teen Programs"} text={"Kids & Teen Programs"} />
                <KidsPrimary />
                <Cta1 />
            </main>
            <Footer footerType={"inner"} />
            <ClientWrapper />
            <TjMagicCursor />
        </div>
    );
}
