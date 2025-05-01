import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Welcome from "./Screens/Welcome/Welcome";
import JobList from "./Screens/JobList/JobList";

import ContactUs from "./Components/Contactus/contact";

import JobDetails from "./Screens/JobDetails/JobDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/job-list" element={<JobList />} />
        <Route path="/job-details" element={<JobDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
