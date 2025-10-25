import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import BskPrimary from "@/components/sections/services/BskPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Business and Soft Skills Courses | Technoglobe Training Institute in Sharjah, UAE',
  description: 'Enhance your career with Technoglobe’s Business and Soft Skills courses in Sharjah, UAE. Develop leadership, communication, and professional skills to succeed in today’s competitive workplace.',
  keywords: ['business courses Sharjah', 'soft skills training UAE', 'professional development', 'leadership training', 'communication skills', 'Technoglobe institute', 'career growth UAE']
}

export default function Services() {
    return (
        <div>
          <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
            <main>
                <HeroInner title={"Business & Soft Skills"} text={"Business & Soft Skills"} />
                <BskPrimary />
                <Cta1 />
            </main>
            <Footer footerType={"inner"} />
            <ClientWrapper />
            <TjMagicCursor />
        </div>
    );
}
