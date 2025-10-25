"use client";

import TeamCard1 from "@/components/shared/cards/TeamCard1";
import getRegionalMembers from "@/libs/getRegionalMembers";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Team8 = () => {
	const teamMembers = getRegionalMembers()?.slice(0, 5);

	return (
		<section className="tj-team-area section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									Meet our team
								</span>
								<h2 className="sec-title text-anim">Expert team members</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="wow fadeInUp" data-wow-delay="0.3s">
					{" "}
					<Swiper
						slidesPerView={1}
						spaceBetween={24}
						loop={true}
						speed={1500}
						autoplay={{
							delay: 5000,
						}}
						pagination={{
							el: ".service-pagination",
							clickable: true,
						}}
						breakpoints={{
							460: {
								slidesPerView: 2,
							},

							992: {
								slidesPerView: 3,
							},
							1024: {
								slidesPerView: 4,
							},
						}}
						modules={[Autoplay, Pagination]}
						className="tj-team-slider"
					>
						{teamMembers?.length
							? teamMembers?.map((teamMember, idx) => (
									<SwiperSlide key={idx}>
										<TeamCard1 teamMember={teamMember} idx={idx} />
									</SwiperSlide>
							  ))
							: ""}
						<div className="swiper_pagination service-pagination"></div>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Team8;
