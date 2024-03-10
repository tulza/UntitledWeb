import clsx from "clsx";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  mode?: "word" | "letter";
  transition?: any;
  variant?: any;
  className?: string;
  stagger?: number;
  delayChild?: number;
}
const AnimatedText = ({
  text,
  mode = "word",
  variant = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } },
  transition = { ease: "linear", duration: 0.5 },
  className = "",
  stagger = 0.1,
  delayChild = 0,
}: AnimatedTextProps) => {
  const SplitText = (mode: string) => {
    if (mode == "word") {
      return text.split(" ");
    } else if (mode == "letter") {
      return text.split("");
    }
    return [];
  };
  const lines = SplitText(mode);

  return (
    <motion.div
      className={clsx("flex", `${className}`)}
      transition={{ staggerChildren: stagger, delayChildren: delayChild }}
      initial="initial"
      animate="animate"
      layout
    >
      {lines.map((line, i) => {
        return (
          <motion.div key={i} variants={variant} transition={transition}>
            {line}
            {mode == "word" && i != lines.length - 1 && <>&nbsp;</>}
            {line == " " && i != lines.length - 1 && <>&nbsp;</>}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;
