import { delay } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface AnimatedTextProps {
  texts: string[];
  mode?: "word" | "letter";
  transition?: any;
  variant?: any;
  className?: string;
  stagger?: number;
}
const AnimatedTextLines = ({
  texts,
  mode = "word",
  variant = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } },
  transition = { ease: "linear", duration: 0.5 },
  className = "",
  stagger = 0.1,
}: AnimatedTextProps) => {
  return (
    <>
      {texts.map((text, i) => (
        <AnimatedText
          key={i}
          variant={variant}
          className={className}
          mode={mode}
          transition={transition}
          stagger={stagger}
          text={text}
          delayChild={Math.random() * (2 * i + 5)}
        />
      ))}
    </>
  );
};

export default AnimatedTextLines;
