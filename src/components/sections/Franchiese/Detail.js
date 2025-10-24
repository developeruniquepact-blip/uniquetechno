"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const FranchiseDetails = ({ currentItemId }) => {
  return (
    <>
      <section className="tj-careers-details section-space pb-0">

        <div className="container">
          <div className="row rg-50">
            <div className="col-lg-12">
              <div className="tj-post-wrapper">
                <div className="tj-post-single-post">
                  {/* <!-- content --> */}
                  <div className="tj-entry-content">
                    <div className="sec-heading mb-0">

                      <h2 className="sec-title text-anim" style={{ fontSize: "32px" }}>
                       Why Choose Master Franchise – UAE
                      </h2>
                    </div>
                    <br />
                    <br />
                   <p className="wow fadeInUp" data-wow-delay="0.1s">
                The UAE is one of the world’s fastest-growing education and technology hubs. As the Country Master Franchise, you will get:
                    </p>
                    <div
                      className="service-check-list mt-4 mb-4 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <ul>
                        <li>
                          <i className="tji-double-check"></i>
                          <span>
                            Exclusive rights for the entire UAE territory
                          </span>
                        </li>
                        <li>
                          <i className="tji-double-check"></i>
                          <span>
                           30% share from new center franchise fees
                          </span>
                        </li>
                        <li>
                          <i className="tji-double-check"></i>
 <span>
                            10% monthly royalty income from all operating centers
                          </span>
                        </li>
                        <li>
                          <i className="tji-double-check"></i>
                          <span>
                            Support in marketing, operations, and lead generation
                          </span>
                        </li>
                        <li>
                          <i className="tji-double-check"></i>
                          <span>
                            Proven, profitable model backed by 25+ years of success
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
                    This is your chance to lead the expansion of a globally trusted  education brand across the Emirates.
                    </p>
                  </div><br></br>
                    <div className="tj-entry-content">
                    <div className="sec-heading mb-0">

                      <h2 className="sec-title text-anim" style={{ fontSize: "32px" }}>
                       Investment & ROI Snapshot
                      </h2>
                    </div>
                 
                    <div
                      className="service-check-list mt-4 mb-4 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <ul>
                        <li>
                          <span>
                           Investment
                          </span>
                        </li>
                        <li>
 <span>
                           AED 250,000 (One-Time)
                          </span>
                        </li>
                        <li>
                          <span>
                            ROI Period
                          </span>
                        </li>
                        <li>
                          <span>
                            6–9 Months
                          </span>
                        </li>
                        <li>
                          <span>
                            Annual Income
                          </span>{" "}
                        </li>
                        <li>
                          <span>
                            AED 1 Million+
                          </span>
                        </li>
                        
                      </ul>
                    </div>
 <p className="wow fadeInUp" data-wow-delay="0.3s">
                    A low-investment, high-return opportunity built on a globally recognized franchise model.
                    </p>
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
    </>
  );
};

export default FranchiseDetails;
