// ...existing code...
import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import PortfolioDetailsMain from "@/components/layout/main/PortfolioDetailsMain";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getPortfolio from "@/libs/getPortfolio";
import { notFound } from "next/navigation";

const items = getPortfolio();

export default function PortfolioDetails({ params }) {
    const { slug } = params;

    const currentItem = items?.find((item) => item.slug === slug);
    if (!currentItem) {
        notFound();
    }

    return (
        <div>
            <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
            <main>
                {/* pass the numeric id to existing components if they expect an id */}
                <PortfolioDetailsMain currentItemId={currentItem.id} />
                <Cta1 />
            </main>
            <Footer footerType={"inner"} />
            <ClientWrapper />
            <TjMagicCursor />
        </div>
    );
}

export function generateStaticParams() {
    return items?.map(({ slug }) => ({ slug: slug.toString() }));
}
// ...existing code...