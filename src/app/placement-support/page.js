"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import HeroInner from "@/components/sections/heros/HeroInner";
import Footer from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

const CareerDetails1 = ({ currentItemId }) => {
  return (
    <>
    	<Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />
				<HeroInner title={"Placement Supoort"} text={"Placement Support"} />

    		
      <section className="tj-careers-details section-space">
        <div className="container">
          <div className="row rg-50">
            <div className="col-lg-8">
              <div className="tj-post-wrapper">
                <div className="tj-post-single-post">
                  {/* <!-- content --> */}
                  <div className="tj-entry-content">
                    <div className="sec-heading mb-0">
                      <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                        Career
                      </span>
                      <h2 className="sec-title text-anim" style={{ fontSize: "32px" }}>
                        Career Support & Industry Readiness
                      </h2>
                    </div>
                    <br />
                    <br />
                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                      At Technoglobe UAE, we believe that technical training is
                      only the first step—the right career guidance and grooming
                      are just as essential to achieving professional success.
                      While we do not offer guaranteed placements in the UAE, our
                      programs are designed to enhance your employability through
                      structured career support services that align with local and
                      global industry needs.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      Our Career Support Cell works closely with every student
                      enrolled in our training programs, integrating mock
                      interviews, resume building, and personality development
                      sessions into the learning journey. These tools not only
                      build confidence but also significantly increase the chances
                      of getting hired in today’s competitive job market.
                    </p>
                    <div className="tj-check-list">
                      <h4 className="text-anim">Key Highlights:</h4>
                    </div>
                    <div
                      className="service-check-list mt-4 mb-4 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <ul>
                        <li>
                          <i className="tji-double-check"></i>
                          <span>
                            Career grooming and mock interview sessions as part of
                            every course
                          </span>
                        </li>
                        <li>
                          <i className="tji-double-check"></i>
                          <span>
                            Industry-aligned training designed to meet current
                            market demands
                          </span>
                        </li>
                        <li>
                          <i className="tji-double-check"></i>
                          <span>
                            Expert guidance from experienced trainers and mentors
                          </span>
                        </li>
                        <li>
                          <i className="tji-double-check"></i>
                          <span>
                            Ongoing support for career progression and job
                            transitions{" "}
                          </span>
                        </li>
                        <li>
                          <i className="tji-double-check"></i>
                          <span>
                            Access to networking opportunities through workshops
                            and events
                          </span>{" "}
                        </li>
                        <li>
                          <i className="tji-double-check"></i>
                          <span>
                            Industry-aligned training designed to meet current
                            market demands
                          </span>
                        </li>
                      </ul>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      Technoglobe has a rich legacy of organizing successful job
                      fairs and industry engagement programs across India, and
                      while direct placement services are not currently offered in
                      the UAE, our training and support system empowers learners
                      with the skills, mindset, and readiness to seize career
                      opportunities with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="tj-blog-sidebar sticky-form">
                <div
                  className="tj-sidebar-widget wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h5 className="tj-sidebar-widget-title" style={{ color: "navy" }}>
                    Want Apply ?
                  </h5>
                  <h1 style={{ fontSize: "32px" }}>Join Our Faculty</h1>
                  <div className="tj-careers-form">
                    <form action="#">
                      <div className="form-input">
                        <input
                          type="text"
                          name="cr_name"
                          placeholder="Your name*"
                        />
                      </div>
                      <div className="form-input">
                        <input
                          type="email"
                          name="cr_email"
                          placeholder="Email Address*"
                        />
                      </div>
                      <div className="form-input">
                        <input
                          type="text"
                          name="cr_phone"
                          placeholder="Mobile No.*"
                        />
                      </div>
                      <div className="form-input form-control">
                              <div className="select-wrapper">
                                <select name="cr_role" defaultValue="Job Type*">
                                 
                            <option value="trainer">Trainer</option>
                            <option value="counsellor">Counsellor</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-input reduce">
                        <label className="label" htmlFor="inputCV">
                          Upload CV*
                        </label>
                        <input type="file" id="inputCV" />
                      </div>
                      <div className="form-input reduce">
                        <label className="label" htmlFor="inputImage">
                          Upload Image*
                        </label>
                        <input type="file" id="inputImage" />
                      </div>
                      <div className="form-input">
                        <textarea
                          name="cr_cover_letter"
                          placeholder="Your Message(optional)"
                        ></textarea>
                      </div>
                      <div className="tj-careers-button">
                        <ButtonPrimary text={"Submit now"} type="submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </aside>
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

export default CareerDetails1;
