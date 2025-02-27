import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";
import Image from "next/image";
import ProjectVideo from "../sub/ProjectVideo";
// import Resume from "../../downloads/My RESUME Fixed.docx";

const Projects = () => {
  return (
    <div className=" justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid md:grid-cols-2 grid-cols-1 gap-10 container mx-auto px-20">
        <ProjectCard
          src="/flickshot-app.png"
          title="FlickShot - TikTok Clone"
          description="
This is a TikTok clone webApp which allows you to login, create account, interact with other users post, post videos and more. The Tech Stack used in building this webApp are NextJs, GoogleAPI, and Sanity.io for the backend.."
          url="https://flickshot-final.vercel.app/"
        />
        <ProjectCard
          src="/krypt.png"
          title="Krypt - Ethereum Transaction App"
          description="
Krypt is an Ethereum-based web app that facilitates sending ETH from one account to another on the Ethereum network. Built using Solidity, React, Context API, and Ether.js, this app provides a seamless and intuitive way to interact with the Ethereum blockchain."
          url="https://da-krypt-eth.vercel.app/"
        />

        <ProjectCard
          src="/figma-clone.png"
          title="Figma Clone"
          description="
This is a Figma clone webApp which allows you to design projects with the help of fabricJS, collaborate and interact with other users using liveblocks.io, enables Dark Mode and Light Mode with the help of Redux ToolKit. This Project was built using NextJs "
          url="https://da-figma-clone.vercel.app/"
        />
        <ProjectCard
          src="/appl-site.jpg"
          title="Apple iPhone 15 Site "
          description="
This is the Apple iPhone 15 Site built with React, GSAP an ThreeJs. Comprises of complex animations and plays with videos and 3D models. I also tracked the number of Users that visit the site and integrated performace optimization so incase of crashes or error I the developer will be able to see it at my end and work on it"
          url="https://da-apple-website.vercel.app"
        />
        <ProjectCard
          src="/iphone14.png"
          title="iPhone 14 Site "
          description="
This is the Apple iPhone 14 Site built with React, GSAP an ThreeJs. Comprises of complex animations and plays with videos and 3D models."
          url="https://da-apple-iphone14.vercel.app"
        />
        <ProjectCard
          src="/ali3n-express.png"
          title="Ali3n Express"
          description="
An E-Commerce project I created for a client, with the UI of Amazon. Still in Progress...."
          url="https://ali3n-express.netlify.app/"
        />
        <ProjectCard
          src="/da-video.png"
          title="DA Video"
          description="
A Video call Application, almost like a zoom replica. Which you can use to chat with your family and friends from far away created with React, NodeJS, Socket.IO and the likes.."
          url="https://da-video.netlify.app/"
        />
        <ProjectCard
          src="/da-recipies.png"
          title="DA Recipies"
          description="

A Food Recipe finder app, created with React, Nodejs and Api, this was done out of the idea, that i wanted to learn how to cook perfectly."
          url="https://da-recipies.netlify.app/"
        />
        <ProjectCard
          src="/da-chat.png"
          title="DA Chat App"
          description="


A Chat Application done out of testing, it was created with react, context API and Firebase Authentication. Still in progress..."
          url="https://da-chatapp.netlify.app/"
        />
        <ProjectCard
          src="/da-collections.png"
          title="DA Collections"
          description="



A Personal E-Commerce project created with React and Redux toolkit."
          url="https://da-collections.netlify.app/"
        />
        <ProjectCard
          src="/lyrics-finder.png"
          title="DA Lyrics Finder"
          description="




A Lyrics Finder application, created with React, Nodejs, Context API and Music Matxh API."
          url="https://da-musicmatch.netlify.app/"
        />
        <ProjectCard
          src="/eazipay-screenshot.png"
          title="Eazipay Prototype"
          description="
A Simple UI Replica of Eazipay website built with NextJS..."
          url="https://eazipay-test-seven.vercel.app/"
        />
        <ProjectCard
          src="/da-music.png"
          title="DA Music Player"
          description="
A Music Player created with vanilla Html, Css and Js, works like an android, plays music from audios stored in the songs folder."
          url="https://da-musicplayer.netlify.app/"
        />
        {/* <ProjectCard
          src="/Screenshot 2023-06-13 at 19.13.37.png"
          title="DA Tip Calculator"
          description="
A vanilla Html, Css and Js project i decided to work on to create for an online restaurant."
          url="https://da-tipcalculator.netlify.app/"
        /> */}
      </div>
      <div className="mt-5">
        <div>
          <h1 className="text-[28px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Mobile Projects
          </h1>
        </div>

        <div className="h-full w-full grid md:grid-cols-2 grid-cols-1 gap-10  container mx-auto px-20">
          <ProjectVideo
            src="/video/eride1.mov"
            title="E-ride Project"
            description="This a fullstack mobile application built by me, with Locomotion functionality, ability to book ride and track user location, user authentication, Driver mode, Passenger Mode, Dark mode, Booked Rides History and many more features. Built with React Native, MongoDB, SocketIo, NodeJs."
          />
          {/* <ProjectVideo
            src="/video/uber-clone.MP4"
            title="Uber Clone"
            description="This an Uber Clone mobile application built with React Native, it finds real time directions of locations from one point to another using React Native Maps, Google Places API, Distance Matrics API, Directions API"
          /> */}
          {/* <ProjectVideo
            src="/video/job-app.MP4"
            title="DA Job Searcher"
            description="A Real Time Job searcher application, that finds jobs searched for and ability to apply, this was created using React native, Expo & Rapid API."
          /> */}
          <ProjectVideo
            src="/video/weather-app.mov"
            title="DA Weather App"
            description="A Weather Application, used to search for all countries of the world weather and see following days weather, this was created using React Native, Expo & Rest API,"
          />
          <ProjectVideo
            src="/video/coffee-app.mov"
            title="DA Coffee App"
            description="A real coffee application built with React Native and Expo, using Carousel and other fun Libraries."
          />
          <ProjectVideo
            src="/video/password-generator.mov"
            title="DA Password Generator"
            description="A Password Generator app used to generate Random passwords based on inputs selected. This was created using React Native, Expo and Javascript logic."
          />
        </div>
      </div>
      <div className="mt-[15px] text-center z-99">
        <p className="text-white  z-99">
          Link to download my Resume:{" "}
          <span className="text-[#7d3c98] cursor-pointer z-99">
            <Link
              href="/FajobiAnselmREsume.pdf"
              className="cursor-pointer z-99"
            >
              Download Here
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Projects;
