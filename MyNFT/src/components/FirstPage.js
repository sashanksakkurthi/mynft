import React, { useRef } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Gallery from "./Gallery";
import About from "./About";
import Home from "./Home";
import Logo from "../assets/logo.png";

const FirstPage = () => {
  let marker = useRef();

  const handleMarker = (e) => {
    marker.current.style.left = `${e.target.offsetLeft}px`;
    marker.current.style.width = `${e.target.offsetWidth}px`;
  };
  const [data, setData] = React.useState([{}]);

  return (
    <BrowserRouter basename="/MyNFT">
      <div className="firstpage">
        <nav className="navbar navbar-expand-lg  m-0 d-flex justify-content-center">
          <Link className="navbar-brand" to="/">
            <img src={Logo} className="logo-brand" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <div className="marker" ref={marker}></div>
              <li className="nav-item" onClick={handleMarker}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={handleMarker}>
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item" onClick={handleMarker}>
                <Link className="nav-link" to="/about">
                  Profile
                </Link>
              </li>
              <li className="nav-item" onClick={handleMarker}>
                <Link className="nav-link" to="/">
                  Top
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home setData={setData} data={data} />} />

          <Route path="/gallery" element={<Gallery data={data} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default FirstPage;
