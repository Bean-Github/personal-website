

import React from 'react';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  whatitis,
  datestart,
  dateend,
  imageURL1,
  imageURL2,
}: {
  title: string;
  description: string;
  whatitis?: string;
  datestart?: string;
  dateend?: string;
  imageURL1: string;
  imageURL2?: string;
}) => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const imgStyle = "rounded-lg shadow-lg w-[full] aspect-[126/100] object-cover transition-all duration-150 hover:scale-105 cursor-pointer";

  return (
    <div className="mb-14">

      <div className="w-full">
        <div className="grid grid-cols-2 gap-6 mb-1 justify-center">
          
          {/* IMAGES */}
          {/* ensure that url is a video */}
          <motion.div
            className={imgStyle}
            whileHover={{ scale: 1 }}
            transition={{ type: "tween", stiffness: 120 }}
            onClick={() => setOpenImage("/images/" + imageURL1)}
          > 
          {
            imageURL1.endsWith(".mp4") ? (
              <video
                src={"/images/" + imageURL1}
                className={imgStyle}
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            )
              :
            (
            <img src={"/images/" + imageURL1} alt={title} className={imgStyle}
            />
            )
          }
          </motion.div>

          <motion.div
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={() => setOpenImage("/images/" + imageURL2)}
          >
          {imageURL2 &&
            imageURL2.endsWith(".mp4") ? 
            (          
                <video
                  src={"/images/" + imageURL2}
                  className={imgStyle}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
            )
            :
            (
                <img src={"/images/" + imageURL2} alt={title} className={imgStyle}
              />
            )
          }
        </motion.div>

        </div>

        <div className="mt-4 text-sm text-blackish">
          <div className="flex justify-between items-center mb-2">
          
          {/* Left side: Title */}
          <h2 className="font-neutraface-bold text-[20px] mb-2">{title}</h2>

            {/* Right side: Whatitis + Dates */}
            {(whatitis || datestart || dateend) && (
              <div className="text-right">
                {whatitis && (
                  <div className="font-neutraface-bold text-[12px] text-gray-700">
                    {whatitis}
                  </div>
                )}
                {(datestart || dateend) && (
                  <div className="text-[10px] text-gray-500">
                    {datestart} {datestart && dateend && "–"} {dateend}
                  </div>
                )}
              </div>
            )}
          </div>
          <p className="font-proxima-nova">{description}</p>
        </div>

      </div>


          
      {/* Overlay for enlarged image */}
      {openImage && (
        <div
          className="fixed inset-0 bg-blackish/85 flex items-center justify-center z-50"
          onClick={() => setOpenImage(null)}
        >

          <video
            src={openImage}
            className={"max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"}
            autoPlay
            loop
            muted
            playsInline
            onClick={() => setOpenImage("/images/" + imageURL1)}
          >
            Your browser does not support the video tag.
          </video>

        </div>
      )}

    </div>
  );
}

export default ProjectCard;

