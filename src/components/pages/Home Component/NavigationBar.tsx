import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NavigationBar = ({ className }: { className?: string }) => {
  const [highlight, setHighlight] = useState({ width: 0, left: 0 });
  const onEnter = (ref: any) => {
    const current = ref.current;
    const { offsetWidth, offsetLeft } = current;

    setHighlight({
      width: offsetWidth,
      left: offsetLeft,
    });
  };

  return (
    <div className={clsx("flex gap-12", `${className}`)}>
      <motion.div
        className="absolute overflow-hidden bg-black"
        initial={{ width: 0, left: 0 }}
        animate={{ width: highlight.width, left: highlight.left }}
      >
        |
      </motion.div>
      <Button onEnter={onEnter} label="tech" />
      <Button onEnter={onEnter} label="fun" />
      <Button onEnter={onEnter} label="sites" />
    </div>
  );
};

const Button = ({
  label,
  onEnter,
}: {
  label: string;
  onEnter: (ref: any) => void;
}) => {
  const ref = useRef(null);

  return (
    <div className="" ref={ref} onMouseEnter={() => onEnter(ref)}>
      {label}
    </div>
  );
};
export default NavigationBar;
