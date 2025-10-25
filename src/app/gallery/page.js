"use client";

import React from "react";

// Layout Components
import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/heros/HeroInner";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home5() {
  const images = Array.from({ length: 20 }, (_, i) => `/images/Gallery/center${i + 1}.webp`);
  const images2 = Array.from({ length: 12 }, (_, i) => `/images/Gallery/inaug${i + 1}.webp`);

  const image3 = Array.from({ length: 16 }, (_, i) => `/images/Gallery/fair${i + 1}.webp`);

  return (
    <div>
     <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />

      <main>
        
        <HeroInner title={"Gallery"} text={"Gallery"} />

        {/* Grid Photo Gallery */}
        <div className="gallery-section mt-0">
          <h1 className="page-title">Glimpse of Centers</h1>
          <div className="gallery-grid">
            {images.map((img, idx) => (
              <div key={idx} className="gallery-card">
                <img src={img} alt={`Gallery ${idx + 1}`} />
              </div>
            ))}
          </div> <br></br> <br></br>

          <div className="section">
            <h1 className="page-title">Glimpse of Inauguration</h1>
            <div className="gallery-grid">
              {images2.map((img, idx) => (
                <div key={idx} className="gallery-card">
                  <img src={img} alt={`Gallery ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <br /><br /><br /> <br></br>

          <div>
            <h1 className="page-title">Career Opportunities Fair</h1>
            <div className="gallery-grid">
              {image3.map((imgSrc, idx) => (
                <div key={idx} className="gallery-card">
                  <img src={imgSrc} alt={`Gallery ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

        </div>



        <Cta1 />c
      </main>

      <Footer5 />
      <ClientWrapper />
      <TjMagicCursor />

      <style jsx>{`
       .gallery-section {
  background-color: #fdfdfd;
  padding: 80px 20px;
  color: #222;
   margin-top: 40px;
  margin-top: 100px; /* 🆕 Add space below the header */
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
        }

        .gallery-card:hover {
          transform: translateY(-4px);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .gallery-card:hover img {
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
