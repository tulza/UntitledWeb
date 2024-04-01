import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NavigationBar = ({ className }: { className?: string }) => {
  const [highlight, setHighlight] = useState({ width: 0, left: 0 });
  const [hover, isHover] = useState(false);
  const onEnter = (ref: any) => {
    const current = ref.current;
    const { offsetWidth, offsetLeft } = current;
    isHover(true);
    setHighlight({
      width: offsetWidth,
      left: offsetLeft,
    });
  };

  const onLeave = () => {
    isHover(false);
  };
  return (
    <div className={clsx("flex items-center gap-12", `${className}`)}>
      <motion.div
        className="absolute w-0 rounded-xl"
        initial={{ left: 0 }}
        animate={{
          left: highlight.left + highlight.width / 2,
        }}
      >
        <motion.div
          className="aspect-square rounded-full outline outline-1"
          initial={{ width: 0 }}
          animate={{
            width: highlight.width + 40,
            x: "-50%",
            opacity: hover ? 1 : 0,
          }}
        />
      </motion.div>
      <Button onEnter={onEnter} onLeave={onLeave} label="tech" />
      <Button onEnter={onEnter} onLeave={onLeave} label="fun" />
      <Button onEnter={onEnter} onLeave={onLeave} label="sites" />
    </div>
  );
};

const Button = ({
  label,
  onEnter,
  onLeave,
}: {
  label: string;
  onEnter: (ref: any) => void;
  onLeave: () => void;
}) => {
  const ref = useRef(null);

  return (
    <div
      className="z-10 cursor-pointer text-xl"
      ref={ref}
      onMouseEnter={() => onEnter(ref)}
      onMouseLeave={() => onLeave()}
    >
      {label}
    </div>
  );
};
export default NavigationBar;
