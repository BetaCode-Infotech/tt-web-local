import React, { useState } from "react";
import "./JobList.css";
import Navbar from "../../Navbar/Navbar";
// import GridIcon from "../assets/grid_icon.svg";
// import ListIcon from "../assets/row_icon.svg";
import { ReactComponent as GridIcon } from "../../assets/grid_icon.svg";
import { ReactComponent as ListIcon } from "../../assets/row_icon.svg";
import premium_icon from "../../assets/premium_icon.png";
import location_icon from "../../assets/location icon.svg";

const jobs = [
  {
    title: "Sales executive",
    skills: "Customer relation, Marketing",
    location: "Jaipur, Rajasthan",
    company: "Findr Pro Technologies Pvt Ltd",
    type: "Full Time",
    experience: "1Y -3Y",
    premium: false,
    selected: false,
  },
  {
    title: "Sales executive",
    skills: "Customer relation, Marketing",
    location: "Jaipur, Rajasthan",
    company: "Findr Pro Technologies Pvt Ltd",
    type: "Full Time",
    experience: "1Y -3Y",
    premium: false,
    selected: true,
  },
  {
    title: "Sales executive",
    skills: "Customer relation, Marketing",
    location: "Jaipur, Rajasthan",
    company: "Findr Pro Technologies Pvt Ltd",
    type: "Full Time",
    experience: "1Y -3Y",
    premium: true,
    selected: false,
  },
  {
    title: "Sales executive",
    skills: "Customer relation, Marketing",
    location: "Jaipur, Rajasthan",
    company: "Findr Pro Technologies Pvt Ltd",
    type: "Full Time",
    experience: "1Y -3Y",
    premium: false,
    selected: false,
  },
];

const JobList = () => {
  const [view, setView] = useState("grid");

  return (
    <Navbar>
      <div className="job-list-container">
        <div className="search-bar-container">
          <div className="search-bar-wrapper">
            <input
              type="text"
              placeholder="Skill / job roles"
              className="search-input"
            />
            <input type="text" placeholder="City" className="search-input" />
            <button className="search-button">Search</button>
          </div>

          <div className="search-options">
            <label className="radio-option">
              <input type="radio" name="searchType" />
              <span className="circle" /> TT Smart Search
            </label>
            <label className="radio-option">
              <input type="radio" name="searchType" defaultChecked />
              <span className="circle checked" /> Keyword Search
            </label>

            <div className="tag-options">
              <span className="tag">Title</span>
              <span className="tag">Description</span>
              <span className="tag">Skills</span>
              <span className="tag">Company Name</span>
            </div>
          </div>
        </div>
        <div className="green-divider" />

        <div className="joblist-container">
          {/* <div className={`joblist-container ${view === "grid" ? "grid-view" : "card-view"}`}> */}
          <div className="joblist-header">
            <h2>Search Result</h2>
            <div className="sort-section">
              <span>Sort by:</span>
              <select>
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>

              <div className="view-toggle">
                <GridIcon
                  onClick={() => setView("grid")}
                  className={`icon ${view === "grid" ? "active" : ""}`}
                />
                <ListIcon
                  onClick={() => setView("card")}
                  className={`icon ${view === "card" ? "active" : ""}`}
                />

                {/* <div className="list-view" /> */}
              </div>
            </div>
          </div>

          {view === "card" && (
            <div className="joblist-titles">
              <span>Job</span>
              <span>Skills</span>
              <span>Location</span>
              <span>Company</span>
              <span>Job Type</span>
              <span>Experience</span>
            </div>
          )}

          <div className={`jobs-wrapper ${view}`}>
          {jobs.map((job, idx) => (
  <div
    key={idx}
    className={`job-card ${view} ${job.selected ? "selected" : ""}`}
  >
    {view === "card" ? (
      <>
        <div className="job-title">
          <div className="job-title-text">
            {job.title}
            {job.premium && (
              <div className="premium-inline">
                <img src={premium_icon} alt="Premium" />
                <span className="premium-badge-inline-text">Premium</span>
              </div>
            )}
          </div>
        </div>
        <div className="job-detail-skill">{job.skills}</div>
        <div className="job-detail-location">{job.location}</div>
        <div className="company-name">{job.company}</div>
        <div className="job-detail-type">{job.type}</div>
        <div className="job-detail-experience">{job.experience}</div>
      </>
    ) : (
      <>
        {job.premium && (
          <div className="premium-badge-topright">
            <span className="premium-badge-grid-text">Premium</span>
            <img src={premium_icon} alt="Premium" />
          </div>
        )}
        <div className="job-title-text">{job.title}</div>
        <div className="company-name">{job.company}</div>
        <div className="white-separator" />
        <div className="job-detail-skill">{job.skills}</div>
        <div className="job-detail-ty-ex-grid">
          <div className="job-detail-type">{job.type},</div>
          <div className="job-detail-experience">{job.experience}</div>
        </div>
        <div className="location-image">
          <img src={location_icon} alt="Location" />
          <div className="job-detail-location">{job.location}</div>
        </div>
        
        
      </>
    )}
  </div>
))}

          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default JobList;
