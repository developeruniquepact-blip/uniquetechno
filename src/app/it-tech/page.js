import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ItTechPrimary from "@/components/sections/services/ItTechPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
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
