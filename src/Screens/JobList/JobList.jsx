import React, { useState } from "react";
import "./JobList.css";
import Navbar from "../../Components/Navbar/Navbar";
// import GridIcon from "../assets/grid_icon.svg";
// import ListIcon from "../assets/row_icon.svg";
import { ReactComponent as GridIcon } from "../../assets/grid_icon.svg";
import { ReactComponent as ListIcon } from "../../assets/row_icon.svg";
import premium_icon from "../../assets/premium_icon.png";
import location_icon from "../../assets/location icon.svg";
import { getTimeAgo } from "../../utils/constantFunctions";
import left from "../../assets/left nav.svg";
import right from "../../assets/right nav.svg";
import company_logo from "../../assets/Group 6068.svg";
import Footer from "../../Components/Footer/Footer";


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
    created_time: "2025-03-10T10:30:00Z",
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
    created_time: "2025-04-28T12:00:00Z",
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
    created_time: "2024-04-28T12:00:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
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
    created_time: "2025-04-30T08:15:00Z",
  },
];

const JobList = () => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 16; // Adjust as needed

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            {currentJobs.map((job, idx) => (
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
                            <span className="premium-badge-inline-text">
                              Premium
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="job-detail-skill">{job.skills}</div>
                    <div className="job-detail-location">{job.location}</div>
                    <div className="company-name">{job.company}</div>
                    <div className="job-detail-type">{job.type}</div>
                    <div className="job-detail-experience">
                      {job.experience}
                    </div>
                  </>
                ) : (
                  <>
                    {job.premium && (
                      <div className="premium-badge-topright">
                        <span className="premium-badge-grid-text">Premium</span>
                        <img src={premium_icon} alt="Premium" />
                      </div>
                    )}
                    <img src={company_logo} alt="company_logo" className="job-company-logo"/>
                    <div className="job-title-text">{job.title}</div>
                    <div className="company-name">{job.company}</div>
                    <div className="white-separator" />
                    <div className="job-detail-skill">{job.skills}</div>
                    <div className="job-detail-ty-ex-grid">
                      <div className="job-detail-type">{job.type},</div>
                      <div className="job-detail-experience">
                        {job.experience}
                      </div>
                    </div>
                    <div className="location-image">
                      <img src={location_icon} alt="Location" />
                      <div className="job-detail-location">{job.location}</div>
                    </div>
                    <div className="job-card-footer">
                      <span className="time-ago">
                        {getTimeAgo(job.created_time)}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <button
            className="page-btn nav-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={left} alt="Previous" className="arrow-icon" />
          </button>

          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              className={`page-btn ${currentPage === idx + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}

          <button
            className="page-btn nav-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={right} alt="Next" className="arrow-icon" />
          </button>
        </div>
      </div>
      <Footer/>
    </Navbar>
    
  );
};

export default JobList;
