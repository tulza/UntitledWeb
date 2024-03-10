import FHDContainer from "../Frame/FHDContainer";
import { VarFloat } from "../FramerMotion/variant";
import AnimatedText from "../Text/AnimatedText";
import HomeNavigation from "../navigations/HomeNavigation";
const Home = () => {
  return (
    <div>
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
          <p className="text-base">by Tulza</p>
        </div>
        <div className="my-8 grid w-full place-items-center">
          <HomeNavigation />
        </div>
      </FHDContainer>
      <div className="grid w-full grid-flow-col grid-cols-6 items-center gap-16 px-[100px]">
        <div className="border-1 border ">
          <p className="text-[1.2em]">
            Harnessing the power of cutting-edge web technologies to create
            innovative digital experiences that are both intuitive and
            aesthetically pleasing.
          </p>
        </div>
        <div className="border-1 h-[400px] border">
          <p className="text-[1.2em]">
            Harnessing the power of cutting-edge web technologies to create
            innovative digital experiences that are both intuitive and
            aesthetically pleasing.
          </p>
        </div>
        <div className="border-1 h-[600px] border">
          <p className="text-[1.2em]">
            Harnessing the power of cutting-edge web technologies to create
            innovative digital experiences that are both intuitive and
            aesthetically pleasing.
          </p>
        </div>
        <div className="border-1 border ">
          <p className="text-[1.2em]">
            Harnessing the power of cutting-edge web technologies to create
            innovative digital experiences that are both intuitive and
            aesthetically pleasing.
          </p>
        </div>
        <div className="border-1 h-[300px] border">
          <p className="text-[1.2em]">
            Harnessing the power of cutting-edge web technologies to create
            innovative digital experiences that are both intuitive and
            aesthetically pleasing.
          </p>
        </div>
        <div className="border-1 h-[400px] border">
          <p className="text-[1.2em]">
            Harnessing the power of cutting-edge web technologies to create
            innovative digital experiences that are both intuitive and
            aesthetically pleasing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
