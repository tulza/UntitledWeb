import { VarFloat } from "../FramerMotion/variant";
import AnimatedText from "../Text/AnimatedText";
import FloatWrapper from "@components/Wrapper/FloatDivWrapper";
import { motion } from "framer-motion";
import ExploreButton from "./Home Component/ExploreButton";

const Home = () => {
  return (
    <div className="h-full">
      <div className="flex h-[100%] max-h-[1080px] w-full flex-col items-center justify-center ">
        <div className=" mt-4 flex w-[full] flex-col items-center ">
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
        </div>
      </div>
      <hr className="border-black"></hr>
    </div>
  );
};

export default Home;
