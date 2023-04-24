import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Homepage,
  ExperiencePage,
  ProjectPage,
  ContactPage,
} from "./pages/index";

import "aos/dist/aos.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/experience" element={<ExperiencePage />} />
        <Route exact path="/project" element={<ProjectPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
