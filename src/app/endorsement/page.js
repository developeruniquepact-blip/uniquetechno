"use client";

import React from "react";

// Layout Components
import Accordion from "@/components/shared/accordion/Accordion";

import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home5() {
  // Only videos arrays now
  const videos1 = Array.from(
    { length: 4 },
    (_, i) => `/images/Gallery/vedio${i + 1}.mp4`
  );
  const videos2 = Array.from(
    { length: 4 },
    (_, i) => `/images/Gallery/vd${i + 1}.mp4`
  );

  return (
    <div>
     	<Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />


      <main>
      <HeroInner title={"Endorsement"} text={"Endorsement"} />     
        {/* Video Galleries only */}
        <div className="gallery-section mt-0">
          <div className="section">
            <div className="gallery-grid">
              {videos1.map((vid, idx) => (
                <div key={`vid1-${idx}`} className="gallery-card">
                  <video
                    src={vid}
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="video-element"
                  />
                </div>
              ))}
            </div>{" "}
            <br></br>
            <div className="gallery-grid">
              {videos2.map((vid, idx) => (
                <div key={`vid2-${idx}`} className="gallery-card">
                  <video
                    src={vid}
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="video-element"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="tj-faq-area section-space">
          <div className="container">
            <div className="row rg-50 justify-content-between">
              <div className="col-xl-5 col-lg-5">
                <div className="sec-heading mb-0 tj-sticky-top">
                  <h2 className="sec-title text-anim">
                    Recognitions and Endorsements
                  </h2>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <Accordion>
                  <div className="tj-faq">
                    <div
                      className="accordion tj-faq-style style-2"
                      id="accordionExample"
                    >
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <h2 className="accordion-header active">
                          {/* <!-- button --> */}
                          <button
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne-1"
                            aria-expanded="false"
                          >
                            Print Media Features Entrepreneur Street:{" "}
                          </button>
                        </h2>
                        {/* <!-- content --> */}
                        <div
                          id="collapseOne-1"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Featured Technoglobe as one of India's top IT
                              training institutes
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
                            Outlook Magazine:{" "}
                          </button>
                        </h2>
                        {/* <!-- content --> */}
                        <div
                          id="collapseOne-2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Published the success story of Technoglobe & our
                              Managing Director, Mr. Shiraz Khan, in the May 23
                              edition
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
                          >
                            Leading Newspapers:{" "}
                          </button>
                        </h2>
                        {/* <!-- content --> */}
                        <div
                          id="collapseOne-3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Our skilling & training, making youth employable &
                              job fairs have been appreciated & featured in
                              prominent newspapers like Dainik Bhaskar,
                              Rajasthan Patrika, Punjab Kesari, Dainik Navjyoti,
                              and Samachar Jagat. Job Fairs that are being
                              conducted by Technoglobe on regular basis are
                              being covered by all leading newspapers
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
                            Electronic Media Coverage:
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
                              Technoglobe has received extensive media coverage,
                              showcasing our excellence in IT training and
                              achievements
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
                            Award Ceremony Coverage:
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
                              Our award ceremony at Oxford University, UK, was
                              covered by prominent media outlets, including Zee
                              TV and Zee Business.{" "}
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
                            Podcast:
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
                              Technoglobe's & Our Managing Director's success
                              story was featured on Dainik Bhaskar's My FM in
                              the program "Kahani Jazbe Ki", with an interview
                              by Mr. Shailesh Lodha, renowned writer & TV artist{" "}
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
                            Success Story:
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
                              Technoglobe's & Our Managing Director's success
                              story was featured on Dainik Bhaskar's My FM in
                              the program "Kahani Jazbe Ki", with an interview
                              by Mr. Shailesh Lodha, renowned writer & TV artist{" "}
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
                            TV Commercial:
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
                              Our TV commercial aired on Aaj Tak channel, a
                              testament to our industry presence
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        <Cta1 />
      </main>

      <Footer5 />
      <ClientWrapper />
      <TjMagicCursor />

      <style jsx>{`
        .gallery-section {
          background-color: #fdfdfd;
          padding: 80px 20px;
          color: #222;
          margin-top: 100px; /* space below the header */
        }

        .page-title {
          text-align: center;
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 34px;
          color: #333;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .gallery-card {
          overflow: hidden;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          background: #fff;
          height: 340px;
          transition: transform 0.2s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
        }

        .gallery-card video.video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .gallery-card:hover video.video-element {
          transform: scale(1.04);
        }

        @media (max-width: 600px) {
          .page-title {
            font-size: 1.4rem;
            margin-bottom: 30px;
          }

          .gallery-card {
            height: 240px;
          }
        }
      `}</style>
    </div>
  );
}
