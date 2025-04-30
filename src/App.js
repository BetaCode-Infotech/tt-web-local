import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Welcome from "./Screens/Welcome/Welcome";
import JobList from "./Screens/JobList/JobList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/job-list" element={<JobList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
