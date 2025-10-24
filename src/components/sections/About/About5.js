import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Link from "next/link";
const About5 = () => {
	return (
		<section className="tj-about-section-five section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper-four">
							<div className="about-images-group-three w-full h-[400px] relative overflow-hidden">

								<img src="/images/about/hero1.webp" alt="Images" />
								<div className="about-circle">
									<div className="circle-wrap">
										<img
											className="rotate-image"
											src="/images/shapes/h5-about-circle.png"
											alt="image"
										/>
										<span className="logo-icon">
											<img src="/images/fav1.png" alt="" />
										</span>
									</div>
								</div>
								<span className="establish-text">
									<span>Reach</span> 20M
								</span>
							</div>
							<div className="about-content-five">
								<div className="sec-heading style-4">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										About Institute
									</span>
									<h2 className="sec-title text-anim">
										About Technoglobe UAE
									</h2>
								</div>
							<div className="desc wow fadeInUp" data-wow-delay="0.7s">
  <p>
    Technoglobe UAE is a collaborative initiative between Technoglobe India and Advanc Technologies LLC, created to provide industry-relevant, skill-based training in the UAE.
  </p>

  <p>
    Technoglobe India, with 20+ years of experience, is a trusted name in IT and professional education. To bring this legacy to the UAE, it partnered with Advanc Technologies LLC — now the Master Franchisee of Technoglobe UAE.
  </p>

  <p>
    This partnership is built on mutual trust, complementary strengths, and a shared goal: empowering individuals with practical, job-ready skills. While Technoglobe brings academic depth and certified programs, Advanc Technologies leads local operations and outreach.
  </p>

  <p>
    Leadership includes Sajjad Aziz and Afshan Aziz (Directors of Advanc Technologies LLC), working closely with Mr. Shiraz Khan, Ms. Cherry, and Mrs. Afsha Khan — the founding team of Technoglobe India.
  </p>

  <p>
    Together, we aim to build more than just a training center — a platform for career transformation, accessible to learners at every stage of life.
  </p>

  <p>
    Recently, Technoglobe UAE launched its second center in Al Nahda 2, Dubai — a new milestone that extends our reach beyond Sharjah, offering the same commitment to skill-building and mentorship across Dubai.
  </p>
</div>

								
								<div
									className="about-button wow fadeInUp"
									data-wow-delay="0.9s"
								>
									<div className="h6-footer-widget-btn">

									
                     <ButtonPrimary
										text={"(+971)543258090"}
										url={"/franchiese"}
										className={"black-btn"}
									/>

</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About5;
