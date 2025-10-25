"use client";

import React from "react";
import Image from "next/image";

// Layout Components
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import HeroInner from "@/components/sections/heros/HeroInner";
import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home5() {
  // Load image URLs from public/images/Gallery/
  const images = Array.from(
    { length: 15 },
    (_, i) => `/images/Gallery/awards${i + 1}.webp`
  );

  return (
    <>
   <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />

      <main>
        <HeroInner title={"Study Abroad"} text={"Study Abroad"} />

        <div className="gallery-section mt-0">
          <div className="tj-entry-content content-wrapper">
            <div className="tj-check-list" style={{ marginTop: "2rem" }}>
              <h1 className="page-hed">STREAMS</h1>
            </div>

            <div
              className="service-check-list mt-4 mb-4 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{ paddingLeft: "1.2rem" }}
            >
              <ul
                style={{ listStyleType: "none", paddingLeft: 0, color: "#555" }}
              >
                {[
                  "Medicine",
                  "Liberal Arts",
                  "Management",
                  "Creative Arts",
                  "International Law",
                  "Hotel Management",
                  "Hospitality Management",
                  "Computer Science & IT",
                ].map((text, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: "0.8rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="tji-double-check"
                      style={{ color: "#0070f3", marginRight: "8px" }}
                    ></i>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tj-check-list" style={{ marginTop: "2rem" }}>
              <h1 className="page-hed">PROGRAMS</h1>
            </div>

            <div
              className="service-check-list mt-4 mb-4 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{ paddingLeft: "1.2rem" }}
            >
              <ul
                style={{ listStyleType: "none", paddingLeft: 0, color: "#555" }}
              >
                {[
                  "Certificate",
                  "Diploma",
                  "Advance Diploma",
                 
                  "Undergraduate",
                  "Graduate",
                  "DBA / Ph.D.",
                ].map((text, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: "0.8rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="tji-double-check"
                      style={{ color: "#0070f3", marginRight: "8px" }}
                    ></i>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sec-heading mb-0">
              <span
                className="sub-title wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ color: "#0070f3", fontWeight: "700" }}
              >
                Study Abroad
              </span>
              <h1 className="sub-hed">
                Study Abroad Made Simple and Affordable
              </h1>
            </div>

            <br />
            <p
              className="wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#444" }}
            >
              Leader in IT training has joined hands with Leader in Study Abroad
              TASA GLOBAL, a renowned expert in study abroad services. This
              strategic collaboration is now available across all Technoglobe
              centers, offering students exclusive guidance on studying abroad
              through our network of: 1000+ Universities 35+ Countries
              Empowering students to achieve their global education dreams!”
              Studying Abroad is a unique opportunity for students aspiring to
              make their careers in the international arena. It demands
              scientific & long-term planning, just not for higher education,
              but also for a career. In this journey, students and their parents
              often face multiple challenges. Tasa Global is one stop solution
              for all requirements of Study Abroad.
            </p>

            <p
              className="wow fadeInUp"
              data-wow-delay="0.3s"
              style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#444" }}
            >
              TASA Global is India’s premium Global Careers & Education
              consultancy company to provide “Scientific Education Solutions” to
              students who are aspiring for international education & career
              abroad. At Tasa Global we design and develop customized,
              personalized, and unique international education solutions through
              proper scientific assessment, understanding student’s academic
              profile, natural competencies, and desire.
            </p>
          </div>
<div className="page-btn" data-wow-delay="0.3s">
                <ButtonPrimary text={"Join Us Now "} url={"/contact"} />
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
