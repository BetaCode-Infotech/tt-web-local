import "./WelcomeRecruiter.css";
// import Group468 from "../../assets/Group 468.png";
import hiringkeyimage from "../../assets/hiring key image.png";
import candidate from "../../assets/candidate_img.png";

import JDCreation from "../../assets/JD creation_img.png";
import MultiUser from "../../assets/multi user_img.png";
import JobPosting from "../../assets/job posting_img.png";
import PayAsYouGo from "../../assets/pay as you go_img.png";

import right from "../../assets/right nav.svg";
import left from "../../assets/left nav.svg";
import React, { useState } from "react";
import { Divider } from "@mui/material";
// import TrueTalentWhite from "../assets/Group 6068.svg";
import TrueTalentWhite from "../../assets/Group 6068.svg";
import TrueTalentDark from "../../assets/Group 5956.svg";
import SmartSearch from "../../assets/smart search-img@2x.png";
import RecruitersImg from "../../assets/recruiter_img.png";
import SearchIcon from "../../assets/search icon.svg";
import CustomCarousel from "../../Components/CustomCarousel/CustomCarousel";
// import Navbar from "../../Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
// import WhatsAppImg from "../../assets/whatsapp.png";
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

function WelcomeRecruiter() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
    <div className="App-recruiter">
      <Navbar>
        <section className="container-2-recruiter">
          <div className="the-ultimate-hiring-recruiter">
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

                <div className="search-type1">
                  <label>
                    <input type="radio" className="search" />
                    TT Smart Search
                  </label>
                  <label>
                    <input type="radio" className="search" defaultChecked />
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
                Are you a candidate? <br />
                <Link to="/" className="check-out">
                  Check out ➚
                </Link>
              </div>
            </div>
          </div>
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-left">
              <img
                src={hiringkeyimage}
                alt="Hero"
                className="hero-left-image"
              />
            </div>

            <div className="hero-right">
              <div className="hero-text">
                <h3>
                  Hire the
                  <br />
                  <span className="highlight">Best Talent</span>
                  <br />
                  at the lowest prices
                </h3>
                <p className="description">
                  Best Talent with ProprietaryTalent Matching Tool
                </p>
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Jobs Section */}
          <section className="featured-jobs-recruiter">
            <div className="left-recruiter">
              <h2>
                Top <br />
                <span className="faded">Talent</span>
                <br />
                for You
              </h2>
              <button className="custom-search-button-recruiter">
                View All Profiles
              </button>
            </div>
            <div className="right">
              <CustomCarousel
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
              >
                <div className="job-cards-recruiter">
                  {[1, 2, 3].map((job) => (
                    <div key={job} className="job-card-recruiter">
                      <div className="job-header"></div>
                      <p className="company-name">Rajkumar Rao</p>
                      <p className="company-name">Longer Name</p>
                      <p className="designation">Software developer</p>

                      <Divider
                        sx={{
                          backgroundColor: "#fff",
                        }}
                      />

                      <p className="experience">Experience: 6 years</p>
                      <p className="skills">
                        Skills: HTML, CSS, JAVA, Design. Photoshop, Illustrator
                        etc. Multiple skills come here.
                      </p>
                    </div>
                  ))}
                </div>

                <div className="job-cards-recruiter">
                  {[1, 2, 3].map((job) => (
                    <div key={job} className="job-card-recruiter">
                      <div className="job-header"></div>
                      <p className="company-name">Rajkumar Rao</p>
                      <p className="company-name">Longer Name</p>
                      <p className="designation">Software developer</p>

                      <Divider
                        sx={{
                          backgroundColor: "#fff",
                        }}
                      />

                      <p className="experience">Experience: 6 years</p>
                      <p className="skills">
                        Skills: HTML, CSS, JAVA, Design. Photoshop, Illustrator
                        etc. Multiple skills come here.
                      </p>
                    </div>
                  ))}
                </div>
              </CustomCarousel>
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
                Candidates, get your dream job with our next-gen hiring
                platform!
              </p>
              <div className="know-more-container">
                <button>KNOW MORE</button>
              </div>
            </div>
          </section>
          <section className="working-with-us">
            <div className="aligned-image-wrapper">
              <img src={candidate} alt="Isometric Illustration" />
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
          <div className="footer-recruiter">
            <Footer />
          </div>
        </section>
      </Navbar>
    </div>
  );
}

export default WelcomeRecruiter;
