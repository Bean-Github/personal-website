import React from 'react';

function TopBar(){
    return (
      <header className="bg-yellow-400 w-full flex justify-between items-center p-3.5">     
        {/* Header */}
        
        <div className="flex items-center gap-2 font-neutraface-bold">
          <span className="text-[24px] text-blackish">KEVIN WEI</span>
        </div>

        <nav className="flex gap-6 font-neutraface-italic text-blackish text-[15px]">
          <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#projects" className="hover:underline">PROJECTS</a>
          <a href="#publications" className="hover:underline">PUBLICATIONS</a>
          <a href="#resume" className="hover:underline">RESUME</a>
        </nav>
      </header>
    );
}

export default TopBar;


