

import React from 'react';
import type { ReactNode } from 'react';

const ProjectCard = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) => {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-2 gap-6 mb-2">

        {children ? children : (
          <>
            <div className="bg-gray-200 rounded-md h-[180px] flex items-center justify-center">
              Project 1
            </div>
            <div className="bg-gray-200 rounded-md h-[180px] flex items-center justify-center">
              Project 2
            </div>
          </>
        )}

      </div>
      <div className="mt-4 text-sm">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

