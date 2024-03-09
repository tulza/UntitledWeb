import { motion } from "framer-motion";
const TransitionSlideAnim = () => {
  return (
    <>
      <motion.div
        style={{ transformOrigin: "top" }}
        className="fixed z-[99] h-[100vh] w-[100vw] bg-white"
        transition={{ ease: "easeInOut", duration: 0.5 }}
        initial={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
      />
      <motion.div
        style={{ transformOrigin: "bottom" }}
        className="fixed z-[99] h-[100vh] w-[100vw] bg-white"
        transition={{ ease: "easeInOut", duration: 0.5 }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
      />
    </>
  );
};

export default TransitionSlideAnim;
