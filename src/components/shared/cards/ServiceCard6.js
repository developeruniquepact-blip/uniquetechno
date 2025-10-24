// ...existing code...
import Link from "next/link";

const ServiceCard6 = ({
    service,
    idx,
    lastItem,
    handleCurrentIndex,
    currentIndex,
}) => {
    const { title, desc, id, totalProject, iconName, path, img, bgImg, svg } =
        service || {};
    return (
        <div
            className={`service-style-5 ${currentIndex === idx ? "active" : ""}`}
            onMouseEnter={() => handleCurrentIndex && handleCurrentIndex(idx)}
        >
            <div className="h5-service-content">
                <div className="h5-title-area">
                    <h4 className="title">{title}</h4>
                </div>
                <div className="service-icon">
                    <span>
                        <i className={iconName ? iconName : "tji-optimization"}></i>
                    </span>
                </div>
                <div className="h5-service-content-inner">
                    <h4 className="title">
                        <Link href={path}>{title}</Link>
                    </h4>
                    <div className="desc">
                        <p>{desc}</p>
                    </div>
                </div>
                <Link className="blog-btn-2" href={path}>
                    <span className="btn-icon">
                        <i className="tji-arrow-right"></i>
                    </span>
                    <span className="btn-text">Learn more</span>
                </Link>
                <Link className="blog-btn-2 mobile-show" href={`/services/${id}`}>
                    <span className="btn-icon">
                        <i className="tji-arrow-right"></i>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard6;
// ...existing code...