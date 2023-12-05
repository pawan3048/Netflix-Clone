import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Nav_Comp/Navbar";
import Home from "./Components/Nav_Comp/Home";
import About from "./Components/Nav_Comp/About";
import Service from "./Components/Nav_Comp/Service";
import Section from "./Components/Nav_Comp/Section";
import Login from "./Components/Nav_Comp/Login";
import Signin from "./Components/Nav_Comp/Login";
import Signup from "./Components/Nav_Comp/Signup";
import NoPage from "./Components/Main_Comp/NoPage";
import Movies from "./Components/Main_Comp/Movies";
import Cards from "./Components/Main_Comp/Cards";

const App = () => {
  return (
    <>
      <div id="wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/section" element={<Section />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signout" element={<Home/>} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </div>{/*wrapper */}
    </>
  );
};

export default App;
