import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const Footer5 = () => {
  return (
    <footer className="tj-footer-area h5-footer">
      <div className="footer-top-area fix">
        <div className="container">
          <div className="row rg-50 line">
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/images/logo/footer-logo.png" height="100px" width="200px" alt="" />
                  </Link>
                </div>
                <p className="desc">
                  Our courses are designed by industry experts, include AI
                  powered learning tools, and provide globally recognized
                  certifications. At Technoglobe, we don’t just teach technology
                  — we empower individuals to shape their future in the IT
                  Industry.
                </p>
                <div className="footer-social">
                  <h5 className="title">Follow Us:</h5>
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com/share/1Akkr6cgu2/">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://x.com/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/tguae/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <div className="footer-title">
                  <h4 className="title">About</h4>
                </div>
                <div className="widget-menu">
                  <ul>
                    <li>
                      <Link href="/endorsement">Endorsements</Link>
                    </li>
                    <li>
                      <Link href="/placement-support">Placement Support</Link>
                    </li>
                    <li>
                      <Link href="/blogs">Blog</Link>
                    </li>
                    <li>
                      <Link href="/study-abroad">Study Aborad</Link>
                    </li>
                    <li>
                      <Link href="/market-area">Market Area</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <div className="footer-title">
                  <h4 className="title">Our Courses</h4>
                </div>
                <div className="widget-menu">
                  <ul>
                    <li>
                      <Link href="/business-soft-skills">Business & Soft Skills</Link>
                    </li>
                    <li>
                      <Link href="/it-tech">IT & Tech</Link>
                    </li>
                    <li>
                      <Link href="/kids-teens-programs">Kids & Teens Programs</Link>
                    </li>
                    <li>
                      <Link href="/language-training">Language Training</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget footer1-col-4 footer-newsletter-form">
                <div className="newsletter-title">
                  <h3 className="title">Subscribe to our newsletter</h3>
                </div>
                <div className="newsletter-form">
                  <form>
                    <div className="form-input">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        required=""
                      />
                      <button className="tj-footer-input-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h5-footer-shape wow fadeInLeft" data-wow-delay=".4s">
          <img src="/images/shapes/h5-hero-shape-2.png" alt="shape" />
        </div>
      </div>
      <div className="h5-footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content-area">
                <div className="copyright-text">
                 
                </div>
                <div className="copyright-text">
                  <p>
                    © 2025{" "}
                    <Link href="/" target="_blank">
                      {" "}
                      Technoglobe {" "}
                    </Link>{" "}
                    All right reserved.
                  </p>
                </div>
                <div className="copyright-menu">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- back to top --> */}
      <BackToTop type={3} />
    </footer>
  );
};

export default Footer5;
