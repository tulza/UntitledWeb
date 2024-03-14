import { motion } from "framer-motion";
import FHDContainer from "../Frame/FHDContainer";
import { VarFloat } from "../FramerMotion/variant";
import AnimatedText from "../Text/AnimatedText";
import HomeNavigation from "../navigations/HomeNavigation";
import { Traffic } from "@/assets/indexImg";
import LoremIpsomText from "../Text/LoremIpsomText";
import SceneTest from "../Canvas/SceneTest.jsx";

const Home = () => {
  return (
    <div className="">
      <motion.div className="absolute left-10 top-[50%] h-min w-min -translate-y-[50%] bg-white">
        <motion.div
          className=" h-min w-min bg-white outline"
          initial={{ y: "-50%", boxShadow: "#000 8px 8px 0px 4px" }}
          whileHover={{ boxShadow: "#000 24px 6px 0px 16px" }}
        >
          <p className="verticleText Broetown py-10 text-[8rem]">3</p>
        </motion.div>
        <motion.div
          className=" h-min w-min bg-white outline"
          initial={{ y: "-50%", boxShadow: "#000 8px 8px 0px 4px" }}
          whileHover={{ boxShadow: "#000 24px 6px 0px 16px" }}
        >
          <p className="verticleText Broetown py-10 text-[8rem]">1</p>
        </motion.div>
        <motion.div
          className=" h-min w-min bg-white outline"
          initial={{ y: "-50%", boxShadow: "#000 8px 8px 0px 4px" }}
          whileHover={{ boxShadow: "#000 24px 6px 0px 16px" }}
        >
          <p className="verticleText Broetown py-10 text-[8rem]">0</p>
        </motion.div>
        <motion.div
          className=" h-min w-min bg-white outline"
          initial={{ y: "-50%", boxShadow: "#000 8px 8px 0px 4px" }}
          whileHover={{ boxShadow: "#000 24px 6px 0px 16px" }}
        >
          <p className="verticleText Broetown py-10 text-[8rem]">5</p>
        </motion.div>
        <motion.div
          className=" h-min w-min bg-white outline"
          initial={{ y: "-50%", boxShadow: "#000 8px 8px 0px 4px" }}
          whileHover={{ boxShadow: "#000 24px 6px 0px 16px" }}
        >
          <p className="verticleText Broetown py-10 text-[8rem]">o</p>
        </motion.div>
      </motion.div>

      <FHDContainer>
        <div className="mt-4 flex w-[full] flex-col items-center text-3xl font-bold">
          <AnimatedText
            text="Untitled Web"
            transition={{
              ease: "easeInOut",
              duration: 4,
              repeat: Infinity,
            }}
            stagger={0.15}
            mode="letter"
            variant={VarFloat}
          />
        </div>
        <div className="my-8 grid w-full place-items-center">
          {/* <HomeNavigation className="mb-8" /> */}
          <p className="Broetown text-5xl">qOzOb</p>
        </div>
      </FHDContainer>
      <div className="flex w-[100vw] justify-center">
        <div className="flex w-[1600px] flex-col items-center">
          <img src={Traffic} className="w-[800px] grayscale-[1]" />
          <SceneTest />
        </div>
      </div>
    </div>
  );
};

export default Home;
