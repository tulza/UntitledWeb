import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PermaTestNavigation = () => {
  return (
    <>
      <div className="fixed bottom-4 z-50 flex h-min w-full select-none justify-center gap-8">
        <NavButton name="none" />
        <NavButton name="home" />
      </div>
    </>
  );
};

const Dot = () => {
  return (
    <motion.div
      whileHover="hover"
      className="aspect-square h-min rounded-full bg-black outline outline-1 "
    >
      <motion.div
        className="aspect-square rounded-[inherit] bg-[inherit] p-4 outline outline-1 outline-white"
        initial={{ y: -10 }}
        variants={{ hover: { y: 0 } }}
      />
    </motion.div>
  );
};

const NavButton = ({ name }: { name: string }) => {
  return (
    <Link to={`${name}`} className="h-min">
      <motion.div
        whileHover="hover"
        className="rounded-xl bg-black text-white outline outline-1"
      >
        <motion.div
          className="rounded-[inherit] bg-[inherit] p-4 px-10 outline outline-1 outline-white"
          initial={{ y: -10 }}
          variants={{ hover: { y: 0 } }}
        >
          <code className="text-xl">{name}</code>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default PermaTestNavigation;
