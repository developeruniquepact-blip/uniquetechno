import { Metadata } from 'next'

import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Contact5 from "@/components/sections/contacts/Contact5";
import ContactTop from "@/components/sections/contacts/ContactTop";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Contact Us | Technoglobe IT Training Institute in Sharjah, UAE',
  description: 'Get in touch with Technoglobe, a leading IT training and development institute in Sharjah, UAE. Contact us for course inquiries, franchise opportunities, or career guidance.',
  keywords: ['contact Technoglobe', 'IT training Sharjah', 'IT institute UAE', 'training inquiries', 'franchise contact', 'education institute Sharjah', 'Technoglobe UAE']
}

export default function Contact() {
	return (
		<div>
			<Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
			<main>
				<HeroInner title={"Contact"} text={"Contact"} />
				<ContactTop />
				<Contact5 />
				<Cta1 />
			</main>
			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
