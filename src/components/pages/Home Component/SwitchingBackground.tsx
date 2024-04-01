import { motion, useAnimate } from "framer-motion";
import React from "react";

const SwitchingBackground = () => {
  const [scope, animate] = useAnimate();
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <motion.div
        ref={scope}
        className="absCenter aspect-square rounded-full outline "
      ></motion.div>
    </div>
  );
};

export default SwitchingBackground;
