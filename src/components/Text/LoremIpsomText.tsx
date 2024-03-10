import AnimatedTextLines from "../Text/AnimatedTextLines";
import * as Lorem from "../../data/LoremIpsom.json";

const LoremIpsomText = () => {
  const loremList = Lorem.lorem;
  return (
    <div className="flex flex-col items-center">
      <AnimatedTextLines
        className="text-xl"
        mode="word"
        transition={{ ease: "linear", duration: 0.5 }}
        stagger={0.25}
        texts={loremList}
      />
    </div>
  );
};

export default LoremIpsomText;
