import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
//import Careers1 from "@/components/sections/careers/Careers1";
//import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Link from "next/link"; // Make sure to import Link

export default function Careers() {
	return (
		<div>
			<Header isHeaderTop={true} />
			<Header isStickyHeader={true} />
			<main>
				<HeroInner title={"Market-area"} text={"Market-area"} />

				<div style={{ textAlign: "center", padding: "40px 0" }}>
					<h2>
						<Link href="/sharjah" style={{ color: "black", textDecoration: "none" }}>
							Sharjah
						</Link>
					</h2>
				</div>
			</main>

			<Footer footerType={"inner"} />
			<ClientWrapper />
			<TjMagicCursor />
		</div>
	);
}
