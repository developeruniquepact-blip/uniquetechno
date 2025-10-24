import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CtaSidebar = () => {
	return (
		<div
			className="tj-sidebar-cta"
			style={{
				backgroundImage: "url('/images/fav1.png')",
			}}
		>
			<div className="content">
				<div className="icon">
					<img src="/images//fav1.png" width={50} alt="image" />
				</div>
				<h3>
					Need help? <br /> Feel free contact us
				</h3>
				<p>
					Our mission is to empowers businesses off all size in an businesses.
				</p>
			</div>
			<div className="cta-btn">
				<ButtonPrimary
					text={"Get in touch"}
					url={"/contact"}
					className={"white-btn"}
				/>

				<img
					className="shapes move-anim-2"
					src="/images/shapes/carrow.png"
					alt="shape"
				/>
			</div>
		</div>
	);
};

export default CtaSidebar;
