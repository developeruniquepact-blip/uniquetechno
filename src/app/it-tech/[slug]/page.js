import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getItServices from "@/libs/getItServices";
import { notFound } from "next/navigation";

export default async function ServiceDetails({ params }) {
  const { slug } = params;
  const items = await getItServices();

  // Debug output
  console.log("slug from params:", slug);
  console.log("items:", items.map(item => item.slug));

  // More robust slug matching
  const currentService = items.find(
    (item) => {
      // Remove leading/trailing slashes and lowercase both sides
      const itemSlug = String(item.slug).replace(/^\/|\/$/g, "").toLowerCase();
      const paramSlug = String(slug).replace(/^\/|\/$/g, "").toLowerCase();
      return itemSlug === paramSlug;
    }
  );

  if (!currentService) {
    console.error("No matching service found for slug:", slug);
    notFound();
  }

  return (
    
    <div>
     <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
      <main>
        <ServiceDetailsMain currentService={currentService} />
        <Cta1 />
      </main>
      <Footer5 footerType={"inner"} />
      <ClientWrapper />
      <TjMagicCursor />
    </div>
  );
}

export async function generateStaticParams() {
  const items = await getItServices();
  return items.map((item) => ({
    slug: String(item.slug).replace(/^\/|\/$/g, ""), // remove leading/trailing slash
  }));
}