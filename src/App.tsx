// function App() {
//   return (
//     <>
//       <header className="bg-yellow font-bold w-full p-3">
//         <div className="flex items-center font-neutraface-italic">
//           <a className="active" href="#home">Home</a>
//           <a href="#news">News</a>
//           <a href="#contact">Contact</a>
//           <a href="https://google.com" target="_blank">Resume</a>
//         </div>
//       </header>

//       <div className="bg-whiteish">
//         <main className="w-full flex">
//           <section className="w-[57%] h-screen font-proxima-nova">
//             Section 1
//           </section>
          
//           <section className="w-[43%] h-screen font-proxima-nova">
//             Section 2
//           </section>
//         </main>

//         <footer>
//           I am Kevin Wei. Here's my contacts
//         </footer>
//       </div>

//     </>
//   )


// }

// export default App

import ProjectCard from './ProjectCard';


function Bio() {
  return (
    <section className="w-[45%] pl-6 flex flex-col justify-start text-blackish">
      <h2 className="text-[60px] font-light mb-4 font-neutraface leading-16">
        Hi, my name is <span className="font-neutraface-bold">Kevin Wei</span>
      </h2>
      <div className="font-proxima-nova text-base space-y-4">
        <p className="leading-6 mb-4">
          I’m a sophomore at the University of Pennsylvania studying computer graphics.
          I love exploring the natural world by recreating it in code.
        </p>
        <p className="leading-6 mb-4">
          In my free time I enjoy playing trumpet, writing poems, making dumplings,
          and getting on my bike to ride to some place I don’t understand.
        </p>
        <p className="leading-6 mb-4">My favorite animal is a penguin.</p>
      </div>
    </section>
  );
}


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-whiteish text-gray-800">
      {/* Header */}
      <header className="bg-yellow-400 w-full flex justify-between items-center p-4">
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

      {/* Main content */}
      <main className="flex flex-1 w-full px-12 py-8">
        
        {/* Left side big card */}
        <section className="w-[55%] flex-col justify-start pr-6 h-[85vh] overflow-y-scroll no-scrollbar">
          <div className="bg-gray-900 text-white rounded-md shadow-md h-[300px] flex items-center justify-center mb-8">
            <h1 className="text-3xl font-bold text-center">
              Games Portfolio <br />
              <span className="text-lg font-light">3+ years of game development</span>
            </h1>
          </div>

          {/* Project previews */}
          <ProjectCard
            title="Project Title"
            description="A brief description of the project goes here." >

            <div className="bg-gray-200 rounded-md h-[180px] flex items-center justify-center">
              Custom Project 1
            </div>
            <div className="bg-gray-200 rounded-md h-[180px] flex items-center justify-center">
              Custom Project 2
            </div>

          </ProjectCard>

          <ProjectCard
            title="Project Title"
            description="A brief description of the project goes here." >

            <div className="bg-gray-200 rounded-md h-[180px] flex items-center justify-center">
              Custom Project 1
            </div>
            <div className="bg-gray-200 rounded-md h-[180px] flex items-center justify-center">
              Custom Project 2
            </div>

          </ProjectCard>

                    <ProjectCard
            title="Project Title"
            description="A brief description of the project goes here." >

            <div className="bg-gray-200 rounded-md h-[180px] flex items-center justify-center">
              Custom Project 1
            </div>
            <div className="bg-gray-200 rounded-md h-[180px] flex items-center justify-center">
              Custom Project 2
            </div>

          </ProjectCard>
        </section>

        {/* Right side bio */}
        <Bio />
      </main>

      {/* Footer */}
      <footer className="text-right p-[7%] py-6 mt-sm">
        <p>I am Kevin Wei. Here’s my contacts</p>
      </footer>
    </div>
  );
}

export default App;

