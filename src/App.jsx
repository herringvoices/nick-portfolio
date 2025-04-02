import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

// Font Awesome configuration
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

// Add all icons to the library
library.add(fas, far, fab);

// Layout component that renders the NavBar and Outlet
const Layout = () => {
  return (
    <>
      <NavBar />

      {/* Add padding-bottom on smaller screens to prevent content from being hidden behind the navbar */}
      <div className="content-container pb-md-0 pb-5">
        <Outlet />
      </div>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Route>
    </Routes>
  );
}

export default App;
