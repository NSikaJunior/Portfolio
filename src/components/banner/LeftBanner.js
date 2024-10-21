import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPython
} from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { SiMicrosoftexcel, SiPowerbi } from "react-icons/si";
import { TbSql } from 'react-icons/tb';
import { Cursor, useTypewriter } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["a Business Intelligence and Analytics Student.", "an Entrepreneur."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-blue-500 capitalize">Sika N'GORAN</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#4299e1"
          />
        </h2>
        <p align="justify" className="text-base font-bodyFont leading-6 tracking-wide">
          I have a degree in Computer Science and Digital Science and have developed a passion 
          for Data Science as a result of my past experiences. developed a passion for Data Science 
          as a result of my past experiences.
        </p>
        <p align="justify" className="text-base font-bodyFont leading-6 tracking-wide">
          I have good interpersonal skills and am rigorous, organised and autonomous. I enjoy working 
          as part of a team and have a strong taste for a job well done.
        </p>
        <p align="justify" className="text-base font-bodyFont leading-6 tracking-wide">
          I have a good capacity for analysis and synthesis, and I'm convinced that I could make a 
          positive contribution to the digital world.
        </p>
        <p align="justify" className="text-base font-bodyFont leading-6 tracking-wide">
          A vital springboard for my career !
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/NSikaJunior" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100082883585331" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://x.com/ngoransika" target="blank">
              <span className="bannerIcon">
                <FaXTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/sika-junior-n-goran/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <TbSql />
            </span>
            <span className="bannerIcon">
              <SiPowerbi />
            </span>
            <span className="bannerIcon">
              <SiMicrosoftexcel />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
