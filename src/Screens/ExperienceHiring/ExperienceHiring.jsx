import React, { useEffect, useState } from "react";
import "./ExperienceHiring.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Advance from "../../assets/advance feature_img.png";
import Price from "../../assets/pricing_img.png";
import Pay from "../../assets/pay_img.png";

function ExperienceHiring() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [active, setActive] = useState("employer");
  const [transitioning, setTransitioning] = useState(false);

  const handleToggle = (target) => {
    if (active === target || transitioning) return;

    setTransitioning(true);
    setTimeout(() => {
      setActive(target);
      setTransitioning(false);
    }, 300); // match CSS duration
  };

  return (
    <div className="true-talent-container">
      <Navbar />
      <div className="experience-hiring-container">
        <div className="first-container">
          <h1 className="experience-text">
            Experience Hiring 2.0 with TrueTalent
          </h1>
          <p className="are-you-text">Are you?</p>

          <div className="toggle-switch">
            <div
              className={`toggle-option ${
                active === "employer" ? "active" : ""
              }`}
              onClick={() => handleToggle("employer")}
            >
              Employer
            </div>
            <div
              className={`toggle-option ${
                active === "candidate" ? "active" : ""
              }`}
              onClick={() => handleToggle("candidate")}
            >
              Candidate
            </div>
            <div className={`slider ${active}`}></div>
          </div>
          <div
            className={`transition-wrapper ${
              transitioning ? "fade-out" : "fade-in"
            }`}
          >
            {active === "employer" ? (
              <>
                <h1 className="love-text">Why Hiring Company Love Us?</h1>
                <div className="features-container">
                  <div className="card-wrapper">
                    <div className="card-item">
                      <div className="feature-card">
                        <img src={Advance} alt="Advance" />
                      </div>
                      <p className="card-caption">Advanced Features</p>
                      <p className="card-caption-text">
                        {" "}
                        TrueTalent's advanced features makes hiring talented job
                        seekers an easy and cost-effective process for companies
                        of all sizes.
                      </p>
                    </div>
                    <div className="card-item">
                      <div className="feature-card">
                        <img src={Price} alt="Price" />
                      </div>
                      <p className="card-caption">Pricing Plans</p>
                      <p className="card-caption-text">
                        {" "}
                        TrueTalent has a suitable option and pricing plan for
                        you, regardless of whether you are seeking to fill a
                        single position in the near future or hundreds
                        ofpositions across an array of skills and industries.
                      </p>
                    </div>
                    <div className="card-item">
                      <div className="feature-card">
                        <img src={Pay} alt="Pay" />
                      </div>
                      <p className="card-caption">Pay as you go </p>
                      <p className="card-caption-text">
                        {" "}
                        With a Pay-as-you-go pricing model, TrueTalent's costs
                        are always proportional to your requirements.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="second-container">
                  <div className="card-grid">
                    <div className="grid-card">
                      <p className="grid-card-text">
                        Al+ HI (Human intelligence)
                      </p>
                      <p className="grid-card-text-head">
                        Al driven JD Creation
                      </p>
                      <p className="grid-card-text">
                        TrueTalent assists you in generating a well-articulated
                        and thorough JD for each job opening you have, using
                        only the skills and years of experience you have at
                        their disposal. A detailed JD is always advantageous for
                        attracting the attention of competent applicants. In
                        addition to TrueTalent, JD created can be used to post
                        positions on any job platform or the organization's
                        internal job boards.
                      </p>
                    </div>

                    <div className="grid-card">
                      <p className="grid-card-text">USER ACCESS</p>
                      <p className="grid-card-text-head">
                        Free multi-user access
                      </p>
                      <p className="grid-card-text">
                        We believe what you receive should be shared with
                        everyone on your tearn at no additional cost, so there
                        are no fees for additional logins, In fact, we do not
                        charge for any login, not even the first one.
                      </p>
                    </div>

                    <div className="grid-card">
                      <p className="grid-card-text">SMART SEARCH</p>
                      <p className="grid-card-text-head">
                        Skill match (Beyond the Keywords)
                      </p>
                      <p className="grid-card-text">
                        While most talent search platforms provide search
                        options based on keywords, which leads to a large number
                        of irrelevant and low-matching profiles and ultimately
                        makes it more difficult for recruiters to obtain
                        relevant profiles, TrueTalent uses a customized and
                        advanced technology algorithm to identify candidates
                        whose skills precisely match the search skills. Multiple
                        parameters are taken into account by the customized
                        algorithm in order to provide you with the best results.
                      </p>
                    </div>

                    <div className="grid-card">
                      <p className="grid-card-text">PAYMENT</p>
                      <p className="grid-card-text-head">Pay-as-you-go</p>
                      <p className="grid-card-text">
                        What should least burden hiring companies is the
                        sourcing cost, as it is only one of the many costs
                        associated with hiring employees. Hence all our plans
                        are pay-as-you-go. Hence all our plans are
                        pay-as-you-go. You spend only what you need and avoid
                        all bulk and high onetime purchases when you use
                        TrueTalent
                      </p>
                    </div>

                    <div className="grid-card">
                      <p className="grid-card-text">EMPLOYMENT BRANDING</p>
                      <p className="grid-card-text-head">
                        Free Job posting and Employer Branding
                      </p>
                      <p className="grid-card-text">
                        At TrueTalent, employing companies have the unrestricted
                        ability to post as many job openings as they desire at
                        no additional cost, as we are not only a candidate
                        search platform but also an employer branding platform
                        that assists businesses in increasing their Employer
                        Brand Value.
                      </p>
                    </div>

                    <div className="grid-card">
                      <p className="grid-card-text">JOB TYPE</p>
                      <p className="grid-card-text-head">
                        Full Time / Gig work
                      </p>
                      <p className="grid-card-text">
                        TrueTalent is the only job platform that provides
                        employers with the options to hire both full time
                        employees as well as gig (freelance) workers. And all
                        these through a single sign-on. So whether you are
                        looking for hiring a full time employee or looking to
                        hire for a short assignment, you need to look no further
                        than TrueTalent.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="love-text">
                  Why Jobseekers Prefer our Platform?
                </h1>
                <div className="features-container">
                  <div className="card-wrapper">
                    <div className="card-item">
                      <div className="feature-card">
                        <img src={Advance} alt="Advance" />
                      </div>
                      <p className="card-caption">Advanced Features</p>
                      <p className="card-caption-text">
                        {" "}
                        TrueTalent's advanced features makes hiring talented job
                        seekers an easy and cost-effective process for companies
                        of all sizes.
                      </p>
                    </div>
                    <div className="card-item">
                      <div className="feature-card">
                        <img src={Price} alt="Price" />
                      </div>
                      <p className="card-caption">Pricing Plans</p>
                      <p className="card-caption-text">
                        {" "}
                        TrueTalent has a suitable option and pricing plan for
                        you, regardless of whether you are seeking to fill a
                        single position in the near future or hundreds
                        ofpositions across an array of skills and industries.
                      </p>
                    </div>
                    <div className="card-item">
                      <div className="feature-card">
                        <img src={Pay} alt="Pay" />
                      </div>
                      <p className="card-caption">Pay as you go </p>
                      <p className="card-caption-text">
                        {" "}
                        With a Pay-as-you-go pricing model, TrueTalent's costs
                        are always proportional to your requirements.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="second-container">
                  <div className="card-grid">
                    <div className="grid-card">
                      <p className="grid-card-text">UNIQUE PROFILE</p>
                      <p className="grid-card-text-head">
                        Increased visibility to Recruiters
                      </p>
                      <p className="grid-card-text">
                        TrueTalent helps you stand out among job seekers by
                        providing a unique online presence and profile.
                        Recruiters can access your in-depth profile and offer
                        opportunities that match your skills and aptitude.
                      </p>
                    </div>
                    <div className="grid-card">
                      <p className="grid-card-text">PERSONALIZATION</p>
                      <p className="grid-card-text-head">Job Notifications</p>
                      <p className="grid-card-text">
                        Stay up to date with the latest job opportunities by
                        receiving job alerts and notifications right to your
                        email or phone. Never miss out on great job
                        opportunities again.
                      </p>
                    </div>
                    <div className="grid-card">
                      <p className="grid-card-text">RECOMMENDATIONS</p>
                      <p className="grid-card-text-head">
                        Personalized Job Recommendations
                      </p>
                      <p className="grid-card-text">
                        TrueTalent uses smart algorithms to provide personalized
                        job recommendations based on your skills and experience,
                        increasing the chances of finding the perfect job.
                      </p>
                    </div>
                    <div className="grid-card">
                      <p className="grid-card-text">WINNING PROPOSITION</p>
                      <p className="grid-card-text-head">
                        Get ahead in the Job Race
                      </p>
                      <p className="grid-card-text">
                        Our powerful tools give you everything you need to
                        prepare for job interviews, including personalized
                        feedback and Al powered tips to help you imprave your
                        resume and cover letter. We also offer career counseling
                        services to help you take your next steps towards
                        success.
                      </p>
                    </div>

                    <div className="grid-card">
                      <p className="grid-card-text">PERSONAL BRANDING</p>
                      <p className="grid-card-text-head">Resume Maker</p>
                      <p className="grid-card-text">
                        Our online resume maker allows you to create a
                        professional and compelling resume that highlights your
                        skills and competencies, increasing your chances of
                        landing the perfect job.
                      </p>
                    </div>

                    <div className="grid-card">
                      <p className="grid-card-text">GREAT CONNECTIONS</p>
                      <p className="grid-card-text-head">
                        Connect with Recruiters directly
                      </p>
                      <p className="grid-card-text">
                        TrueTalent makes it easy for you to directly connect
                        with recruiters one-on-one, cutting down on time and
                        hassle of traditional job applications.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExperienceHiring;
