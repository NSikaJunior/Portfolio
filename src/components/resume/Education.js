import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-blue-500 tracking-[4px]">2020 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Specialisation: Computer Science - Major: Business Intelligence and Analytics (BIA)"
            subTitle="Currently obtaining an engineering degree from EFREI Paris - France (August 2024 - July 2026 )"
            
            des=""
          />
          <ResumeCard
            title="Speciality: IT - Immersive semester - Training given in English"
            subTitle="Licence 3 at EFREI Paris - France / International mobility at AGH University of Krakow - Poland (August 2023 - July 2024)"
            
            des=""
          />
          <ResumeCard
            title="Mathematics, Physics, Chemistry, Industrial Engineering, Computer Science, Languages"
            subTitle="MPSI/MP preparatory classes at ESTEM Casablanca - Morocco (September 2020 - July 2023)"
            
            des=""
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-blue-500 tracking-[4px]">July 2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          /> */}
          <ResumeCard
            title="Managing the branch's customer database and KYC, creating accounts and issuing cards."
            subTitle="Temporary - Summer assistant and customer advisor - Société Générale de l'Haÿ-les-Roses - (09 July 2024 - 03 August 2024)"
            
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
