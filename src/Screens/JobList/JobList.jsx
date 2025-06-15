import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./JobList.css";
import Navbar from "../../Components/Navbar/Navbar";
import { ReactComponent as GridIcon } from "../../assets/grid_icon.svg";
import { ReactComponent as ListIcon } from "../../assets/row_icon.svg";
import premium_icon from "../../assets/premium_icon.png";
import location_icon from "../../assets/location icon.svg";
import { getTimeAgo } from "../../utils/constantFunctions";
import company_logo from "../../assets/TT logo-new-white.png";
import Footer from "../../Components/Footer/Footer";

const jobsData = [
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

  const [hasMore, setHasMore] = useState(true);
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [jobLimit, setJobLimit] = useState(4);

  useEffect(() => {
    setVisibleJobs(jobsData.slice(0, jobLimit));
    if (jobLimit >= jobsData.length) {
      setHasMore(false);
    }
  }, [jobLimit]);

  const navigate = useNavigate();

  const observerRef = useRef();

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreJobs();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [visibleJobs, hasMore]);

  const loadMoreJobs = () => {
    setJobLimit((prevLimit) => {
      const newLimit = prevLimit + 2;
      return newLimit > jobsData.length ? jobsData.length : newLimit;
    });
  };

  const handleJobClick = () => {
    navigate("/job-details");
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
                  className={`list-view icon ${view === "grid" ? "active" : ""}`}
                />
                <ListIcon
                  onClick={() => setView("card")}
                  className={`list-view icon ${
                    view === "card" ? "active" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* List View start */}
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
            {visibleJobs.map((job, idx) => (
              <div
                key={idx}
                className={`job-card ${view} ${job.selected ? "selected" : ""}`}
                onClick={() => handleJobClick()}
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

                    <div ref={observerRef} style={{ height: "1px" }}></div>
                  </>
                ) : (
                  <>
                    {job.premium && (
                      <div className="premium-badge-topright">
                        <span className="premium-badge-grid-text">Premium</span>
                        <img src={premium_icon} alt="Premium" />
                      </div>
                    )}
                    <img
                      src={company_logo}
                      alt="company_logo"
                      className="job-company-logo"
                    />
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
          {/* List View end */}

          <div ref={observerRef} style={{ height: "1px" }}>
            <p> You Have reached the end section</p>
          </div>
        </div>
      </div>
      <Footer />
    </Navbar>
  );
};

export default JobList;
