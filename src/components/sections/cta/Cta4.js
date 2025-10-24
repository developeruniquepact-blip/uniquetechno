import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta4 = () => {
	return (
		<section className="h5-cta-section">
			<div className="thumb">
				<img src="/images/shapes/cta-shapes-1.png" alt="image" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h5-cta-wrapper">
							<h2 className="sec-title text-anim">
								Start Your Learning Journey!
							</h2>
							<div className="h5-cta-contact wow fadeInUp" data-wow-delay=".3s">
								<ButtonPrimary								
									text={"Let's Talk"}
									url={"https://api.whatsapp.com/send?phone=+971543258090&text=Hi20%a20%Technoglobe"}
									iconName={"tji-email"}
								/>
								<ButtonPrimary
									text={"(+971) 543258090"}
									url={"tel:+971543258090"}
									iconName={"tji-phone"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta4;
