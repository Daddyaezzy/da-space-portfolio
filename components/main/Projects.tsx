import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";
import Image from "next/image";
import ProjectVideo from "../sub/ProjectVideo";
// import Resume from "../../downloads/My RESUME Fixed.docx";

const Projects = () => {
  return (
    <div className="justify-center py-12 md:py-20 px-4 md:px-10" id="projects">
      <h1 className="text-2xl md:text-[40px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 md:py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 container mx-auto max-w-7xl">

        <ProjectCard
          src="/koly-market.png"
          title="KOLy Market: AI-Powered Prediction Market"
          description="Developed an AI-powered prediction market utilizing advanced LLMs to dynamically hype winning bettors or roast losing wagers regarding daily Key Opinion Leaders."
          url="https://demo.kolymarket.io/"
        />
        <ProjectCard
          src="/atg.png"
          title="ATG Ecommerce"
          description="A modern clothing brand e-commerce platform built for Above The Ground."
          url="https://www.abovethegrovnd.com/"
        />
        <ProjectCard
          src="/veilo.png"
          title="Veilo Network"
          description="A Solana-first privacy network layer featuring a mobile app and a Chrome extension. It functions as a fully private, untraceable wallet."
          url="https://www.veilo.network/"
        />
        <ProjectCard
          src="/giftsngiggles.png"
          title="Gifts n Giggles"
          description="An e-commerce platform dedicated to selling a wide variety of gifts and gift items."
          url="https://giftsngiggles.ca/"
        />
        <ProjectCard
          src="/ataktos.png"
          title="Ataktos"
          description="An NFT Marketplace for the community of Artists, with a live 3D gallery and a marketplace for buying and selling of NFTs. The Tech Stack used is React, ThreeJs, NodeJs, MongoDB, and the likes."
          url="https://www.ataktos.art/"
        />
        <ProjectCard
          src="/spiderpigbnb.png"
          title="Spiderpig BNB: Meme Token Ecosystem"
          description="Created a Meme Token ecosystem on the Binance Smart Chain featuring an autonomous AI agent that dynamically generates and publishes token-related memes to X."
          url="https://www.spiderpigbnb.wtf/"
        />
        <ProjectCard
          src="/vaultspin.png"
          title="Vaultspin: Gamified Crypto Casino Platform"
          description="Built a large-scale, gamified crypto casino platform where users engage in PvP item battles to win luxury goods, fully funded via cryptocurrency."
          url="https://vaultspin-optimized.vercel.app/"
        />
        <ProjectCard
          src="/afadare.png"
          title="Afadare"
          description="Afadare is Portfolio website for a CIoD of an Oil Cooperation. Built with NextJs, TailwindCSS, NodeJs and MongoDB."
          url="https://afadare.com/"
        />
        <ProjectCard
          src="/bananagun.png"
          title="Bananagun.io: Cross-Chain Token Swapping Platform"
          description="Contributed to a cross-chain token swapping platform, facilitating seamless exchanges between fiat currencies and standard cryptographic tokens across multiple blockchains."
          url="https://bananagun.io/"
        />
        <ProjectCard
          src="/moonrepublic.png"
          title="Moon Republic"
          description="
This is an Educational Platform built for a client where, Students an login to access top notch courses from experts tutors either live or already recorded classes, Instructors can create and upload courses, Admin can manage users and courses. The Tech Stack used in building this webApp are NextJs, GoogleAPI, Sanity.io for the backend and Stripe for payment processing. I built the entire platform from scratch and also deployed it to Vercel."
          url="https://moonrepublic.io/"
        />
        <ProjectCard
          src="/aiforge.png"
          title="Ai Forge "
          description="
Ai Forge is a decentralized Ai marketplace built on the 0G blockchain network. Allows you to create your own Ai agent with zero code and also monitize it. Built with Next js, MongoDB, NodeJs and the 0G SDK."
          url="https://www.aif0rge.xyz/"
        />
        <ProjectCard
          src="/solflip.png"
          title="Sol Flip - Don't Sell your SOL "
          description="
SolFlip is a Solana-Based Platform/Casino that allows users, connect their solana wallet and flip their solana (SOL) to win more SOL. Built with NextJs, TailwindCSS, Solana Web3.js and Phantom Wallet API."
          url="https://www.solflip.game/"
        />
        <ProjectCard
          src="/remusai.png"
          title="Machine Unlearning - Remus Ai "
          description="
Machine Unlearning is a cutting-edge platform developed by Remus AI that focuses on creating Twitter AI agents capable of generating human-like text. The platform leverages advanced machine learning techniques to enable users to interact with AI agents that can understand and respond to various prompts in a natural and coherent manner. Built with NextJs, TailwindCSS, NodeJs and MongoDB."
          url="https://machine-unlearning.remusai.tech/"
        />
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
        {/* <ProjectCard
          src="/ali3n-express.png"
          title="Ali3n Express"
          description="
An E-Commerce project I created for a client, with the UI of Amazon. Still in Progress...."
          url="https://ali3n-express.netlify.app/"
        /> */}
        {/* <ProjectCard
          src="/da-video.png"
          title="DA Video"
          description="
A Video call Application, almost like a zoom replica. Which you can use to chat with your family and friends from far away created with React, NodeJS, Socket.IO and the likes.."
          url="https://da-video.netlify.app/"
        /> */}
        {/* <ProjectCard
          src="/da-recipies.png"
          title="DA Recipies"
          description="

A Food Recipe finder app, created with React, Nodejs and Api, this was done out of the idea, that i wanted to learn how to cook perfectly."
          url="https://da-recipies.netlify.app/"
        /> */}
        {/* <ProjectCard
          src="/da-chat.png"
          title="DA Chat App"
          description="


A Chat Application done out of testing, it was created with react, context API and Firebase Authentication. Still in progress..."
          url="https://da-chatapp.netlify.app/"
        /> */}
        {/* <ProjectCard
          src="/da-collections.png"
          title="DA Collections"
          description="



A Personal E-Commerce project created with React and Redux toolkit."
          url="https://da-collections.netlify.app/"
        /> */}
        {/* <ProjectCard
          src="/lyrics-finder.png"
          title="DA Lyrics Finder"
          description="




A Lyrics Finder application, created with React, Nodejs, Context API and Music Matxh API."
          url="https://da-musicmatch.netlify.app/"
        /> */}
        {/* <ProjectCard
          src="/eazipay-screenshot.png"
          title="Eazipay Prototype"
          description="
A Simple UI Replica of Eazipay website built with NextJS..."
          url="https://eazipay-test-seven.vercel.app/"
        /> */}
        {/* <ProjectCard
          src="/da-music.png"
          title="DA Music Player"
          description="
A Music Player created with vanilla Html, Css and Js, works like an android, plays music from audios stored in the songs folder."
          url="https://da-musicplayer.netlify.app/"
        /> */}
        {/* <ProjectCard
          src="/Screenshot 2023-06-13 at 19.13.37.png"
          title="DA Tip Calculator"
          description="
A vanilla Html, Css and Js project i decided to work on to create for an online restaurant."
          url="https://da-tipcalculator.netlify.app/"
        /> */}
      </div>
      <div className="mt-10 md:mt-16">
        <div>
          <h1 className="text-xl md:text-[28px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 md:py-20">
            Mobile Projects
          </h1>
        </div>

        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 container mx-auto ">
          <ProjectVideo
            src="/video/breakthrough.MP4"
            title="Breakthrough Radio"
            description="Built a Full stack Mobile Audio Streaming Platform for Breakthrough Family. This platform was built with React Native and NodeJs, has an Admin dashboard where Admins can monitor users check their activities and Go Live for streaming as well, I Worked on the Front and the backend."
          />
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
      <div className="mt-8 md:mt-[15px] text-center z-99 px-4">
        <p className="text-white text-sm md:text-base z-99">
          Link to download my Resume:{" "}
          <span className="text-[#7d3c98] cursor-pointer z-99 underline hover:text-purple-400 transition-colors">
            <Link
              href="/ANSELM_FAJOBI-Resume-Feb_2026.pdf"
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
