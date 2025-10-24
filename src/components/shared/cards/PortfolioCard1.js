import Image from "next/image";
import Link from "next/link";

const PortfolioCard1 = ({ portfolio }) => {
	const { title, img, shortDesc, id,slug, dataFilter, tags } = portfolio
		? portfolio
		: {};
	return (
		<div className="project-item">
			<div className="project-image">
				<Link className="cursor-hide" href={`/portfolios/${id}`}>
					<Image
						src={img ? img : "assets/images/project/h1-project-1.webp"}
						alt="Images"
						width={449}
						height={561}
						style={{ width: "100%", height: "100%" }}
					/>
				</Link>
			</div>
			<div className="project-content">
				<div className="project-title">
					<h4 className="title">
						<Link href={`/our-centers/${slug}`}>
							{title}
							<i className="tji-arrow-right"></i>
						</Link>
					</h4>
				</div>
				<div className="tag-list">
					{tags?.length
						? tags?.map((tag, idx) => (
								<Link key={100 + idx} href={`/our-centers`}>
									{tag}
								</Link>
						  ))
						: ""}
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard1;
