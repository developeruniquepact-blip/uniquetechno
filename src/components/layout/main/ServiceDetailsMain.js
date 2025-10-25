import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesDetailsPrimary from "@/components/sections/services/ServicesDetailsPrimary";
import getBskServices from "@/libs/getBskServices";


const ServiceDetailsMain = ({ currentService, breadcrumbType = "courses" }) => {
  const items = getBskServices();
  const currentItem = currentService;
  const { title } = currentItem || {};


  const heroTitle = title ? title : "Service Details";
  const heroText = title ? title : "Service Details";


  const breadcrums =
    breadcrumbType === "sharjah"
      ? [{ name: "Sharjah", path: "/sharjah" }]
      : [{ name: "Our Courses", path: "/our-courses" }];

  return (
    <div>
      <HeroInner
        title={heroTitle}
        text={heroText}
        breadcrums={breadcrums}
      />

      <ServicesDetailsPrimary
        option={{ currentItem, items, currentId: currentItem?.id }}
      />
    </div>
  );
};

export default ServiceDetailsMain;
