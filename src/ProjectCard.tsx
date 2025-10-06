import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
  title: string;
  description: string;
  whatitis?: string;
  datestart?: string;
  dateend?: string;
  imageURL1: string;
  imageURL2?: string;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;

}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  whatitis,
  datestart,
  dateend,
  imageURL1,
  imageURL2,
  className = "",
  onOpen,
  onClose

}) => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const imgStyle =
    "rounded-lg shadow-lg w-full aspect-[126/100] object-cover transition-all duration-150 cursor-pointer";

  // Intersection Observers for images
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px",
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <div
      className={`project-card mb-14 ${className}`}
      data-project={title.toLowerCase().replace(/\s+/g, "-")}
      data-open={openImage}
    >
      <div className="w-full">
        <div className="grid grid-cols-2 gap-6 mb-6 justify-center">
          {/* IMAGE 1 */}
          <motion.div
            ref={ref1}
            className="aspect-[126/100] z-50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={() => setOpenImage("/images/" + imageURL2)}
          >
            {inView1 &&
              (imageURL1.endsWith(".mp4") ? (
                <video
                  src={"/images/" + imageURL1}
                  className={imgStyle}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={"/images/" + imageURL1}
                  alt={title}
                  className={imgStyle}
                />
              ))}
          </motion.div>

          {/* IMAGE 2 */}
          {imageURL2 && (
            <motion.div
              ref={ref2}
              className="aspect-[126/100] z-50"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={() => setOpenImage("/images/" + imageURL2)}
            >
              {inView2 &&
                (imageURL2.endsWith(".mp4") ? (
                  <video
                    src={"/images/" + imageURL2}
                    className={imgStyle}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={"/images/" + imageURL2}
                    alt={title}
                    className={imgStyle}
                  />
                ))}
            </motion.div>
          )}
        </div>

        {/* Info */}
        <div className="mt-4 text-sm text-blackish">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-neutraface-bold text-[20px] mb-2  z-50 opacity-80">{title}</h2>

            {(whatitis || datestart || dateend) && (
              <div className="text-right  z-50 opacity-80">
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
          <p className="font-proxima-nova z-50 relative opacity-70">{description}</p>
        </div>
      </div>

      {/* Overlay for enlarged image */}
      {openImage && (
        <div
          className="fixed inset-0 bg-blackish/85 flex items-center justify-center z-250"
          onClick={() => setOpenImage(null)}
        >
          {openImage.endsWith(".mp4") ? (
            <video
              src={openImage}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={openImage}
              alt={title}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
