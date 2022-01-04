import "./App.css";
// import Login from "./components/login/loginForm";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Company from "./components/company";
import Student from "./components/student";
import Admin from "./components/admin";
import Welcome from "./components/welcomScreen";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/company-login" element={<Company />} />
      <Route path="/student-login" element={<Student />} />
      <Route path="/" exact element={<Welcome />} />
      <Route path="*" element={<h1> Page Not found</h1>} />
    </Routes>
  );
}

export default App;
