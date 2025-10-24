import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About11 = () => {
	return (
		<section className="tj-about-info section-space">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-lg-6 col-md-12">
						<div className="pricing-left-content">
							<div className="sec-heading mb-0">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									About our company
								</span>
								<h2 className="sec-title text-anim">
ADVANC TECHNOLOGY TRAINING L.L.C							</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
							<p>
								ADVANC TECHNOLOGY TRAINING L.L.C is a pioneering training and development institute in the UAE, proudly positioned as the Master Franchisee of Technoglobe UAE. Our mission is to bridge the gap between education and employability by delivering globally recognized, industry-focused technical and professional training programs.
							</p>
							<p>
								With a strong legacy of quality and innovation, we are committed to empowering students, professionals, and organizations with cutting-edge skills in IT, management, digital marketing, AI, data science, networking, and more. As part of the trusted Technoglobe network—renowned for its 22+ years of excellence in skill development—we bring international standards and certifications to the UAE’s growing knowledge economy.
							</p>
						</div>
						<div className="about-btn wow fadeInUp" data-wow-delay="0.5s">
							<ButtonPrimary text={"Learn more"} url={"/contact"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About11;
