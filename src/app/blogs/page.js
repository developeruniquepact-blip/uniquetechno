import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import BlogMain from "@/components/layout/main/BlogMain";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Blogs | Technoglobe IT Training & Development Institute in Sharjah, UAE',
  description: 'Explore the latest blogs from Technoglobe, Sharjah’s leading IT training institute in the UAE. Get insights on technology trends, career tips, and professional development in the IT industry.',
  keywords: ['Technoglobe blogs', 'IT training UAE', 'technology trends', 'career development', 'IT institute Sharjah', 'tech education UAE', 'professional training']
}


export default function Blogs() {
	return (
		<div>
			<Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
			<main>
				<BlogMain />
				<Cta1 />
			</main>

			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
