import React from 'react';


function TopBar()
{
    return (
      <header className="bg-yellow-400 w-full fixed flex justify-between items-center p-3.5 h-[7vh] shadow-sm z-200">     
        {/* Header */}

        {/* Container for Logo + Name */}
      <div className="flex items-center ml-[1vw]">
        {/* Added 'group' class to the parent anchor */}
        <a href="/" className="group flex items-center gap-6 font-neutraface-bold pt-0.25">
          {/* Changed 'hover:rotate-355' 
            to 'group-hover:rotate-355' 
          */}
          <img 
            src="penguin mini.svg" 
            className="w-14 h-14 translate-y-2 relative z-10 transition-transform duration-300 group-hover:rotate-[-10deg]"
            alt="Logo"
          />
          
          <span className="text-[24px] text-blackish">KEVIN WEI</span>
        </a>
      </div>

        <nav className="flex gap-6 font-neutraface-italic text-blackish text-[15px] mr-[3vw]">

            {/* TODO */}

          {/* <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#projects" className="hover:underline">PROJECTS</a>
          <a href="#publications" className="hover:underline">PUBLICATIONS</a> */}
          {/* <a href="/about" className="hover:underline">
              ABOUT
          </a> */}

          <a href="https://kevinwei.itch.io/" target="_blank" className="hover:underline">
              PROJECTS
          </a>

          <a href="/poetry" className="hover:underline">
              POETRY
          </a>

          <a href="Resume - Kevin Wei.pdf" className="hover:underline" target="_blank">RESUME</a>


        </nav>
      </header>
    );
}

export default TopBar;


