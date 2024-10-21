import React from 'react';
import { projectFive, projectFour, projectOne, projectSix, projectThree, projectTwo } from "../../assets/index";
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Transportation Problem"
          des=" The modelling uses linear optimisation to minimise costs, with performance aimed at a 25% reduction, applied to supply chain improvement."
          src={projectOne}
          link="https://github.com/NSikaJunior/Resolution_du_Probleme_de_Transport"
        />
        <ProjectsCard
          title="Scheduling Problem"
          des=" The performance targets are a 30% reduction in computing time, with an application dedicated to optimising delivery routes."
          src={projectTwo}
          link="https://github.com/NSikaJunior/Realisation_dun_algorithme_de_plus_Court_Chemin_a_laide_des_graphes"
        />
        <ProjectsCard
          title="Master 1 : Data Visualization Project"
          des=" Baccalaureate success by social background."
          src={projectThree}
          link="https://github.com/NSikaJunior/Data_Visualization_Project"
        />
        <ProjectsCard
          title="CV of a fictional character"
          des=" CV of the famous manga character Gojo Satoru."
          src={projectFour}
          link="https://github.com/NSikaJunior/CVSatoruGojo_Mini_Projet"
        />
        <ProjectsCard
          title="BenkyōRoom"
          des=" A Dive into the World of Collaborative Learning."
          src={projectFive}
          link="https://github.com/NSikaJunior/Projet_Web"
        />
        <ProjectsCard
          title="VISIODIBLE"
          des=" Precise translation of gestures into speech for the visually impaired. Real-time text display for the deaf and hard of hearing."
          src={projectSix}
          link="https://github.com/NSikaJunior/Projet_Transverse"
        />
      </div>
    </section>
  );
}

export default Projects