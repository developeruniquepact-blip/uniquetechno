import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesDetailsPrimary from "@/components/sections/services/ServicesDetailsPrimary";
// import getALlServices from "@/libs/getALlServices";
import getBskServices from "@/libs/getBskServices";

const ServiceDetailsMain = ({ currentService }) => {
    const items = getBskServices();
    const currentItem = currentService;

    const { title } = currentItem || {};
    return (
        <div>
            <HeroInner
                title={title ? title : "Courses Details"}
                text={title ? title : "Courses Details"}
                breadcrums={[{ name: "Sharjah", path: "/sharjah" }]}
            />
            <ServicesDetailsPrimary option={{ currentItem, items, currentId: currentItem?.id }} />
        </div>
    );
};

export default ServiceDetailsMain;



