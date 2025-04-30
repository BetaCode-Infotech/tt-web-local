import "./Welcome.css";
import Group468 from "../../assets/Group 468.png";
import { useState } from "react";
import { Divider } from "@mui/material";

// import TrueTalentWhite from "../assets/Group 6068.svg";
import TrueTalentWhite from "../../assets/Group 6068.svg";
import TrueTalentDark from "../../assets/Group 5956.svg";
import SmartSearch from "../../assets/smart search-img@2x.png";
import RecruitersImg from "../../assets/recruiter_img.png";
import SearchIcon from "../../assets/search icon.svg";
import CustomCarousel from "../../Components/CustomCarousel/CustomCarousel";
// import Navbar from "../../Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
// import WhatsAppImg from "../../assets/whatsapp.png";

function Welcome() {
  const jobData = [
    {
      company: "Commvault Systems India",
      title: "Associate, Global Employment",
      type: "Full Time · 2Y-3Y",
      location: "Bangalore",
      timeAgo: "1 mo ago",
    },
    {
      company: "Findr Pro Technologies Pvt Ltd",
      title: "Python Developer",
      type: "Fixed Price",
      location: "Remote",
      timeAgo: "1 mo ago",
    },
    // Add more job cards here
  ];

  const industries = [
    { label: "Technology", icon: TrueTalentWhite },
    { label: "Education", icon: TrueTalentWhite },
    { label: "Hospitality", icon: TrueTalentWhite },
    { label: "Healthcare", icon: TrueTalentWhite },
    {
      label: "Engineering",
      icon: TrueTalentWhite,
      highlight: true,
    },
    { label: "Banking", icon: TrueTalentWhite },
    { label: "Finance", icon: TrueTalentWhite },
    { label: "Automotive", icon: TrueTalentWhite },
    { label: "Telecom", icon: TrueTalentWhite },
    { label: "Chemical", icon: TrueTalentWhite },
    { label: "Travel", icon: TrueTalentWhite },
    { label: "Retail", icon: TrueTalentWhite },
  ];

  // const industries = [
  //   { label: "Technology", icon: techIcon },
  //   { label: "Education", icon: educationIcon },
  //   { label: "Hospitality", icon: hospitalityIcon },
  //   { label: "Healthcare", icon: healthcareIcon },
  //   {
  //     label: "Engineering & Construction",
  //     icon: engineeringIcon,
  //     highlight: true,
  //   },
  //   { label: "Banking", icon: bankingIcon },
  //   { label: "Finance", icon: financeIcon },
  //   { label: "Automotive", icon: automotiveIcon },
  //   { label: "Telecom", icon: telecomIcon },
  //   { label: "Chemical", icon: chemicalIcon },
  //   { label: "Travel", icon: travelIcon },
  //   { label: "Retail", icon: retailIcon },
  // ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % jobData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + jobData.length) % jobData.length);
  };
  return (
    <div className="App">
      <Navbar>
        <section className="container-2">
          <div className="the-ultimate-hiring">
            <div className="left">
              <h1>
                The <span className="highlight">Ultimate</span>
                <br />
                Hiring
                <br />
                Platform
              </h1>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* <div className="ai-circle">AI</div> */}
            </div>

            <div className="right-container">
              <div className="right">
                <h2>Search Jobs</h2>
                <input type="text" placeholder="Skill / job roles" />
                <input type="text" placeholder="City" />

                <div className="search-type">
                  <label>
                    <input type="radio" name="search" />
                    TT Smart Search
                  </label>
                  <label>
                    <input type="radio" name="search" defaultChecked />
                    Keyword Search
                  </label>
                </div>

                <div className="options">
                  <span>Title</span>
                  <span>Description</span>
                  <span>Skills</span>
                  <span>Company Name</span>
                </div>

                <div className="search-btn-container">
                  <button className="search-btn">
                    <img src={SearchIcon} />
                    AI Search
                  </button>
                </div>
              </div>
              <div className="divider-container">
                <Divider
                  style={{
                    backgroundColor: "rgb(62,135, 135)",
                  }}
                />
              </div>
              <div className="recruiter">
                Are you a recruiter? <br />
                <a href="#" className="check-out">
                  Check out ➚
                </a>
              </div>
            </div>
          </div>
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-left">
              <p className="subtext">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="hero-right">
              <img src={Group468} alt="Hero" />
              <div className="hero-text">
                <h1>
                  Get the
                  <br />
                  <span className="highlight">Right Job</span>
                  <br />
                  You Deserve
                </h1>
                <p className="description">
                  Elevating Careers with AI Talent Matching
                </p>
              </div>
            </div>
          </section>

          {/* Featured Jobs Section */}
          <section className="featured-jobs">
            <div className="left">
              <h2>
                Featured <br />
                <span className="faded">Jobs</span>
                <br />
                for You
              </h2>
              <button className="custom-search-button">View All Jobs</button>
            </div>
            <div className="right">
              <CustomCarousel showStatus={false} showIndicators={false}>
                <div className="job-cards">
                  {[1, 2, 3].map((job) => (
                    <div key={job} className="job-card">
                      <div className="job-header">
                        <img
                          src={TrueTalentWhite}
                          alt="Company Logo"
                          className="job-header-logo"
                        />
                      </div>

                      <p className="company-name">Commvault Systems India</p>

                      <Divider
                        sx={{
                          backgroundColor: "#fff",
                        }}
                      />
                      <h3 className="job-title">
                        Associate, Global Employment
                      </h3>
                      <p className="job-info">Full Time . 2Y - 3Y</p>
                      <p className="location">📍 Bangalore</p>
                      <p className="posted">1 mo ago</p>
                    </div>
                  ))}
                </div>
                <div className="job-cards">
                  {[1, 2, 3].map((job) => (
                    <div key={job} className="job-card">
                      <div className="job-header">
                        <img
                          src={TrueTalentWhite}
                          alt="Company Logo"
                          className="job-header-logo"
                        />
                      </div>

                      <p className="company-name">Commvault Systems India</p>

                      <Divider
                        sx={{
                          backgroundColor: "#fff",
                        }}
                      />
                      <h3 className="job-title">
                        Associate, Global Employment
                      </h3>
                      <p className="job-info">Full Time . 2Y - 3Y</p>
                      <p className="location">📍 Bangalore</p>
                      <p className="posted">1 mo ago</p>
                    </div>
                  ))}
                </div>
              </CustomCarousel>
            </div>
          </section>
          <section className="featured-jobs-2">
            <div className="left">
              <CustomCarousel showStatus={false} showIndicators={false}>
                <div className="job-cards">
                  {[1, 2, 3].map((job) => (
                    <div key={job} className="job-card">
                      <div className="job-header">
                        <img
                          src={TrueTalentWhite}
                          alt="Company Logo"
                          className="job-header-logo"
                        />
                      </div>

                      <p className="company-name">Commvault Systems India</p>

                      <Divider
                        sx={{
                          backgroundColor: "#fff",
                        }}
                      />
                      <h3 className="job-title">
                        Associate, Global Employment
                      </h3>
                      <p className="job-info">Full Time . 2Y - 3Y</p>
                      <p className="location">📍 Bangalore</p>
                      <p className="posted">1 mo ago</p>
                    </div>
                  ))}
                </div>
                <div className="job-cards">
                  {[1, 2, 3].map((job) => (
                    <div key={job} className="job-card">
                      <div className="job-header">
                        <img
                          src={TrueTalentWhite}
                          alt="Company Logo"
                          className="job-header-logo"
                        />
                      </div>

                      <p className="company-name">Commvault Systems India</p>

                      <Divider
                        sx={{
                          backgroundColor: "#fff",
                        }}
                      />
                      <h3 className="job-title">
                        Associate, Global Employment
                      </h3>
                      <p className="job-info">Full Time . 2Y - 3Y</p>
                      <p className="location">📍 Bangalore</p>
                      <p className="posted">1 mo ago</p>
                    </div>
                  ))}
                </div>
              </CustomCarousel>
            </div>

            <div className="right">
              <h2>
                Featured <br />
                <span className="faded">Gigs</span>
                <br />
                for You
              </h2>
              <button className="custom-search-button">View All Gigs</button>
            </div>
          </section>
          <section className="smart-search">
            <div className="smart-image">
              <img src={SmartSearch} alt="Smart Search Illustration" />
            </div>
            <div className="smart-content">
              <h3>Smart Search</h3>
              <span>
                First of its kind and a unique feature for job seekers, where
                our AI handles job applications for you—applying to the most
                relevant job roles automatically, so your resume gets noticed by
                the best recruiters!
              </span>
              <p>
                <strong>Smart Apply</strong>
              </p>
              <p>
                <strong>Smart JD</strong>
              </p>
            </div>
          </section>
          <section className="industries-section">
            <h2 className="section-subtitle">Popular</h2>
            <h1 className="section-title">Industries</h1>

            <div className="industries-grid">
              {industries.map((item, index) => (
                <div
                  key={index}
                  className={`industry-card ${
                    item.highlight ? "highlight" : ""
                  }`}
                >
                  <img src={item.icon} alt={item.label} />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <div className="cta-box">
              <p>
                Recruiters, take your hiring to the next level with our next-gen
                platform!
              </p>
              <div className="know-more-container">
                <button>KNOW MORE</button>
              </div>
            </div>
          </section>
          <section>
            <div className="working-with-us">
              <div className="aligned-image-wrapper">
                <img src={RecruitersImg} alt="Isometric Illustration" />
              </div>
            </div>
          </section>

          <section className="carousel-section">
            <h2>Top Hiring Companies</h2>
            <div className="carousel-wrapper">
              <div className="carousel-track">
                <img src={TrueTalentDark} alt="Harman" />
                <img src={TrueTalentDark} alt="Reliance" />
                <img src={TrueTalentDark} alt="Aditya Birla" />
                <img src={TrueTalentDark} alt="Bharti AXA" />
                <img src={TrueTalentDark} alt="Reliance again" />
              </div>
              <div className="carousel-controls">
                <span className="arrow">&#8592;</span>
                <span className="arrow">&#8594;</span>
              </div>
            </div>
          </section>

          {/* Trusted Academia Partners */}
          <div className="academia-section-container">
            <section className="academia-section">
              <h2>Trusted Academia Partners</h2>
              <div className="academia-wrapper">
                <div className="academia-track">
                  <img src={TrueTalentDark} alt="App Ringer" />
                  <img src={TrueTalentDark} alt="Learnbay" />
                  <img src={TrueTalentDark} alt="Innovate Technologies" />
                  <img src={TrueTalentDark} alt="Imarticus Learning" />
                </div>
              </div>{" "}
            </section>
            <div className="carousel-controls">
              <span className="arrow">&#8592;</span>
              <span className="arrow">&#8594;</span>
            </div>
          </div>
          <div className="container-2">
            <Footer/>
          </div>
        </section>
      </Navbar>
    </div>
  );
}

export default Welcome;
