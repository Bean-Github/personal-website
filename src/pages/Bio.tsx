import React, { useState, useEffect, useRef } from "react";

interface BioProps {
  activeProject: string | null;
}

// function Bio() {
//   const getBioText = (): string => {
//     switch (activeProject) {
//       case "fluid":
//         return "When I first discovered SPH simulation, I was fascinated by how math could make something feel so alive.";
//       case "flocks":
//         return "Simulating life felt like painting motion. Each fish follows rules, but the result is unpredictable — like nature itself.";
//       case "clouds":
//         return "I wanted clouds that didn’t just look right, but *moved* right — light scattering, noise, and density as art.";
//       default:
//         return "I build games and simulations that explore nature, art, and emotion through code.";
//     }
//   };

//   return (
//     <section className="shadow-xl rounded-lg bg-blackish text-whiteish p-10 transition-all duration-500 ease-in-out">
//       <h2 className="text-[28px] font-neutraface-demi mb-4">Kevin Wei</h2>
//       <p className="text-[16px] font-neutraface-italic-light leading-7 text-gray-200">
//         {getBioText()}
//       </p>
//     </section>
//   );
// }

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
      case "fluid-renderer":
        return `Fluid simulations are so fascinating! It's amazing to see algorithms generate realistic natural phenomena. 
      My implementation simulates accurate light bouncing (reflection, refraction, and Fresnel effects) and incompressible 
      (constant density) fluids.  <br/><br/> 
      To simulate over 200,000 particles in realtime at 200+ FPS, I used a spatial hashing system 
      where particles only interact with nearby particles (based on a 3D cell grid). In order to do this, I had to...
      <br/>
      &emsp; 1) convert particle positions into a hashed cell index, <br/>
      &emsp; 2) generate a key bounded by the array size, <br/>
      &emsp; 3) sort keys to arrange same keys next to each other, and then <br/>
      &emsp; 4) use those keys to access all particles within a cell. <br/> <br/> 
      The most challenging yet rewarding aspect was creating a way to sort hundreds of thousands of keys per frame. 
      I decided on creating my own version of a parallel sorting algorithm called bitonic sort. <br/><br/>
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
      case "clouds":
        return `I wanted clouds that really looked like nature. I implemented light scattering, noise, and density. My clouds implement 
      Henyey-Greenstein phase function (for forward scattering), absorbance, and light accumulation. <br/><br/>
      
      Also, I created a 3D Worley + fBM noise generation tool
      that applies compute shaders to rapidly generate custom detailed 3D textures, which are read by the screen-space volumetric raymarcher. By using my own
      3D textures, I can edit them in real time to scroll the clouds and change the weather dynamically! `;
      case "a-bear-game":
        return `I enjoyed creating the environment and systems of this game! For example, you can take photos that save into your inventory as render textures.
      Additionally, when you take a photo, the image will save in your inventory as a render texture with a unique description! <br/> <br/>
      Here is a fun photo I took in the game:
      <img src="../images/abeargame6.png">
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
        return "I build games and simulations that explore nature, art, and emotion through code.";
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
    let typeSpeed = 5;
    const interval = setInterval(() => {
      setDisplayText(textRef.current.slice(0, i));
      i += 2;
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
        className={
          "px-10 py-7 font-neutraface-light space-y-7 text-[16px] leading-7 transition-all ease-out duration-500 ease-in-out"
        }
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
