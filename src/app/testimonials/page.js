"use client";
import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import HeroInner from "@/components/sections/heros/HeroInner";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TestimonialsCard5 from "@/components/shared/cards/TestimonialsCard5";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import getTestimonials from "@/libs/getTestimonials";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// ... other imports stay the same

const Testimonials7 = () => {
	const testimonials = getTestimonials()?.slice(0, 6);
	const [currentDirection, setCurrentDirection] = useState("vertical");

	useEffect(() => {
		const getDirection = () => {
			setCurrentDirection(window.innerWidth < 768 ? "horizontal" : "vertical");
		};

		getDirection();
		window.addEventListener("resize", getDirection);
		return () => window.removeEventListener("resize", getDirection);
	}, []);

	return (
		<>
			<TjMagicCursor />
			<Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />

			<main>
				<HeroInner title={"Testimonials"} text={"Testimonials "} />

				{/* Testimonials Section */}
				<section className="h8-testimonial">
					<div className="container tj-gap-30">
						<div className="row">
							{/* Left column */}
							<div className="col-12 col-lg-8 col-xl-4">
								<div className="h8-testimonial-section-heading-wrapper">
									<div className="sec-heading h8-section-heading h8-testimonial-section-heading style-4">
										<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
											FEEDBACKS
										</span>
										<h2 className="sec-title text-anim">
											What Our Learners Have To Say
										</h2>
									</div>
									<div className="h8-testimonial-fanfact">
										<div className="counter-item">
											<FunfactSingle currentValue={99} symbol="%" />
											<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
												Happy Students
											</span>
										</div>
									</div>
									<div className="btn-area wow fadeInUp" data-wow-delay="0.3s">
										<ButtonPrimary text="See more" url="/testimonials" />
									</div>
								</div>
							</div>

							{/* Up direction slider */}
							<div className="col-12 col-md-6 col-xl-4">
								<div className="h8-testimonial-wrapper">
									<Swiper
										key={currentDirection + "-up"}
										slidesPerView="auto"
										spaceBetween={24}
										centeredSlides
										loop
										allowTouchMove={false}
										speed={8000}
										direction={currentDirection}
										autoplay={{
											delay: 0,
											disableOnInteraction: false,
											reverseDirection: false,
										}}
										breakpoints={{
											768: { spaceBetween: 30 },
										}}
										modules={[Autoplay]}
										className="h8-testimonial-slider h8-testimonial-slider-up"
									>
										{testimonials.map((testimonial, idx) => (
											<SwiperSlide key={idx}>
												<TestimonialsCard5 testimonial={testimonial} type={2} />
											</SwiperSlide>
										))}
									</Swiper>
								</div>
							</div>

							{/* Down direction slider */}
							<div className="col-12 col-md-6 col-xl-4">
								<div className="h8-testimonial-wrapper">
									<Swiper
										key={currentDirection + "-down"}
										slidesPerView="auto"
										spaceBetween={24}
										centeredSlides
										loop
										allowTouchMove={false}
										speed={8000}
										direction={currentDirection}
										autoplay={{
											delay: 0,
											disableOnInteraction: false,
											reverseDirection: true,
										}}
										breakpoints={{
											768: { spaceBetween: 30 },
										}}
										modules={[Autoplay]}
										className="h8-testimonial-slider h8-testimonial-slider-down"
									>
										{testimonials.map((testimonial, idx) => (
											<SwiperSlide key={idx}>
												<TestimonialsCard5 testimonial={testimonial} type={2} />
											</SwiperSlide>
										))}
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</section>  


            
				{/* 👇 Local Video Testimonials Section */}
				<section className="testimonial-videos-section py-5">
					<div className="container">
						<div className="row mb-4">
							<div className="col-12 text-center">
								<h2 className="sec-title">Hear It Straight from Our Students</h2>
								<p className="sub-title">Watch what our students say</p>
							</div>
						</div>

						<div className="row g-4">
							<div className="col-12 col-md-4">
								<div className="video-wrapper">
									<video
										src="/images/video/man.mp4"
										controls
										poster="/images/man-thumb.jpg"
										style={{ width: "100%", borderRadius: "8px" }}
									></video>
								</div>
							</div>

							<div className="col-12 col-md-4">
								<div className="video-wrapper">
									<video
										src="/images/video/man1.mp4"
										controls
										poster="/images/man1-thumb.jpg"
										style={{ width: "100%", borderRadius: "8px" }}
									></video>
								</div>
							</div>
                            

							<div className="col-12 col-md-4">
								<div className="video-wrapper">
									<video
										src="/images/video/man2.mp4"
										controls
										poster="/images/man2-thumb.jpg"
										style={{ width: "100%", borderRadius: "8px" }}
									></video>
								</div>
							</div>


							<div className="col-12 col-md-4">
								<div className="video-wrapper">
									<video
										src="/images/video/man4.mp4"
										controls
										poster="/images/man-thumb.jpg"
										style={{ width: "100%", borderRadius: "8px" }}
									></video>
								</div>
							</div>
                            <div className="col-12 col-md-4">
								<div className="video-wrapper">
									<video
										src="/images/video/man5.mp4"
										controls
										poster="/images/man-thumb.jpg"
										style={{ width: "100%", borderRadius: "8px" }}
									></video>
								</div>
							</div>
                            <div className="col-12 col-md-4">
								<div className="video-wrapper">
									<video
										src="/images/video/man6.mp4"
										controls
										poster="/images/man-thumb.jpg"
										style={{ width: "100%", borderRadius: "8px" }}
									></video>
								</div>
							</div>

						</div>
					</div>
				</section>
			</main>

			<ClientWrapper />
			<Footer5 />
		</>
	);
};

export default Testimonials7;
