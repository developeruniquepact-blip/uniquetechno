import ProgressItems from "@/components/shared/team/ProgressItems";
import getTeamMembers from "@/libs/getTeamMembers";
import Image from "next/image";
import Link from "next/link";

const TeamDetails1 = ({ currentItemSlug }) => {
	const items = getTeamMembers();
	const currentId = currentItemSlug;
	const currentItem = items?.find(({ slug }) => currentId === slug);
	const { name, desig, imgLarge, intro, Exe, years, exp, exp1, exp2, exp3, exp4, exp5, exp6, rexp, rexp1, rexp2, rExe, lan, mail, pho } = currentItem || {};

	return (
		<section className="team-details">
			<div className="container">
				<div className="row justify-content-center">
					{/* <!--  left --> */}
					<div className="col-12 col-md-8 col-lg-5 ">
						<div className="tj-sticky-top">
							<div
								className="team-details__img   hover:shine wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<Image
									src={imgLarge ? imgLarge : "/images/team/team-single.webp"}
									alt="team-member"
									width={645}
									height={796}
									style={{ height: "auto" }}
								/>
							</div>
						</div>
					</div>
					{/* <!-- right --> */}
					<div className="col-12  col-lg-7 ">
						<div className="team-details__content">
							<h2 className="team-details__name text-anim">
								Hello, I am {name ? name : "Esther Howard"}
							</h2>
							<span
								className="team-details__desig wow fadeInUp"
								data-wow-delay="0.1s"
							>
								{desig ? desig : "Co. Founder"}
							</span>
							<p className="wow fadeInUp" data-wow-delay="0.3s">
								{intro}
							</p>
							<div
								className="team-details__contact-info wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<ul>
									<li>
										<span>Email address</span>
										<Link href="mailto:info@technoglobe.ae">
											{mail}
										</Link>
									</li>
									<li>
										<span>Phone number</span>
										<Link href="tel:+971543258585 ">{pho}</Link>
									</li>
								</ul>
							</div>
							<div className="tj-socials wow fadeInUp" data-wow-delay="0.7s">
								<ul>
									<li>
										<Link href="https://www.facebook.com">
											<i className="fa-brands fa-facebook-f"></i>
										</Link>
									</li>
									<li>
										<Link href="https://www.instagram.com">
											<i className="fa-brands fa-instagram"></i>
										</Link>
									</li>
									<li>
										<Link href="https://x.com">
											<i className="fa-brands fa-twitter"></i>
										</Link>
									</li>
									<li>
										<Link href="https://www.linkedin.com">
											<i className="fa-brands fa-linkedin-in"></i>
										</Link>
									</li>
								</ul>
							</div>
							<div className="team-details__experience">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

									{/* Left Column */}
									<div className="row">
										<div className="col-md-6">
											<h4 className="team-details__subtitle text-anim">{exp}</h4>
											<p className="wow fadeInUp" data-wow-delay="0.1s">{exp1}</p>
											<p className="wow fadeInUp" data-wow-delay="0.1s">{exp2}</p>
											<p className="wow fadeInUp" data-wow-delay="0.1s">{exp3}</p>
											<p className="wow fadeInUp" data-wow-delay="0.1s">{exp4}</p>
											<p className="wow fadeInUp" data-wow-delay="0.1s">{exp5}</p>
											<p className="wow fadeInUp" data-wow-delay="0.1s">{exp6}</p>

											<h4 className="team-details__subtitle text-anim">{Exe}</h4>
											<p className="wow fadeInUp" data-wow-delay="0.1s">{years}</p>
										</div>

										{/* Right Column */}
										<div className="col-md-6">
											<h4 className="team-details__subtitle text-anim">{rexp}</h4>
											<p className="wow fadeInUp" data-wow-delay="0.1s">{rexp1}</p>
											<p className="wow fadeInUp" data-wow-delay="0.1s">{rexp2}</p>

											<h4 className="team-details__subtitle text-anim">{rExe}</h4>
											<p className="wow fadeInUp" data-wow-delay="0.1s">{lan}</p>
										</div>
									</div>
								</div>
							</div>

							<ProgressItems currentItemSlug={currentItemSlug} />

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamDetails1;
