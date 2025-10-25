"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site-logo">
			<Link className="logo" href="/">
				<Image
					src={`/images/logo/${
						(headerType === 3 ||
							headerType === 4 ||
							headerType === 5 ||
							headerType === 6 ||
							headerType === 9) &&
						!isStickyHeader
							? "techno.webp"
							: headerType === 9
							? "techno.webp"
							: "techno.webp"
					}`}
					alt="logo"
					height={81}
					width={200}
				/>
			</Link>
		</div>
	);
};

export default Logo;
