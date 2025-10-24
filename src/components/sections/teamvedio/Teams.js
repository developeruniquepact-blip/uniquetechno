"use client";

import React from "react";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function VideoPageWithHeaderFooter() {
  // Video and thumbnail arrays
  const videos = Array.from({ length: 4 }, (_, i) => ({
    src: `/images/Gallery/vedio${i + 1}.mp4`,
    poster: `/images/Gallery/thumb${i + 1}.jpeg`, // Thumbnail image for each video
  }));

  return (
    <div>
      {/* Main Video Section */}
      <main>
        <div className="gallery-section">
          <div className="section">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading style-2 text-center">
                  <span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
                    FEEDBACKS
                  </span>
                  <h2 className="sec-title text-anim">Why Choose Us</h2>
                </div>
              </div>
            </div>

            <div className="gallery-grid">
              {videos.map((vid, idx) => (
                <div key={`vid-${idx}`} className="gallery-card">
                  <video
                    src={vid.src}
                    poster={vid.poster} // ✅ Poster added here
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
      </main>

      {/* Footer & Extras */}
      <ClientWrapper />
      <TjMagicCursor />

      {/* Styles */}
      <style jsx>{`
        .gallery-section {
          background-color: #fdfdfd;
          padding: 80px 20px;
          color: #222;
          margin-top: 100px;
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
          .gallery-card {
            height: 240px;
          }
        }
      `}</style>
    </div>
  );
}
