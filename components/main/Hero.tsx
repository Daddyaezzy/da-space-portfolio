import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full h-full">
      <video
        autoPlay
        muted
        loop={true}
        className="rotate-180 absolute md:top-[-320px] top-[-520px] h-full w-full"
        style={{ objectFit: "cover" }}
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
