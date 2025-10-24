"use client";

import React from "react";



const ArrowIcon = () => (
  <svg
    style={{ marginRight: 8, verticalAlign: 'middle' }}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="#007bff"
    viewBox="0 0 24 24"
  >
    <path d="M10 17l5-5-5-5v10z" />
  </svg>
);

const TasaPartnerSuccess = () => {
  return (
<section className="tj-careers-details section-space pt-0" style={{ marginTop: "-30px" }}>
      <div className="container">
        <div className="row rg-50">
          <div className="col-lg-12">
            <div className="tj-post-wrapper">
              <div className="tj-post-single-post">
                <div className="tj-entry-content">

                  {/* TASA Study Abroad Section */}
                  <div className="sec-heading mb-0">
                    <h2 className="sec-title" style={{ fontSize: "32px" }}>
                      TASA Study Abroad – Additional Income Stream
                    </h2>
                  </div>

                  <p className="wow fadeInUp" data-wow-delay="0.1s">
                    With Technoglobe’s study abroad arm, <strong>TASA</strong>, you gain another powerful vertical:
                  </p>

                  <div className="service-check-list mt-4 mb-4">
  <ul>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>200+ global university tie-ups</li>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>Student counselling & application services</li>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>Visa & documentation support</li>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>Test preparation & interview training</li>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>Earn commissions per enrolled student</li>
  </ul>
</div>


                  <p>
                    <strong>This dual revenue model ensures steady and scalable profits.</strong>
                  </p>

                  <br />

                  {/* Why Partner Section */}
                  <div className="sec-heading mb-0">
                    <h2 className="sec-title" style={{ fontSize: "32px" }}>
                      Why Partner with Technoglobe
                    </h2>
                  </div>

                 <div className="service-check-list mt-4 mb-4">
  <ul>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>Proven & profitable business model</li>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>Global brand recognition and credibility</li>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>Ongoing marketing, operational & technical support</li>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>Fastest ROI in the education industry</li>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>Multiple income streams: Training + Study Abroad + Franchise Expansion</li>
  </ul>
</div>

                  <p>
                    <strong>When you partner with Technoglobe, you’re not just buying a franchise — you’re joining a legacy of excellence.</strong>
                  </p>

                  <br />

                  {/* Final CTA Section */}
                  <div className="sec-heading mb-0">
                    <h2 className="sec-title" style={{ fontSize: "32px" }}>
                      Join the Technoglobe Success Story
                    </h2>
                  </div>

                  <p>
                    Take the lead in transforming UAE’s education landscape.
                    <br />
                    Be the face of a global education brand and start earning from multiple revenue streams within months.
                  </p>

                <div className="service-check-list mt-4 mb-4">
  <ul>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>💼 Invest AED 250,000</li>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>📈 ROI in 6–9 months</li>
    <li><span style={{ color: '#007bff', marginRight: '8px' }}>➔</span>💰 Earn AED 75,000+/month</li>
  </ul>
</div>

                  <p>
                    <strong>👉 Become the Country Master Franchise for UAE Today!</strong>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add styled-jsx styles here if you want */}
      <style jsx>{`
        .tj-careers-details {
          background: #f9f9f9;
          padding-bottom: 60px;
        }
        .sec-title {
          color: #1a1a1a;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .service-check-list ul {
          list-style: none;
          padding-left: 0;
        }
        .service-check-list ul li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 12px;
          font-size: 18px;
          color: #444;
        }
        .service-check-list ul li i.tji-double-check {
          position: absolute;
          left: 0;
          top: 3px;
          color: #4caf50; /* green check color */
          font-style: normal; /* if you use icon font, adjust accordingly */
        }
        p {
          font-size: 18px;
          color: #555;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default TasaPartnerSuccess;
