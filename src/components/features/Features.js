import React from 'react';
import { GiCroissant, GiDragonBalls, GiMultipleTargets, GiNinjaHeroicStance, GiTeapot } from "react-icons/gi";
import { MdRamenDining } from "react-icons/md";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Resilience"
          des=""
          icon={<GiNinjaHeroicStance />}
        />
        <Card
          title="Curiosity"
          des=""
          icon={<GiMultipleTargets />}
        />
        <Card
          title="Adaptability"
          des=""
          icon={<GiDragonBalls />}
        />
      </div>
      <br/>
      <br/>
      <br/>
      <Title title="" des="Languages" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="French"
          des="Native language"
          icon={<GiCroissant />}
        />
        <Card
          title="English"
          des="B2 Level"
          icon={<GiTeapot />}
        />
        <Card
          title="Japanese"
          des="N5 to N4 Level"
          icon={<MdRamenDining />}
        />
      </div>
    </section>
  );
}

export default Features