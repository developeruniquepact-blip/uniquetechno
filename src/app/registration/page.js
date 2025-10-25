"use client";
import { Metadata } from 'next'

import Header from "@/components/layout/header/Header";
import Footer5 from "@/components/layout/footer/Footer5";
import HeroInner from "@/components/sections/heros/HeroInner";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";



const CareerForm = () => {
  return (
    <>
      <TjMagicCursor />
    <Header headerType={5} isHeaderTop={true} />
			<Header isStickyHeader={true} headerType={5} />

      <main>
        <HeroInner title="Register Now" text="Register" />
        

        <section className="career-form-full-page">
          <div className="tj-careers-form-container">
            <h5 className="tj-sidebar-widget-title" style={{ color: "navy" }}>
              Apply for a Course Today
            </h5>
            <h1 style={{ fontSize: "32px" }}>Join Our Faculty</h1>

            <form action="#" className="tj-careers-form">
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
                  <select name="cr_course" defaultValue="">
                    <option value="" disabled>
                      Select a Course*
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
                  placeholder="Your Message (optional)"
                ></textarea>
              </div>

              <div className="tj-careers-button">
                <ButtonPrimary text={"Submit now"} type="submit" />
              </div>
            </form>
          </div>
        </section>
      </main>

      <ClientWrapper />
      <Footer5 />

      <style jsx>{`
        .career-form-full-page {
          min-height: 100vh;
          padding: 60px 20px;
          background-color: #f9f9f9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tj-careers-form-container {
          background: #fff;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
        }

        .form-input {
          margin-bottom: 20px;
        }

        .form-input input,
        .form-input textarea,
        .form-input select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .form-input textarea {
          min-height: 100px;
        }

        .label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default CareerForm;
