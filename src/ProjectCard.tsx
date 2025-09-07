

import React from 'react';
import type { ReactNode } from 'react';

const ProjectCard = ({
  title,
  description,
  imageURL1,
  imageURL2,
}: {
  title: string;
  description: string;
  imageURL1: string;
  imageURL2?: string;
}) => {
  return (
    <div className="mb-14">
      <div className="grid grid-cols-2 gap-6 mb-1">
        
        <img src={"/src/assets/images/" + imageURL1} alt={title} 
          className="rounded-lg w-[252px] aspect-[126/100] object-cover" />

        { imageURL2 && (
          <img src={"/src/assets/images/" + imageURL2} alt={title} 
            className="rounded-md w-[252px] aspect-[126/100] object-cover" />
        )}

      </div>
      <div className="mt-4 text-sm text-blackish">
        <h2 className="font-neutraface-demi text-[20px] mb-2">{title}</h2>
        <p className="font-proxima-nova">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

