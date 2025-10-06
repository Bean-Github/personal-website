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

function Intro()
{
    return (
        <div className="font-neutraface-italic-light space-y-7 text-[16px] leading-7 transition-all duration-500 ease-in-out">
            <h2 className="text-[28px] text-whiteish font-neutraface-demi">
            Hi, my name is{" "}
            <span className="font-neutraface-bold">Kevin Wei</span>
            </h2>

            <p>
            <span className="text-green-400">// About me</span> <br />
            I’m a sophomore at the{" "}
            <span className="text-orange-300">University of Pennsylvania</span>{" "}
            studying{" "}
            <span className="text-orange-300">computer graphics</span>. I love
            exploring the natural world by recreating it in code.
            </p>

            <p>
            <span className="text-green-400">// Hobbies</span> <br />
            In my free time I enjoy playing trumpet, writing poems, making
            dumplings, and riding my bike to someplace I don’t understand.
            </p>

            <p>
            <span className="text-green-400">// Favorite animal</span> <br />
            My favorite animal is a{" "}
            <span className="text-purple-300">penguin</span> :)
            </p>
        </div>
    )
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
        threshold: 0.2 
    } // triggers when ~20% visible
    );

    observer.observe(topEl);
    return () => observer.disconnect();
  }, []);

const getBioText = (): string => {
  switch (activeProject) {
    case "fluid-renderer":
      return "When I first discovered SPH simulation, I was fascinated by how math could make something feel so alive.";
    case "flocks-of-fish":
      return "Simulating life felt like painting motion. Each fish follows rules, but the result is unpredictable — like nature itself.";
    case "clouds":
      return "I wanted clouds that didn’t just look right, but *moved* right — light scattering, noise, and density as art.";
    case "a-bear-game":
      return "A cozy world of sunlight and laughter — a place where even a bear can dream beyond the forest.";
    case "descent":
      return "Falling feels freeing until it doesn’t. ‘Descent’ became a study in speed, balance, and control.";
    case "code:-purple":
      return "Animation became rhythm here — smear frames, shape keys, and a heartbeat hidden in the movement.";
    case "tin-bucket":
      return "An experiment in morphing form and feeling. Poetry in geometry — where shapes melt into memory.";
    case "prism":
      return "What if perception itself was the puzzle? Every color split became a new way to see the same truth.";
    case "a-game-of-chess":
      return "Inspired by Eliot’s ‘The Waste Land.’ It’s a quiet game about futility, ritual, and the cycles that bind us.";
    case "the-sky-of-the-sky":
      return "A love story between warmth and cold — where opposites exchange color, memory, and light.";
    case "cooking-with-rordon-gamsay":
      return "Chaos in the kitchen! I wanted to turn stress into rhythm — a dance of timers, sizzles, and panic.";
    case "retro-flight":
      return "Vaporwave horizons and endless neon plains — a flight through nostalgia that never lands.";
    case "everybody-wants-just-one-more-day":
      return "A father, a son, and a wish for one more sunrise. A game about regret, love, and letting go.";
    case "the-wei-to-the-white-house":
      return "Satire and ambition in text form — where every choice has weight, and every word a consequence.";
    case "battle-turtle":
      return "Absurdity meets determination — a turtle with a gun fighting for something simple: fun.";
    case "bullet-disco":
      return "Momentum, music, and mayhem — where every shot is a beat, and every beat is survival.";
    case "ouroboros":
      return "A puzzle that loops back on itself — about endings that feed beginnings, and motion that never stops.";
    case "stronger-to-deader":
      return "A twisted idea: strength through decay. It’s a puzzle about control, sacrifice, and irony.";
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
    let typeSpeed = 20;
    const interval = setInterval(() => {
      setDisplayText(textRef.current.slice(0, i));
      i++;
      if (i > textRef.current.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
      if (i > 400 / typeSpeed)
      {
        setStartTyping(false); 
      }
    }, typeSpeed); // typing speed (ms per char)

    return () => clearInterval(interval);
  }, [activeProject, showIntro]);

  return (
    <section
    onClick= {() => {if (isCompact) setIsCompact(false)}}
      className={`shadow-xl rounded-lg bg-blackish text-whiteish overflow-hidden z-100
       duration-200 ease-[cubic-bezier(1,0,0.3,1)]
       ${
        isStartTyping && !showIntro  ? "scale-105 rotate-1" : "scale-100"
       }
       ${
        isCompact
          ? "scale-[0.95] opacity-80 cursor-pointer"
          : "scale-100 opacity-100"
        }`
        
      }
    >
      {/* IDE-style header */}
      <div className="flex items-center gap-2 bg-[#2d2d2d] px-4 py-2 transition-colors duration-300">
        <button
          onClick={() => setIsCompact(true)}
          className={isCompact ? 
            "w-3 h-3 rounded-full bg-red-400" : 
            "w-3 h-3 rounded-full bg-red-400 hover:brightness-125 hover:scale-110 active:scale-90 transition-transform"}
          title="Collapse / Expand"
        ></button>
        <button
          onClick={() => setIsCompact(true)}
          className={isCompact ? 
            "w-3 h-3 rounded-full bg-yellow-300" : 
            "w-3 h-3 rounded-full bg-yellow-300 hover:brightness-110 hover:scale-110 active:scale-90 transition-transform"}
          title="Compact Mode"
        ></button>
        <button
          onClick={() => {
            setIsCompact(true);
          }}
          className={isCompact ? 
            "w-3 h-3 rounded-full bg-green-400" :
            "w-3 h-3 rounded-full bg-green-400 hover:brightness-110 hover:scale-110 active:scale-90 transition-transform"}  
          title="Reset"
        ></button>

            
        <span className="ml-4 text-sm text-gray-400 select-none">{
            showIntro ? "bio.cpp" : activeProject + ".cpp"}</span>
      </div>

      {/* Collapsible content */}
      <div
        className={"px-10 py-7 font-neutraface-italic-light space-y-7 text-[16px] leading-7 transition-all ease-out duration-500 ease-in-out"}
      >
        {
            showIntro ? (
                <Intro/>
            ) :
            (
                <p>
                    <span className="text-green-400">// Project Info</span> <br />
                    {displayText}
                </p>
            )
        }

      </div>
      
    </section>
  );
}
export default Bio;
