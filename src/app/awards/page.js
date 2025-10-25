"use client";
import { Metadata } from 'next'

import React from "react";
import Image from "next/image";

// Layout Components
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/heros/HeroInner";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export const metadata = {
  title: 'Awards & Recognition | Technoglobe IT Training Institute in Sharjah, UAE',
  description: 'Discover the awards and recognitions earned by Technoglobe, a leading IT training and development institute in Sharjah, UAE. Our achievements reflect excellence in education, innovation, and student success.',
  keywords: ['Technoglobe awards', 'IT institute recognition', 'education excellence Sharjah', 'IT training UAE', 'best training institute', 'award-winning institute', 'Technoglobe UAE']
}


export default function Home5() {
  // Load image URLs from public/images/Gallery/
  const images = Array.from({ length: 15 }, (_, i) => `/images/Gallery/awards${i + 1}.webp`);

  return (
    <>
      <Header headerType={5} isHeaderTop={true} />
            <Header isStickyHeader={true} headerType={5} />
      <main>
        <HeroInner title={"Awards"} text={"Awards"} />

        <div className="gallery-section mt-0">
          <div className="tj-entry-content content-wrapper">
            <div className="sec-heading mb-0">
              <span
                className="sub-title wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ color: "#0070f3", fontWeight: "700" }}
              >
                Awards
              </span>
              <h1 className="sub-hed">Our Achievements</h1>
            </div>

            <br />
            <p className="wow fadeInUp" data-wow-delay="0.1s" style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#444" }}>
              Over the years, we have proudly earned a collection of prestigious
              awards and accolades that celebrate our relentless pursuit of
              excellence, innovation, and unmatched customer satisfaction. Each
              award is not just a trophy, but a story of passion, dedication,
              and the unwavering commitment of our team.
            </p>

            <p className="wow fadeInUp" data-wow-delay="0.3s" style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#444" }}>
              From industry honors to customer service recognitions, these
              achievements are milestones marking our journey to becoming a
              trusted leader in our field. We are honored to share these
              moments with our valued clients, partners, and community who
              inspire us every day.
            </p>

            <div className="tj-check-list" style={{ marginTop: "2rem" }}>
              <h1 className="page-hed">Why Our Awards Matter</h1>
            </div>

            <div
              className="service-check-list mt-4 mb-4 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{ paddingLeft: "1.2rem" }}
            >
              <ul style={{ listStyleType: "none", paddingLeft: 0, color: "#555" }}>
                {[
                  "Recognition for groundbreaking innovation that pushes industry boundaries",
                  "Validation of our customer-centric approach and success-driven solutions",
                  "Motivation to continuously exceed expectations and deliver excellence",
                  "Aspiring to set new standards in our industry and community",
                ].map((text, idx) => (
                  <li key={idx} style={{ marginBottom: "0.8rem", display: "flex", alignItems: "center" }}>
                    <i className="tji-double-check" style={{ color: "#0070f3", marginRight: "8px" }}></i>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <h2 className="sec-title text-anim" style={{ fontSize: "24px", color: "#004080", marginTop: "2rem", fontWeight: "700" }}>
                Join us as we celebrate these milestones and continue to shape a future defined by success and innovation.
              </h2>

              <div className="page-btn" data-wow-delay="0.3s">
                <ButtonPrimary text={"Join Us Now "} url={"/contact"} />
              </div>
            </div>

            <h1 className="page-title">Award for Best IT Training Academy in UAE</h1>

            {/* Award Images */}
            <div className="gallery-grid">
              {images.map((image, index) => (
                <div key={index} className="gallery-card">
                  <Image
                    src={image}
                    alt={`Award ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

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
          margin-top: 100px;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .page-btn {
          display: block;
          margin: 40px auto 34px auto;
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          text-align: center;
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .sub-hed {
          font-size: 32px;
          font-weight: 600;
          margin-top: 20px;
          margin-bottom: 24px;
          color: #333;
        }

        .page-hed {
          font-size: 32px;
          font-weight: 600;
          margin-top: 40px;
          margin-bottom: 34px;
          color: #333;
        }

        .page-title {
          text-align: center;
          font-size: 32px;
          font-weight: 600;
          margin-top: 40px;
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
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          background: #fff;
          height: 340px;
          transition: transform 0.2s ease;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 600px) {
          .page-title {
            font-size: 1.6rem;
            margin-bottom: 30px;
          }

          .gallery-card {
            height: 240px;
          }

          .content-wrapper {
            padding: 0 16px;
          }
        }
      `}</style>
    </>
  );
}
