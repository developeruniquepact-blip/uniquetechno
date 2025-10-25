"use client";
import tjProgressBar from "@/libs/tjProgressBar";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import getTeamMembers from "@/libs/getTeamMembers";
import Link from "next/link";


const ProgressItems = ({currentItemId }) => {
	const items = getTeamMembers();
	const currentId = currentItemId;
	const currentItem = items?.find(({ id }) => currentId === id);
	const {profSkils,proBar1 , proBar2 ,proBar3 ,proPer1, proPer2 ,proPer3} = currentItem || {};

	const animContainerRef = useRef();
	useGSAP(() => {
		tjProgressBar(animContainerRef);
	});
	return (
		<div className="team-details__skills" ref={animContainerRef}>
			<h4 className="team-details__subtitle text-anim">Professional skills</h4>
			<p className="wow fadeInUp" data-wow-delay="0.3s">
				{profSkils}
			</p>
			<ul className="tj-progress__list wow fadeInUp" data-wow-delay="0.5s">
				<li>
					<h6 className="tj-progress__title">{proBar1}</h6>
					<div className="tj-progress">
						<div className="tj-progress__bar" data-perchant="90">
							<span className="tj-progress__perchant">{proPer1}</span>
						</div>
					</div>
				</li>
				<li>
					<h6 className="tj-progress__title">{proBar2}</h6>
					<div className="tj-progress">
						<div className="tj-progress__bar" data-perchant="82">
							<span className="tj-progress__perchant">{proPer2}</span>
						</div>
					</div>
				</li>
				<li>
					<h6 className="tj-progress__title">{proBar3}</h6>
					<div className="tj-progress">
						<div className="tj-progress__bar" data-perchant="88">
							<span className="tj-progress__perchant">{proPer3}</span>
						</div>
					</div>
				</li>
				{/* <li>
					<h6 className="tj-progress__title">{proBar4}</h6>
					<div className="tj-progress">
						<div className="tj-progress__bar" data-perchant="90">
							<span className="tj-progress__perchant">{proBar4}</span>
						</div>
					</div>
				</li> */}
			</ul>
		</div>
	);
};

export default ProgressItems;
