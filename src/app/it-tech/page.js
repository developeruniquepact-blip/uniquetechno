import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ItTechPrimary from "@/components/sections/services/ItTechPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'IT & Tech Courses | Technoglobe Training Institute in Sharjah, UAE',
  description: 'Advance your career with Technoglobe’s IT & Tech courses in Sharjah, UAE. Learn programming, networking, cybersecurity, and the latest technology skills from industry experts.',
  keywords: ['IT courses Sharjah', 'Tech training UAE', 'programming courses', 'networking courses', 'cybersecurity training', 'Technoglobe IT institute', 'career development UAE']
}

export default function Services() {
    return (
        <div>
            <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
            <main>
                <HeroInner title={"IT & Tech"} text={"IT & Tech"} />
                <ItTechPrimary />
                <Cta1 />
            </main>
            <Footer footerType={"inner"} />
            <ClientWrapper />
            <TjMagicCursor />
        </div>
    );
}
