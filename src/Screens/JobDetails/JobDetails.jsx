import React, { useState } from "react";
import "./JobDetails.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Tooltip,
} from "@mui/material";
import leftNav from "../../assets/left nav.svg";
import extLink from "../../assets/external link icon.svg";

const JobDetails = () => {
  const [jobDescription, setJobDescription] = useState({
    description:
      "This position reports to the Human Resources (HR) director and interfaces with company managers and HR staff. Company XYZ is committed to an employee-orientated, high performance culture that emphasizes empowerment, quality, continuous improvement, and the recruitment and ongoing development of a superior workforce.",
    responsibilities: [
      "Identify potential clients and generate new business opportunities.",
      "Develop and maintain relationships with existing customers.",
      "Conduct product presentations and demonstrations to prospective clients.",
      "Negotiate contracts and close deals to achieve sales targets.",
      "Provide regular updates on sales activities and client feedback.",
      "Collaborate with the marketing team to plan promotional activities.",
      "Maintain accurate records of all sales and prospecting activities.",
      "Stay updated on industry trends and competitor activities.",
      "Deliver exceptional customer service and post-sale support.",
      "Attend networking events and industry conferences as needed.",
    ],
    requirements: [
      "Bachelor’s degree in Business Administration, Marketing, or a related field.",
      "Minimum 2 years of experience in sales or business development.",
      "Excellent communication, negotiation, and interpersonal skills.",
      "Ability to work independently and as part of a team.",
      "Strong problem-solving and decision-making abilities.",
      "Proficiency in Microsoft Office and CRM software.",
      "Comfortable with traveling locally for client meetings.",
      "Strong organizational and time management skills.",
      "Ability to meet and exceed sales targets consistently.",
      "Prior experience in the technology or SaaS industry is a plus.",
    ],
    benefits: [
      "Performance-based incentives and quarterly bonuses.",
      "Health insurance coverage for employees and dependents.",
      "Paid annual leave, sick leave, and public holidays.",
      "Work-from-home flexibility options.",
      "Opportunities for career growth and professional development.",
      "Company-sponsored training programs and workshops.",
      "Employee referral bonuses.",
      "Friendly and inclusive work environment.",
      "Maternity and paternity leave benefits.",
      "Team outings, celebrations, and monthly engagement activities.",
    ],
    closing:
      "At Findr Pro, we believe in empowering our people and offering them opportunities to grow and excel. If you're passionate, driven, and ready to be part of a fast-paced, dynamic environment — we'd love to hear from you! Join us in our mission to revolutionize the industry and make a difference.",
  });
  return (
    <Navbar>
      <div className="job-details-page">
        <div className="header">
          <div className="title-with-icon">
            <img src={leftNav} alt="logo" className="back-icon" />
            <div className="title">Sales Executive</div>
          </div>
          <Button
            sx={{
              background: "linear-gradient(to right, #1a73e8, #00bfa6)",
              color: "white",
              paddingX: 3,
              width: "130px",
              borderRadius: "25px",
              fontWeight: 600,
              textTransform: "none",
              gap: 1,
              "&:hover": {
                background: "linear-gradient(to right, #1a73e8, #00bfa6)",
                opacity: 0.9,
              },
            }}
          >
            Apply
          </Button>
        </div>

        <div className="location-info">
          <span>Bangalore, Karnataka</span>
          <span className="dot"> • </span>
          <span>Posted 1 day ago</span>
          <span className="dot"> • </span>
          <span>Posted By Tapan kumar Jena</span>
          <span className="dot"> • </span>
          <span>Updated 20 hours ago</span>
        </div>

        <div className="meta-box">
          <div className="meta-item">
            <div className="meta-label">Experience</div>
            <div className="meta-value">1Y - 3Y</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Industry Domain</div>
            <div className="meta-value">Others</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Job Type</div>
            <div className="meta-value">Full Time</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Work Location</div>
            <div className="meta-value">Jaipur</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Job Duration</div>
            <div className="meta-value">Permanent</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Joining</div>
            <div className="meta-value">Immediate</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Engagement Mode</div>
            <div className="meta-value">On-Site</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Travel Required</div>
            <div className="meta-value">Yes (50%)</div>
          </div>
        </div>

        {/* Merged Content Container */}

        <div className="content-container">
          <div className="details-panel">
            <div className="left-right-content">
              {/* LEFT SIDE */}
              <div className="left-side">
                <div className="section">
                  <div className="section-title">Skills</div>
                  <div className="sub-title">Required Skills</div>
                  <ul>
                    <li>Customer relation</li>
                    <li>Marketing</li>
                  </ul>
                  <div className="sub-title">Additional Skills</div>
                  <ul>
                    <li>Communication</li>
                    <li>Negotiation skill</li>
                  </ul>
                </div>
                <div className="separator"></div>

                <div className="section">
                  <div className="section-title">Education</div>
                  <div>N/A</div>
                </div>

                <div className="section">
                  <div className="section-title">No. of positions</div>
                  <div>1</div>
                </div>

                <div className="section">
                  <div className="section-title">Salary Range (Monthly)</div>
                  <div>₹ 20,000 - ₹ 40,000</div>
                </div>

                <div className="section">
                  <div className="section-title">Incentive/Bonus</div>
                  <div>Quarterly</div>
                </div>

                <div className="section">
                  <div className="section-title">Benefits and Perks</div>
                  <div>Dental Insurance</div>
                  <div>Maternity Leave</div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="right-side">
                <div className="section">
                  <div className="section-title">Job Description</div>
                  <p className="job-desc-text">{jobDescription.description}</p>
                  <div className="job-desc-responsibilities">
                    <p>Responsibilities:</p>
                    <ul>
                      {jobDescription.responsibilities.map((item, index) => (
                        <li key={index}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="job-desc-requirements">
                    <p>Requirements:</p>
                    <ul>
                      {jobDescription.requirements.map((item, index) => (
                        <li key={index}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="job-desc-benefits">
                    <p>Benefits:</p>
                    <ul>
                      {jobDescription.benefits.map((item, index) => (
                        <li key={index}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="job-desc-text">{jobDescription.closing}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="company-info">
            <div className="company-about">About the Company</div>

            <div className="company-logo">LOGO</div>
            <div className="company-header">
              <div className="company-name">Findr Pro Technologies Pvt Ltd</div>
              <img src={extLink} alt="logo" className="external-link-icon" />
            </div>

            <div className="company-website">
              <span className="website-label">Website:</span>
              <a
                href="http://www.findr.pro"
                className="company-link"
                target="_blank"
                rel="noreferrer"
              >
                http://www.findr.pro
              </a>
            </div>
            <p className="company-employee">Employee: 1-49</p>

            <div className="company-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Navbar>
  );
};

export default JobDetails;
