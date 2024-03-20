import { motion } from "framer-motion";
import FHDContainer from "../Frame/FHDContainer";
import { VarFloat } from "../FramerMotion/variant";
import AnimatedText from "../Text/AnimatedText";
import { Traffic } from "@/assets/indexImg";
import SceneTest from "../Canvas/SceneTest.jsx";

const Home = () => {
  /*glsl */ `
  void main() {
    
  }`;
  return (
    <div className="">
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
      <div className="flex h-[200vh] w-[100vw] justify-center">
        <div className="flex w-[1600px] flex-col items-center">
          <img src={Traffic} className="w-[800px] grayscale-[1]" />
          <SceneTest />
        </div>
      </div>
    </div>
  );
};

export default Home;
