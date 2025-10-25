import makePath from "@/libs/makePath";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogCard6 = ({ blog, idx }) => {
	const { title, desc, id, img2, img, category, date, day, month } = blog || {};
	return (
		<div className="blog-style-2 style-6">
			<div className="blog-images">
				<img src={img} alt="Images" />
				<div className="blog-date">
					<span className="date">06</span>
					<span className="month">Nov</span>
					
				</div>
			</div>
			<div className="blog-content">
				<div className="blog-two-meta">
					<ul>
						<li>
							<Link
								className="meta-link"
								href={`/blogs?category=${makePath(category)}`}
							>
								{category}
							</Link>
						</li>
						<li>03 Comments</li>
					</ul>
				</div>
				<h4 className="title under-line">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h4>
				<div className="desc">
					<p>
{desc}					</p>
				</div>
				<div className="blog-button">
					<ButtonPrimary text={"Read more"} url={`/blogs/${id}`} />
				</div>
			</div>
		</div>
	);
};

export default BlogCard6;
