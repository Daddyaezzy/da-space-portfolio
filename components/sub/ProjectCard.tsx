import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <Link href={url} target="_blank" className="cursor-pointer ">
      <div className="relative z-20 cursor-pointer w-[300px]  sm:w-[500px] min-h-[200px] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="sm:text-2xl text-xl font-semibold text-white hover:text-[#2A0E61]">
            {title}
          </h1>
          <p className="sm:text-xl text-sm mt-2 text-gray-300 hover:text-[#2A0E61]">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
