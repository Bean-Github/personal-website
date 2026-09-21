import React, { useState, useEffect, useRef } from "react";

interface BioProps {
  activeProject: string | null;
}


function Intro() {
  return (
    <div className="font-neutraface-light space-y-7 text-[16px] leading-7 transition-all duration-500 ease-in-out">
      <h2 className="text-[28px] text-whiteish font-neutraface-demi">
        Hi, my name is <span className="font-neutraface-bold">Kevin Wei</span>
      </h2>

      <p>
        <span className="text-green-400 font-neutraface-italic-light">
          // About me
        </span>{" "}
        <br />
        I’m a sophomore at the{" "}
        <span className="text-orange-300">University of Pennsylvania</span>{" "}
        studying <span className="text-orange-300">computer graphics</span>. I
        love exploring the natural world by recreating it in code.
      </p>

      <p>
        <span className="text-green-400 font-neutraface-italic-light">
          // Hobbies
        </span>{" "}
        <br />
        In my free time I enjoy playing trumpet, writing poems, making
        dumplings, and riding my bike to someplace I don’t understand.
      </p>

      <p>
        <span className="text-green-400 font-neutraface-italic-light">
          // Favorite animal
        </span>{" "}
        <br />
        My favorite animal is a <span className="text-purple-300">
          penguin
        </span>{" "}
        :)
      </p>

      <p>
        <span className="text-green-400 font-neutraface-italic-light">
          // Reach me!
        </span>{" "}
        <br />
        <div className="flex gap-2.5">
          <a className="text-blue-200" href="mailto:kevwei@seas.upenn.edu">
            kevwei@seas.upenn.edu
          </a>
          <span> or </span>
          <a
            className="text-blue-200"
            href="https://www.linkedin.com/in/kevwei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </p>
    </div>
  );
}
const Bio: React.FC<BioProps> = ({ activeProject }) => {
  const [showIntro, setShowIntro] = useState(true);
  const topSectionRef = useRef<HTMLElement | null>(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const textRef = useRef("");
  const [isStartTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const topEl = document.querySelector("#games-portfolio");
    topSectionRef.current = topEl as HTMLElement | null;

    if (!topEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowIntro(entry.isIntersecting);
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.2,
      } // triggers when ~20% visible
    );

    observer.observe(topEl);
    return () => observer.disconnect();
  }, []);

  const getBioText = (): string => {
    switch (activeProject) {
      case "space-minecraft":
        return `Minecraft but in space! Place blocks on Saturn's rings, explore the procedural Earth, 
        roam through the Sun's blazing hot atmosphere. I made this game with a team of 2 other friends. 
        We built it entirely from scratch with C++, GLSL and OpenGL. <br/><br/> 
        I derived a mapping converting generic flat 2D Minecraft terrain into a 3D cube-sphere. This enabled
        generation of smooth, round planets of Minecraft-like blocks! <br/><br/>
        I created a volumetric atmosphere shader, which simulates realistic light scattering against air particles. 
        This shader uses Rayleigh and Mie scattering to create the blue skies and orange sunsets. This let us
        have real, simulated day-night cycles based on how atmosphere and ozone layers interact with the Sun 
        you are orbiting around! <br/><br/>
        Additionally, I created a custom Level of Detail (LOD) system based on Quadtree compression, which offered a 40x performance increase! 
        The LODs are essentially simpler versions of terrain, allowing us to render entire planets made of 
        millions of blocks at high framerate. <br/><br/>
        I also created the deferred rendering pipeline from scratch, complete with screen-space ambient occlusion (SSAO), 
        additional light sources such as the volumetric flashlight, and other effects! <br/><br/>
        Finally, I implemented gravitational physics, allowing planets to orbit. To attach players to their current planet, I 
        matched player velocity to planet surface velocity. <br/><br/>`;

      case "moon-tycoon":
      return `
      <img src="../images/moontycoonlogo.jpg" className="w-[100%] mb-4"></img>

      <br/>
      With Moon Tycoon, engineers and researchers can explore and place equipment at any location on the Moon’s surface. 
      The simulation will emulate the predicted rocky and cratered surface of the Moon to a high degree of accuracy and resolution. <br/><br/>
      I also built systems to… <br/>
      -> generate lunar surface detail <br/>
      -> use real-time ephemeris data to calculate sun positions and local lighting conditions <br/>
      -> select coordinates on a lunar globe and teleport there with accuracy to the meter <br/><br/>

      I also optimized software framerate (FPS) by 3x and reduced loading time from 20 seconds to 2 seconds, and worked 
      with NASA engineers to implement a new lunar Multi-Purpose Habitation module into the simulation. <br/><br/> 

      Moon Tycoon will specifically support the Artemis project and future moon landings by enabling engineers to explore and 
      place robots anywhere on the moon with extremely realistic detail. It focuses on the virtual testing of In-Situ Resource 
      Utilization (ISRU) equipment such as rovers, drills, vehicles, landers, and lunar modules. The software’s visualization 
      capabilities are especially relevant for the lunar south pole, the planned location of NASA's future Moon Base.<br/><br/>

      See more here: <u><a href="https://www.nasa.gov/centers-and-facilities/kennedy/nasa-project-takes-off-with-new-3d-lunar-simulation/" 
      target="_blank" rel="noopener noreferrer">NASA Project Takes off with New 3D Lunar Simulation</a></u>
      `;

      case "detention-bums":
        return `
        <img src="../images/detentionbumsthumbnail_1.png" className="w-[100%] mb-4"></img>

        <br/>
        This game achieved 25th Overall out of 3506 entries in Juniper Dev Game Jam! 
        <br/><br/>
        
        I made this game with a friend in one week. I created the pen spinning mechanic, 
        where you spin a pen in one hand. I made a custom pen spinning physics system
        for angular velocity, quaternion poses, and smooth momentum. 
        I designed many smooth spinning animations, allowing the player to transfer the pen
        between fingers, spin it around the thumb, and charge between spins. 
        <br/><br/>

        I created a modular combo system inspired by Tony Hawk Pro Skater, where players can chain together tricks to 
        earn multipliers and create unique appealing animations. Here's a sample of the moveset: 
        <br/><br/>
        <img src="../images/spinbook.png" className="w-[100%] mb-4"></img> <br/>

        I also made the environment, toon shaders, models, visual effects, UI, dialogue, tutorial, and Teacher Joe's behavior AI.
        <br/><br/>
        
        I had a lot of fun creating various
        eccentric characters, such as Teacher Joe, Jude, and Lucas. It was also satisfying creating 
        visual effects for the pen spinning, such as motion trails, particle effects, and camera shake.
        <br/><br/>

        Play the game here: <u><a href="https://itch.io/jam/theveryseriousjuniperdevgamejam/rate/4716866" target="_blank"> Detention Bums </a></u>
        `

      case "differential-growth-with-cell-differentiation":
        return `I authored a novel mesh-based simulation of natural plant growth and flower development. 
        The research project emulates physical and biological processes such as differential growth, cell differentiation, 
        and the flow of auxin growth hormones to simulate the growth of branches, shoots, and leaves in real time. 

        The base of the simulation is similar to a Smoothed Particle Hydrodynamics (SPH) fluid simulation, 
        where particles influence and collide with each other using smoothed kernel functions. 
        However, this simulation represents particles as plant cells, and each cell is connected using a 
        half-edge mesh data structure. <br/><br/>

        The project is also accelerated with spatial hashing and is highly optimized. 
        It manages tens of thousands of plant cells in real time and parallelizes several complex processes such as 
        edge splitting, edge flipping, turgor pressure, Laplacian smoothing, growth tensors, and self-collisions. <br/><br/>

        I also created a custom node-based graph editor so users can easily visualize and create complex plant genotypes 
        before running the simulation. <br/><br/>
      
        For more information, see the github here: <u><a href="https://github.com/Bean-Github/Differential-Growth-With-Cell-Types" 
        target="_blank"> Differential Growth With Cell Types </a></u>      
      `;

      case "real-time-fluid-renderer":
        return `Fluid simulations are so fascinating! It's amazing to see algorithms generate realistic natural phenomena. 
      I based pressure, viscosity, and other forces on the
      Navier-Stokes equations and incompressible (constant density) fluids. For optimization, each particle
      represents a smooth density of fluid. This method is known as 
      Smoothed Particle Hydrodynamics (SPH), where each particle's properties are smoothed over a radius 
      using kernel functions. <br/><br/>
      I implemented several kernel functions, such as Poly6 and Poly3 and alternated based on particle influence distance (near 
      vs far). <br/><br/>
      Then, I baked the simulation into a 3D density 
      texture, which can be read by a raymarcher that simulates physically-accurate 
      light bouncing (reflection, refraction, and Fresnel effects). All these implementations are accelerated
      by the GPU with compute shaders. <br/><br/> 
      To simulate over 200,000 particles in realtime at 200+ FPS, I used a spatial hashing system 
      where particles only interact with nearby particles (based on a 3D cell grid). In order to do this, I had to...
      <br/>
      &emsp; 1) convert particle positions into a hashed cell index, <br/>
      &emsp; 2) generate a key bounded by the array size, <br/>
      &emsp; 3) sort keys to arrange same keys next to each other, and then <br/>
      &emsp; 4) use those keys to access all particles within a cell. <br/> <br/> 
      The most challenging yet rewarding aspect was creating a way to sort hundreds of thousands of keys per frame. 
      I decided on creating my own version of a parallel sorting algorithm that can run on 
      the GPU called bitonic sort. <br/><br/>
      My code base can be found here: <u><a href = "https://github.com/Bean-Github/Fluid-Renderer" target="_blank"> Fluid Renderer </a></u>`;
      
      case "flocks-of-fish":
        return `Each fish/flocking agent follows three simple rules: Separation, avoid nearby boids by steering away
      heavily from very close neighbors. Alignment, match velocity gradually with nearby neighbors. Cohesion, move towards the center of mass or
      average position of neighbors, keeping groups together. In order to simulate thousands of fish, I used GPU-acceleration. Seeing complex
      realistic behavior emerge from simple rules was amazing. <br/> <br/>
      I modeled all assets in Blender, such as fish, coral, submarines, and whales. Furthermore, I used an A Short Hike-inspired terrain shader
      coded in HLSL, which allowed me to create toon-like terrain painting. The shader automatically renders 
      cliff rock formations at sharp terrain height changes, allowing me to easily create terrain with Unity's terrain editor.
      <br/> <br/>
      Some other fun things I added were god rays, underwater post-processing, bubble particles, and cookie-based caustics! `;
      case "volumetric-clouds":
        return `I wanted clouds that really looked like nature. I implemented light scattering, noise, and density. My clouds implement 
      Henyey-Greenstein phase function (for forward scattering), absorbance, and light accumulation. <br/><br/>
      
      Also, I created a 3D Worley + fBM noise generation tool
      that applies compute shaders to rapidly generate custom detailed 3D textures, which are read by the screen-space volumetric raymarcher. By using my own
      3D textures, I can edit them in real time to scroll the clouds and change the weather dynamically! `;
      
      case "a-bear-game":
        return `
        I enjoyed creating the environment and systems of this game! I created all the stylized shaders in this game.
        Here is an example of the interactive water and grass shaders I created. <br/> <br/>

        <img src="../images/beargamereel3.gif">
        </img> 
        
        <br/> <br/>

        The water shader uses a combination of vertex displacement, depth, normal mapping, 
        Fresnel effects, planar reflections, and ripple effects to create realistic water surfaces. 

        <br/> <br/>

        Some of the features I implemented include a photo system where you can take photos that save into your inventory as 
        render textures.
        Additionally, when you take a photo, the image will save with a unique description! <br/> <br/>
        Here is a fun photo I took in the game:
      <img src="../images/abeargame7.png">
      </img>
      `;
      case "descent":
        return `Descent was a game I made in a semester with a group of friends. It's a snowboarding game that is able to detect your tricks and 
      award you based on how cool your trick was! Furthermore, the game is endless! With procedural terrain and tree generation, 
      the fun never ends. We even added a sand biome region, where you can slide down sand dunes and avoid cacti! <br/><br/>
      One aspect I very much enjoyed was making the music for the game. I created the original score in MuseScore, complete with 
      two cellos, piano, harp, acoustic bass, and drum set. <br/><br/>
      Play the full game here: 
      <u><a href="https://kevinwei.itch.io/descent" target="_blank"> Descent </a></u>`;
      case "code:-purple":
        return `I made this character to explore the art of character design, from default blender cube to fully rigged humanoid. I learned a lot about 
      proportions, sculpting, retopologizing, texturing, rigging, and animating at an intricate level. `;
      case "tin-bucket":
        return `This animation was inspired by the poem Tin Bucket, by Jenny George. It employs an SDF morph technique I made with geometry nodes, which
      was used in the scene where a wooden hand transforms into a comb. The SDF morph utilizes scattered points that sample the mesh and calculates intersections 
      with the mesh. A demo is shown on the right, where a blue monkey transforms into a red ring! <br/><br/>
      I enjoyed visualizing one of my favorite poems, by a contemporary author. In fact, I sent the animation to the author over Instagram, 
      and she thought it was cool! <br/><br/>
      Watch the full video here: 
      <u><a href="https://www.youtube.com/watch?v=_c-Dw7s28DE" target="_blank"> Tin Bucket </a></u>`;
      case "prism":
        return `What if perception itself was the puzzle? I made this game with a group of friends for a game jam. The premise is that each character you control  
      can perceive the world differently. For example, the red person can see and walk over a floating bridge that is invisible to the blue character. This system 
      enables interesting puzzles where you must switch perspective and make your characters work together to solve it! <br/><br/>
      Play the game here: 
      <u><a href="https://kevinwei.itch.io/prism" target="_blank"> Prism </a></u>
      `;
      case "a-game-of-chess":
        return `I enjoyed making the tech driving this game's vibe. I modeled all assets: the face, the chess pieces, the candles, and the board! 
        I also created custom fire effects, smoke, fog, and a normals/depth-based Sobel filter for edge outlining. I loved the process of polishing the game and 
        bringing my vision to life! <br/><br/>
        Inspired by T.S. Eliot’s post WWI poem, "The Waste Land." It references the section, "II. A Game of Chess", which features "Pressing lidless eyes" while
      playing chess. I wanted to subvert the expected nature of chess by making you play against yourself. 
      You are forced to go through the motions without someone else moving with you, stepping in the same direction, and wordlessly flowing together. 
      I think playing chess by yourself captures the mood of the two characters’ one-sided relationship as well as the man’s empty thoughts. <br/><br/>
      Play the game here: 
      <u><a href="https://kevinwei.itch.io/a-game-of-chess-from-the-wasteland" target="_blank"> A Game of Chess </a></u>`;
      case "the-sky-of-the-sky":
        return `A love story between warmth and cold where opposites attract. I made this romantic game for a Valentine's day game jam with a 
      small group of friends. The story references the poem "[i carry your heart with me(i carry it in]" by e. e. cummings. I was reminded of that poem 
      because my high school English teacher really liked that poem, and it is very sweet. <br/><br/>
      I enjoyed recreating scenes from the poem and creating the game's 
      art direction, from gradient noise shaders to imprintable snow to vast gardens full of flowers. <br/><br/>
      Play the game here: 
      <u><a href="https://kevinwei.itch.io/the-sky-of-the-sky" target="_blank"> the sky of the sky </a></u>`;
      case "cooking-with-rordon-gamsay":
        return `A hazardous work culture! This game was a group project for a Halloween game jam, with the theme, Hazardous Environment. 
      Race against time to cook a cheeseburger. Dodge Rordon's verbose attacks and create the correct burger order at the assembly station, 
      then drop it off at the serving chute to win! <br/><br/>
      Play the game here: 
      <u><a href="https://kevinwei.itch.io/cooking-with-rordon-gamsay" target="_blank"> Cooking with Rordon Gamsay </a></u>
      `;
      case "retro-flight":
        return `Zoom past vaporwave horizons and endless neon plains. This game uses a custom Perlin-noise terrain generator and a 
      fun flight controller that I created! <br/><br/>
      Play the game here: 
      <u><a href="http://kevinwei.itch.io/retro-flight" target="_blank"> Retro Flight </a></u>
      `;
      case "everybody-wants-just-one-more-day":
        return `A father, a son, and a wish for one more sunrise. A game about regret, love, and letting go. 
      Explore a dark but comforting ocean landscape filled with mysterious artifacts. Clicking on these artifacts uncovers poems by various 
      artists, focusing on the theme of fatherly love. Gradually learn about and overcome tragedy in this interactive experience. <br/><br/>
      Play the game here: 
      <u><a href="https://kevinwei.itch.io/everybody-wants-just-one-more-day" target="_blank"> Everybody Wants Just One More Day </a></u>
      `;
      case "the-wei-to-the-white-house":
        return `Do you have what it takes to become the President of the United States? Choose wisely as you face tough decisions and journey to 
      become the next U.S. President in this Oregon-Trail-like game! Manage your campaign money, support, and approval ratings as you encounter 
      comical events and challenges! 
      Are you able to gain the favor of the electoral college? <br/><br/>
      Play the game here: 
      <u><a href="https://kevinwei.itch.io/the-wei-to-the-white-house" target="_blank"> The Wei to the White House </a></u>
      `;
      case "battle-turtle":
        return `Explore 7 unique regions in this oceanic top-down shooter! Play as a turtle with a strong back. Fight lobsters, crabs, and more 
      with your gun, baseball bat, grappler hook, and explosive water balloons. 
      <br/><br/>
      Play the game here: 
      <u><a href="https://kevinwei.itch.io/battle-turtle-2" target="_blank"> Battle Turtle </a></u>
      `;
      case "bullet-disco":
        return `Instead of holding a gun that shoots enemies, play as a bullet that shoots between guns! 
      Play as a sharply dressed bullet that can blast everyone in your way. Jump into different guns for different abilities! The shotgun 
      gives you a spread shot, while the sniper increases your range and speed. Inspired by John Wick and Hotline Miami's fast paced action and energy, 
      find yourself craving the adrenaline rush of a Bullet Disco. I made this game for GMTK Game Jam in 48 hours with a friend.
      <br/><br/>
      Play the game here: 
      <u><a href="https://kevinwei.itch.io/bullet-disco" target="_blank"> Bullet Disco </a></u>
      `;

      case "ouroboros":
        return `This was a game jam submission to Brackeys Game Jam 2023.1. We achieved 5th Most Fun, 7th Best Game Design, and 10th Best Overall.
      You are an ouroboros who loves to eat your own tail! You also LOVE eating people! Traverse around barriers and eat snacks (civilians) 
      on your journey to your own tail in this slithery top-down puzzle game. <br/><br/>
      Play the game here: 
      <u><a href="https://kevinwei.itch.io/ouroboros" target="_blank"> Ouroboros </a></u>
      `;
      case "stronger-to-deader":
        return `This was one of my first games, created for a game jam with my friend. Solve creative puzzles by controlling your own dead bodies! 
      When you die, you spawn an elemental zombie. Dying by fire will spawn 
      a fire zombie, and drowning will spawn a water zombie. 
      You can then control that zombie to solve tasks. For example, the water zombie is able to dive deep and hit buttons. 
      The fire zombie can go through fire.<br/><br/>
      Play the game here: 
      <u><a href="https://kevinwei.itch.io/stronger-to-dead-er" target="_blank"> Stronger To-Dead-er </a></u>
      `;
      default:
        return "I build games and simulations!";
    }
  };

  // Typewriter effect whenever activeProject changes
  useEffect(() => {
    if (showIntro) return; // don't type for intro section
    const text = getBioText();
    textRef.current = text;
    setDisplayText("");
    setIsTyping(true);
    setStartTyping(true);

    let i = 0;
    let typeSpeed = 2;
    const interval = setInterval(() => {
      setDisplayText(textRef.current.slice(0, i));
      i += 6;
      if (i > textRef.current.length) {
        clearInterval(interval);
        setIsTyping(false);
        setStartTyping(false);
      }
      if (i > 500 / typeSpeed) {
        setStartTyping(false);
      }
    }, typeSpeed); // typing speed (ms per char)

    return () => clearInterval(interval);
  }, [activeProject, showIntro]);

  return (
    <section
      onClick={() => {
        if (isCompact) setIsCompact(false);
      }}
      className={`shadow-xl rounded-lg bg-blackish text-whiteish overflow-hidden z-100
       duration-200 ease-[cubic-bezier(1,0,0.3,1)]
       ${isStartTyping && !showIntro ? "scale-105 rotate-1" : "scale-100"}
       ${
         isCompact
           ? "scale-[0.95] opacity-80 cursor-pointer"
           : "scale-100 opacity-100"
       }`}
    >
      {/* IDE-style header */}
      <div className="flex items-center gap-2 bg-[#2d2d2d] px-4 py-2 transition-colors duration-300">
        <button
          onClick={() => setIsCompact(true)}
          className={
            isCompact
              ? "w-3 h-3 rounded-full bg-red-400"
              : "w-3 h-3 rounded-full bg-red-400 hover:brightness-125 hover:scale-110 active:scale-90 transition-transform"
          }
          title="Collapse / Expand"
        ></button>
        <button
          onClick={() => setIsCompact(true)}
          className={
            isCompact
              ? "w-3 h-3 rounded-full bg-yellow-300"
              : "w-3 h-3 rounded-full bg-yellow-300 hover:brightness-110 hover:scale-110 active:scale-90 transition-transform"
          }
          title="Compact Mode"
        ></button>
        <button
          onClick={() => {
            setIsCompact(true);
          }}
          className={
            isCompact
              ? "w-3 h-3 rounded-full bg-green-400"
              : "w-3 h-3 rounded-full bg-green-400 hover:brightness-110 hover:scale-110 active:scale-90 transition-transform"
          }
          title="Reset"
        ></button>

        <span className="ml-4 text-sm text-gray-400 select-none">
          {showIntro ? "bio.cpp" : activeProject + ".cpp"}
        </span>
      </div>

      {/* Collapsible content */}
      <div
        className="
          px-10 py-7
          font-neutraface-light
          space-y-7
          text-[16px]
          leading-7
          transition-all
          duration-500
          ease-in-out
          max-h-[65vh]
          overflow-y-auto
          no-scrollbar
        "
      >
        {showIntro ? (
          <Intro />
        ) : (
          <p>
            <span className="text-green-400 font-neutraface-italic-light">
              // Project Info
            </span>{" "}
            <br />
            <span dangerouslySetInnerHTML={{ __html: displayText }} />
          </p>
        )}
      </div>
    </section>
  );
};
export default Bio;
