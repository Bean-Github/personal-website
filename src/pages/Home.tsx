import React, { useState } from "react";
import { useEffect, useRef } from "react";

import ProjectCard from '../ProjectCard';
import TopBar from '../TopBar';
import TypingText from '../TypingText';

import Bio from './Bio'


function ProjectPreviews() {
  return (
    <div>
        {/* Project previews */}
          <ProjectCard
            title="Fluid Renderer"
            description="Realtime Newtonian fluid simulation based on the Smoothed Particle Hydrodynamics model and Navier-Stokes equations. Rendered with physically-based volumetric raymarching techniques (accurate light bouncing: reflection, refraction, and Fresnel effects)."
            imageURL1="fluidsim1.mp4"
            imageURL2="fluidsim3.mp4"
            whatitis="SIMULATION"
            datestart="Jun 2025"
            dateend="Aug 2025">
          </ProjectCard>
          
          <ProjectCard
            title="Flocks of Fish"
            description="Explore the depths of a cartoon ocean! Swim with sharks, whales, and thousands of fishies in a 3D oceanic environment! The flocking simulation uses an optimized boids algorithm and supports realtime interactions with tens of thousands of fish." 
            imageURL1="boids1.mp4"
            imageURL2="boids2.mp4"
            whatitis="SIMULATION"
            datestart="May 2025"
            dateend="Jun 2025">
          </ProjectCard>

          <ProjectCard
            title="Clouds"
            description="Soar through volumetric clouds! Using my custom GPU-accelerated 3D Worley + fBM noise generation tool, you can easily and rapidly generate 3D textures. These textures are then read by a density raymarcher to render clouds! Implements Henyey-Greenstein phase function (for forward scattering), absorbance, and light accumulation." 
            imageURL1="clouds2.mp4"
            imageURL2="clouds1.png"
            whatitis="SIMULATION"
            datestart="Apr 2025"
            dateend="May 2025">
          </ProjectCard>

          <ProjectCard
            title="A Bear Game"
            description="Play as a bear who does bear things, like fishing, catching bugs, and ... driving a car? In this cozy toon-shaded world you can talk to people, buy donuts, take pictures, and sail on a boat! Explore the open beaches, islands, cities, and forests." 
            imageURL1="abeargame2.mp4"
            imageURL2="abeargame3.mp4"
            whatitis="EXPLORATION"
            datestart="Dec 2024"
            dateend="Apr 2025">
          </ProjectCard>

          <ProjectCard
            title="Descent"
            description="Snowboard down a procedural mountain while avoiding trees. Do cool tricks and flips to gain points! How far can you go?" 
            imageURL1="thumbnail_descent.png"
            imageURL2="descent2.mp4"
            whatitis="ACTION GAME"
            datestart="Aug 2024"
            dateend="Nov 2024">
          </ProjectCard>

          <ProjectCard
            title="Code: Purple"
            description="A fully rigged character with  facial shape keys and stylized smear frames." 
            imageURL1="characterpurple3.mp4"
            imageURL2="characterpurple2.mp4"
            whatitis="ANIMATION"
            datestart="May 2025">
          </ProjectCard>

          <ProjectCard
            title="Tin Bucket"
            description="An animated short film inspired by a poem. Utilizes a SDF morph technique I made with geometry nodes. All assets and animations made by me in Blender." 
            imageURL1="tinbucket1.mp4"
            imageURL2="tinbucket2.mp4"
            whatitis="ANIMATION"
            datestart="Mar 2025"
            dateend="Apr 2025">
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
    </div>
  )
}

