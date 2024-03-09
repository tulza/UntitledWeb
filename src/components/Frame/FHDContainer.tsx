import React from "react";

const FHDContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid w-full place-items-center">
      <div className="w-[1080px]">{children}</div>
    </div>
  );
};

export default FHDContainer;
