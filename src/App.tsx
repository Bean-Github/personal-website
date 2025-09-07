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

function Bio() {
  return (
    <section>
      <h2 className="text-[60px] font-light mb-4 font-neutraface leading-16">
        Hi, my name is <br></br> <span className="font-neutraface-bold">Kevin Wei</span>
      </h2>
      <div className="font-proxima-nova text-base space-y-4">
        <p className="leading-6 mb-4 text-[18px]">
          I’m a sophomore at the University of Pennsylvania studying computer graphics.
          I love exploring the natural world by recreating it in code.
        </p>
        <p className="leading-6 mb-4 text-[18px]">
          In my free time I enjoy playing trumpet, writing poems, making dumplings,
          and getting on my bike to ride to some place I don’t understand.
        </p>
        <p className="leading-6 mb-4 text-[18px]">My favorite animal is a penguin.</p>
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
        
        {/* Left side big card */}
        <section className="w-[50%] ml-[10vw] flex-col justify-start pr-6 h-[85vh] overflow-y-scroll no-scrollbar mt-sm">
          <div className="bg-gray-900 text-white rounded-md shadow-md h-[300px] flex items-center justify-center mb-8">
            <h1 className="text-3xl font-bold text-center">
              Games Portfolio <br />
              <span className="text-lg font-light">3+ years of game development</span>
            </h1>
          </div>

          {/* Project previews */}
          <ProjectCard
            title="Descent"
            description="Find creative ways to loop back onto your own tail in this slithery puzzle game!" 
            imageURL1="thumbnail_descent.png"
            imageURL2="descent1.png">
          </ProjectCard>
          
          <ProjectCard
            title="Prism"
            description="Split off into prismatic color characters to solve perception-based puzzles! See the world in a new light." 
            imageURL1="thumbnail_prism.png"
            imageURL2="prism1.png">
          </ProjectCard>

          <ProjectCard
            title="A Game of Chess"
            description="Inspired by T.S. Eliot's poem 'The Waste Land', play against the 'lidless man' from the poem, over a game of chess. Explore the cyclical nature of life." 
            imageURL1="thumbnail_agameofchess.png"
            imageURL2="agameofchess1.png">
          </ProjectCard>

          <ProjectCard
            title="the sky of the sky."
            description="Play as a cold, cold, man who gains a special warmth and color in his life. Learn how opposites can attract by sharing memories with someone fundamentally different than you." 
            imageURL1="thumbnail_theskyofthesky.png"
            imageURL2="theskyofthesky1.png">
          </ProjectCard>

          <ProjectCard
            title="Cooking with Rordon Gamsay"
            description="Platform around the stressful kitchen of esteemed chef Rordon Gamsay as you race against time to cook a burger." 
            imageURL1="thumbnail_cookingwithrordongamsay.png"
            imageURL2="cookingwithrordongamsay1.png">
          </ProjectCard>

          <ProjectCard
            title="Retro Flight"
            description="Zoom across a vaporwave-style procedural landscape!" 
            imageURL1="thumbnail_retroflight.png">
          </ProjectCard>

          <ProjectCard
            title="Battle Turtle"
            description="Play as a turtle with a gun fighting against mafia sharks, evil pufferfish, sliding penguins, and a giant kraken!"
            imageURL1="thumbnail_battleturtle.png"
            imageURL2="battleturtle1.png">
          </ProjectCard>
          
          <ProjectCard
            title="The Wei to the White House"
            description="Do you have what it takes to become the President of the United States?" 
            imageURL1="thumbnail_theweitothewhitehouse.png"
            imageURL2="theweitothewhitehouse1.png">
          </ProjectCard>

          <ProjectCard
            title="Everybody Wants Just One More Day"
            description="A narrative exploration game about a father and a son. Inspired by a poem by William J. Harris." 
            imageURL1="thumbnail_everybodywantsjustonemoreday.png"
            imageURL2="everybodywantsjustonemoreday2.png">
          </ProjectCard>

          <ProjectCard
            title="Ouroboros"
            description="Find creative ways to loop back onto your own tail in this slithery puzzle board game!" 
            imageURL1="ouroboros1.png"
            imageURL2="ouroboros2.png">
          </ProjectCard>

          <ProjectCard
            title="Bullet Disco"
            description="Play as a bullet who dashes between guns in this bullet-fast action game!" 
            imageURL1="thumbnail_bulletdisco.png"
            imageURL2="bulletdisco2.png">
          </ProjectCard>

          <ProjectCard
            title="Stronger to Deader"
            description="Win by... dying? Play as a mad scientist who controls his own zombies!"
            imageURL1="thumbnail_strongertodeader.png">
          </ProjectCard>
        </section>

        {/* Right side bio */}
        <section  className="w-[45%] ml-[3vh] flex flex-col justify-start text-blackish mr-[5vw]">
          <Bio />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-right p-[7%] py-6 mt-sm">
        <p>I am Kevin Wei. Here’s my contacts</p>
      </footer>
    </div>
  );
}

export default App;

