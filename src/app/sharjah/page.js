import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import SharjahPrimary from "@/components/sections/services/SharjahPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Technoglobe IT Training Institute in Sharjah, UAE',
  description: 'Discover Technoglobe’s IT training programs in Sharjah, UAE. We offer career-focused courses in IT, business, soft skills, and language training to empower students and professionals.',
  keywords: ['Technoglobe Sharjah', 'IT training Sharjah', 'training institute UAE', 'business courses Sharjah', 'soft skills training UAE', 'language courses Sharjah', 'career development UAE']
}

export default function Services() {
    return (
        <div>
            <Header isHeaderTop={true} />
            <Header isStickyHeader={true} />
            <main>
                <HeroInner title={"Sharjah"} text={"Sharjah"} />
                
                <SharjahPrimary />
                <Cta1 />
            </main>
            <Footer footerType={"inner"} />
            <ClientWrapper />
            <TjMagicCursor />
        </div>
    );
}
