import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

import TrueTalentWhite from "../../assets/TT logo-new-white.png";
import HamburgerMenu from "../../assets/hamburger-menu.png";
// import SearchIcon from "../assets/search icon.svg";
import SearchIcon from "../../assets/search icon.svg";
import Path4452 from "../../assets/Path 4452.svg";
import Path4453 from "../../assets/Path 4453.svg";
import evaluator125703be from "../../assets/evaluator.125703be.svg";
import hideIcon from "../../assets/hide icon.svg";
import unhideIcon from "../../assets/unhide icon.svg";
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
import "./Navbar.css";

function HideOnScroll(props) {
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);
  const [activeTab, setActiveTab] = useState("Jobs");
  const navigate = useNavigate();
  // const tabs = ["Jobs", "Gigs", "Resume Maker"];
  const tabs = [
    {
      path: "/job-list",
      label: "Jobs",
    },
    {
      path: "/gig-list",
      label: "Gigs",
    },
    {
      path: "/resume-maker",
      label: "Resume Maker",
    },
  ];

  const location = useLocation();
  const getActiveTab = () => {
    const currentPath = location.pathname;

    const activeTab = tabs.find((tab) => currentPath.startsWith(tab.path));
    return activeTab ? activeTab.label : "";
  };
  const [profileType, setProfileType] = useState([
    {
      id: 0,
      img: Path4452,
      title: "I’m a candidate",
      desc: "I’m here to find my next job.",
      active: false,
    },
    {
      id: 1,
      img: Path4453,
      title: "I’m an employer",
      desc: "I’m here to look for job seekers.",
      active: true,
    },
    {
      id: 2,
      img: evaluator125703be,
      title: "I’m an evaluator",
      desc: "Here to help you identify quality candidates.",
      active: false,
    },
  ]);

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <HideOnScroll {...props}> */}
      <AppBar elevation={0}>
        <Toolbar disableGutters style={{ backgroundColor: "rgb(5, 21, 89)" }}>
          <div className="navbar-container-web-view true-talent-container">
            <Link to="/">
              <img
                src={TrueTalentWhite}
                alt="logo"
                style={{
                  width: "150px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>
            <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
              {tabs.map((tab) => (
                <Typography
                  key={tab}
                  onClick={() => {
                    // setActiveTab(tab);
                    navigate(tab.path); // Navigate to job page
                  }}
                  className={`tab-link ${
                    getActiveTab() === tab.label ? "active" : ""
                  }`}
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {tab.label}
                </Typography>
              ))}
            </Stack>

            {/* Actions */}
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Button
                sx={{
                  background: "linear-gradient(to right, #1a73e8, #00bfa6)",
                  color: "white",
                  paddingX: 3,
                  borderRadius: "25px",
                  fontWeight: 600,
                  minWidth: "150px",
                  textTransform: "none",
                  gap: 1,
                  "&:hover": {
                    background: "linear-gradient(to right, #1a73e8, #00bfa6)",
                    opacity: 0.9,
                  },
                }}
              >
                <img src={SearchIcon} /> AI Search
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "25px",
                  textTransform: "none",
                  paddingX: 3,
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                onClick={() => {
                  setLoginModalOpen(true);
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "25px",
                  textTransform: "none",
                  paddingX: 3,
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Register
              </Button>
            </Stack>
          </div>
          <Box
            className="navbar-container-mobile-view"
            sx={{
              backgroundColor: "rgb(5, 21, 89)",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pl: 1,
              pr: 1,
            }}
          >
            <Link to="/">
              <img
                src={TrueTalentWhite}
                alt="logo"
                style={{
                  width: "150px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>
            <img
              className="mobile-view-hamburger"
              src={HamburgerMenu}
              onClick={() => setMenuOpen(true)}
              alt="logo"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <div className={`mobile-nav-modal ${menuOpen ? "open" : ""}`}>
              <div className="mobile-nav-content">
                <button
                  className="close-btn"
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </button>
                <ul>
                  {tabs.map((tab) => (
                    <li
                      key={tab}
                      onClick={() => {
                        // setActiveTab(tab);
                        navigate(tab.path); // Navigate to job page
                      }}
                      className={`tab-link ${
                        getActiveTab() === tab.label ? "active" : ""
                      }`}
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      {tab.label}
                    </li>
                  ))}

                  <li
                    onClick={() => {
                      setMenuOpen(false);
                      setLoginModalOpen(true);
                    }}
                  >
                    Login
                  </li>
                  <li>Register</li>
                </ul>
              </div>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
      <Toolbar />
      <div style={{}}>
        {props.children}

        <Modal
          open={loginModalOpen}
          onClose={() => setLoginModalOpen(false)}
          aria-labelledby="modal-modal-title"
          disableAutoFocus
          sx={{
            outline: "none",
            "&:focus": {
              outline: "none",
              border: "none",
            },
            "&:focus-visible": {
              outline: "none",
              border: "none",
            },
          }}
          tabIndex={-1} // optional, if Box is focusable
          aria-describedby="modal-modal-description"
        >
          <div className="login-modal-style">
            <div className="modal-container">
              <div className="modal">
                <button
                  className="close-btn"
                  onClick={() => {
                    setLoginModalOpen(false);
                  }}
                >
                  ✕
                </button>
                <h2>Login to TrueTalent</h2>
                <input
                  type="email"
                  placeholder="Email*"
                  className="input-field"
                />
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password*"
                    className="input-field"
                  />
                  <button
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <img src={hideIcon} alt="toggle-password" />
                    ) : (
                      <img src={unhideIcon} alt="toggle-password" />
                    )}
                  </button>
                </div>
                <div className="options">
                  <label className="remember-me">
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#" className="forgot-password">
                    Forgot password?
                  </a>
                </div>
                <div className="sign-in-btn-wrapper">
                  <button className="sign-in-btn">Sign In</button>
                </div>
                <div className="signup-section">
                  <p>
                    Don’t have an account? <a href="#">Sign Up</a>
                  </p>
                </div>
              </div>

              <div className="modal">
                <button
                  className="close-btn"
                  onClick={() => {
                    setLoginModalOpen(false);
                  }}
                >
                  ✕
                </button>
                <h2>Select Your Profile</h2>
                {/* <div className="profile-options">
                  <div className="profile-card">
                    <div className="icon">
                      <img src={Path4452} alt="profile-icon" />
                    </div>
                    <strong>I’m a candidate</strong>
                    <p>I’m here to find my next job.</p>
                  </div>
                  <div className="profile-card active">
                    <div className="icon">
                      <img src={Path4453} alt="profile-icon" />
                    </div>

                    <strong>I’m an employer</strong>
                    <p>I’m here to look for job seekers.</p>
                  </div>
                  <div className="profile-card">
                    <div className="icon">
                      <img src={evaluator125703be} alt="profile-icon" />
                    </div>
                    <strong>I’m an evaluator</strong>
                    <p>Here to help you identify quality candidates.</p>
                  </div>
                </div> */}
                <div className="profile-options">
                  {profileType?.map((item) => (
                    <div
                      key={item.id}
                      className={`profile-card ${
                        item.active === true ? "active" : ""
                      }`}
                      onClick={() => {
                        setProfileType((prev) =>
                          prev.map((profile) =>
                            profile.id === item.id
                              ? { ...profile, active: true }
                              : { ...profile, active: false }
                          )
                        );
                       
                      }}
                    >
                      <div className="icon">
                        <img src={item.img} alt="profile-icon" />
                      </div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
}
