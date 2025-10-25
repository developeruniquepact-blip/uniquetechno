"use client";
import ButtonHeaderContact from "@/components/shared/buttons/ButtonHeaderContact";
import ButtonMenuToggler from "@/components/shared/buttons/ButtonMenuToggler";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ButtonSearch from "@/components/shared/buttons/ButtonSearch";
import useHeaderFunction from "@/hooks/useHeaderFunction";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = ({ headerType, isHeaderTop, topbarType, isStickyHeader }) => {
	const isSticky = useHeaderFunction(isStickyHeader);
	return (
		<header
			className={`tj-header-area ${
				headerType === 10
					? "header-2 header-7 header-10"
					: headerType === 9
					? "header-9 style-6"
					: headerType === 8
					? "header-8"
					: headerType === 7
					? "header-2 header-7"
					: headerType === 6
					? "header-6 style-6"
					: headerType === 5 && !isStickyHeader
					? "header-5"
					: headerType === 3 || headerType == 4
					? "header-3"
					: headerType === 2
					? "header-2"
					: "header-1"
			} ${
				isStickyHeader
					? "header-duplicate header-sticky"
					: headerType === 9
					? ""
					: "header-absolute"
			} ${isStickyHeader && isSticky ? "sticky" : ""}`}
		>
			{
			isHeaderTop && !isStickyHeader ? <HeaderTop type={topbarType} /> : ""
			}
			<div className="header-bottom">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="header-wrapper">
								{/* <!-- logo --> */}
								<Logo isStickyHeader={isStickyHeader} headerType={headerType} />

								{/* <!-- main navigation --> */}
								<Navbar
									isStickyHeader={isStickyHeader}
									headerType={headerType}
								/>

								<div
									className={`header_right_info d-none ${
										!headerType || headerType === 6 || headerType === 9
											? "d-md-inline-flex"
											: "d-lg-inline-flex"
									}`}
								>
									{/* <!-- contact --> */}
									{headerType === 2 || headerType === 9 ? (
										<ButtonHeaderContact type={headerType === 9 ? 2 : 0} />
									) : (
										""
									)}
									{/* <!-- button --> */}
									{headerType === 2 ||
									headerType === 3 ||
									headerType == 4 ||
									headerType == 6 ? (
										<ButtonMenuToggler headerType={headerType} />
									) : (
										""
									)}
									{headerType !== 2 ? (
										<ButtonPrimary
											text={
												headerType === 8 ? "Free consultation" : "Became a Franchisee"
											}
											url={"/franchiese"}
											className={
												(headerType === 3 ||
													headerType == 4 ||
													headerType == 5 ||
													headerType == 6 ||
													headerType == 9) &&
												!isStickyHeader
													? ""
													: headerType == 9
													? ""
													: "header_btn"
											}
										/>
									) : (
										""
									)}{" "}
									{headerType === 7 || headerType === 7 || headerType === 10 ? (
										<ButtonSearch headerType={headerType} />
									) : (
										""
									)}
									{headerType === 7 || headerType === 10 ? (
										<ButtonMenuToggler headerType={headerType} type={2} />
									) : (
										""
									)}
								</div>

								{/* <!-- menu bar --> */}
								<ButtonMenuToggler
									headerType={headerType}
									isMobile={true}
									type={headerType === 7 || headerType === 10 ? 2 : 0}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
