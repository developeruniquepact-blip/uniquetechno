"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";

const Hero5 = () => {
	return (
		<section className="tj-hero-section-four">
			<div className="container">
				<div className="row">
					<div className="hero-wrapper-four">
						<div className="hero-content-four">
							<span
								className="hero-subtitle  wow fadeInRight"
								data-wow-delay="0s"
							>
								NUMBER <span>#1</span> LEARNING INSTITUTE
							</span>
							<h3 className="hero-title text-anim">
								Become the Country <span>Master</span> Franchise for UAE
							</h3>
							<h5 className="hero-title text-anim">
								Own Exclusive Rights. Build 40+ Centers. Earn up to AED 75,000/month.
							</h5>
							<div className="desc wow fadeInUp" data-wow-delay="0.1s">
								<p>
									Technoglobe invites ambitious entrepreneurs to become part of a global education revolution.
								</p>
								<p>With 25+ years of excellence and a presence across India, UK, Canada, and UAE, Technoglobe is now offering exclusive Country Master Franchise rights for the UAE — an opportunity to earn from new center openings, royalties, and Study Abroad verticals.</p>
								<p>Recognized by Oxford University for its Best Franchise Model, Technoglobe combines innovation, credibility, and profitability into one powerful opportunity.</p>
							</div>
							<div className="wow fadeInUp" data-wow-delay="0.3s">
								<ButtonPrimary text={"Free consultation"} url={"/contact"} />
							</div>
						</div>
						<div className="hero-images-box-four">
							<div className="hero-images wow fadeInUp" data-wow-delay="0.5s">
								<Image
									src="/images/franchiese/herri.jpg"
alt="Images"
									width={531}
									height={736}
									style={{ height: "auto" }}
								/>
							</div>
						</div>
						<div className="hero-shapes-1 wow fadeInDown" data-wow-delay="0.6s">
							<img src="/images/shapes/h5-hero-shape-1.png" alt="Shapes" />
						</div>
					</div>
				</div>
			</div>
			<div className="hero-shapes-2 wow fadeInLeft" data-wow-delay="1s">
				<img src="/images/shapes/h5-hero-shape-2.png" alt="Shapes" />
			</div>
		</section>
	);
};

export default Hero5;
