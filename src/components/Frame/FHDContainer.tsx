import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const FHDContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="grid w-full place-items-center">
      <div className="w-[600px] lg:w-[1080px]">{children}</div>
    </div>
  );
};

export default FHDContainer;
