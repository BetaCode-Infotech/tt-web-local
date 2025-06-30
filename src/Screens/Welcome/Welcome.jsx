import "./Welcome.css";
import Group468 from "../../assets/Group 468.png";
import { useState } from "react";
import { Divider } from "@mui/material";
import JDCreation from "../../assets/JD creation_img.png";
import MultiUser from "../../assets/multi user_img.png";
import JobPosting from "../../assets/job posting_img.png";
import PayAsYouGo from "../../assets/pay as you go_img.png";

// import TrueTalentWhite from "../assets/Group 6068.svg";
import TrueTalentWhite from "../../assets/TT logo-new-white.png";
import TrueTalentDark from "../../assets/TT logo-new-black.png";
import SmartSearch from "../../assets/smart search-img@2x.png";
import RecruitersImg from "../../assets/recruiter_img.png";
import SearchIcon from "../../assets/search icon.svg";
import CustomCarousel from "../../Components/CustomCarousel/CustomCarousel";
// import Navbar from "../../Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
// import WhatsAppImg from "../../assets/whatsapp.png";
import AIimage from "../../assets/hero-image-mobile.jpg";
import Technology from "../../assets/technology icon.svg";
import Education from "../../assets/education icon.svg";
import Hospitality from "../../assets/hospitality icon.svg";
import Healthcare from "../../assets/healthcare icon.svg";
import Engineering from "../../assets/engineering icon.svg";
import Banking from "../../assets/banking icon.svg";
import Finance from "../../assets/finance icon.svg";
import Automotive from "../../assets/automotive icon.svg";
import Telecom from "../../assets/telecom icon.svg";
import Chemical from "../../assets/chemical icon.svg";
import Travel from "../../assets/travel icon.svg";
import Retail from "../../assets/retail icon.svg";
import { Link } from "react-router-dom";

function Welcome() {
  const smartContentData = [
    {
      id: 1,
      title: "AI Driven JD Creation",
      subheading:
        "Do not have a JD? Fret not! In just 2 minutes, TrueTalent assists you in creating a well articulated and thorough JD for each position you have.",
      image: JDCreation,
    },
    {
      id: 2,
      title: "Free Multi-user Access",
      subheading:
        "Why pay additional charges to access the same database for each recruiter? TrueTalent lets you create multiple user accesses without any aditional charge.",
      image: MultiUser,
    },
    {
      id: 3,
      title: "Unlimited Free Job Posting",
      subheading:
        "Why spend large sums of money for job posting, without the surety of getting applicants? TrueTalent has a zero charge foryour job postings. Go ahead and post all your open positions.",
      image: JobPosting,
    },
    {
      id: 4,
      title: "Pay-as-you-go",
      subheading:
        "Are you paying for the service you never use? We do not sell packages unless you need them. All our offerings come with a Pay-as-you-go model, on TrueTalent you pay for only what you need.",
      image: PayAsYouGo,
    },
  ];

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
    { label: "Technology", icon: Technology },
    { label: "Education", icon: Education },
    { label: "Hospitality", icon: Hospitality },
    { label: "Healthcare", icon: Healthcare },
    {
      label: "Engineering",
      icon: Engineering,
      highlight: true,
    },
    { label: "Banking", icon: Banking },
    { label: "Finance", icon: Finance },
    { label: "Automotive", icon: Automotive },
    { label: "Telecom", icon: Telecom },
    { label: "Chemical", icon: Chemical },
    { label: "Travel", icon: Travel },
    { label: "Retail", icon: Retail },
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

  const [activeId, setActiveId] = useState(1);
  const [selectedImage, setSelectedImage] = useState(smartContentData[0].image);

  const toggleAccordion = (id, image) => {
    if (activeId === id) {
      // setActiveId(null);
    } else {
      setActiveId(id);
      setSelectedImage(image);

      const imageContainer = document.querySelector(".smart-image");
      if (imageContainer) {
        imageContainer.classList.add("fade-out");
      }

      setTimeout(() => {
        setSelectedImage(image);
        if (imageContainer) {
          imageContainer.classList.remove("fade-out");
        }
      }, 500);
    }
  };

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
        {/* <div className="ai-circle">AI</div> */}

        <section className="container-2">
          <img src={AIimage} alt={AIimage} className="hero-mobile-img" />
          <div className="hero-image-top-filled" />
          <div className="the-ultimate-hiring">
            <div className="left">
              <h1>
                The <br />
                <span className="highlight">Ultimate</span>
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
                <Link to="/recruiter-welcome" className="check-out">
                  Check out ➚
                </Link>
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
              <CustomCarousel>
                {/* <div className="job-cards"> */}
                {[1, 2, 3, 4, 5, 6].map((job) => (
                  <div key={"card2" + job} className="job-card">
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
                    <h3 className="job-title">Associate, Global Employment</h3>
                    <p className="job-info">Full Time . 2Y - 3Y</p>
                    <p className="location">📍 Bangalore</p>
                    <p className="posted">1 mo ago</p>
                  </div>
                ))}
              </CustomCarousel>
            </div>
          </section>
          <section className="featured-jobs-2">
            <div className="left">
              <CustomCarousel>
                {[1, 2, 3, 4, 5, 6].map((job) => (
                  <div key={"card1" + job} className="job-card">
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
                    <h3 className="job-title">Associate, Global Employment</h3>
                    <p className="job-info">Full Time . 2Y - 3Y</p>
                    <p className="location">📍 Bangalore</p>
                    <p className="posted">1 mo ago</p>
                  </div>
                ))}
              </CustomCarousel>
            </div>

            <div className="right">
              <h2 >
                Featured <br />
                <span className="faded">Gigs</span>
                <br />
                for You
              </h2>
              <button className="custom-search-button">View All Gigs</button>
            </div>
          </section>

          <div className="smart-search">
            {/* Left Side Image */}
            <div className="smart-image">
              <img src={selectedImage} alt="Selected" />
            </div>

            {/* Right Side Accordions */}
            <div className="smart-content">
              {smartContentData.map((item) => (
                <div key={item.id}>
                  <div
                    onClick={() => toggleAccordion(item.id, item.image)}
                    className="smart-content-title"
                  >
                    <h3
                      className={`smart-search-title ${
                        activeId === item.id ? "active" : ""
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  {activeId === item.id && (
                    <div className="smart-content-description">
                      <p
                        className={`smart-search-subheading ${
                          activeId === item.id ? "open" : ""
                        }`}
                      >
                        {item.subheading}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

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
              {/* <div className="carousel-controls">
                <span className="arrow">&#8592;</span>
                <span className="arrow">&#8594;</span>
              </div> */}
            </div>
          </section>

          {/* Trusted Academia Partners */}
          <div className="academia-section-container">
            <section className="academia-section">
              <h2>Trusted Academia Partners</h2>
              <div className="academia-wrapper">
                <CustomCarousel arrows={false} showDots>
                  {[1, 2, 3, 4, 5, 6].map((job) => {
                    return (
                      <div>
                        <img
                          src={TrueTalentDark}
                          alt="App Ringer"
                          className="academia-track-image"
                        />
                      </div>
                    );
                  })}
                </CustomCarousel>
              </div>{" "}
            </section>
            <div className="carousel-controls">
              <span className="arrow">&#8592;</span>
              <span className="arrow">&#8594;</span>
            </div>
          </div>
          <Footer />
        </section>
      </Navbar>
    </div>
  );
}

export default Welcome;
