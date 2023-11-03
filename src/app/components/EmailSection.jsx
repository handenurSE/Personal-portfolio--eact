"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const EmailSection = () => {
  const iconContainerStyle = {
    display: "inline-block",
    padding: "5px",
    backgroundColor: "  #6495ED ",
    borderRadius: "20%",
  };

  const iconStyle = {
    color: "black",
    width: "20px",
    height: "20px",
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div className="text-white">
        <h5 className="text-2xl font-bold my-2">Contact Me</h5>
        <div className="text-[#FFFFF] max-w-md">
          <p className="mb-4">
            
          </p>

          <div className="social-icons flex space-x-4">
            <a href="https://www.linkedin.com/in/hande-u-b39a90281">
              <div style={iconContainerStyle}>
                <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
              </div>
            </a>
            <a href="https://github.com/handenurSE">
              <div style={iconContainerStyle}>
                <FontAwesomeIcon icon={faGithub} style={iconStyle} />
              </div>
            </a>
            <a href="https://twitter.com/handehix">
              <div style={iconContainerStyle}>
                <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block text-sm font-medium m-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium m-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium m-2"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-950 text-white font-medium py-2.5 px-5 rounded-lg w-full "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
