import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import SceneTest from "../../Canvas/SceneTest.jsx";
const SwitchingBackground = () => {
  const [scope, animate] = useAnimate();
  const [backgroundIndex, setIndex] = useState(0);
  const animTo = innerHeight > innerWidth ? "150vh" : "150vw";

  const animEnter = () => {
    animate(scope.current, { outlineWidth: animTo }, { duration: 1 });
    setTimeout(() => {
      setIndex((prevs) => (prevs + 1) % background.length);
      animExit();
    }, 1000);
  };

  const animExit = () => {
    animate(scope.current, { width: animTo }, { duration: 0.5 });
    setTimeout(() => {
      animReset();
    }, 1000);
  };

  const animReset = () => {
    animate(scope.current, { width: 1, outlineWidth: 0 }, { duration: 0 });
  };

  useEffect(() => {
    animEnter();

    const interval = setInterval(() => {
      animEnter();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const background = [
    <div className="h-full w-full bg-red-300">bg1</div>,
    <SceneTest />,
    <div className="h-full w-full bg-blue-300">bg2</div>,
    // <div className="h-full w-full bg-indigo-300">bg3</div>,
    // <div className="h-full w-full bg-orange-300">bg4</div>,
  ];

  return (
    <div className="absolute left-0 top-0 z-10 h-full w-full">
      <div className="absolute h-full w-full text-xl">
        {background[backgroundIndex]}
      </div>
      <motion.div
        ref={scope}
        initial={{ width: 0, outlineWidth: 0 }}
        className="absCenter outline-black-300 hidden aspect-square rounded-full bg-transparent outline"
      />
    </div>
  );
};

export default SwitchingBackground;
