"use client";
import Accordion from "@/components/shared/accordion/Accordion";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const ServicesDetailsPrimary = ({ option }) => {
  const { currentItem } = option || {};
  const {
    titleLarge,
    titleLarge1,
    qus1,
    qus2,
    qus3,
    qus4,
    qus5,
    ans1,
    ans2,
    ans3,
    ans4,
    ans5,

    desc1,
    desc2,
    desc4,
    desc5,
    desc6,
    desc7,
    desc8,
    desc9,
    featTitle1,
    featTitle2,
    featTitle3,
    featDesc1,
    featDesc2,
    featDesc3,
    learn1,
    learn2,
    learn3,
    learn4,
    learn5,
    learn6,
    learn7,
    learn8,
    images1,
    images2,
    img,
  } = currentItem || {};

  return (
    <section className="tj-service-area section-space">
      <div className="container">
        <div className="row rg-50">
          {/* Left content */}
          <div className="col-lg-8">
            <div className="tj-post-wrapper">
              <div className="tj-post-single-post mb-0">
                <div
                  className="tj-post-thumb hover:shine wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={img}
                    alt="post-image"
                    width={870}
                    height={498}
                    style={{ height: "auto" }}
                  />
                </div>
                <h3 className="tj-post-title text-anim">{titleLarge}</h3>
                <div className="tj-entry-content">
                  <p className="wow fadeInUp" data-wow-delay="0.1s">
                    {desc1}
                    <br />
                    <br />
                    {desc2}
                    <br />
                    <br />
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">{desc4}</p>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">{desc5}</p>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    {desc6}
                    <br />
                    <br />
                  </p>

                  <h3 className="tj-post-title text-anim">{titleLarge1}</h3>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">{desc7}</p>

                  <div className="row rg-30 justify-content-center">
                    <div className="col-md-4 col-sm-6">
                      <div className="tj-feature wow fadeInUp" data-wow-delay="0.5s">
                        <div className="tj-feature-icon"><i className="tji-quick"></i></div>
                        <h5 className="tj-feature-title">{featTitle1}</h5>
                        <div className="desc"><p>{featDesc1}</p></div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="tj-feature wow fadeInUp" data-wow-delay="0.7s">
                        <div className="tj-feature-icon"><i className="tji-results"></i></div>
                        <h5 className="tj-feature-title">{featTitle2}</h5>
                        <div className="desc"><p>{featDesc2}</p></div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="tj-feature wow fadeInUp" data-wow-delay="0.9s">
                        <div className="tj-feature-icon"><i className="tji-personalization"></i></div>
                        <h5 className="tj-feature-title">{featTitle3}</h5>
                        <div className="desc"><p>{featDesc3}</p></div>
                      </div>
                    </div>
                  </div>

                  <div className="service-images-wrap">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="image-wrap hover:shine wow fadeInUp" data-wow-delay="0.5s">
                          <Image
                            src={images1}
                            alt="service-image"
                            width={420}
                            height={230}
                            style={{ height: "230" }}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="image-wrap hover:shine wow fadeInUp" data-wow-delay="0.7s">
                          <Image
                            src={images2}
                            alt="service-image"
                            width={420}
                            height={230}
                            style={{ height: "230" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="col-lg-4">
            <aside className="tj-blog-sidebar sticky-form">
              <div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.3s">
                <h5 className="tj-sidebar-widget-title" style={{ color: "navy" }}>
                  Want Apply ?
                </h5>
                <h1 style={{ fontSize: "32px" }}>Join Our Faculty</h1>
                <div className="tj-careers-form">
                  <form action="#">
                    <div className="form-input">
                      <input type="text" name="cr_name" placeholder="Your name*" />
                    </div>
                    <div className="form-input">
                      <input type="email" name="cr_email" placeholder="Email Address*" />
                    </div>
                    <div className="form-input">
                      <input type="text" name="cr_phone" placeholder="Mobile No.*" />
                    </div>
                    <div className="form-input form-control">
                      <div className="select-wrapper">
                         <select name="cr_role" defaultValue="Course">
                                  <option value="select-course">
                                    Select Course*
                                  </option>
                                  <option value="DigitalMarketing">Digital Marketing</option>
                                  <option value="DataAnalyst">Data Analyst</option>
                                   <option value="EnglishSpeaking">English Speaking</option>
                                  <option value="FullStackDevelopment">Full Stack Development</option>
                                   <option value="Graphic Design">Graphic Design</option>
                                  <option value="AccountingProfessional">Accounting Professional</option>
                                   <option value="WebDesign">Web Design</option>
                                  <option value="3D-Animation&VFX">3D-Animation & VFX</option>
                                   <option value="CoreJava">Core Java</option>
                                  <option value="ReactNative">React Native</option>
                                   <option value="Reactjsx">React jsx</option>
                                  <option value="VideoEditing">Video Editing</option>
                                   <option value="CyberSecurity">Cyber Security</option>
                                  <option value="FullStackPython">Full Stack Python</option>
                                   <option value="FullStackJava">Full Stack Java</option>
                                  <option value="DataScience">Data Science</option>
                                  <option value="MachineLearning">Machine Learning</option>

                                </select>
                      </div>
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

        {/* Additional Content */}
        <div className="check-list mb-40">
          <p className="wow fadeInUp" data-wow-delay="0.1s">{desc8}</p>
          <p className="wow fadeInUp" data-wow-delay="0.3s">{desc9}</p>
        </div>
        </div>

     
        {/* Learn Section */}
        <div className="service-check-list mt-4 wow fadeInUp" data-wow-delay="0.3s"  style={{ backgroundColor: "#E1E8F0", padding: "40px" }} >
          <div className="sec-heading text-center">
            <div className="sec-text">
              <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                Our Expertise
              </span>
              <h2 className="sec-title text-anim">What You Will Learn</h2>
            </div>
          </div>
          <ul>
            {[learn1, learn2, learn3, learn4, learn5, learn6, learn7, learn8].map((item, index) => (
              <li key={index}>
                <i className="tji-double-check"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div><br></br>

      <div className="container">

        {/* FAQ Accordion */}
        <h4 className="text-anim">General questions</h4>
          <Accordion>
                    <div className="tj-faq mt-30">
                      <div
                        className="accordion tj-faq-style"
                        id="accordionExample"
                      >
                        <div
                          className="accordion-item wow fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          <h2 className="accordion-header active">
                            {/* <!-- button --> */}
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne-1"
                              aria-expanded="false"
                            >
                              {qus1}
                            </button>
                          </h2>
                          {/* <!-- content --> */}
                          <div
                            id="collapseOne-1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                               {ans1}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion-item wow fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <h2 className="accordion-header ">
                            {/* <!-- button --> */}
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne-2"
                              aria-expanded="false"
                            >
                              {qus2}
                            </button>
                          </h2>
                          {/* <!-- content --> */}
                          <div
                            id="collapseOne-2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>{ans2}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion-item wow fadeInUp"
                          data-wow-delay="0.5s"
                        >
                          <h2 className="accordion-header ">
                            {/* <!-- button --> */}
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne-3"
                              aria-expanded="false"
                            >{qus3}
                            </button>
                          </h2>
                          {/* <!-- content --> */}
                          <div
                            id="collapseOne-3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>{ans3}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion-item wow fadeInUp"
                          data-wow-delay="0.7s"
                        >
                          <h2 className="accordion-header ">
                            {/* <!-- button --> */}
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne-4"
                              aria-expanded="false"
                            >
                              {qus4}
                            </button>
                          </h2>
                          {/* <!-- content --> */}
                          <div
                            id="collapseOne-4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                                {ans4}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion-item wow fadeInUp"
                          data-wow-delay="0.9s"
                        >
                          <h2 className="accordion-header ">
                            {/* <!-- button --> */}
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne-5"
                              aria-expanded="false"
                            >
                              {qus5}
                            </button>
                          </h2>
                          {/* <!-- content --> */}
                          <div
                            id="collapseOne-5"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>
                               {ans5}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion>
      </div>

      {/* 👇 Inline Sticky CSS */}
      <style jsx>{`
        .sticky-form {
          position: sticky;
          top: 80px;
          z-index: 10;
        }
      `}</style>
    </section>
  );
};

export default ServicesDetailsPrimary;
