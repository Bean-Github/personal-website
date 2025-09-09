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
import TopBar from './TopBar';
import TypingText from './TypingText';

// function Bio() {
//   return (
//     <section className="shadow-lg p-10 rounded-xl bg-blackish text-whiteish">
//             {/* Fake IDE header */}
//       <div className="flex items-center gap-2 bg-[#2d2d2d] px-4 py-2">
//         <span className="w-3 h-3 rounded-full bg-red-500"></span>
//         <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
//         <span className="w-3 h-3 rounded-full bg-green-500"></span>
//         <span className="ml-4 text-sm text-gray-400">Bio.tsx</span>
//       </div>
//       <h2 className="text-[60px] font-light mb-4 font-neutraface leading-16">
//         Hi, my name is <br></br> <span className="font-neutraface-bold">Kevin Wei</span>
//       </h2>
//       <div className="font-proxima-nova text-base space-y-4">
//         <p className="leading-6 mb-4 text-[18px]">
//           I’m a sophomore at the University of Pennsylvania studying computer graphics.
//           I love exploring the natural world by recreating it in code.
//         </p>
//         <p className="leading-6 mb-4 text-[18px]">
//           In my free time I enjoy playing trumpet, writing poems, making dumplings,
//           and getting on my bike to ride to some place I don’t understand.
//         </p>
//         <p className="leading-6 mb-4 text-[18px]">My favorite animal is a penguin.</p>
//       </div>
//     </section>
//   );
// }

function Bio() {
  return (
    <section className="shadow-xl rounded-lg bg-[#1e1e1e] text-[#d4d4d4] font-proxima-nova overflow-hidden">
      {/* IDE-style header */}
      <div className="flex items-center gap-2 bg-[#2d2d2d] px-4 py-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="ml-4 text-sm text-gray-400">bio.cpp</span>
      </div>

      {/* Regular content, lightly styled like code */}
      <div className="px-10 py-7 space-y-6 text-[16px] leading-7">
        <h2 className="text-[28px] font-neutraface-demi">
          Hi, my name is <span className="font-neutraface-bold text-blue-300">Kevin Wei</span>
        </h2>

        <p>
          <span className="text-green-400">// About me</span> <br />
          I’m a sophomore at the <span className="text-orange-300">University of Pennsylvania</span> studying{" "}
          <span className="text-orange-300">computer graphics</span>.  
          I love exploring the natural world by recreating it in code.
        </p>
        <p>
          <span className="text-green-400">// Hobbies</span> <br />
          In my free time I enjoy playing trumpet, writing poems, making dumplings, and riding
          my bike to someplace I don’t yet understand.
        </p>
        <p>
          <span className="text-green-400">// Favorite animal</span> <br />
          My favorite animal is a <span className="text-purple-300">penguin</span> :)
        </p>
      </div>
    </section>
  );
}



