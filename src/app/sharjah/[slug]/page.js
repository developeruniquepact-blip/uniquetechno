import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getSharjahServices from "@/libs/getSharjahServices";
import { notFound } from "next/navigation";

export default async function ServiceDetails({ params }) {
  const { slug } = params;
  const items = await getSharjahServices();

  const currentService = items.find((item) => {
    const itemSlug = String(item.slug).replace(/^\/|\/$/g, "").toLowerCase();
    const paramSlug = String(slug).replace(/^\/|\/$/g, "").toLowerCase();
    return itemSlug === paramSlug;
  });

  if (!currentService) notFound();

  return (
    <div>
      <Header isHeaderTop={true} />
      <Header isStickyHeader={true} />
      <main>
        {/* 👇 Add prop to show Sharjah breadcrumb */}
        <ServiceDetailsMain
          currentService={currentService}
          breadcrumbType="sharjah"
        />
        <Cta1 />
      </main>
      <Footer5 footerType={"inner"} />
      <ClientWrapper />
      <TjMagicCursor />
    </div>
  );
}

export async function generateStaticParams() {
  const items = await getSharjahServices();
  return items.map((item) => ({
    slug: String(item.slug).replace(/^\/|\/$/g, ""),
  }));
}
