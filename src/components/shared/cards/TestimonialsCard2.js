import Image from "next/image";

const TestimonialsCard2 = ({ testimonial }) => {
	const { authorName, authorDesig, desc, img2, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	return (
		<div className="testimonial-style-2">
			<div className="testimonial-content">
				<div className="testimonial-quote">
					<i className="tji-right-quote"></i>
				</div>
				<div className="desc">
					<p>{desc}
					</p>
				</div>
				<div className="testimonial-author">
					<div className="author-images">
						<Image
							src={img2 ? img2 : "/images/testimonial/h1-test-1.png"}
							alt="Images"
							width={96}
							height={97}
						/>
					</div>
					<div className="author-text">
						<div className="testimonial-rating">
							<div className="star-fill">
								<div className="star-ratings">
									<div className="fill-ratings" style={{ width: "73%" }}>
										<span>★★★★★</span>
									</div>
									<div className="empty-ratings">
										<span>★★★★★</span>
									</div>
								</div>
							</div>
						</div>
						<h4 className="title">{authorName}</h4>
						<span className="designation">{authorDesig}</span>
					</div>
					<div className="shape-image">
						<Image
							src="/images/shapes/divider.png"
							alt=""
							width={630}
							height={127}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard2;
