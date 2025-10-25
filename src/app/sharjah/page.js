import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import SharjahPrimary from "@/components/sections/services/SharjahPrimary";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
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
