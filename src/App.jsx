import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<ProfilePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
