import clsx from "clsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeNavigation = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("flex gap-4", `${className}`)}>
      <Button label="What's" link="hey" />
      <Button label="Wrong?" link="hey" />
    </div>
  );
};

const Button = ({ label, link }: { label: string; link?: string }) => {
  link = link ? link : label;
  return (
    <Link to={`${link}`} className="h-full w-full">
      <motion.div
        whileHover="hover"
        className="rounded-full bg-white text-black outline outline-1 outline-black"
      >
        <motion.div
          className="rounded-[inherit] bg-[inherit] p-2 px-8 outline outline-1 outline-[inherit]"
          initial={{ y: -8 }}
          variants={{ hover: { y: -2 } }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          <span className="whitespace-nowrap text-xl">{label}</span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default HomeNavigation;
