import { motion } from "framer-motion";
import React from "react";
import { VarFloat } from "../FramerMotion/variant";

console.log(VarFloat.animate);
const FloatWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={`${className}`}
      animate={{ ...VarFloat.animate }}
      transition={{ repeat: Infinity, duration: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default FloatWrapper;
