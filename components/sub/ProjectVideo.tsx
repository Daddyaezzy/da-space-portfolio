"use client";

import React, { useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectVideo = ({ src, title, description }: Props) => {
  return (
    <div className="relative cursor-pointer w-[300px]   sm:w-[500px] h-3/4 overflow-hidden rounded-lg z-20 shadow-lg border border-[#2A0E61] ">
      <div>
        <video muted controls className="w-full object-contain">
          <source src={src} />
        </video>
      </div>
      s
      <div className="relative p-4">
        <h1 className="sm:text-2xl text-xl font-semibold text-white ">
          {title}
        </h1>
        <p className="sm:text-xl text-sm mt-2 text-gray-300 ">
          {description}, ensure to zoom out when watching the video. Thank You.
        </p>
      </div>
    </div>
  );
};

export default ProjectVideo;
