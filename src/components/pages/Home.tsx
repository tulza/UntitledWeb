import { motion } from "framer-motion";
import { VarFloat } from "../FramerMotion/variant";
import FloatWrapper from "@components/Wrapper/FloatDivWrapper";
import AnimatedText from "../Text/AnimatedText";
import ExploreButton from "./Home Component/ExploreButton";
import NavigationBar from "./Home Component/NavigationBar";
import SwitchingBackground from "./Home Component/SwitchingBackground";

const Home = () => {
  return (
    <div className="relative h-full ">
      <div className="relative z-50 flex h-[100%] max-h-[1080px] w-full flex-col items-center justify-center overflow-hidden">
        <SwitchingBackground />
        <div className=" z-50 mt-4 flex w-[full] flex-col items-center text-white">
          <AnimatedText
            text="Untitled Web"
            className="aukera text-[4rem]"
            transition={{
              ease: "easeInOut",
              duration: 4,
              repeat: Infinity,
            }}
            stagger={0.15}
            mode="letter"
            variant={VarFloat}
          />
          <FloatWrapper className="mt-4">
            <ExploreButton />
          </FloatWrapper>
          <div className="mt-12 flex items-center justify-center">
            <motion.hr
              className=" z-10 border-white"
              initial={{ width: 0 }}
              animate={{ width: 150 }}
              transition={{ delay: 0.5 }}
            />
            <motion.div
              className=" z-20 bg-[inherit] p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              or navigate here
            </motion.div>
            <motion.hr
              className=" z-10 border-white"
              initial={{ width: 0 }}
              animate={{ width: 150 }}
              transition={{ delay: 0.5 }}
            />
          </div>
          <NavigationBar className="mt-8" />
        </div>
      </div>
      {/*  */}
      <hr className="border-black"></hr>
    </div>
  );
};

export default Home;
