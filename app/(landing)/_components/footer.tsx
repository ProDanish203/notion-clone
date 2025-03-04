import React from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background dark:bg-[#1f1f1f] z-50">
      <Logo />
      <div className="flex items-centerr justify-between gap-x-2 text-muted-foreground md:ml-auto w-full md:justify-end">
        <Button variant={"ghost"} size={"sm"}>
          Privacy Policy
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
