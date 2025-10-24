"use client";
import modifyNumber from "@/libs/modifyNumber";
import { useState } from "react";

const Process = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	const process = [
		{
			id: 1,
			title: "Search for your course",
			desc: "Explore a wide range of career-focused courses designed to match your goals and interests.",
		},
		{
			id: 2,
			title: "Take a Sample Lesson",
			desc: "Experience the quality of our teaching before you commit. With our free sample lessons.",
		},
		{
			id: 3,
			title: "Preview the Syllabus",
			desc: "Before starting your learning journey, it’s important to know exactly what to expect",
		},
		{
			id: 4,
			title: "Enroll the Course",
			desc: "Enroll now and get classes, practical assignments, and resources designed to help you.",
		},
	];
	return (
		<section className="h5-process-section">
			<div
				className="h5-process-image"
				style={{
					backgroundImage: "url('/images/about/4step.webp')",
				}}
			></div>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="sec-heading style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								OUR WORKS
							</span>
							<h2 className="sec-title text-anim">
								Easy 4 Steps To Work
							</h2>
						</div>

						<div className="h5-process_wrap">
							{process?.length
								? process?.map(({ id, title, desc }, idx) => (
										<div
											key={idx}
											className={`h5-process_item ${
												currentIndex === idx ? "active" : ""
											} wow fadeInLeft`}
											data-wow-delay={`0.${idx + 1 + idx}s`}
											onMouseEnter={() => handleCurrentIndex(idx)}
										>
											<span className="line"></span>
											<div className="step">{modifyNumber(id)}.</div>
											<h5 className="title">{title}</h5>
											<div className="desc">{desc}</div>
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