function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -50% 0px", // 20% buffer on top/bottom
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          setActiveProject(target.dataset.project ?? null);
        }
      });
    }, options);

    const cards = document.querySelectorAll<HTMLElement>(".project-card");
    cards.forEach((card) => observer.current?.observe(card));

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-y-scroll no-scrollbar bg-whiteish text-gray-800">
      <TopBar />

      {/* Main content */}
      <main className="flex flex-1 w-[85vw] px-12 py-15">

        {/* Left side stuff */}
        <section className="z-100 w-[50%] pl-10 py-5 ml-[10vw] mt-[11px] flex-col justify-start pr-6 h-[83vh] mt-sm">

          {/* big card / video */}
          <div 
          id="games-portfolio"
          className="relative bg-gradient-to-r font-proxima-nova mb-10 from-[#0f2027] via-[#0d252e] to-[#0a3044] rounded-2xl shadow-[0_0_5px] overflow-hidden h-[180px] flex items-center justify-between px-6 py-6 transition-all duration-300 ease-in-out">

            {/* Left: Text */}
            <div className="flex flex-col ml-4 justify-center text-left">
              <h1 className="text-3xl font-neutraface-bold text-white drop-shadow-[0_0_12px_white]">
                <span className="text-white ">{'< '}Games Portfolio{' />'}</span>
              </h1>
              <span className="mt-2 text-lg align-middle font-neutraface-italic text-gray-300">
                5+ years of game development
              </span>
            </div>

            {/* Right: Penguin */}
            <div className="relative w-50 h-100">
              <img 
                src="/penguin.svg" 
                alt="Penguin Mascot" 
                className="opacity-70 select-none absolute bottom-4 right-0 w-[1000px] transform hover:-translate-y-4 transition-transform duration-500" 
              />
            </div>

            {/* Optional: Faint code overlay */}
            <pre className="absolute select-none -top-4 left-0 w-full h-full rotate-355 text-[10px] font-mono bg-gradient-to-tl from-green-200/1 to-green-200/18 bg-clip-text text-transparent pointer-events-none overflow-hidden">
  {`#ifdef WELCOME_TO_MY_PORTFOLIO
precision mediump float;
#endif

uniform vec2 kevin;
uniform float wei;

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / kevin.xy;
    
    // Kevin's amazing fragment shader
    vec2 penguinUV = floor(uv * vec2(50.0, 10.0));
    
    float k = step(0.0, penguinUV.x) * (1.0 - step(9.0, penguinUV.x)) * step(penguinUV.y, 9.0);
    float e = step(10.0, penguinUV.x) * (1.0 - step(19.0, penguinUV.x)) * step(penguinUV.y, 9.0);
    float v = step(20.0, penguinUV.x) * (1.0 - step(29.0, penguinUV.x)) * step(penguinUV.y, 9.0);
    float i = step(30.0, penguinUV.x) * (1.0 - step(34.0, penguinUV.x)) * step(penguinUV.y, 9.0);
    float n = step(35.0, penguinUV.x) * (1.0 - step(49.0, penguinUV.x)) * step(penguinUV.y, 9.0);
    
    float letter = k + e + v + i + n;
    
    // Make it bouncy like a happy Kevin
    float bounce = sin(wei * 5.0 + uv.x * 10.0) * 0.3 + 0.7;
    
    vec3 color = vec3(1.0, 0.7, 0.2) * letter * bounce;
    
    fragColor = vec4(color, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
  `}
            </pre>
            </div>

          <section className="z-100 overflow-visible">
            <ProjectPreviews />
            <div className="h-[50vh]">

            </div>
          </section>

        </section>

        {/* Right side bio */}
        <section className="py-5 ml-[3vh] mt-[10px] flex flex-col justify-start text-blackish mr-[7vw] z-10">
          <div className="fixed z-10 w-[35%]">
            <Bio activeProject={activeProject}/>
          </div>

          <div className="pointer-events-none w-full flex justify-between items-center p-[100vh] right-0 absolute bottom-0 z-0 overflow-hidden">
            <img 
              src="penguin mini.svg" 
              alt="A cute penguin" 
              className="absolute bottom-0 right-0 translate-x-10 translate-y-[30vh] rotate-345 mt-8 w-[70vh] z-0" 
            />

            
          </div>
          {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#fefff0]/100 via-[white]/25 to-white/0 z-5 pointer-events-none"></div>
        </section>
        

      </main>

      {/* Footer */}

    </div>
  );
}


export default Home;

