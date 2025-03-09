"use client";

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen h-full dark:bg-[#1f1f1f] overflow-x-clip relative">
      <main>{children}</main>
    </div>
  );
};

export default PreviewLayout;
