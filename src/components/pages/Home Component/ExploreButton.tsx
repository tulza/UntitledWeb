import { motion } from "framer-motion";

const ExploreButton = () => {
  return (
    // FIXME: unreadable Lol
    <motion.div
      className="relative flex cursor-pointer select-none overflow-hidden whitespace-nowrap rounded-full border-2 border-black"
      initial={{
        padding: "2.5rem",
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
      }}
      whileHover={"hover"}
      variants={{
        hover: { paddingTop: "0.75rem", paddingBottom: "0.75rem" },
      }}
    >
      <motion.div
        initial={{ color: "#000" }}
        variants={{ hover: { color: "#fff" } }}
      >
        explore
      </motion.div>
      <motion.div
        className=" text-white"
        initial={{ width: 0 }}
        variants={{ hover: { width: "min-content" } }}
      >
        &emsp;⮟
      </motion.div>
      <motion.div
        className="absCenterBottom -z-10 aspect-square w-0 rounded-full bg-black"
        variants={{ hover: { width: 200 } }}
      />
    </motion.div>
  );
};

export default ExploreButton;
