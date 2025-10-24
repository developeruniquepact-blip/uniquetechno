import Link from "next/link";

const ContactTop = () => {
	return (
		<section className="tj-contact-area section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								CONTACT US
							</span>
							<h2 className="sec-title text-anim">Our Contact Information</h2>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<div className="contact-icon">
								<Link href="mailto:info@technoglobe.ae"><i className="tji-email"></i></Link>
							</div>
							<h3 className="contact-title">Make A Quote</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:info@technoglobe.ae">info@technoglobe.ae</Link>
								</li>
								
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<div className="contact-icon">
								<Link href="tel:+971543258090"><i className="tji-phone"></i></Link>
							</div>
							<h3 className="contact-title">Call us 24/7</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:+971543258090">(+971)5432 58090</Link>
								</li>
								
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<div className="contact-icon">
								<i className="tji-location"></i>
							</div>
							
							<h3 className="contact-title">Work Station</h3>
							<p>1002 -AI Taawun St -Al khan -Sharjah -UAE</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.7s"
						>
							<div className="contact-icon">
									<Link href="https://api.whatsapp.com/send?phone=+971543258090&text=Hi20%a20%Technoglobe" target="_blank">
								<i className="tji-chat"></i></Link>
							</div>
							<h3 className="contact-title">Live chat</h3>
							<ul className="contact-list">
								<li>
									<Link href="https://api.whatsapp.com/send?phone=+971543258090&text=Hi20%a20%Technoglobe" target="_blank">
										(+971)5432 58090
									</Link>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactTop;
