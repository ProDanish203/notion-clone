import Image from "next/image";
import React from "react";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/images/documents.png"
            fill
            alt="Documents"
            className="object-contain dark:invert"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image
            src="/images/reading.png"
            fill
            alt="Reading"
            className="object-contain dark:invert"
          />
        </div>
      </div>
    </div>
  );
};