function App() {
  return (
    <div className="min-h-screen flex flex-col bg-whiteish text-gray-800">
      <TopBar />

      {/* Main content */}
      <main className="flex flex-1 w-full px-12 py-8">

        {/* Left side stuff */}
        <section className="z-10 w-[50%] pl-10 ml-[10vw] mt-[10px] flex-col justify-start pr-6 h-[80vh] overflow-y-scroll no-scrollbar mt-sm">

          {/* big card / video */}
          <div className="bg-blackish text-white rounded-md shadow-lg h-[225px] flex items-center justify-center mb-8">
            <h1 className="text-3xl font-neutraface-bold text-center hover:scale-110">
              Games Portfolio <br />
              <span className="text-lg font-neutraface">5+ years of game development</span>
            </h1>
          </div>

          {/* Project previews */}
          <ProjectCard
            title="Fluid Renderer"
            description="Newtonian fluid simulation using Smoothed Particle Hydrodynamics (SPH) and rendered with physically-based raymarching techniques (refraction, reflection, Fresnel effects)." 
            imageURL1="fluidsim1.gif"
            imageURL2="fluidsim2.gif"
            whatitis="SIMULATION"
            datestart="Jun 2025"
            dateend="Aug 2025">
          </ProjectCard>
          
          <ProjectCard
            title="Flocks of Fish"
            description="GPU-accelerated flocking simulation of thousands of fish in a 3D environment!" 
            imageURL1="boids1.gif"
            imageURL2="boids2.gif"
            whatitis="SIMULATION"
            datestart="May 2025"
            dateend="Jun 2025">
          </ProjectCard>

          <ProjectCard
            title="Clouds"
            description="Soar through volumetric clouds! Created using raymarching and a 3D Worley + fBM noise function implemented in compute shaders." 
            imageURL1="clouds2.gif"
            imageURL2="clouds1.png"
            whatitis="SIMULATION"
            datestart="Apr 2025"
            dateend="May 2025">
          </ProjectCard>

          <ProjectCard
            title="A Bear Game"
            description="Play as a bear who does bear things, like fishing, talking to people, buying donuts, taking pictures, and driving a car? Explore the open world, beaches, cities, and forests!" 
            imageURL1="abeargame2.gif"
            imageURL2="abeargame3.gif"
            whatitis="EXPLORATION"
            datestart="Dec 2024"
            dateend="Apr 2025">
          </ProjectCard>

          <ProjectCard
            title="Descent"
            description="Snowboard down a procedural mountain while avoiding trees. Do cool tricks and flips to gain points! How far can you go?" 
            imageURL1="thumbnail_descent.png"
            imageURL2="descent1.png"
            whatitis="ACTION GAME"
            datestart="Aug 2024"
            dateend="Nov 2024">
          </ProjectCard>
          
          <ProjectCard
            title="Prism"
            description="Split off into prismatic color characters to solve perception-based puzzles! See the world in a new light." 
            imageURL1="thumbnail_prism.png"
            imageURL2="prism1.png"
            whatitis="PUZZLE GAME"
            datestart="Mar 2025">
          </ProjectCard>

          <ProjectCard
            title="A Game of Chess"
            description="Inspired by T.S. Eliot's poem 'The Waste Land', play against the 'lidless man' from the poem, over a game of chess. Explore the cyclical nature of life." 
            imageURL1="thumbnail_agameofchess.png"
            imageURL2="agameofchess1.png"
            whatitis="POETRY GAME"
            datestart="Aug 2025">
          </ProjectCard>

          <ProjectCard
            title="the sky of the sky"
            description="Play as a cold, cold, man who gains a special warmth and color in his life. Learn how opposites can attract by sharing memories with someone fundamentally different than you." 
            imageURL1="thumbnail_theskyofthesky.png"
            imageURL2="theskyofthesky1.png"
            whatitis="POETRY GAME"
            datestart="Feb 2025">
          </ProjectCard>

          <ProjectCard
            title="Cooking with Rordon Gamsay"
            description="Platform around the stressful kitchen of esteemed chef Rordon Gamsay as you race against time to cook a burger." 
            imageURL1="thumbnail_cookingwithrordongamsay.png"
            imageURL2="cookingwithrordongamsay1.png"
            whatitis="PLATFORMER"
            datestart="Oct 2024">
          </ProjectCard>

          <ProjectCard
            title="Retro Flight"
            description="Zoom across a vaporwave-style procedural landscape!" 
            imageURL1="thumbnail_retroflight.png"
            imageURL2='retroflight1.png'
            whatitis="FLIGHT GAME"
            datestart="Aug 2024">
          </ProjectCard>

          <ProjectCard
            title="Everybody Wants Just One More Day"
            description="A narrative exploration game about a father and a son. Inspired by a poem by William J. Harris." 
            imageURL1="thumbnail_everybodywantsjustonemoreday.png"
            imageURL2="everybodywantsjustonemoreday2.png"
            whatitis="POETRY GAME"
            datestart="Apr 2024">
          </ProjectCard>

          <ProjectCard
            title="The Wei to the White House"
            description="Do you have what it takes to become the President of the United States? Navigate the tricky waters of politics, manage your money and popularity, and win over voters in this text-based RPG!" 
            imageURL1="thumbnail_theweitothewhitehouse.png"
            imageURL2="theweitothewhitehouse1.png"
            whatitis="TEXT BASED RPG"
            datestart="Mar 2024">
          </ProjectCard>

          <ProjectCard
            title="Battle Turtle"
            description="Play as a turtle with a gun fighting against mafia sharks, evil pufferfish, sliding penguins, and a giant kraken!"
            imageURL1="thumbnail_battleturtle.png"
            imageURL2="battleturtle1.png"
            whatitis="METROIDVANIA"
            datestart="May 2023"
            dateend="Sep 2023">
          </ProjectCard>

          <ProjectCard
            title="Bullet Disco"
            description="Play as a bullet who dashes between guns in this bullet-fast action game!" 
            imageURL1="thumbnail_bulletdisco.png"
            imageURL2="bulletdisco2.png"
            whatitis="ACTION GAME"
            datestart="Jul 2023">
          </ProjectCard>

          <ProjectCard
            title="Ouroboros"
            description="Find creative ways to loop back onto your own tail in this slithery puzzle board game!" 
            imageURL1="ouroboros1.png"
            imageURL2="ouroboros2.png"
            whatitis="PLATFORMER"
            datestart="Feb 2023">
          </ProjectCard>

          <ProjectCard
            title="Stronger to Deader"
            description="Win by... dying? Play as a mad scientist who controls his own zombies!"
            imageURL1="thumbnail_strongertodeader.png"
            imageURL2='strongertodeader1.png'
            whatitis="PUZZLE PLATFORMER"
            datestart="Feb 2021">
          </ProjectCard>
        </section>

        {/* Right side bio */}
        <section  className="w-[45%] ml-[3vh] mt-[10px] flex flex-col justify-start text-blackish mr-[7vw]">
          <div className="z-10">
            <TypingText
              stuff = {<Bio />}>
            </TypingText>
          </div>
          
          <div className="pointer-events-none w-full flex justify-between items-center p-[100vh] absolute right-0 bottom-0 overflow-hidden">
            <img src="penguin.svg" alt="A cute penguin" className="absolute bottom-0 right-0 translate-x-10 translate-y-[30vh] rotate-345 mt-8 w-[70vh]" />

          </div>

        </section>
      </main>

      {/* Footer */}

    </div>
  );
}

export default App;

