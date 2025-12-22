import React from 'react';
import { Link } from 'react-router-dom';


function TopBar()
{
  const isMobile = window.matchMedia("(any-pointer:coarse)").matches;


    return (
      <header className={isMobile ? 
        "bg-yellow-400 w-full fixed flex justify-between items-center p-2.5 h-[3rem] shadow-sm z-200" :
        "bg-yellow-400 w-full fixed flex justify-between items-center p-3.5 h-[3.5rem] shadow-sm z-200"}>     
        {/* Header */}

        {/* Container for Logo + Name */}
      <div className="flex items-center ml-[1vw]">
        {/* Added 'group' class to the parent anchor */}
        <a href="/" className={isMobile ? 
        "group flex items-center gap-3 font-neutraface-bold pb-[1px]" :
        "group flex items-center gap-6 font-neutraface-bold pt-0.25"}>
          {/* Changed 'hover:rotate-355' 
            to 'group-hover:rotate-355' 
          */}
          <img 
            src="penguin mini.svg" 
            className={isMobile ? 
              "w-12 h-12 translate-y-2 relative z-10 transition-transform duration-300 group-hover:rotate-[-10deg]" : 
              "w-14 h-14 translate-y-2 relative z-10 transition-transform duration-300 group-hover:rotate-[-10deg]"}
            alt="Logo"
          />
          
          <span className={isMobile ? "text-[1.25rem] text-blackish" : "text-[1.5rem] text-blackish"}>KEVIN WEI</span>
        </a>
      </div>

        <nav className={isMobile ? 
          "flex gap-3 font-neutraface-italic text-blackish text-[0.75rem] mr-[3vw]" : 
          "flex gap-8 font-neutraface-italic text-blackish text-[1rem] mr-[3vw]"
          }>
            {/* TODO */}

          {/* <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#projects" className="hover:underline">PROJECTS</a>
          <a href="#publications" className="hover:underline">PUBLICATIONS</a> */}
          {/* <a href="/about" className="hover:underline">
              ABOUT
          </a> */}

          <Link to="https://kevinwei.itch.io/" target="_blank" className="hover:underline">
              PROJECTS
          </Link>

          <Link to="/poetry" className="hover:underline">
              POETRY
          </Link>

          <a href="Resume - Kevin Wei.pdf" className="hover:underline" target="_blank">RESUME</a>


        </nav>
      </header>
    );
}

export default TopBar;


