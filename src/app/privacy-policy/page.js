"use client";
import { Metadata } from 'next'


import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import HeroInner from "@/components/sections/heros/HeroInner";
import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";



const privacy = ({ currentItemId }) => {
  return (
    <>
      <Header headerType={5} isHeaderTop={true} />
      <Header isStickyHeader={true} headerType={5} />
      <HeroInner title={"Privacy Policy"} text={"Privacy Policy"} />


      <section className="tj-careers-details section-space">
        <div className="container">
          <div className="row rg-50">
            <div className="col-lg-12">
              <div className="tj-post-wrapper">
                <div className="tj-post-single-post">
                  {/* <!-- content --> */}
                  <div className="tj-entry-content">
                    <div className="sec-heading mb-0">
                      <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                        Privacy Policy
                      </span>
                      <h2 className="sec-title text-anim" style={{ fontSize: "32px" }}>
                        Welcome to Technoglobe Institute of IT Training and Development
                      </h2>
                    </div>
                    <br />
                    <br />
                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                      Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website, enroll in our courses, or interact with us in any way.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      By using our website or services, you agree to the terms outlined in this Privacy Policy.
                    </p>
                    <div className="tj-check-list">
                      <h4 className="text-anim">1. Information We Collect</h4>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      We may collect the following types of information:
                    </p>
                    <div className="tj-check-list">
                      <h4 className="text-anim">a. Personal Information</h4>
                    </div>
                    <div className="wow fadeInUp" data-wow-delay="0.3s">
                      When you register, inquire, or enroll for any course or service, we may collect:
                      <div
                        className="service-check-list mt-4 mb-4 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <ul>
                          <li>
                            <i className="tji-double-check"></i>
                            <span>
                              Full Name
                            </span>
                          </li>
                          <li>
                            <i className="tji-double-check"></i>
                            <span>
                              Email Address
                            </span>
                          </li>
                          <li>
                            <i className="tji-double-check"></i>
                            <span>
                              Phone Number
                            </span>
                          </li>
                          <li>
                            <i className="tji-double-check"></i>
                            <span>
                              Educational or professional background{" "}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="tj-check-list">
                        <h4 className="text-anim">b. Non-Personal Information</h4>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        We also collect data automatically through cookies or analytics tools.
                      </p>
                      <div className="tj-check-list">
                        <h4 className="text-anim">3. Data Protection and Security</h4>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        We take your privacy seriously and implement industry-standard security measures to protect your personal information against unauthorized access, alteration, or disclosure.
                        However, please note that no method of data transmission over the internet is 100% secure.
                      </p>
                      <div className="tj-check-list">
                        <h4 className="text-anim">4. Sharing and Disclosure of Information</h4>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        We do not sell or trade your personal information.
                        We may share your information only in the following cases:

                        With authorized employees or trainers to provide you with services

                        With trusted third-party service providers (e.g., payment gateways, email systems) under strict confidentiality agreements

                        When required by UAE law or governmental authorities
                      </p>
                      <div className="tj-check-list">
                        <h4 className="text-anim">5. Cookies Policy</h4>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        Our website uses cookies to enhance user experience and analyze website performance.
                        You can choose to disable cookies in your browser settings, but some website features may not function properly.
                      </p>
                      <div className="tj-check-list">
                        <h4 className="text-anim">6. Third-Party Links</h4>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        Our website may contain links to third-party sites.
                        We are not responsible for the content, privacy practices, or security of those external websites.
                      </p>

                      <div className="tj-check-list">
                        <h4 className="text-anim">7. Your Rights</h4>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        You have the right to:

                        Access, update, or correct your personal data

                        Request deletion of your information (subject to legal obligations)

                        Withdraw consent for marketing communications<br></br>

                        To exercise these rights, please contact us using the details below.
                      </p>

                      <div className="tj-check-list">
                        <h4 className="text-anim">8. Data Retention</h4>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        We retain personal information only as long as necessary to provide services, fulfill legal obligations, and resolve disputes.
                      </p>

                      <div className="tj-check-list">
                        <h4 className="text-anim">9. Children’s Privacy</h4>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        Our courses and website are intended for individuals aged 16 and above.
                        We do not knowingly collect personal data from children under 16 years of age.
                      </p>

                      <div className="tj-check-list">
                        <h4 className="text-anim">10. Updates to This Policy</h4>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated “Last Updated” date.
                      </p>
                      <div className="tj-check-list">
                        <h4 className="text-anim">11. Contact Us</h4>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        If you have any questions, concerns, or requests regarding this Privacy Policy, please contact:
                      </p>

                      <div className="tj-check-list">
                        <h5 className="text-anim">Technoglobe Institute of IT Training and Development</h5>
                      </div>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        Location: 1002 -AI Taawun St -Al khan -Sharjah -UAE<br></br>
                        Email: info@technoglobe.ae<br></br>
                        Phone: (+971)5432 58090<br></br>
                        Website: technoglobe.ae
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .sticky-form {
          position: sticky;
          top: 20px;
          z-index: 10;
        }
      `}</style>
      <Footer footerType={"inner"} />
      <ClientWrapper />
      <TjMagicCursor />
    </>
  );
};

export default privacy;
