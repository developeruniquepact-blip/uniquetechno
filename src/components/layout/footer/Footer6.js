import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";
import Link from "next/link";

const Footer6 = () => {
	return (
		<footer className="tj-footer-area h5-footer">
			{/* <!-- footer content --> */}
			<div className="h6-footer-top fix">
				<div className="container">
					<div className="row rg-60 g-0">
						<div className="col-xl-6 col-lg-6">
							<div className="footer-widget">
								<div className="h6-footer-widget-top">
									<h2 className="title">
										Let’s <span style={{ color: '#0075FF' }}>connect</span>
										and collaborate
									</h2>
									<div className="h6-footer-widget-btn">
										<ButtonPrimary
											text={"Get started now"}
											url={"/contact"}
											className={"black-btn"}
										/>
									</div>
								</div>
								
								<div className="footer-contact-infos">
									<div className="infos-left">
										<div className="infos-item">
											<span>Head-Office</span>
											<p>36, Gopalpura Bypass, Jaipur, Rajasthan, INDIA</p>
											<Link href="tel:+971543258090">(+91)9829140090</Link><br></br>
										</div>
									</div>
									<div className="infos-right">
										<div className="infos-item">
											<span>Regional- Office</span>
											<p>1002 -AI Taawun St -Al khan -Sharjah -UAE</p>

											<Link href="tel:1009544-7818">(+971)543258090</Link> <br></br>
											<Link href="mailto:info@technoglobe.ae">info@technoglobe.ae</Link>

										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6">
							<div className="footer-widget h6-footer-widget">
								<div className="contact-form-one">
									<h4 className="title">
										Feel free to get in touch or visit our location.
									</h4>
									<form>
										<div className="row">
											<div className="col-sm-6">
												<div className="form-input">
													<input
														type="text"
														id="first"
														name="name"
														placeholder="Full name*"
														required=""
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-input">
													<input
														type="email"
														id="emailOne"
														name="email"
														placeholder="Email address*"
														required=""
													/>
												</div>
											</div>
											<div className="col-sm-12">
												<div className="form-input">
													<input
														type="tel"
														id="tel"
														name="tel"
														placeholder="Phone number*"
														required=""
													/>
												</div>
											</div>

											<div className="col-12">
												<div className="form-input input-textarea">
													<textarea
														id="message"
														name="message"
														placeholder="Type message"
													></textarea>
												</div>
											</div>
											<div className="submit-button">
												<button type="submit" className="tj-submit-btn">
													<span className="btn-text">
														<span>Submit message</span>
													</span>
													<span className="btn-icon">
														<i className="tji-angle-right"></i>
														<i className="tji-angle-right"></i>
													</span>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- footer logo & menu --> */}
			<div className="footer-social" style={{ paddingBottom: "40px;"}}>
				<div className="container">
					<div className="row rg-30 g-0 align-items-center">
						<div className="col-xxl-6 col-xl-5 col-lg-3">
							<div className="h6-footer-logo">
								<Link href="/" className="footer-logo">
									<img src="/images/logo/techno.webp" alt="logo" />
								</Link>
							</div>
						</div>
						<div className="col-xxl-6 col-xl-7 col-lg-9">
							<div className="footer-widget h6-footer-menu">
								<ul>
									<li>
										<Link href="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
									</li>
									<li>
										<Link href="/about" style={{ color: 'black', textDecoration: 'none' }}>About us</Link>
									</li>
									<li>
										<Link href="/blogs" style={{ color: 'black', textDecoration: 'none' }}>Blog</Link>
									</li>
									<li>
										<Link href="/market-area" style={{ color: 'black', textDecoration: 'none' }}>Market Area</Link>
									</li>
									<li>
										<Link href="/contact" style={{ color: 'black', textDecoration: 'none' }}>Contact</Link>
									</li>
								</ul>

							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="footer-copyright-area"
				style={{
					backgroundColor: '#051229', // background color added
					color: '#fff',              // text color changed to white for contrast
					fontWeight: 'bold',
					fontSize: '1.2rem',
				}}
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										© 2025 <Link href="/"> Technoglobe </Link> All rights reserved.
									</p>
								</div>
								<div className="copyright-socails">
									<ul>
										<li>
											<Link href="https://www.facebook.com/share/1Akkr6cgu2/">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/">
												<i className="fa-brands fa-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/company/tguae/">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/privacy-policy">Policy & privacy</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			{/* <!-- start: back to top --> */}
			<Link className="backtop" href="#">
				<i className="tji-arrow-up"></i>
			</Link>
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer6;
