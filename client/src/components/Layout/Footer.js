import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="p-3"
      style={{
        background: "black", // footer background black
        color: "white",
      }}
    >
      <h4 className="text-center mb-2">
        All Rights Reserved &copy; Sandeep Kumar
      </h4>
      <p className="text-center mt-2">
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About Us
        </Link>{" "}
        |{" "}
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact Us
        </Link>
      </p>
    </div>
  );
};

export default Footer;
