import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const { title, id, desc, desc1, desc2,  img,img1 ,img2 ,img3 ,img4 ,img5 ,img6 ,date, day, month, category, authir_role, author, key, key1, key2, key3, key4, keyHead, cmnt,  detailsImg, tags, conclusion } = currentItem || {};
	return (
		<section className="tj-post-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<article className="tj-post-single-post">
							
								<h3 className="tj-post-title text-anim">{title}</h3>
								<div
									className="blog-category-two wow fadeInUp"
									data-wow-delay="0.3s"
								>
									<div className="category-item">
										<div className="cate-images">
											<Image
												src="/images/blog/author-1.png"
												alt="Images"
												width={64}
												height={64}
											/>
										</div>
										<div className="cate-text">
											<span className="degination">Authored by</span>
											<h6 className="title">
												<Link href={`/blogs/${id}`}>{author}</Link>
											</h6>
										</div>
									</div>
									<div className="category-item">
										<div className="cate-icons">
											<i className="tji-calender"></i>
										</div>
										<div className="cate-text">
											<span className="degination">Date Released</span>
											<h6 className="text">29 Aug,2025</h6>
										</div>
									</div>
									<div className="category-item">
										<div className="cate-icons">
											<i className="tji-coments"></i>
										</div>
										<div className="cate-text">
											<span className="degination">Comments</span>
											<h6 className="text">03 Comments</h6>
										</div>
									</div>
								</div>
								<div className="tj-entry-content">
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										{desc}
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										{desc1}
									</p>
									<blockquote className="wow fadeInUp" data-wow-delay="0.1s">
										<p>
											{cmnt}
										</p>
									</blockquote>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										{desc2}
									</p>

									<div className="tj-check-list">
										<h4 className="text-anim">{key}</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											{keyHead}
										</p>
										<ul className="wow fadeInUp" data-wow-delay="0.3s">
											<li>
												<i className="tji-double-check"></i> {key1}
											</li>
											<li>
												<i className="tji-double-check"></i> {key2}
											</li>
											<li>
												<i className="tji-double-check"></i> {key3}
											</li>
											<li>
												<i className="tji-double-check"></i> {key4}
											</li>
										</ul>
									</div><br/>
									
									<h4 className="text-anim">Conclusions</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										{conclusion}
									</p>
								</div>
							</article>
							{/* <!-- post tag and share --> */}
							<div
								className="tj-post-details_tags_share wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<div className="tj-tags tagcloud">
									<span className="tag__title">Tags:</span>
									{tags?.length
										? tags?.map((tag, idx) => (
												<Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
													{tag}
												</Link>
										  ))
										: ""}
								</div>
								<div className="tj-socials_share">
									<span className="tag__title">Share:</span>
									<Link href="https://www.facebook.com/" title="Facebook">
										<i className="fa-brands fa-facebook-f"></i>
									</Link>
									<Link href="https://x.com/" title="Twitter">
										<i className="fab fa-x-twitter"></i>
									</Link>
									<Link href="https://www.linkedin.com/" title="Linkedin">
										<i className="fa-brands fa-linkedin-in"></i>
									</Link>
									<Link href="https://www.pinterest.com/" title="Pinterest">
										<i className="fa-brands fa-pinterest-p"></i>
									</Link>
								</div>
							</div>
							{/* <!-- post navigation --> */}
							<div
								className="tj-post__navigation wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/blogs/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/blogs"} className="tj-nav-post__grid">
									<i className="tji-square-cube"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/blogs/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;
