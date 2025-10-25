import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const About9 = () => {
	return (
		<section className="tj-about-section-five h9-about">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper-four h9-about-wrapper">
							<div
								className="about-images-group-three hover:shine wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<img src="/images/franchiese/was.jpg" width="500px" height="700px" alt="Images" />
							</div>
							<div className="about-content-five h9-about-content">
								<div className="sec-heading h9-section-heading style-4">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
>
										[ IT SOLUTION ]
									</span>
									<h2 className="sec-title text-anim">
										About Technoglobe
									</h2>
								</div>
								<div className="desc wow fadeInUp" data-wow-delay="0.4s">
									<p>
										Founded in 2001, Technoglobe is a leading name in IT and Professional Education with a mission to make individuals career-ready in the fast-evolving global tech landscape.
									</p>
								</div>
								<div className="desc wow fadeInUp" data-wow-delay="0.4s">
									<p>
											Technoglobe stands for trust, quality, and consistent results—empowering students and professionals across the world.
										
									</p>
</div>

								<div className="btn-area wow fadeInUp" data-wow-delay="0.6s">
									<ButtonPrimary text="Know more us" href="/registration" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="h9-about-bottom">
							<div className="h9-about-bottom-left ">
								<div className="h9-counter-wrapper">
									<div className="h9-counter-item">
										<FunfactSingle currentValue={25} symbol={"+"} />

										<span className="sub-title">
											years of training excellence
										</span>
									</div>
									<div className="h9-counter-item">
										<FunfactSingle currentValue={100} isSup={"+"} />
										<span className="sub-title">
centers across India, UK, Canada & UAE
										</span>
									</div>
									<div className="h9-counter-item">
										<FunfactSingle currentValue={2} symbol={"M+"} />
										<span className="sub-title">
											candidates trained and placed worldwide
										</span>
									</div>
									<div className="h9-counter-item">
										<FunfactSingle currentValue={30} symbol={"+"} />
										<span className="sub-title">
											national & international awards
										</span>
									</div>
									<div className="h9-counter-item">
										<FunfactSingle currentValue={500} symbol={"+"} />
										<span className="sub-title">
corporate placement partnerships
										</span>
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

export default About9;