import { Metadata } from 'next'

import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import LanguagePrimary from "@/components/sections/services/LanguagePrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Language Training Courses | Technoglobe Institute in Sharjah, UAE',
  description: 'Improve your communication and career prospects with Technoglobe’s language training courses in Sharjah, UAE. Learn English, Arabic, and other languages with expert instructors for professional and personal growth.',
  keywords: ['language courses Sharjah', 'English training UAE', 'Arabic classes', 'professional language skills', 'communication courses', 'Technoglobe institute', 'career development UAE']
}

export default function Services() {
    return (
        <div>
            <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
            <main>
                <HeroInner title={"Language Training"} text={"Language Training"} />
                <LanguagePrimary />
                <Cta1 />
            </main>
            <Footer5 footerType={"inner"} />
            <ClientWrapper />
            <TjMagicCursor />
        </div>
    );
}
