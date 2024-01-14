import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Socials } from "@/constants";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Props {
  clicked: any;
  setClicked: Dispatch<SetStateAction<boolean>>;
}

const NavSlider = ({ clicked, setClicked }: Props) => {
  return (
    <div className="h-[100vh] w-[300px] bg-[#292635] absolute z-30 right-[-2px] top-0  pt-[30px]">
      <div className="mx-[15px]">
        <div className="flex flex-row justify-between items-center ">
          <Image
            src="/da-high-resolution-logo-transparent.png"
            alt="logo"
            width={120}
            height={120}
          />
          <div
            className="p-2 border-0 rounded-full bg-[#03001417] hover:bg-white hover:text-black"
            onClick={(prev) => setClicked(!prev)}
          >
            <XMarkIcon className="text-white h-10 w-10 cursor-pointer  " />
          </div>
        </div>

        <div className="mt-[40px]">
          <ul className="list-none">
            <li className="py-[15px] border-b border-gray-200 border-1">
              <a
                href="#about-me"
                className="cursor-pointer text-white hover:text-[#7d3c98]"
              >
                About me
              </a>
            </li>

            <li className="py-[15px] border-b  border-gray-200 border-1">
              <a
                href="#skills"
                className="cursor-pointer text-white hover:text-[#7d3c98]"
              >
                Skills
              </a>
            </li>

            <li className="py-[15px] border-b border-gray-200 border-1">
              <a
                href="#projects"
                className="cursor-pointer text-white hover:text-[#7d3c98]"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-[20px]">
          <div className="flex justify-center flex-row gap-10">
            {/* {Socials.map((social) => (
              <Link href={social.url} target="_blank">
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={35}
                  height={35}
                />
              </Link>
            ))} */}

            <Link
              href="https://www.linkedin.com/in/anselm-fajobi-8ab5a623b"
              target="_blank"
            >
              <FaLinkedin className="text-white text-[25px]" />
            </Link>
            <Link href="https://www.github.com/daddyaezzy" target="_blank">
              <FaGithub className="text-white text-[25px]" />
            </Link>
            <Link href="https://x.com/bigdidiy_?s=21" target="_blank">
              <FaTwitter className="text-white text-[25px]" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 flex justify-center items-center ">
          <p className="text-center py-[20px]  text-white">
            &copy; Copyright by Daddyaezzy 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavSlider;
