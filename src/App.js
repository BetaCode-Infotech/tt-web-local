// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Welcome from "./Screens/Welcome/Welcome";
import JobList from "./Screens/JobList/JobList";
// import ContactUs from "./Screens/ContactUs/Contact";
import ContactUs from "./Screens/ContactUs/ContactUs";
import JobDetails from "./Screens/JobDetails/JobDetails";
import ExperienceHiring from "./Screens/ExperienceHiring/ExperienceHiring";
import WelcomeRecruiter from "./Screens/Recruiter/WelcomeRecruiter";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/experience-hiring" element={<ExperienceHiring />} />
        <Route path="/recruiter-welcome" element={<WelcomeRecruiter/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
