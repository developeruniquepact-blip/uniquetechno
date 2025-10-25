"use client";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer5";
import Cta1 from "@/components/sections/cta/Cta1";


import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const WorkWithUs = () => {
  console.log("WorkWithUs loaded");

  return (
    <div>
      {/* Header */}
    <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />      
{/* Main Content */}
<main style={{ paddingTop: "120px" }}>

			
        <section className="tj-careers-details section-space" style={{ padding: "40px" }}>
          <div className="container">
            <div className="row rg-50">
              {/* Left Content Section */}
              <div className="col-lg-8">
                <div className="tj-post-wrapper">
                  <div className="tj-post-single-post">
                    <div className="tj-entry-content">
                      <div className="sec-heading mb-0">
                        <span className="sub-title">Work with-Us</span>
                        <h2 className="sec-title" style={{ fontSize: "32px" }}>
                          Work With Us at Technoglobe UAE
                        </h2>
                      </div>
                      <br />
                      <p>
                        At Technoglobe UAE, we are always on the lookout for passionate, skilled,
                        and driven individuals who want to make a difference through education and
                        training.
                      </p>
                      <p>
                        Whether you're an experienced trainer, career counselor, or academic
                        professional, we offer a collaborative and growth-oriented work environment.
                      </p>

                      <div className="tj-check-list">
                        <h4>Why Join Us?</h4>
                      </div>

                      <ul>
                        <li>✔️ Dynamic and inclusive workplace culture</li>
                        <li>✔️ Career development and upskilling opportunities</li>
                        <li>✔️ Access to advanced training tools</li>
                        <li>✔️ Collaborate with experienced educators</li>
                        <li>✔️ Contribute to meaningful educational impact</li>
                      </ul>

                      <p>
                        If you're ready to take the next step in your professional journey and want
                        to be part of a fast-growing, mission-driven organization, we’d love to hear
                        from you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Section */}
              <div className="col-lg-4">
                <aside className="tj-blog-sidebar sticky-form">
                  <div className="tj-sidebar-widget">
                    <h5 style={{ color: "navy" }}>Ready to Apply?</h5>
                    <h1 style={{ fontSize: "32px" }}>Join Our Team</h1>

                    <form action="#" className="tj-careers-form">
                      <div className="form-input">
                        <input type="text" name="name" placeholder="Your Name*" required />
                      </div>
                      <div className="form-input">
                        <input type="email" name="email" placeholder="Email Address*" required />
                      </div>
                      <div className="form-input">
                        <input type="text" name="phone" placeholder="Mobile No.*" required />
                      </div>
                      <div className="form-input">
                        <select name="role" required>
                          <option value="">Select Role*</option>
                          <option value="trainer">Trainer</option>
                          <option value="counselor">Counselor</option>
                         
                        </select>
                      </div>
                      <div className="form-input">
                        <label>Upload CV*</label>
                        <input type="file" name="cv" required />
                      </div>
                      <div className="form-input">
                        <label>Upload Image*</label>
                        <input type="file" name="image" required />
                      </div>
                      <div className="form-input">
                        <textarea
                          name="message"
                          placeholder="Cover Letter or Message (optional)"
                        />
                      </div>
                      <div className="tj-careers-button">
                        <ButtonPrimary text={"Submit Now"} type="submit" />
                      </div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </div>

          {/* Optional: Sticky form style */}
          <style jsx>{`
            .sticky-form {
              position: sticky;
              top: 20px;
              z-index: 10;
            }

            ul {
              list-style: none;
              padding-left: 0;
            }

            ul li {
              margin-bottom: 10px;
            }

            .form-input {
              margin-bottom: 15px;
            }

            input,
            select,
            textarea {
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 4px;
            }

            textarea {
              min-height: 100px;
            }

            label {
              display: block;
              margin-bottom: 5px;
              font-weight: 500;
            }
          `}</style>
        </section>

        {/* CTA Section */}
        <Cta1 />
      </main>

      {/* Footer */}
      <Footer footerType="inner" />

      {/* Global Client Wrappers */}
      <ClientWrapper />
      <TjMagicCursor />
    </div>
  );
};

export default WorkWithUs;
