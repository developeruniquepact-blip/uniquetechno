import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const About6 = () => {
  return (
    <section className="h6-about-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="h6-about-content">
              <div className="sec-heading style-2">
                <span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
                  Experts in IT Education and Transformation{" "}
                </span>
                <h2 className="sec-title">
                  Dedicated to empowering learners and professionals to achieve
                  long-term success and drive sustainable growth through our
                  specialized IT training and consulting services.
                </h2>
              </div>
              <div
                className="about-btn-area wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <ButtonPrimary text={"Start Your Learning Journey"} url={"/registration"} />
                <div className="client-experience">
                  <ul className="images-thumb">
                    <li>
                      <img src="/images/about/thumb-1.png" alt="Images" />
                    </li>
                    <li>
                      <img src="/images/about/thumb-2.png" alt="Images" />
                    </li>
                    <li>
                      <img src="/images/about/thumb-3.png" alt="Images" />
                    </li>
                    <li className="plus">
                      <i className="fa-sharp fa-solid fa-plus"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shape move-anim">
                <img src="/images/shapes/h6-team-shape.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-lg-row flex-column-reverse">
          <div className="col-xl-5 col-lg-4">
            <div className="h6-about-video">
              <div className="about-shape-1 wow fadeInUp" data-wow-delay="0.3s">
                <div className="video-inner">
                  <img src="/images/about/h6-about-video-bg.webp" alt="Image" />
                  <PopupVideo>
                    <Link
                      className="video-btn glightbox video-popup"
                      href="https://www.youtube.com/watch?v=MLpWrANjFbI"
                    >
                      <i className="tji-play"></i>
                    </Link>
                  </PopupVideo>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className="h6-about-funfact ">
              <div className="h6-about-funfact-item">
                <div className="counter-item">
                  <FunfactSingle currentValue={25} symbol={"+"} />
                  <span className="sub-title">
                    Years Of Delivering Exellence
                  </span>
                </div>
                <div className="desc">
                  <p>
                    We empower businesses of all sizes to thrive in rapidly
                    changing markets with proven strategies.
                  </p>
                </div>
              </div>
              <div className="h6-about-funfact-item">
                <div className="counter-item">
                  <FunfactSingle currentValue={300} symbol={"+"} />
                  <span className="sub-title">Available Career Courses</span>
                </div>
                <div className="desc">
                  <p>
                    We provide diverse learning programs tailored to business
                    and career growth across industries.
                  </p>
                </div>
              </div>
              <div className="h6-about-funfact-item">
                <div className="counter-item">
                  <FunfactSingle currentValue={300} isSup={"+"} />
                  <span className="sub-title">
                    Tie-Up Companies For Placement
                  </span>
                </div>
                <div className="desc">
                  <p>
                    Collaborations with 300+ companies ensure strong career
                    opportunities for our learners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About6;
