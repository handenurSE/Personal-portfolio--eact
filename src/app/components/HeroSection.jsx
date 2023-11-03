"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Hello, I am{" "}
            </span>

            <TypeAnimation
              sequence={[
                "Hande",
                1000,
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Ever wondered how to say my name? It is like Hahn-deh.
          </p>

          <div>
            <a
              href="/Hande-Uzunokur-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download My CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <Image
            src="/images/phonescreen.png"
            alt="porfolio image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
