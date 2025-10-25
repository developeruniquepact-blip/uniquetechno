import FormSelect from "@/components/shared/Inputs/FormSelect";
import Link from "next/link";

const Contact2 = () => {
	return (
		<section
			className="h9-contact-section"
			style={{ backgroundImage: "url('/images/bg/h9-contact-bg.jpg" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h9-contact-wrapper">
							<div className="sec-heading style-2 ">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									[ OUR SUCESS STORIES ]
								</span>
								<h2 className="sec-title text-anim">
									See how we drive real <span>business</span> growth
								</h2>
								<div className="desc wow fadeInUp" data-wow-delay="0.4s">
									Our mission is to empowers businesses off our all size too
									thrive in an businesses ever changing marketplaces. In today's
									dynamicis business environment, the key to success lies.
								</div> <br></br> <br></br>
								<section className="tj-careers-details section-space pt-0">
  <div className="container">
    <div className="row rg-50">
      {/* UAE Regional Office */}
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
        <h4 className="sec-title" style={{ fontSize: '24px', marginBottom: '20px' }}>
          UAE Regional Office:
        </h4>
        <p  className="desc wow fadeInUp" data-wow-delay="0.4s">1002 – Al Taawun Street, Al Khan, Sharjah, UAE</p>
<p className="desc wow fadeInUp" data-wow-delay="0.4s">
  📞 <a href="tel:+971543258585" title="Call +971 543258585">+971 543258585</a> | <br></br>
  <a href="tel:+971543258090" title="Call +971 543258090">+971 543258090</a>
</p>

        <p className="desc wow fadeInUp" data-wow-delay="0.4s">✉ <a href="mailto:info@technoglobe.ae">info@technoglobe.ae</a></p>
        <p className="desc wow fadeInUp" data-wow-delay="0.4s">🌐 <a href="https://www.technoglobe.ae" target="_blank">www.technoglobe.ae</a></p>
      </div>

      {/* Head Office – India */}
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
        <h4 className="sec-title" style={{ fontSize: '24px', marginBottom: '20px' }}>
          Head Office – India:
        </h4>
        <p className="desc wow fadeInUp" data-wow-delay="0.4s">36, Gopalpura Bypass, Jaipur, India</p>
<p className="desc wow fadeInUp" data-wow-delay="0.4s">
  📞 <a href="tel:+971543258585" title="Call +971 543258585"> +91 8529171155</a> | 
</p>

        <p className="desc wow fadeInUp" data-wow-delay="0.4s">✉ <a href="mailto:info@technoglobe.co.in">info@technoglobe.co.in</a></p>
        <p    className="desc wow fadeInUp" data-wow-delay="0.4s">🌐 <a href="https://www.technoglobe.co.in" target="_blank">www.technoglobe.co.in</a></p>
      </div>
    </div>
  </div>
</section>

							</div>

							<div
								className="h9-contact-form_wrap wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<h3 className="form_title">
									Feel free to get in touch or visit our location.
								</h3>
								<div className="form">
									<form action="index-9.html">
										<div className="row gx-3">
											<div className="col-sm-6">
												<div className="form-group">
													<input
														type="text"
														name="name"
														id="name"
														placeholder="Name*"
														required
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-group">
													<input
														type="email"
														name="email"
														id="email"
														placeholder="Email*"
														required
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-group">
													<input
														type="tel"
														name="phone"
														id="phone"
														placeholder="Phone number*"
														required
													/>
												</div>
											</div>


											<div className="col-sm-6">
												<div className="form-group">
													<input
														type="tel"
														name="phone"
														id="phone"
														placeholder="City*"
														required
													/>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<FormSelect
														id={"contact"}
														className="nice-select"
														defaultValue={"Chose a option"}
														items={[
															{ value: "1", name: "Choose Franchiese " },
															{ value: "1", name: "Unique Franchiese" },
															{ value: "2", name: "Master Franchiese" },
															
														]}
													/>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<textarea
														name="message"
														id="message"
														placeholder="Type message here..."
													></textarea>
												</div>
											</div>
										</div>
										<div className="form-button">
											<button type="submit">
												Submit now <i className="fa-solid fa-paper-plane"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact2;
