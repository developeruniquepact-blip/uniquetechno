import { Metadata } from 'next'
import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import About9 from "@/components/sections/About/About9";
import HeroInner from "@/components/sections/heros/HeroInner";
import FranchieseDetail from "@/components/sections/Franchiese/Detail";
import RevenueUaeSection from "@/components/sections/Franchiese/RevenueUaeSection"; // ✅ Import here
//import Cta3 from "@/components/sections/cta/Cta3";

import TasaPartnerSuccess from "@/components/sections/Franchiese/TasaPartnerSuccess";
import Contact2 from "@/components/sections/contacts/Contact2";

import Hero5 from "@/components/sections/heros/Hero5";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import MasterCompany from "@/components/sections/Franchiese/MasterCompany";

export const metadata = {
  title: 'Franchise | Learning Institute',
  description: 'Partner with Technoglobe and start your own IT training institute in the UAE.Join a trusted brand in education with complete business and marketing support.',
  keywords: ['Franchise', 'IT training', 'Technoglobe', 'UAE', 'sharjah', 'training institute']
}

export default function Home9() {
  return (
    <div>
      <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
      <main>
                <HeroInner title={"Franchiese"} text={"Franchiese"} />
        
        <Hero5 />
        <About9 />
        <FranchieseDetail />

        {/* ✅ Your custom section here */}
       <div style={{ marginBottom: "-100px" }}>
  <RevenueUaeSection />
  </div>


  <div style={{ marginBottom: "-100px" }}>
        <MasterCompany /> 
        </div>



<TasaPartnerSuccess />
<Contact2 />

       
      </main>
      <Footer5 />
      <ClientWrapper />
      <TjMagicCursor />
    </div>
  );
}
