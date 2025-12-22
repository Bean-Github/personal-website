import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
  title: string;
  description: string;
  whatitis?: string;
  tools?: string;
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
  tools,
  datestart,
  dateend,
  imageURL1,
  imageURL2,
  className = "",
  onOpen,
  onClose

}) => {

  //const [openImage, setOpenImage] = useState<string | null>(null);
// Store both the URL and the current playback time
  const [selectedMedia, setSelectedMedia] = useState<{ url: string; time: number } | null>(null);
  // Refs to access the video elements in the grid
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

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

// Handler to open media and capture current time if it's a video
  const handleOpenMedia = (url: string, videoRef: React.RefObject<HTMLVideoElement | null>) => {
    let currentTime = 0;
    if (url.endsWith(".mp4") && videoRef.current) {
      currentTime = videoRef.current.currentTime;
    }
    setSelectedMedia({ url, time: currentTime });
    if (onOpen) onOpen();
  };

  const handleCloseMedia = () => {
    setSelectedMedia(null);
    if (onClose) onClose();
  };

  return (
    <div
      className={`project-card mb-14 ${className}`}
      data-project={title.toLowerCase().replace(/\s+/g, "-")}
      data-open={!!selectedMedia}
    >
      <div className="w-full">
        <div className="grid grid-cols-2 gap-6 mb-6 justify-center">
          {/* IMAGE 1 */}
          <motion.div
            ref={ref1}
            className="aspect-[126/100] z-50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={() => handleOpenMedia(imageURL1, videoRef1)}
          >
            {inView1 &&
              (imageURL1.endsWith(".mp4") ? (
                <motion.video
                  ref={videoRef1}
                  src={"/images/" + imageURL1}
                  className={imgStyle}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <motion.img
                  layoutId={`media-${imageURL1}`}
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
              onClick={() => handleOpenMedia(imageURL2, videoRef2)}
            >
              {inView2 &&
                (imageURL2.endsWith(".mp4") ? (
                  <motion.video
                    ref={videoRef2}
                    src={"/images/" + imageURL2}
                    className={imgStyle}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <motion.img
                    layoutId={`media-${imageURL2}`}
                    src={"/images/" + imageURL2}
                    alt={title}
                    className={imgStyle}
                  />
                ))}
            </motion.div>
          )}
        </div>

        {/* TEXT Info */}
        <div className="mt-4 text-sm text-blackish">
          <div className="flex justify-between items-center mb-2">
              <div className="z-50">
                <h2 className="font-neutraface-bold text-[20px] mb-[-1px] opacity-80">
                  {title}
                </h2>

                {tools && (
                  <div className="text-[10px] text-gray-500 opacity-80">
                    {tools}
                  </div>
                )}
              </div>

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
      
      {/* {openImage && (
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
      )} */}
      
      <AnimatePresence>
        {selectedMedia && (
          <div
            className="fixed inset-0 z-[250] flex items-center justify-center pointer-events-none"
             // Helper container to handle z-index context
          >
            {/* The Backdrop - Fades in/out */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseMedia}
              className="absolute inset-0 bg-blackish/85 pointer-events-auto cursor-pointer"
            />

            {/* The Expanded Image/Video Container */}
            <motion.div
              className="relative z-[260] max-w-[50%] max-h-[40%] pointer-events-auto flex items-center justify-center"
              variants={
                {hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
                exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {selectedMedia.url.endsWith(".mp4") ? (
                <video
                  src={"/images/" + selectedMedia.url}
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls // Added controls for fullscreen view
                  onLoadedMetadata={(e) => {
                    e.currentTarget.currentTime = selectedMedia.time;
                  }}
                />
              ) : (
                <img
                  src={"/images/" + selectedMedia.url}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProjectCard;
