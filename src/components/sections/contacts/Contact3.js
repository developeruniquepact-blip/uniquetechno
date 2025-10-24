import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";
import Link from "next/link";

const Contact3 = () => {
	return (
		<section className="contact-team-details">
			<div className="container">
				<div className="contact-team-details__inner">
					<div className="row">
						{/* <!--  left --> */}
						<div className="col-12 col-lg-5 ">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// CONTACT US
								</span>
								<h2 className="sec-title text-anim">
									Let’s discuss further to get better results
								</h2>
								<p className="desc wow fadeInUp" data-wow-delay="0.3s">
									In a dynamic business environment, success comes from adaptability, innovation, and strong partnerships — values we bring to every franchise we support.
								</p>
								<h6
									className="contact-team-details__message wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<Link href="mailto:info@technoglobe.ae">
										{" "}
										<i className="tji-chat"></i>info@technoglobe.ae
									</Link>
								</h6>
							</div>
						</div>
						{/* <!-- right --> */}
						<div className="col-12 col-lg-7 ">
							<form
								action="#0"
								className="contact-team-details__form wow fadeInUp"
								data-wow-delay="0.7s"
							>
								<div className="tj-input__wrapper">
									<input className="tj-input" placeholder="Full name*" />
								</div>
								<div className="tj-input__wrapper">
									<input className="tj-input" placeholder="Email address*" />
								</div>
								<div className="tj-input__wrapper">
									<input className="tj-input" placeholder="Phone number*" />
								</div>
								<div className="tj-input__wrapper ">
									<input className="tj-input" placeholder="City*" />
								</div>
								<div className="tj-input__wrapper tj-input__wrapper--message">
									<FormSelect
										id={"contact"}
										className="nice-select tj-nice-select tj-input"
										defaultValue={"Chose a option"}
										items={[
											{ value: "#", name: "Chose a option" },
											{ value: "Unique Franchiese", name: "Unique Franchiese" },
											{ value: "Master Franchiese", name: "Master Franchiese" }
										]}
									/>
								</div>
								<div className="tj-input__wrapper tj-input__wrapper--message">
									<textarea
										className="tj-input"
										placeholder="Type message"
										rows="6"
									/>
								</div>
								<div>
									<ButtonPrimary text={"Send message"} type={"submit"} />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
