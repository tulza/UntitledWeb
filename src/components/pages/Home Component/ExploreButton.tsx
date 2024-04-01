import { motion } from "framer-motion";

const ExploreButton = () => {
  return (
    // FIXME: unreadable Lol
    <motion.div
      className="relative flex cursor-pointer select-none overflow-hidden whitespace-nowrap rounded-full border-2 border-white"
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
        initial={{ color: "#fff" }}
        variants={{ hover: { color: "#000" } }}
      >
        explore
      </motion.div>
      <motion.div
        className=" overflow-hidden text-black"
        initial={{ width: 0 }}
        variants={{ hover: { width: "min-content" } }}
      >
        &emsp;⮟
      </motion.div>
      <motion.div
        className="absCenter -z-10 aspect-square w-0 rounded-full bg-white"
        variants={{ hover: { width: 200 } }}
      />
    </motion.div>
  );
};

export default ExploreButton;
