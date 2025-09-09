import React from 'react';

function TopBar()
{
    return (
      <header className="bg-yellow-400 w-full flex justify-between items-center p-3.5 h-[7vh] shadow-sm">     
        {/* Header */}
        
        <div className="flex items-center gap-6 font-neutraface-bold ml-[1vw]">
            <img src="penguin mini.svg" className="w-14 h-14 translate-y-2 relative z-10"/>
            <span className="text-[24px] text-blackish">KEVIN WEI</span>
        </div>

        <nav className="flex gap-6 font-neutraface-italic text-blackish text-[15px] mr-[3vw]">

            {/* TODO */}

          {/* <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#projects" className="hover:underline">PROJECTS</a>
          <a href="#publications" className="hover:underline">PUBLICATIONS</a> */}
          <a href="Resume - Kevin Wei.pdf" className="hover:underline">RESUME</a>
        </nav>
      </header>
    );
}

export default TopBar;


