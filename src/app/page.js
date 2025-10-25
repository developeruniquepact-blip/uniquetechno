
import Footer6 from "@/components/layout/footer/Footer6";
import Header from "@/components/layout/header/Header";
import About5 from "@/components/sections/About/About5";
import Blogs6 from "@/components/sections/blogs/Blogs6";
import Cta4 from "@/components/sections/cta/Cta4"; 
//import Features4 from "@/components/sections/features/Features4";
import About6 from "@/components/sections/About/About6";
import Cta5 from "@/components/sections/cta/Cta5";
import Video from "@/components/sections/teamvedio/Teams";
import Hero6 from "@/components/sections/heros/Hero6";
//import Portfolios5 from "@/components/sections/portfolios/Portfolios5";
//import PricingPlan2 from "@/components/sections/pricing-plan/PricingPlan2";
import Process from "@/components/sections/process/Process";

import Services5 from "@/components/sections/services/Services5";
//import Team3 from "@/components/sections/teams/Team3";
import Testimonials7 from "@/components/sections/testimonials/Testimonials7";
import FeatureMarquee from "@/components/shared/marquee/FeatureMarquee";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Home5() {
	return (
		<div>
			<Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
			<main>
				<Hero6 />
				
				<About5 />
				<About6 />
				<Services5 />
				<FeatureMarquee />
				<Process />
				<Video/>
				{/* <Team3 /> */}
				<Testimonials7 />
				<Blogs6 />
				<Cta5 />
				<Cta4 />
			</main>
			<Footer6 />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}

