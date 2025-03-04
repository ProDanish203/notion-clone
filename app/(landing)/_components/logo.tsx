import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        alt="logo"
        width={40}
        height={40}
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="logo"
        width={40}
        height={40}
        className="dark:block hidden dark:invert"
      />
      <p className="font-semibold">Notion</p>
    </div>
  );
};
