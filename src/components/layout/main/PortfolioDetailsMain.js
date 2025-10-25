// ...existing code...
import HeroInner from "@/components/sections/heros/HeroInner";
import PortfolioDetailsPrimary from "@/components/sections/portfolios/PortfolioDetailsPrimary";
import getPortfolio from "@/libs/getPortfolio";
// ...existing code...

const PortfolioDetailsMain = ({ currentItemSlug }) => {
    const items = getPortfolio();
    const currentItem = items.find((it) => it.slug === currentItemSlug);

    // derive prev/next by index (so we don't need to change getPreviousNextItem)
    const index = items.findIndex((it) => it.slug === currentItemSlug);
    const prevItem = index > 0 ? items[index - 1] : null;
    const nextItem = index >= 0 && index < items.length - 1 ? items[index + 1] : null;

    const option = {
        prevSlug: prevItem?.slug,
        nextSlug: nextItem?.slug,
        isPrevItem: !!prevItem,
        isNextItem: !!nextItem,
        currentItem,
    };

    const { title } = currentItem || {};
    return (
        <div>
            <HeroInner
                title={title ? title : "Our Center"}
                text={title ? title : "Our Center"}
                breadcrums={[{ name: "Our Centers", path: "/our-centers" }]}
            />
            <PortfolioDetailsPrimary option={option} />
        </div>
    );
};

export default PortfolioDetailsMain;
// ...existing code...