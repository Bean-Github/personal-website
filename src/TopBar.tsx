import React from 'react';


function TopBar()
{
    return (
      <header className="bg-yellow-400 w-full fixed flex justify-between items-center p-3.5 h-[7vh] shadow-sm z-200">     
        {/* Header */}
        
        <div className="flex items-center gap-6 font-neutraface-bold pt-0.25 ml-[1vw]">
            <a href = "/">
              <img src="penguin mini.svg" className="hover:rotate-355 w-14 h-14 translate-y-2 relative z-10"/>
            </a>
            
            <a href = "/">
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

          {/* <a href="/art" className="hover:underline">
              ART
          </a> */}

          <a href="Resume - Kevin Wei.pdf" className="hover:underline" target="_blank">RESUME</a>


        </nav>
      </header>
    );
}

export default TopBar;


